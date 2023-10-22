"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439],{5034:function(e,t,r){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(7294)),o=r(6281),a=r(9790);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,l=/user\/([a-zA-Z0-9_-]+)\/?/,u=/youtube-nocookie\.com/,c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(YouTube,e);var t,r,c,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,n=_getPrototypeOf(YouTube);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(e=r)&&("object"===_typeof(e)||"function"==typeof e)?e:_assertThisInitialized(this)});function YouTube(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,YouTube);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=s.call.apply(s,[this].concat(r))),"callPlayer",o.callPlayer),_defineProperty(_assertThisInitialized(e),"parsePlaylist",function(t){return t instanceof Array?{listType:"playlist",playlist:t.map(e.getID).join(",")}:i.test(t)?{listType:"playlist",list:_slicedToArray(t.match(i),2)[1].replace(/^UC/,"UU")}:l.test(t)?{listType:"user_uploads",list:_slicedToArray(t.match(l),2)[1]}:{}}),_defineProperty(_assertThisInitialized(e),"onStateChange",function(t){var r=t.data,n=e.props,o=n.onPlay,a=n.onPause,i=n.onBuffer,l=n.onBufferEnd,u=n.onEnded,c=n.onReady,s=n.loop,y=n.config,f=y.playerVars,p=y.onUnstarted,d=window.YT.PlayerState,h=d.UNSTARTED,b=d.PLAYING,P=d.PAUSED,_=d.BUFFERING,g=d.ENDED,v=d.CUED;if(r===h&&p(),r===b&&(o(),l()),r===P&&a(),r===_&&i(),r===g){var m=!!e.callPlayer("getPlaylist");s&&!m&&(f.start?e.seekTo(f.start):e.play()),u()}r===v&&c()}),_defineProperty(_assertThisInitialized(e),"mute",function(){e.callPlayer("mute")}),_defineProperty(_assertThisInitialized(e),"unmute",function(){e.callPlayer("unMute")}),_defineProperty(_assertThisInitialized(e),"ref",function(t){e.container=t}),e}return r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return!e||e instanceof Array||i.test(e)?null:e.match(a.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(e,t){var r=this,n=this.props,a=n.playing,c=n.muted,s=n.playsinline,y=n.controls,f=n.loop,p=n.config,d=n.onError,h=p.playerVars,b=p.embedOptions,P=this.getID(e);if(t){if(i.test(e)||l.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:P,startSeconds:(0,o.parseStartTime)(e)||h.start,endSeconds:(0,o.parseEndTime)(e)||h.end});return}(0,o.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",function(e){return e.loaded}).then(function(t){r.container&&(r.player=new t.Player(r.container,_objectSpread({width:"100%",height:"100%",videoId:P,playerVars:_objectSpread(_objectSpread({autoplay:a?1:0,mute:c?1:0,controls:y?1:0,start:(0,o.parseStartTime)(e),end:(0,o.parseEndTime)(e),origin:window.location.origin,playsinline:s?1:0},r.parsePlaylist(e)),h),events:{onReady:function(){f&&r.player.setLoop(!0),r.props.onReady()},onPlaybackRateChange:function(e){return r.props.onPlaybackRateChange(e.data)},onStateChange:r.onStateChange,onError:function(e){return d(e.data)}},host:u.test(e)?"https://www.youtube-nocookie.com":void 0},b)))},d),b.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e=this.props.display;return n.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},n.default.createElement("div",{ref:this.ref}))}}],_defineProperties(YouTube.prototype,r),c&&_defineProperties(YouTube,c),YouTube}(n.Component);t.default=c,_defineProperty(c,"displayName","YouTube"),_defineProperty(c,"canPlay",a.canPlay.youtube)}}]);