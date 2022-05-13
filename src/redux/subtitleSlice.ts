import { Segment, SubtitleCue } from './../types';
import { createAsyncThunk, createSlice, Dispatch, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { roundToDecimalPlace } from '../util/utilityFunctions';
import type { RootState } from '../redux/store'
import { client } from '../util/client';
import { httpRequestState } from '../types';
import { WebVTTParser } from 'webvtt-parser';
import { WritableDraft } from 'immer/dist/internal';
import { video } from './videoSlice';

export interface subtitle {
  isDisplayEditView: boolean    // Should the edit view be displayed
  isPlaying: boolean,             // Are videos currently playing?
  isPlayPreview: boolean,         // Should deleted segments be skipped?
  previewTriggered: boolean,      // Basically acts as a callback for the video players.
  currentlyAt: number,            // Position in the video in milliseconds
  clickTriggered: boolean,        // Another video player callback
  subtitles: { [identifier: string]: SubtitleCue[] },
  selectedSubtitleFlavor: string,
  aspectRatios: {width: number, height: number}[],  // Aspect ratios of every video
  focusSegmentTriggered: boolean,   // a segment in the timeline was clicked
  focusSegmentId: string,           // which segment in the timeline was clicked
  focusSegmentTriggered2: boolean,   // a different trigger for a child component, to avoid additional rerenders from the parent

  status: 'idle' | 'loading' | 'success' | 'failed',
  errors: {identifier: string, error: string}[],
}

const initialState: subtitle = {
  isDisplayEditView: false,
  isPlaying: false,
  isPlayPreview: true,
  previewTriggered: false,
  currentlyAt: 0,
  clickTriggered: false,
  subtitles: {},
  selectedSubtitleFlavor: "",
  focusSegmentTriggered: false,
  focusSegmentId: "",
  focusSegmentTriggered2: false,

  status: 'idle',
  errors: [],
  aspectRatios: [],
}

const updateCurrentlyAt = (state: subtitle, milliseconds: number) => {
  state.currentlyAt = roundToDecimalPlace(milliseconds, 0);

  if (state.currentlyAt < 0) {
    state.currentlyAt = 0;
  }
};

export const fetchSubtitle = createAsyncThunk('subtitle/fetchSubtitle', async ({identifier, uri} : {identifier: string, uri: string}) => {
  const response = await client.get(uri)
  return {identifier, response}
})

/**
 * Slice for the subtitle editor state
 */
export const subtitleSlice = createSlice({
  name: 'subtitleState',
  initialState,
  reducers: {
    setIsDisplayEditView: (state, action: PayloadAction<subtitle["isDisplayEditView"]>) => {
      state.isDisplayEditView = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<subtitle["isPlaying"]>) => {
      state.isPlaying = action.payload;
    },
    setIsPlayPreview: (state, action: PayloadAction<subtitle["isPlaying"]>) => {
      state.isPlayPreview = action.payload;
    },
    setPreviewTriggered: (state, action) => {
      state.previewTriggered = action.payload
    },
    setCurrentlyAt: (state, action: PayloadAction<subtitle["currentlyAt"]>) => {
      updateCurrentlyAt(state, action.payload);
    },
    setCurrentlyAtInSeconds: (state, action: PayloadAction<subtitle["currentlyAt"]>) => {
      updateCurrentlyAt(state, roundToDecimalPlace(action.payload * 1000, 0))
    },
    setClickTriggered: (state, action) => {
      state.clickTriggered = action.payload
    },
    resetRequestState: (state) => {
      state.status = 'idle'
    },
    setSubtitle: (state, action: PayloadAction<{identifier: string, subtitles: SubtitleCue[]}>) => {
      state.subtitles[action.payload.identifier] = action.payload.subtitles
    },
    setCueAtIndex: (state, action: PayloadAction<{identifier: string, cueIndex: number, newCue: SubtitleCue}>) => {
      if (action.payload.cueIndex < 0 || action.payload.cueIndex >= state.subtitles[action.payload.identifier].length) {
        console.log("WARNING: Tried to set segment for subtitle " + action.payload.identifier + " but was out of range")
        return
      }

      let cue = state.subtitles[action.payload.identifier][action.payload.cueIndex]
      cue.id = action.payload.newCue.id
      cue.text = action.payload.newCue.text
      cue.startTime = Math.round(action.payload.newCue.startTime)
      cue.endTime = Math.round(action.payload.newCue.endTime)

      cue.tree.children[0].value = action.payload.newCue.text

      state.subtitles[action.payload.identifier][action.payload.cueIndex] = cue

      sortSubtitle(state, action.payload.identifier)
    },
    addCueAtIndex: (state, action: PayloadAction<{identifier: string, cueIndex: number, text: string, startTime: number, endTime: number}>) => {
      const startTime = action.payload.startTime >= 0 ? action.payload.startTime : 0
      const cue: SubtitleCue = {
        id: nanoid(),
        text: action.payload.text,
        startTime: Math.round(startTime),
        endTime: Math.round(action.payload.endTime),
        tree: { children: [{type: 'text', value: action.payload.text}] }
      }

      // Trigger a callback in the list component that focuses the newly added element
      state.focusSegmentTriggered = true
      state.focusSegmentTriggered2 = true
      state.focusSegmentId = cue.id

      if (action.payload.cueIndex < 0 ) {
        state.subtitles[action.payload.identifier].splice(0, 0, cue);
      }

      if (action.payload.cueIndex >= 0 || action.payload.cueIndex < state.subtitles[action.payload.identifier].length) {
        state.subtitles[action.payload.identifier].splice(action.payload.cueIndex, 0, cue);
      }

      if (action.payload.cueIndex >= state.subtitles[action.payload.identifier].length) {
        state.subtitles[action.payload.identifier].push(cue)
      }

      sortSubtitle(state, action.payload.identifier)
    },
    removeCue: (state, action: PayloadAction<{identifier: string, cue: SubtitleCue}>) => {
      const cueIndex = state.subtitles[action.payload.identifier].findIndex(i => i.id === action.payload.cue.id);
      if (cueIndex > -1) {
        state.subtitles[action.payload.identifier].splice(cueIndex, 1);
      }

      sortSubtitle(state, action.payload.identifier)
    },
    setSelectedSubtitleFlavor: (state, action: PayloadAction<subtitle["selectedSubtitleFlavor"]>) => {
      state.selectedSubtitleFlavor = action.payload
    },
    setFocusSegmentTriggered: (state, action: PayloadAction<subtitle["focusSegmentTriggered"]>) => {
      state.focusSegmentTriggered = action.payload
      state.focusSegmentTriggered2 = action.payload
    },
    setFocusSegmentId: (state, action: PayloadAction<subtitle["focusSegmentId"]>) => {
      state.focusSegmentId = action.payload
    },
    setFocusSegmentTriggered2: (state, action: PayloadAction<subtitle["focusSegmentTriggered2"]>) => {
      state.focusSegmentTriggered2 = action.payload
    },
    setFocusToSegmentAboveId: (state, action: PayloadAction<{identifier: string, segmentId: subtitle["focusSegmentId"]}>) => {
      console.log("HOI")
      let cueIndex = state.subtitles[action.payload.identifier].findIndex(i => i.id === action.payload.segmentId);
      cueIndex = cueIndex - 1
      if (cueIndex < 0 ) {
        cueIndex = 0
      }
      console.log(cueIndex)
      state.focusSegmentId = state.subtitles[action.payload.identifier][cueIndex].id
    },
    setFocusToSegmentBelowId: (state, action: PayloadAction<{identifier: string, segmentId: subtitle["focusSegmentId"]}>) => {
      let cueIndex = state.subtitles[action.payload.identifier].findIndex(i => i.id === action.payload.segmentId);
      cueIndex = cueIndex + 1
      if (cueIndex >= state.subtitles[action.payload.identifier].length) {
        cueIndex = state.subtitles[action.payload.identifier].length - 1
      }
      state.focusSegmentId = state.subtitles[action.payload.identifier][cueIndex].id
    },
    setAspectRatio: (state, action: PayloadAction<{dataKey: number} & {width: number, height: number}> ) => {
      state.aspectRatios[action.payload.dataKey] = {width: action.payload.width, height: action.payload.height}
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchSubtitle.pending, (state, action) => {
        state.status = 'loading'
    })
    builder.addCase(
      fetchSubtitle.fulfilled, (state, action) => {
        state.status = 'success'
        // Used parsing library: https://www.npmjs.com/package/webvtt-parser
        // - Unmaintained and does have bugs, so we will need to switch eventually
        // Other interesting vtt parsing libraries:
        // https://github.com/osk/node-webvtt
        // - Pros: Parses styles and meta information
        // - Cons: Parses timestamps in seconds, Maybe not maintained anymore
        // https://github.com/gsantiago/subtitle.js
        // - Pros: Parses styles, can also parse SRT, actively maintained
        // - Cons: Uses node streaming library, can't polyfill without ejecting CreateReactApp
        // TODO: Parse caption
        const parser = new WebVTTParser();
        const tree = parser.parse(action.payload.response, 'metadata');
        if (tree.errors.length !== 0) {
          state.status = 'failed'
          const errors = []
          for (const er of tree.errors) {
            errors.push("On line: " + er.line + " col: " + er.col + " error occured: " + er.message)
          }
          setError(state, action.payload.identifier, errors.join("\n"))
        }

        // Attach a unique id to each segment/cue
        // This is used by React to keep track of cues between changes (e.g. addition, deletion)
        console.log(tree.cues)
        let index = 0
        for (let cue of tree.cues) {
          if (!cue.id) {
            cue.id = nanoid()
            tree.cues[index] = cue
          }

          // Turn times into milliseconds
          cue.startTime = cue.startTime * 1000
          cue.endTime = cue.endTime * 1000
          tree.cues[index] = cue

          index++
        }

        state.subtitles[action.payload.identifier] = tree.cues
    })
    builder.addCase(
      fetchSubtitle.rejected, (state, action) => {
        state.status = 'failed'
        setError(state, state.selectedSubtitleFlavor, action.error.message ? action.error.message : "")
    })
  }
})

// Sort a subtitle array by startTime
const sortSubtitle = (state: WritableDraft<subtitle>, identifier: string) => {
  state.subtitles[identifier].sort((a, b) => a.startTime - b.startTime)
}

const setError = (state: WritableDraft<subtitle>, identifier: string, error: string) => {
  let index = 0
  for (const err of state.errors) {
    if (err.identifier === identifier) {
      state.errors[index] = {identifier, error}
      return
    }
    index++
  }
  state.errors.push({identifier: identifier, error: error})
}

const getErrorByFlavor = (errors: subtitle["errors"], subtitleFlavor: string) => {
  for (const err of errors) {
    if (err.identifier === subtitleFlavor) {
      return err.error
    }
  }
}

// Export Actions
export const { setIsDisplayEditView, setIsPlaying, setIsPlayPreview, setPreviewTriggered, setCurrentlyAt,
  setCurrentlyAtInSeconds, setClickTriggered, resetRequestState, setSubtitle, setCueAtIndex, addCueAtIndex, removeCue,
  setSelectedSubtitleFlavor, setFocusSegmentTriggered, setFocusSegmentId, setFocusSegmentTriggered2,
  setFocusToSegmentAboveId, setFocusToSegmentBelowId, setAspectRatio } = subtitleSlice.actions

// Export Selectors
export const selectIsDisplayEditView = (state: RootState) =>
  state.subtitleState.isDisplayEditView
export const selectIsPlaying = (state: RootState) =>
  state.subtitleState.isPlaying
export const selectIsPlayPreview = (state: { subtitleState: { isPlayPreview: subtitle["isPlayPreview"] }; }) =>
  state.subtitleState.isPlayPreview
export const selectPreviewTriggered = (state: { subtitleState: { previewTriggered: subtitle["previewTriggered"] } }) =>
  state.subtitleState.previewTriggered
export const selectCurrentlyAt = (state: RootState) =>
  state.subtitleState.currentlyAt
export const selectCurrentlyAtInSeconds = (state: { subtitleState: { currentlyAt: subtitle["currentlyAt"]; }; }) =>
  state.subtitleState.currentlyAt / 1000
export const selectClickTriggered = (state: { subtitleState: { clickTriggered: subtitle["clickTriggered"] } }) =>
  state.subtitleState.clickTriggered
export const selectFocusSegmentTriggered = (state: { subtitleState: { focusSegmentTriggered: subtitle["focusSegmentTriggered"] } }) =>
  state.subtitleState.focusSegmentTriggered
export const selectFocusSegmentId = (state: { subtitleState: { focusSegmentId: subtitle["focusSegmentId"] } }) =>
  state.subtitleState.focusSegmentId
export const selectFocusSegmentTriggered2 = (state: { subtitleState: { focusSegmentTriggered2: subtitle["focusSegmentTriggered2"] } }) =>
  state.subtitleState.focusSegmentTriggered2
// Hardcoding this value to achieve a desired size for the video player
// TODO: Don't hardcode this value, instead make the video player component more flexible
export const selectAspectRatio = (state: { subtitleState: { aspectRatios: subtitle["aspectRatios"] } }) =>
  50

export const selectGetStatus = (state: { subtitleState: { status: httpRequestState["status"] } }) =>
  state.subtitleState.status
export const selectGetErrors = (state: { subtitleState: { errors: subtitle["errors"] } }) =>
  state.subtitleState.errors
export const selectSubtitles = (state: { subtitleState: { subtitles: subtitle["subtitles"] } }) =>
  state.subtitleState.subtitles
export const selectSelectedSubtitleFlavor = (state: { subtitleState: { selectedSubtitleFlavor: subtitle["selectedSubtitleFlavor"] } }) =>
  state.subtitleState.selectedSubtitleFlavor
export const selectSelectedSubtitleByFlavor = (state: { subtitleState:
  { subtitles: subtitle["subtitles"]; selectedSubtitleFlavor: subtitle["selectedSubtitleFlavor"]; }; }) =>
  state.subtitleState.subtitles[state.subtitleState.selectedSubtitleFlavor]
export const selectErrorByFlavor = (state: { subtitleState:
  { errors: subtitle["errors"]; selectedSubtitleFlavor: subtitle["selectedSubtitleFlavor"]; }; }) =>
  getErrorByFlavor(state.subtitleState.errors, state.subtitleState.selectedSubtitleFlavor)


/**
 * Alternative middleware to setCurrentlyAt.
 * Will grab the state from videoState to skip past deleted segment if preview
 * mode is active.
 */
export function setCurrentlyAtAndTriggerPreview(milliseconds: number) {
  return (dispatch: Dispatch, getState: any) => {
    milliseconds = roundToDecimalPlace(milliseconds, 0);

    if (milliseconds < 0) {
      milliseconds = 0;
    }

    const allStates = getState() as { videoState: video, subtitleState: subtitle }
    const segments: Segment[] = allStates.videoState.segments
    let triggered = false

    if (allStates.subtitleState.isPlayPreview) {
      for (let i = 0; i < segments.length; i++) {
        if (segments[i].start < milliseconds && segments[i].end > milliseconds) {
          if (segments[i].deleted) {
            milliseconds = segments[i].end + 1
            for (let j = i; j < segments.length; j++) {
              if (segments[j].deleted) {
                milliseconds = segments[j].end + 1
              } else {
                break
              }
            }
            triggered = true
          }
          break
        }
      }
    }

    dispatch(setCurrentlyAt(milliseconds))
    if (triggered) {
      dispatch(setPreviewTriggered(true))
    }
  };
}

export default subtitleSlice.reducer