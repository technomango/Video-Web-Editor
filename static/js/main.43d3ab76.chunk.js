(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{52:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(4);var c,a=n(1),r=n.n(a),i=n(18),o=n.n(i),s=(n(52),n(6)),l=n(9),u=n(0),d=n(7),b=n(3),f=n(2),h=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var p,g={value:c.cutting},m=Object(h.c)({name:"mainMenuState",initialState:g,reducers:{setState:function(e,t){e.value=t.payload}}}),v=m.actions.setState,j=function(e){return e.mainMenuState.value},O=m.reducer,x=Object(h.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),w=x.actions,y=w.setState,k=w.setPageNumber,S=function(e){return e.finishState.value},I=function(e){return e.finishState.pageNumber},C=x.reducer,D=n(10),P=n.n(D),T=n(13),A=n(42),E=n.n(A),N=window.location.origin,M=!0,R=!0,W=function(){var e=Object(T.a)(P.a.mark((function e(){var t,n,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().then((function(e){e=B(e,!1,"src-server","from server settings file"),L(e)}));case 2:t=new URLSearchParams(window.location.search),n={},t.forEach((function(e,t){var c=n,a=t.split(".");a.slice(0,-1).forEach((function(e){e in c||(c[e]={}),c=c[e]})),c[a[a.length-1]]=e})),c=B(n,!0,"src-url","given as URL GET parameter"),L(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){for(var t in e)null!=e.mediaPackageId&&(p=e.mediaPackageId),"debugging"===t&&null!=e[t].ocUrl&&(N=e[t].ocUrl),"metadata"===t&&null!=e[t].show&&(M=e[t].show),"thumbnail"===t&&null!=e[t].show&&(R=e[t].show)},z=function(){var e=Object(T.a)(P.a.mark((function e(){var t,n,c,a,r,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="/").endsWith("/")||(n+="/"),c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SETTINGS_PATH||"editor-settings.toml",a=c.startsWith("/")?"":n,r="".concat(window.location.origin).concat(a).concat(c),e.prev=5,e.next=8,fetch(r);case 8:i=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),console.warn("Could not access '".concat(c,"' due to network error!"),e.t0||""),e.abrupt("return",null);case 15:if(404!==i.status){e.next=20;break}return console.debug("'".concat(c,"' returned 404: ignoring")),e.abrupt("return",null);case 20:if(i.ok){e.next=23;break}return console.error("Fetching '".concat(c,"' failed: ").concat(i.status," ").concat(i.statusText)),e.abrupt("return",null);case 23:if(!(null===(t=i.headers.get("Content-Type"))||void 0===t?void 0:t.startsWith("text/html"))){e.next=26;break}return console.warn("'".concat(c,"' request has 'Content-Type: text/html' -> ignoring...")),e.abrupt("return",null);case 26:return e.prev=26,e.t1=E.a,e.next=30,i.text();case 30:return e.t2=e.sent,e.abrupt("return",(0,e.t1)(e.t2));case 34:throw e.prev=34,e.t3=e.catch(26),console.error("Could not parse '".concat(c,"' as TOML: "),e.t3),new SyntaxError("Could not parse '".concat(c,"' as TOML: ").concat(e.t3));case 38:case"end":return e.stop()}}),e,null,[[5,11],[26,34]])})));return function(){return e.apply(this,arguments)}}(),B=function(e,t,n,c){var a=function(e,t,n){return"function"===typeof e?r(e,t,n):i(e,t,n)},r=function(e,a,r){try{var i=e(a,t,n);return void 0===i?a:i}catch(o){return console.warn("Validation of setting '".concat(r,"' (").concat(c,") with value '").concat(a,"' failed: ")+"".concat(o,". Ignoring.")),null}},i=function(e,t,n){var r={};for(var i in t){var o=n?"".concat(n,".").concat(i):i;if(i in e){var s=a(e[i],t[i],o);null!==s&&(r[i]=s)}else console.warn("'".concat(o,"' (").concat(c,") is not a valid settings key. Ignoring."))}return r};return a(F,e,"")},H={string:function(e,t){if("string"!==typeof e)throw new Error("is not a string, but should be")},boolean:function(e,t){if("boolean"!==typeof e){if(t){if("true"===e)return!0;if("false"===e)return!1;throw new Error("can't be parsed as boolean")}throw new Error("is not a boolean")}}},F={mediaPackageId:H.string,debugging:{ocUrl:H.string},metadata:{show:H.boolean},thumbnail:{show:H.boolean}};var U=function(){return Object(u.c)(u.a,{styles:K})},K={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},G=Object(u.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:focus":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),V=Object(u.b)({display:"flex",flexDirection:"row",gap:"20px"},""),q={name:"8kxyvl",styles:"position:absolute;left:-99999px;height:1px;width:1px;overflow:hidden;"},_=function(e){return Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"")},Y=n(46);function J(e){return X.apply(this,arguments)}function X(){return(X=Object(T.a)(P.a.mark((function e(t){var n,c,a,r,i,o,s,u,d,b,f=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,a=Object(Y.a)(n,["body"]),r={"Content-Type":"application/json"},i=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(i)},s=Object(l.a)(Object(l.a)({method:c?"POST":"GET"},a),{},{headers:Object(l.a)(Object(l.a)(Object(l.a)({},r),a.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(d=e.sent,u=d.length?JSON.parse(d):"",!b.ok){e.next=16;break}return e.abrupt("return",u);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:u));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}J.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return J(e,Object(l.a)(Object(l.a)({},t),{},{method:"GET"}))},J.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return J(e,Object(l.a)(Object(l.a)({},n),{},{body:t}))};var Q=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},Z=function(e){var t=new Date(e||0).toISOString().substr(11,2),n=new Date(e||0).toISOString().substr(14,2),c=new Date(e||0).toISOString().substr(17,2),a=[];return parseInt(t)>0&&a.push(t+" hours, "),(parseInt(n)>0||parseInt(t)>0)&&a.push(n+" minutes, "),a.push(c+" seconds"),a.join("")},$={isPlaying:!1,isPlayPreview:!0,currentlyAt:0,segments:[{id:Object(h.d)(),start:0,end:1,deleted:!1}],tracks:[],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},ee=Object(h.b)("video/fetchVideoInformation",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),te=Object(h.c)({name:"videoState",initialState:$,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=Q(t.payload,0),ne(e),re(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=Q(1e3*t.payload,0),ne(e),re(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(h.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:e.segments[e.activeSegmentIndex].deleted},n={id:Object(h.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:e.segments[e.activeSegmentIndex].deleted};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){ae(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){ae(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(ee.pending,(function(e,t){e.status="loading"})),e.addCase(ee.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.tracks.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.tracks.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=[],e.segments=ce(t.payload.segments,t.payload.duration),e.tracks=t.payload.tracks,e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(ee.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),ne=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},ce=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(h.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(h.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},ae=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),ne(e))},re=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},ie=te.actions,oe=ie.setIsPlaying,se=ie.setIsPlayPreview,le=ie.setCurrentlyAt,ue=ie.setCurrentlyAtInSeconds,de=(ie.addSegment,ie.cut),be=ie.markAsDeletedOrAlive,fe=ie.setSelectedWorkflowIndex,he=ie.mergeLeft,pe=ie.mergeRight,ge=ie.setPreviewTriggered,me=function(e){return e.videoState.isPlaying},ve=function(e){return e.videoState.isPlayPreview},je=function(e){return e.videoState.previewTriggered},Oe=function(e){return e.videoState.currentlyAt},xe=function(e){return e.videoState.currentlyAt/1e3},we=function(e){return e.videoState.segments},ye=function(e){return e.videoState.activeSegmentIndex},ke=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},Se=function(e){return e.videoState.selectedWorkflowIndex},Ie=function(e){return e.videoState.videoURLs},Ce=function(e){return e.videoState.videoCount},De=function(e){return e.videoState.duration},Pe=function(e){return e.videoState.duration/1e3},Te=function(e){return e.videoState.title},Ae=function(e){return e.videoState.presenters},Ee=function(e){return e.videoState.tracks},Ne=function(e){return e.videoState.workflows},Me=te.reducer,Re=function(e){var t=e.iconName,n=e.stateName,a=Object(f.b)(),r=Object(f.c)(j),i=function(){a(v(n)),n===c.finish&&a(k(0)),a(oe(!1))},o=Object(u.b)(Object(l.a)(Object(l.a)({width:"100%",height:"100px"},r===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(u.c)("li",{css:Object(s.a)([G,o],""),role:"menuitem",tabIndex:0,onClick:i,onKeyDown:function(e){"Enter"===e.key&&i()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},We=function(){var e=Object(u.b)({borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},"");return Object(u.c)("nav",{css:e,title:"Main Menu",role:"navigation","aria-label":"Main Navigation"},Object(u.c)(Re,{iconName:b.h,stateName:c.cutting}),M&&Object(u.c)(Re,{iconName:b.i,stateName:c.metadata}),R&&Object(u.c)(Re,{iconName:b.k,stateName:c.thumbnail}),Object(u.c)(Re,{iconName:b.o,stateName:c.finish}))},Le=n(16),ze=n(43),Be=n.n(ze);var He=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),i=Object(f.c)(me),o=Object(f.c)(xe),s=Object(f.c)(Pe),d=Object(f.c)(je),b=Object(a.useRef)(null),h=Object(a.useState)(!1),p=Object(Le.a)(h,2),g=p[0],m=p[1],v=Object(a.useState)(!1),j=Object(Le.a)(v,2),O=j[0],x=j[1],w=function(e){Q(o,3)!==Q(e.playedSeconds,3)&&c(ue(e.playedSeconds))},y=function(){m(!0)},k=function(){c(oe(!1)),c(ue(s))};Object(a.useEffect)((function(){!i&&b.current&&g&&b.current.seekTo(o,"seconds"),d&&b.current&&g&&(b.current.seekTo(o,"seconds"),c(ge(!1)))}));var S=function(e){x(!0)},I={file:{attributes:{tabIndex:"-1"}}},C=Object(u.b)(Object(l.a)(Object(l.a)({},!O&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)(r.a.Fragment,null,O?Object(u.c)("div",{css:C,title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured loading this video. ")):Object(u.c)(Be.a,{url:t,ref:b,width:"100%",height:"auto",playing:i,muted:n,onProgress:w,progressInterval:100,onReady:y,onEnded:k,onError:S,config:I,disablePictureInPicture:!0}))},Fe={name:"83yu8f",styles:"display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;padding:20px;gap:50px;"},Ue={name:"iveis7",styles:"width:100%;display:flex;justify-content:right;"},Ke={name:"1k0tw9u",styles:"width:100%;display:flex;justify-content:left;"},Ge=function(){var e=Fe,t=Ue,n=Ke;return Object(u.c)("div",{css:e,title:"Video Controls"},Object(u.c)("div",{css:t},Object(u.c)(Ye,null)),Object(u.c)(Je,null),Object(u.c)("div",{css:n},Object(u.c)(Ze,null)))},Ve={name:"1supqt3",styles:"display:flex;gap:10px;justify-content:center;align-items:center;"},qe={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},_e={name:"1jblnxu",styles:"display:inline-block;flex-wrap:nowrap;"},Ye=function(){var e=Object(f.b)(),t=Object(f.c)(ve),n=function(){e(se(!t))},c=Ve,a=qe;return Object(u.c)("div",{css:c,title:"Skips deleted segments when playing the video. Currently "+(t?"on":"off")},Object(u.c)("div",{css:_e},"Preview Mode"),Object(u.c)(d.a,{css:a,icon:t?b.u:b.t,size:"1x",role:"switch","aria-checked":t,tabIndex:0,"aria-hidden":!1,"aria-label":"Enable or disable preview mode.",onClick:n,onKeyDown:function(e){" "===e.key&&n()}}))},Je=function(){var e=Object(f.b)(),t=Object(f.c)(me),n=function(){e(oe(!t))};return Object(u.c)(d.a,{css:Object(s.a)([G,{justifySelf:"center"}],""),icon:t?b.j:b.l,size:"2x",title:"Play Button",role:"button","aria-pressed":t,tabIndex:0,"aria-hidden":!1,"aria-label":"Play Button",onClick:n,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||n()}})},Xe={name:"tx8ton",styles:"display:flex;flex-direction:row;gap:5px;"},Qe={name:"lrwxz2",styles:"display:inline-block;width:100px;"},Ze=function(){var e=Object(f.c)(Oe),t=Object(f.c)(De);return Object(u.c)("div",{css:Xe},Object(u.c)("time",{css:Qe,tabIndex:0,role:"timer","aria-label":"Current time: "+Z(e)},new Date(e||0).toISOString().substr(11,12))," / ",Object(u.c)("div",{tabIndex:0,"aria-label":"Duration: "+Z(t)},new Date(t||0).toISOString().substr(11,12)))},$e={name:"wnc553",styles:"display:inline-block;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:500px;"},et={name:"18kfia5",styles:"font-weight:bold;font-size:24px;vertical-align:-2.5px;"},tt={name:"6xix1i",styles:"font-size:16px;"},nt=function(){var e,t=Object(f.c)(Te),n=Object(f.c)(Ae),c=$e,a=et;return n&&n.length&&(e=Object(u.c)("div",{css:c,title:"Video Presenters"},"by ",n.join(", "))),Object(u.c)("div",{title:"Video Area Header",css:tt},Object(u.c)("div",{css:Object(s.a)([c,a],""),title:"Video Title"},t),e)},ct=function(){var e=Object(f.b)(),t=Object(f.c)(Ie),n=Object(f.c)(Ce),c=Object(f.c)((function(e){return e.videoState.status})),r=Object(f.c)((function(e){return e.videoState.error}));Object(a.useEffect)((function(){"idle"===c&&e(ee({mediaPackageId:p,ocUrl:N}))}),[c,e]);for(var i=[],o=0;o<n;o++)i.push(Object(u.c)(He,{key:o,url:t[o],isMuted:0!==o}));var s=Object(u.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px",borderBottom:"1px solid #BBB"},""),l=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(u.c)("div",{css:s,title:"Video Area"},Object(u.c)("div",{css:_(c),title:"Error Box",role:"alert"},Object(u.c)("span",null,"A problem occured during communication with Opencast."),Object(u.c)("br",null),r?"Details: "+r:"No error details are available.",Object(u.c)("br",null),p?"":"Make sure the URL is of the form `your-opencast-address?mediaPackageId=id-of-the-event`"),Object(u.c)(nt,null),Object(u.c)("div",{css:l,title:"Video Player Area"},i),Object(u.c)(Ge,null))},at=n(44),rt=n.n(at),it=n(45);function ot(e){var t=this;this.audioContext=new AudioContext,this.oCanvas=document.createElement("canvas"),this.buffer={},this.WIDTH=0,this.HEIGHT=0,this.channelData=[],this.waveformImage="",this.audioBuffer=null,this.aveRMS=0,this.peakRMS=0,this.numberSamples=1e5,this.waveformType="img",this.drawWaveform=this.drawCanvasWaveform,e.width&&e.height&&this.setDimensions(e.width,e.height),e.samples&&(this.numberSamples=e.samples),e.type&&"svg"===e.type&&(this.waveformType="svg",this.drawWaveform=this.delegateToWorker,this.worker=null),e.media&&this.generateWaveform(e.media).then((function(){t.getAudioData(),t.drawWaveform(),"svg"!==t.waveformType&&n.forEach((function(e){e(t.waveformImage||t.svgPath,t.waveformType)}))})).catch((function(e){return console.log(e)}));var n=[];Object.defineProperty(this,"oncomplete",{get:function(){return n},set:function(e,t){if("function"==typeof e){if(this.waveformImage||this.svgPath)return void e(this.waveformImage||this.svgPath,this.svgLength);n.push(e)}}})}ot.prototype={constructor:ot,setDimensions:function(e,t){this.oCanvas.width=e,this.WIDTH=e,this.oCanvas.height=t,this.HEIGHT=t,this.ocCtx=this.oCanvas.getContext("2d")},decodeAudioData:function(e){var t=this;return new Promise((function(n,c){new Promise((function(t,n){if(e instanceof ArrayBuffer)t(e);else if(e instanceof Blob){var c=new FileReader;c.onload=function(){t(c.result)},c.readAsArrayBuffer(e)}})).then((function(e){t.audioContext.decodeAudioData(e).then((function(e){t.buffer=e,n()})).catch((function(e){c(e)}))})).catch((function(e){c(e)}))}))},getAudioData:function(e){e=e||this.buffer,this.channelData=this.dropSamples(e.getChannelData(0),this.numberSamples)},drawCanvasWaveform:function(e){var t=this;e=e||1,this.ocCtx.fillStyle="#FFFFFF00",this.ocCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.ocCtx.lineWidth=1,this.ocCtx.strokeStyle="black";var n=1*this.WIDTH/this.channelData.length,c=0;this.ocCtx.beginPath(),this.ocCtx.moveTo(c,this.channelData[0]*this.HEIGHT/128/2),this.channelData.forEach((function(a){var r=a*e,i=t.HEIGHT*(1+r)/2;t.ocCtx.lineTo(c,i),t.aveRMS+=a*a,t.peakRMS=Math.max(a*a,t.peakRMS),c+=n})),this.ocCtx.lineTo(this.WIDTH,this.HEIGHT/2),this.ocCtx.stroke(),this.aveRMS=Math.sqrt(this.aveRMS/this.channelData.length),this.aveDBs=20*Math.log(this.aveRMS)/Math.log(10),this.waveformImage=this.oCanvas.toDataURL()},dropSamples:function(e,t){var n=Math.max(parseInt(e.length/t),1);return e.filter((function(e,t){return t%n===0}))},generateWaveform:function(e){return this.decodeAudioData(e)},delegateToWorker:function(){this.worker||(this.worker=new Worker("../util/svgworker.js"),this.worker.addEventListener("message",this.workerCommunication.bind(this),!1),this.worker.postMessage(this.channelData))},workerCommunication:function(e){switch(e.data.type){case"path":this.setSVGpath(e.data.path,e.data.length),this.worker.removeEventListener("message",this.workerCommunication.bind(this),!1),this.worker.terminate(),this.worker=null}},setSVGpath:function(e,t){var n=this;this.svgPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgLength=t,this.svgPath.setAttribute("d",e),this.svgPath.setAttribute("vector-effect","non-scaling-stroke"),this.svgPath.setAttribute("stroke-width","0.5px"),this.oncomplete.forEach((function(e){return e(n.svgPath,n.svgLength)}))}};var st={name:"190c1k3",styles:"height:230px;"},lt={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},ut={name:"woscqz",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid black;"},dt={name:"17o39q1",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid black;"},bt=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(me),i=Object(f.c)(Oe),o=Object(f.c)(De),s=Object(f.c)(ye),l=Object(f.c)(we),h=Object(a.useState)({x:0,y:0}),p=Object(Le.a)(h,2),g=p[0],m=p[1],v=Object(a.useState)(!1),j=Object(Le.a)(v,2),O=j[0],x=j[1],w=Object(a.useState)(1e3),y=Object(Le.a)(w,2),k=y[0],S=y[1],I=Object(a.useRef)(0),C=r.a.useRef(null);Object(a.useEffect)((function(){i!==I.current&&(D(),I.current=i)})),Object(a.useEffect)((function(){i&&o&&m({x:i/o*t,y:0})}),[t]);var D=function(){var e=g.y;m({x:i/o*t,y:e})},P=Object(u.b)({backgroundColor:"black",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},""),T=Object(u.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:O?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),A=lt,E=ut,N=dt;return Object(u.c)(rt.a,{onStart:function(){x(!0)},onStop:function(e,c){var a=c.x,r=c.y;m({x:a,y:r}),n(le(a/t*o)),x(!1)},axis:"x",bounds:"parent",position:g,disabled:c,nodeRef:C},Object(u.c)("div",{ref:C,css:P,title:"Scrubber"},Object(u.c)("div",{css:N}),Object(u.c)("div",{css:T,title:"dragHandle","aria-grabbed":O,"aria-label":"Scrubber. "+Z(i)+". Active segment: "+s+". "+(l[s].deleted?"Deleted.":"Alive.")+". Controls: Alt+j and Alt+k to move the scrubber. Alt+i and Alt+k to increase/decrase the move delta.",tabIndex:0,onKeyDown:function(e){if(e.altKey)switch(e.key){case"j":n(le(Math.max(i-k,0)));break;case"l":n(le(Math.min(i+k,o)));break;case"i":S(Math.min(10*k,1e6));break;case"k":S(Math.max(k/10,1))}}},Object(u.c)(d.a,{css:A,icon:b.a,size:"1x"})),Object(u.c)("div",{css:E})))},ft=function(e){e.timelineWidth;var t=Object(f.c)(we),n=Object(f.c)(De),c=Object(f.c)(ye),a=Object(u.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(u.c)("div",{css:a,title:"Segments"},t.map((function(e,t){return Object(u.c)("div",{key:e.id,title:"Segment "+t,"aria-label":"Segment "+t+". "+(e.deleted?"Deleted.":"Alive.")+" Start: "+Z(e.start)+". End: "+Z(e.end)+".",tabIndex:0,css:Object(s.a)({background:(a=e.deleted,r=c===t,a||r?a&&!r?"repeating-linear-gradient(\n                -45deg,\n                rgba(255, 45, 45, 0.4),\n                rgba(255, 45, 45, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 20px);":!a&&r?"rgba(0, 0, 200, 0.4)":a&&r?"repeating-linear-gradient(\n                -45deg,\n                rgba(200, 45, 45, 0.4),\n                rgba(200, 45, 45, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 20px);":void 0:"rgba(0, 0, 255, 0.4)"),borderRadius:"5px",borderStyle:c===t?"dashed":"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")});var a,r})))},ht={name:"e6zfwc",styles:"min-height:0;"},pt=function(){var e=Object(f.c)(Ie),t=Object(f.c)((function(e){return e.videoState.status})),n=Object(a.useState)([]),c=Object(Le.a)(n,2),i=c[0],o=c[1],s=Object(u.b)(Object(l.a)(Object(l.a)({display:"flex",flexDirection:"column",position:"absolute",justifyContent:"center"},i.length<=0&&{alignItems:"center"}),{},{width:"100%",height:"230px",paddingTop:"10px"}),"");Object(a.useEffect)((function(){if("success"===t){var n=[],c=0;[e[0]].forEach((function(e,t,a){var r=null,i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){r=i.response,new ot({type:"img",width:"2000",height:"230",samples:1e5,media:new File([r],r)}).oncomplete=function(e,t){n.push(e),++c===a.length&&o(n)}},i.send()}))}}),[t,e]);return Object(u.c)("div",{css:s,title:"WaveformDisplayTest"},i.length>0?i.map((function(e,t){return Object(u.c)("img",{key:t,alt:"Waveform",src:e||"",css:ht})})):Object(u.c)(r.a.Fragment,null,Object(u.c)(d.a,{icon:b.p,spin:!0,size:"3x"}),Object(u.c)("div",null,"Generating Waveform")))},gt=function(){var e=Object(it.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,a=Object(u.b)({position:"relative",height:"250px",width:"100%"},"");return Object(u.c)("div",{ref:t,css:a,title:"Timeline"},Object(u.c)(bt,{timelineWidth:c}),Object(u.c)("div",{css:st},Object(u.c)(pt,null),Object(u.c)(ft,{timelineWidth:c})))},mt={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},vt=function(e){var t=e.iconName,n=e.actionName,c=e.action,a=e.tooltip,r=e.ariaLabelText,i=Object(f.b)(),o=function(){c&&i(c())};return Object(u.c)("div",{css:Object(s.a)([G,mt],""),title:a,role:"button",tabIndex:0,"aria-label":r,onClick:o,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||o()}},Object(u.c)(d.a,{icon:t,size:"1x"}),Object(u.c)("span",null,n))},jt=function(){var e=Object(f.b)(),t=Object(f.c)(ke);return Object(u.c)("div",{css:Object(s.a)([G,mt],""),title:"Marks the segment at the current scrubber position as deleted or alive",role:"button",tabIndex:0,"aria-label":"Delete and Restore. Marks the segment at the current scrubber position as deleted or alive",onClick:function(){return e(be())}},Object(u.c)(d.a,{icon:t?b.w:b.x,size:"1x"}),Object(u.c)("div",null,t?"Delete":"Restore"))},Ot=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(u.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(u.c)("div",{css:e},Object(u.c)("div",{css:t},Object(u.c)(vt,{iconName:b.e,actionName:"Cut",action:de,tooltip:"Splits the segment at the current scrubber position",ariaLabelText:"Cut. Splits the segment at the current scrubber position"}),Object(u.c)(jt,null),Object(u.c)(vt,{iconName:b.q,actionName:"Merge Left",action:he,tooltip:"Combines the currently active segment with the segment to its left",ariaLabelText:"Merge Left. Combines the currently active segment with the segment to its left"}),Object(u.c)(vt,{iconName:b.r,actionName:"Merge Right",action:pe,tooltip:"Combines the currently active segment with the segment to its right",ariaLabelText:"Merge Right. Combines the currently active segment with the segment to its right"})),Object(u.c)("div",{css:t}))},xt=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),a=function(){c(y(n)),c(k(1))},r=Object(u.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(u.c)("div",{css:Object(s.a)([G,r],""),role:"button",tabIndex:0,onClick:a,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||a()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},wt=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(u.c)("div",{css:e,title:"Finish Menu"},Object(u.c)(xt,{iconName:b.n,stateName:"Save changes"}),Object(u.c)(xt,{iconName:b.g,stateName:"Start processing"}),Object(u.c)(xt,{iconName:b.s,stateName:"Discard changes"}))},yt={status:"idle",error:void 0},kt=Object(h.b)("video/postVideoInformation",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:It(t.segments),tracks:t.tracks});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),St=Object(h.c)({name:"workflowPostState",initialState:yt,reducers:{},extraReducers:function(e){e.addCase(kt.pending,(function(e,t){e.status="loading"})),e.addCase(kt.fulfilled,(function(e,t){e.status="success"})),e.addCase(kt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),It=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},Ct=function(e){return e.workflowPostState.status},Dt=function(e){return e.workflowPostAndProcessState.error},Pt=St.reducer;var Tt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},At=function(){var e=Object(f.b)(),t=Object(f.c)(we),n=Object(f.c)(Ee),c=Object(f.c)(Ct),a=b.n,r=!1,i="Save Button";"loading"===c?(a=b.p,r=!0,i="Attempting to save"):"success"===c?(a=b.b,r=!1,i="Saved successfully"):"failed"===c&&(a=b.f,r=!1,i="Save failed");var o=function(){e(kt({segments:t,tracks:n,mediaPackageId:p,ocUrl:N}))},l=Tt;return Object(u.c)("div",{css:Object(s.a)([G,l],""),title:i,role:"button",tabIndex:0,onClick:o,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||o()}},Object(u.c)(d.a,{icon:a,spin:r,size:"1x"}),Object(u.c)("span",null,"Yes, save changes"),Object(u.c)("div",{css:q,"aria-live":"polite","aria-atomic":"true"},function(){if("success"===c)return"Saved successfully"}()))},Et=function(){var e=Object(f.c)(S),t=Object(f.c)(Ct),n=Object(f.c)(Dt),c=Object(u.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(u.c)("div",{css:c,title:"Save Area"},Object(u.c)("span",null,"Here you can save the changes you made, but the video will not be cut yet. ",Object(u.c)("br",null),'To make Opencast cut the video, please go back and select "Start processing". ',Object(u.c)("br",null),"Do you truly wish to save?"),Object(u.c)("div",{css:V},Object(u.c)(Zt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(At,null)),Object(u.c)("div",{css:_(t),title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again."),Object(u.c)("br",null),n?"Details: "+n:"No error details are available.",Object(u.c)("br",null)))},Nt=Object(h.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),Mt=Nt.actions.setState,Rt=function(e){return e.abortState.value},Wt=Nt.reducer;var Lt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},zt=function(){var e=Object(f.b)(),t=function(){e(Mt(!0))},n=Lt;return Object(u.c)("div",{css:Object(s.a)([G,n],""),title:"Discard changes button",role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||t()}},Object(u.c)(d.a,{icon:b.s,size:"1x"}),Object(u.c)("span",null,"Yes, discard changes"))},Bt=function(){var e=Object(f.c)(S),t=Object(u.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(u.c)("div",{css:t,title:"Abort Area"},Object(u.c)("span",null,"Discard all the changes you made? This cannot be undone! ",Object(u.c)("br",null),"Do you truly want all your changes to be lost forever?"),Object(u.c)("div",{css:V},Object(u.c)(Zt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(zt,null)))},Ht={status:"idle",error:void 0},Ft=Object(h.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:It(t.segments),tracks:t.tracks,workflows:t.workflow});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ut=Object(h.c)({name:"workflowPostAndProcessState",initialState:Ht,reducers:{},extraReducers:function(e){e.addCase(Ft.pending,(function(e,t){e.status="loading"})),e.addCase(Ft.fulfilled,(function(e,t){e.status="success"})),e.addCase(Ft.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Kt=function(e){return e.workflowPostAndProcessState.status},Gt=function(e){return e.workflowPostAndProcessState.error},Vt=Ut.reducer;var qt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},_t=function(e){var t=e.text,n=Object(f.b)(),c=Object(f.c)(Ne),a=Object(f.c)(Se),r=Object(f.c)(we),i=Object(f.c)(Ee),o=Object(f.c)(Kt),l=function(){n(Ft({segments:r,tracks:i,mediaPackageId:p,ocUrl:N,workflow:[{id:c[a].id}]}))},h=b.g,g=!1;"loading"===o?(h=b.p,g=!0):"success"===o?(h=b.b,g=!1):"failed"===o&&(h=b.f,g=!1);var m=qt;return Object(u.c)("div",{css:Object(s.a)([G,m],""),title:"Start processing button",role:"button",tabIndex:0,onClick:l,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||l()}},Object(u.c)(d.a,{icon:h,spin:g,size:"1x"}),Object(u.c)("span",null,t))},Yt=function(){var e=Object(f.c)(Kt),t=Object(f.c)(Gt),n=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},"");return Object(u.c)("div",{css:n,title:"Workflow Configuration Area"},Object(u.c)("h2",null,"Workflow Configuration"),Object(u.c)(d.a,{icon:b.v,size:"10x"}),"Placeholder",Object(u.c)("div",null,"Satisfied with your configuration?"),Object(u.c)("div",{css:V},Object(u.c)(Zt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(u.c)(_t,{text:"Yes, start processing"})),Object(u.c)("div",{css:_(e),title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again."),Object(u.c)("br",null),t?"Details: "+t:"No error details are available.",Object(u.c)("br",null)))},Jt=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),a=Object(f.c)(Se),r=function(){c(fe(n))},i=Object(u.b)({backgroundColor:n!==a?"snow":"#DDD",padding:"16px"},"");return Object(u.c)("div",{css:Object(s.a)([G,i],""),title:"Click to select this workflow",role:"button",tabIndex:0,"aria-label":"Press to select the workflow: "+t,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)("span",null,t))},Xt=function(){var e=Object(f.c)(Ne),t=Object(f.c)(S),n=Object(f.c)(I),c=Object(f.c)(Se),a=Object(f.c)(Kt),r=Object(f.c)(Gt),i=Object(u.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),o=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px",flexWrap:"wrap",maxHeight:"50vh"},"");return Object(u.c)("div",{css:i},Object(u.c)("h2",null,"Select a workflow"),Object(u.c)("div",null,"Please select which workflow Opencast should use to cut and process the video. ",Object(u.c)("br",null),'If you are unsure on which workflow to choose, the already selected workflow or the "Publish" workflow are usually good choices.'),Object(u.c)("div",{css:o,title:"Workflow Selection Area"},e.length>0?e.map((function(e,t){return Object(u.c)(Jt,{key:t,stateName:e.name,workflowIndex:t})})):"There are no workflows to select. Save your changes and contact an Opencast Administrator."),Object(u.c)("div",null,Object(u.c)("i",null,e.length>c&&e[c].description?e[c].description:"And this is where I would put a workflow description.... if I had one!")),Object(u.c)("div",{css:V},Object(u.c)(Zt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(u.c)(_t,{text:"Start processing with workflow"})),Object(u.c)("div",{css:_(a),title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again."),Object(u.c)("br",null),r?"Details: "+r:"No error details are available.",Object(u.c)("br",null)))};var Qt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Zt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,a=Object(f.b)(),r=function(){a(k(t))},i=Qt;return Object(u.c)("div",{css:Object(s.a)([G,i],""),role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)(d.a,{icon:c,size:"1x"}),Object(u.c)("span",null,n))},$t=function(){var e=Object(f.c)(I),t=Object(u.b)({display:0!==e?"none":"block"},""),n=Object(u.b)({display:1!==e?"none":"block"},""),c=Object(u.b)({display:2!==e?"none":"block"},"");return Object(u.c)("div",{title:"Finish"},Object(u.c)("div",{css:t},Object(u.c)(wt,null)),Object(u.c)("div",{css:n},Object(u.c)(Et,null),Object(u.c)(Xt,null),Object(u.c)(Bt,null)),Object(u.c)("div",{css:c},Object(u.c)(Yt,null)))};var en={name:"8atqhb",styles:"width:100%;"},tn=function(){var e=Object(f.c)(j),t=Object(u.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(u.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),a=Object(u.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(u.c)("main",{title:"MainMenuContext",css:en,role:"main"},Object(u.c)("div",{css:t,title:"Cutting Container"},Object(u.c)(ct,null),Object(u.c)(Ot,null),Object(u.c)(gt,null)),Object(u.c)("div",{css:n,title:"Finish Container"},Object(u.c)($t,null)),Object(u.c)("div",{css:a},Object(u.c)(d.a,{icon:b.v,size:"10x"}),"Placeholder"))};var nn={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},cn=function(){var e=Object(f.c)(Rt),t=Object(f.c)(Kt),n=Object(f.c)(De),c=nn;return Object(u.c)("div",{css:c,title:"The last area"},Object(u.c)(d.a,{icon:e?b.s:"success"===t?b.c:b.m,size:"10x"}),Object(u.c)("div",null,e?"All your changes are now lost forever. You can now close the editor.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong."))},an=function(){var e=Object(f.c)(Rt),t=Object(f.c)(Kt),n={display:"flex",flexDirection:"row",height:"100%"};return Object(u.c)(r.a.Fragment,null,e||"success"===t?Object(u.c)(cn,null):Object(u.c)("div",{css:n,title:"Body"},Object(u.c)(We,null),Object(u.c)(tn,null)))};var rn,on=function(){return Object(u.c)("div",{className:"App"},Object(u.c)(U,null),Object(u.c)(an,null))},sn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},ln=Object(h.a)({reducer:{mainMenuState:O,finishState:C,videoState:Me,workflowPostState:Pt,workflowPostAndProcessState:Vt,abortState:Wt}}),un=Promise.race([W(),(rn=300,new Promise((function(e,t){return setTimeout(e,rn)})))]);un.then((function(){o.a.render(Object(u.c)(r.a.StrictMode,null,Object(u.c)(f.a,{store:ln},Object(u.c)(on,null))),document.getElementById("root"))}),(function(e){return t=Object(u.c)("p",null,"Fatal error while loading app: ".concat(e.message),Object(u.c)("br",null),"This might be caused by a incorrect configuration by the system administrator."),void o.a.render(t,document.getElementById("root"));var t})),sn()}},[[98,1,2]]]);
//# sourceMappingURL=main.43d3ab76.chunk.js.map