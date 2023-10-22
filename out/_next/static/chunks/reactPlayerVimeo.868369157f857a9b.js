"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{6746:function(e,t,r){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(7294)),o=r(6281),i=r(9790);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Vimeo,e);var t,r,i,a=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,n=_getPrototypeOf(Vimeo);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(e=r)&&("object"===_typeof(e)||"function"==typeof e)?e:_assertThisInitialized(this)});function Vimeo(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,Vimeo);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=a.call.apply(a,[this].concat(r))),"callPlayer",o.callPlayer),_defineProperty(_assertThisInitialized(e),"duration",null),_defineProperty(_assertThisInitialized(e),"currentTime",null),_defineProperty(_assertThisInitialized(e),"secondsLoaded",null),_defineProperty(_assertThisInitialized(e),"mute",function(){e.setMuted(!0)}),_defineProperty(_assertThisInitialized(e),"unmute",function(){e.setMuted(!1)}),_defineProperty(_assertThisInitialized(e),"ref",function(t){e.container=t}),e}return r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;this.duration=null,(0,o.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(function(r){if(t.container){var n=t.props.config,o=n.playerOptions,i=n.title;t.player=new r.Player(t.container,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({url:e.replace("/manage/videos",""),autoplay:t.props.playing,muted:t.props.muted,loop:t.props.loop,playsinline:t.props.playsinline,controls:t.props.controls},o)),t.player.ready().then(function(){var e=t.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",i&&(e.title=i)}).catch(t.props.onError),t.player.on("loaded",function(){t.props.onReady(),t.refreshDuration()}),t.player.on("play",function(){t.props.onPlay(),t.refreshDuration()}),t.player.on("pause",t.props.onPause),t.player.on("seeked",function(e){return t.props.onSeek(e.seconds)}),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",function(e){var r=e.seconds;t.currentTime=r}),t.player.on("progress",function(e){var r=e.seconds;t.secondsLoaded=r}),t.player.on("bufferstart",t.props.onBuffer),t.player.on("bufferend",t.props.onBufferEnd),t.player.on("playbackratechange",function(e){return t.props.onPlaybackRateChange(e.playbackRate)})}},this.props.onError)}},{key:"refreshDuration",value:function(){var e=this;this.player.getDuration().then(function(t){e.duration=t})}},{key:"play",value:function(){var e=this.callPlayer("play");e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setMuted",value:function(e){this.callPlayer("setMuted",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.display;return n.default.createElement("div",{key:this.props.url,ref:this.ref,style:{width:"100%",height:"100%",overflow:"hidden",display:e}})}}],_defineProperties(Vimeo.prototype,r),i&&_defineProperties(Vimeo,i),Vimeo}(n.Component);t.default=a,_defineProperty(a,"displayName","Vimeo"),_defineProperty(a,"canPlay",i.canPlay.vimeo),_defineProperty(a,"forceLoad",!0)}}]);