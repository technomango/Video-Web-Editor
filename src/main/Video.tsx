import React, { useState, useRef, useEffect, useImperativeHandle } from "react";

import { css } from '@emotion/react'

import { httpRequestState, MainMenuStateNames } from '../types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faToggleOn, faToggleOff, faGears} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsPlaying, selectCurrentlyAt, selectCurrentlyAtInSeconds, setIsPlaying, setCurrentlyAtInSeconds,
  fetchVideoInformation, selectVideoURL, selectVideoCount, selectDurationInSeconds, selectTitle, selectPresenters,
  setPreviewTriggered, selectPreviewTriggered, selectIsPlayPreview, setIsPlayPreview, setAspectRatio, selectAspectRatio, selectDuration, setClickTriggered, selectClickTriggered
} from '../redux/videoSlice'

import ReactPlayer, { Config } from 'react-player'

import { roundToDecimalPlace, convertMsToReadableString } from '../util/utilityFunctions'
import { basicButtonStyle, flexGapReplacementStyle, titleStyle, titleStyleBold } from "../cssStyles";

import { GlobalHotKeys } from 'react-hotkeys';
import { selectMainMenuState } from "../redux/mainMenuSlice";
import { cuttingKeyMap } from "../globalKeys";
import { SyntheticEvent } from "react";
import './../i18n/config';
import { useTranslation } from 'react-i18next';
import { selectTitleFromEpisodeDc } from "../redux/metadataSlice";
import { setError } from "../redux/errorSlice";

import { sleep } from './../util/utilityFunctions'
import { selectTheme } from "../redux/themeSlice";

/**
 * Container for the videos and their controls
 * TODO: Move fetching to a more central part of the app
 */
export const Video: React.FC<{}> = () => {

  const { t } = useTranslation();

  // Init redux variables
  const dispatch = useDispatch()
  const videoURLStatus = useSelector((state: { videoState: { status: httpRequestState["status"] } }) => state.videoState.status);
  const error = useSelector((state: { videoState: { error: httpRequestState["error"] } }) => state.videoState.error)
  const theme = useSelector(selectTheme);
  const errorReason = useSelector((state: { videoState: { errorReason: httpRequestState["errorReason"] } }) => state.videoState.errorReason)

  // Try to fetch URL from external API
  useEffect(() => {
    if (videoURLStatus === 'idle') {
      dispatch(fetchVideoInformation())
    } else if (videoURLStatus === 'failed') {
      if (errorReason === 'workflowActive') {
        dispatch(setError({error: true, errorTitle: t("error.workflowActive-errorTitle"), errorMessage: t("error.workflowActive-errorMessage"), errorDetails: undefined, errorIcon: faGears}))
      } else {
        dispatch(setError({error: true, errorTitle: undefined, errorMessage: t("video.comError-text"), errorDetails: error, errorIcon: undefined}))
      }
    }
  }, [videoURLStatus, dispatch, error, t, errorReason])

  // Update based on current fetching status
  // let content
  // if (videoURLStatus === 'loading') {
  //   content = <div className="loader">Loading...</div>
  // } else if (videoURLStatus === 'success') {
  //   content = ""//<div className="loader">Success...</div>
  // } else if (videoURLStatus === 'failed') {
  //   content = <div>{error}</div>
  // }

  // Style
  const videoAreaStyle = css({
    display: 'flex',
    width: 'auto',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    borderBottom: `${theme.menuBorder}`,
  });

  return (
    <div css={videoAreaStyle}>
      <VideoHeader />
      <VideoPlayers refs={undefined}/>
      <VideoControls />
    </div>
  );
};

export const VideoPlayers: React.FC<{refs: any, widthInPercent?: number}> = ({refs, widthInPercent=100}) => {

  const videoURLs = useSelector(selectVideoURL)
  const videoCount = useSelector(selectVideoCount)

  const videoPlayerAreaStyle = css({
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthInPercent + '%',
  });

  // Initialize video players
  const videoPlayers: JSX.Element[] = [];
  for (let i = 0; i < videoCount; i++) {
    videoPlayers.push(
      <VideoPlayer
        key={i}
        dataKey={i}
        url={videoURLs[i]}
        isPrimary={i === 0}
        ref={(el) => {
          if (refs === undefined) return
          (refs.current[i] = el)
        }}
      />
    );
  }

  return (
    <div css={videoPlayerAreaStyle}>
      {videoPlayers}
    </div>
  );
}

/**
 * A single video player
 * @param {string} url - URL to load video from
 * @param {boolean} isPrimary - If the player is the main control
 */
export const VideoPlayer = React.forwardRef(
  (props: {dataKey: number, url: string, isPrimary: boolean}, forwardRefThing) => {
  const {dataKey, url, isPrimary } = props

  const { t } = useTranslation();

  // Init redux variables
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying)
  const currentlyAt = useSelector(selectCurrentlyAtInSeconds)
  const duration  = useSelector(selectDurationInSeconds)
  const previewTriggered = useSelector(selectPreviewTriggered)
  const clickTriggered = useSelector(selectClickTriggered)
  const aspectRatio = useSelector(selectAspectRatio)
  const theme = useSelector(selectTheme)

  // Init state variables
  const ref = useRef<ReactPlayer>(null);
  const [ready, setReady] = useState(false);
  const [errorState, setError] = useState(false);
  const [isAspectRatioUpdated, setIsAspectRatioUpdated] = useState(false);

  // Callback for when the video is playing
  const onProgressCallback = (state: { played: number, playedSeconds: number, loaded: number, loadedSeconds:  number }) => {
    if (isPrimary) {
      // Only update redux if there was a substantial change
      if (roundToDecimalPlace(currentlyAt, 3) !== roundToDecimalPlace(state.playedSeconds, 3)) {
        dispatch(setCurrentlyAtInSeconds(state.playedSeconds))
      }
    }
  }

  // Tries to get video dimensions from the HTML5 elements until they are not 0,
  // then updates the store
  async function updateAspectRatio() {
    if (ref.current && ref.current.getInternalPlayer()) {
      let w = (ref.current.getInternalPlayer() as HTMLVideoElement).videoWidth
      let h = (ref.current.getInternalPlayer() as HTMLVideoElement).videoHeight
      while (w === 0 || h === 0) {
        await sleep(100);
        w = (ref.current.getInternalPlayer() as HTMLVideoElement).videoWidth
        h = (ref.current.getInternalPlayer() as HTMLVideoElement).videoHeight
      }
      dispatch(setAspectRatio({dataKey, width: w, height: h}))
      setIsAspectRatioUpdated(true)
    }
  }

  // Callback for checking whether the video element is ready
  const onReadyCallback = () => {
    setReady(true);

    // // Update the store with video dimensions for rendering purposes
    // updateAspectRatio();
  }

  const onEndedCallback = () => {
    if (isPrimary) {
      dispatch(setIsPlaying(false));
      dispatch(setCurrentlyAtInSeconds(duration)); // It seems onEnded is called before the full duration is reached, so we set currentlyAt to the very end
    }
  }

  useEffect(() => {
    // Seek if the position in the video got changed externally
    if (!isPlaying && ref.current && ready) {
      ref.current.seekTo(currentlyAt, "seconds")
    }
    if (previewTriggered && ref.current && ready) {
      ref.current.seekTo(currentlyAt, "seconds")
      dispatch(setPreviewTriggered(false))
    }
    if (clickTriggered && ref.current && ready) {
      ref.current.seekTo(currentlyAt, "seconds")
      dispatch(setClickTriggered(false))
    }
    if (!isAspectRatioUpdated && ref.current && ready) {
      // Update the store with video dimensions for rendering purposes
      updateAspectRatio();
    }
  })

  const onErrorCallback = (e: any) => {
    setError(true)
  }

  // Skip player when navigating page with keyboard
  const playerConfig: Config = {
    file: { attributes: { tabIndex: '-1' }}
  }

  // External functions
  useImperativeHandle(forwardRefThing, () => ({
    // Renders the current frame in the video element to a canvas
    // Returns the data url
    captureVideo() {
      const video = ref.current?.getInternalPlayer() as HTMLVideoElement
      var canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      var canvasContext = canvas.getContext("2d");
      if (canvasContext !== null) {
        canvasContext.drawImage(video, 0, 0);
        return canvas.toDataURL('image/png')
      }
    }
  }));

  const errorBoxStyle = css({
    ...(!errorState) && {display: "none"},
    borderColor: `${theme.error}`,
    borderStyle: 'dashed',
    fontWeight: 'bold',
    padding: '10px',
  })

  const playerWrapper = css({
    position: 'relative',
    width: '100%',
    paddingTop: aspectRatio + '%',
  });

  const reactPlayerStyle = css({
    position: 'absolute',
    top: 0,
    left: 0,
  })

  const render = () => {
    if (!errorState) {
      return(
        <div css={playerWrapper}>
          <ReactPlayer url={url}
            css={reactPlayerStyle}
            ref={ref}
            width='100%'
            height='100%'
            playing={isPlaying}
            muted={!isPrimary}
            onProgress={onProgressCallback}
            progressInterval={100}
            onReady={onReadyCallback}
            onEnded={onEndedCallback}
            onError={onErrorCallback}
            tabIndex={-1}
            config={playerConfig}
            disablePictureInPicture
          />
        </div>
      );
    } else {
      return (
        <div css={errorBoxStyle} role="alert">
          <span>{t("video.loadError-text")} </span>
        </div>
      );
    }
  }

  return (
    <>
      {render()}
    </>
  );

  // return (
  //   <div title="Video Player">
  //     <video width="320" height="240" controls ref={vidRef}>
  //     <source src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4" type="video/mp4" />
  //     Your browser does not support the video tag.
  //     </video>
  //   </div>
  // );
});

/**
 * Contains controls for manipulating multiple video players at once
 * Flexbox magic keeps the play button at the center
 */
export const VideoControls: React.FC<{}> = () => {

  const { t } = useTranslation();

  const videoControlsRowStyle = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    ...(flexGapReplacementStyle(50, false)),
  })

  const leftSideBoxStyle = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  })

  const rightSideBoxStyle = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  })

  return (
    <div css={videoControlsRowStyle} title={t("video.controls-tooltip")}>
      <div css={leftSideBoxStyle}>
        <PreviewMode />
      </div>
      <PlayButton />
      <div css={rightSideBoxStyle}>
        <TimeDisplay />
      </div>
    </div>
  );
}

/**
 * Enable/Disable Preview Mode
 */
const PreviewMode: React.FC<{}> = () => {

  const { t } = useTranslation();
  const ref = React.useRef<HTMLDivElement>(null)

  // Init redux variables
  const dispatch = useDispatch();
  const isPlayPreview = useSelector(selectIsPlayPreview)
  const mainMenuState = useSelector(selectMainMenuState)

  // Change preview mode from "on" to "off" and vice versa
  const switchPlayPreview = (event: KeyboardEvent | SyntheticEvent, ref: React.RefObject<HTMLDivElement> | undefined) => {
    event.preventDefault()                      // Prevent page scrolling due to Space bar press
    event.stopPropagation()                     // Prevent video playback due to Space bar press
    dispatch(setIsPlayPreview(!isPlayPreview))

    // Lose focus if clicked by mouse
    if (ref) {
      ref.current?.blur()
    }
  }

  // Maps functions to hotkeys
  const handlers = {
    // preview: switchPlayPreview,
    preview: (keyEvent?: KeyboardEvent) => { if(keyEvent) { switchPlayPreview(keyEvent, undefined) } }
  }

  const previewModeStyle = css({
    cursor: "pointer",
    display: 'flex',
    ...(flexGapReplacementStyle(10, false)),
    justifyContent: 'center',
    alignItems: 'center'
  })

  const switchIconStyle = css({
    cursor: "pointer",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    "&:hover": {
      transform: 'scale(1.05)',
    },
  })

  return (
    <div css={previewModeStyle}
      ref={ref}
      title={t("video.previewButton-tooltip", { status: (isPlayPreview ? "on" : "off"), hotkeyName: cuttingKeyMap[handlers.preview.name] })}
      role="switch" aria-checked={isPlayPreview} tabIndex={0} aria-hidden={false}
      aria-label={t("video.previewButton-aria", { hotkeyName: cuttingKeyMap[handlers.preview.name] })}
      onClick={ (event: SyntheticEvent) => switchPlayPreview(event, ref) }
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => { if (event.key === " ") {
        switchPlayPreview(event, undefined)
      }}}>
      <GlobalHotKeys keyMap={cuttingKeyMap} handlers={mainMenuState === MainMenuStateNames.cutting ? handlers: {}} allowChanges={true} />
      <div css={{display: 'inline-block', flexWrap: 'nowrap'}}>
        {t("video.previewButton")}
      </div>
      <FontAwesomeIcon css={switchIconStyle} icon={isPlayPreview ? faToggleOn : faToggleOff} size="1x"/>
    </div>
  );
}

/**
 * Start/Pause playing the videos
 */
const PlayButton: React.FC<{}> = () => {

  const { t } = useTranslation();

  // Init redux variables
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying)
  const mainMenuState = useSelector(selectMainMenuState)

  // Change play mode from "on" to "off" and vice versa
  const switchIsPlaying = (event: KeyboardEvent | SyntheticEvent) => {
    event.preventDefault()                      // Prevent page scrolling due to Space bar press
    dispatch(setIsPlaying(!isPlaying))
  }

  // Maps functions to hotkeys
  const handlers = {
    play: (keyEvent?: KeyboardEvent) => { if(keyEvent) { switchIsPlaying(keyEvent) } }
  }

  return (
    <>
    <GlobalHotKeys keyMap={cuttingKeyMap} handlers={mainMenuState === MainMenuStateNames.cutting ? handlers: {}} allowChanges={true} />
    <FontAwesomeIcon css={[basicButtonStyle, {justifySelf: 'center'}]} icon={isPlaying ? faPause : faPlay} size="2x"
      title={t("video.playButton-tooltip")}
      role="button" aria-pressed={isPlaying} tabIndex={0} aria-hidden={false}
      aria-label={t("video.playButton-tooltip")}
      onClick={(event: SyntheticEvent) => { switchIsPlaying(event) }}
      onKeyDown={(event: React.KeyboardEvent) => { if (event.key === "Enter") { // "Space" is handled by global key
        switchIsPlaying(event)
      }}}
    />
    </>
  );
}

/**
 * Live update for the current time
 */
const TimeDisplay: React.FC<{}> = () => {

  const { t } = useTranslation();

  // Init redux variables
  const currentlyAt = useSelector(selectCurrentlyAt)
  const duration = useSelector(selectDuration)

  return (
    <div css={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
      <time css={{display: 'inline-block', width: '100px'}}
        title={t("video.time-duration-tooltip")}
        tabIndex={0} role="timer" aria-label={t("video.time-aria")+": " + convertMsToReadableString(currentlyAt)}>
        {new Date((currentlyAt ? currentlyAt : 0)).toISOString().substr(11, 12)}
      </time>
      {" / "}
      <div tabIndex={0} aria-label={t("video.duration-aria")+": " + convertMsToReadableString(duration)}>
        {new Date((duration ? duration : 0)).toISOString().substr(11, 12)}
      </div>
    </div>
  );
}

/**
 * Displays elements above the video, e.g. title
 */
const VideoHeader: React.FC<{}> = () => {

  const { t } = useTranslation();

  const title = useSelector(selectTitle)
  const metadataTitle = useSelector(selectTitleFromEpisodeDc)
  const presenters = useSelector(selectPresenters)

  let presenter_header;
  if (presenters && presenters.length) {
      presenter_header = <div css={titleStyle} title={t("video.presenter-tooltip")}>by {presenters.join(", ")}</div>
  }
  return (
    <div css={{fontSize: '16px'}}>
      <div css={[titleStyle, titleStyleBold]} title={t("video.title-tooltip")}>
        {metadataTitle ? metadataTitle : title}
      </div>
      {presenter_header}
    </div>
  );
}

export default Video;
