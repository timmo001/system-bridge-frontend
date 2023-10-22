(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{4768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings",function(){return n(9951)}])},1755:function(e,t,n){"use strict";n.d(t,{Z:function(){return Common_Layout}});var i=n(5893),s=n(7294),o=n(1163),a=n(9008),r=n.n(a),l=n(3946),c=n(8849),d=n(5317),u=n(8298),p=n(2734),h=n(2293),g=n(5582),m=n(155),x=n(6886),y=n(9417),j=n(5861),v=n(7357);function ElevationScroll(e){let{children:t}=e,n=(0,u.Z)({disableHysteresis:!0,threshold:24});return(0,s.cloneElement)(t,{elevation:n?4:0})}var Common_Header=function(){let[e,t]=(0,s.useState)(!1);(0,s.useCallback)(()=>{t(!e)},[e]);let n=(0,p.Z)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ElevationScroll,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{color:"transparent",elevation:0,children:(0,i.jsx)(g.Z,{maxWidth:"xl",sx:{padding:0},children:(0,i.jsx)(m.Z,{sx:{minHeight:50,maxHeight:50,padding:0,flex:1,alignItems:"center",justifyContent:"space-between",display:"flex",flexWrap:"nowrap"},children:(0,i.jsx)(x.ZP,{item:!0,children:(0,i.jsx)(y.Z,{href:"https://system-bridge.timmo.dev",target:"_blank",children:(0,i.jsx)(j.Z,{component:"div",variant:"h4",sx:{textTransform:"none",userSelect:"none",color:n.palette.primary.contrastText},children:"System Bridge"})})})})})}),(0,i.jsx)(v.Z,{sx:{height:n.spacing(18)}})]})})})};let f=!1;var Common_Layout=function(e){let t=(0,o.useRouter)();return(0,s.useEffect)(()=>{if(t.isReady&&!f){var e,n,i,s;f=!0;let o=(null===(e=t.query)||void 0===e?void 0:e.apiKey)||"",a=(null===(n=t.query)||void 0===n?void 0:n.apiPort)||"9170",r=!1;if((null===(i=t.query)||void 0===i?void 0:i.apiKey)||(r=!0,o=window.prompt("Please enter your API key",o)),(null===(s=t.query)||void 0===s?void 0:s.apiPort)||(r=!0,a=window.prompt("Please enter your API port (default: 9170)",a)),r&&o&&a){let e=t.asPath.split("?")[0];t.replace({pathname:e.includes(".html")?e:"".concat(e,".html"),query:{...t.query,apiKey:o,apiPort:a}})}}},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:e.title?"".concat(e.title," - System Bridge"):"System Bridge"}),(0,i.jsx)("link",{rel:"canonical",href:e.url}),(0,i.jsx)("meta",{name:"description",content:e.description?"".concat(e.description):e.title?"".concat(e.title," - System Bridge"):"System Bridge"}),(0,i.jsx)("meta",{name:"keywords",content:e.keywords?"".concat(e.keywords):"system-bridge, system, bridge, typescript"})]}),!e.noHeader&&(0,i.jsx)(Common_Header,{}),e.closeButton&&(0,i.jsx)(l.Z,{size:"small",sx:{position:"absolute",top:4,right:4,zIndex:1e3},onClick:()=>{window.location.href="http://close.window"},children:(0,i.jsx)(c.Icon,{id:"close",path:d.r5M,size:1})}),e.children]})}},2301:function(e,t,n){"use strict";n.d(t,{D:function(){return usePrevious},X:function(){return handleCopyToClipboard}});var i=n(7294);function handleCopyToClipboard(e){navigator.permissions.query({name:"clipboard-write"}).then(t=>{("granted"===t.state||"prompt"===t.state)&&navigator.clipboard.writeText(e)})}function usePrevious(e){let t=(0,i.useRef)();return(0,i.useEffect)(()=>{t.current=e}),t.current}},4103:function(e,t,n){"use strict";n.d(t,{C:function(){return WebSocketConnection}});let WebSocketConnection=class WebSocketConnection{close(){this.websocket&&this.websocket.readyState===this.websocket.OPEN&&this.websocket.close()}async connect(){let e=new WebSocket("ws://".concat(window.location.hostname||"localhost",":").concat(this.port,"/api/websocket"));return await new Promise(t=>{e.onopen=()=>t()}),e.onmessage=e=>{if("string"==typeof e.data){let t=JSON.parse(e.data);t&&this.onEvent&&this.onEvent(t)}},e}isConnected(){var e;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===WebSocket.OPEN}getData(e){this.websocket&&this.websocket.readyState===this.websocket.OPEN&&(console.log("Get data:",e),this.websocket.send(JSON.stringify({api_key:this.apiKey,event:"GET_DATA",modules:e})))}getSettings(){this.websocket&&this.websocket.readyState===this.websocket.OPEN&&(console.log("Get settings"),this.websocket.send(JSON.stringify({api_key:this.apiKey,event:"GET_SETTINGS"})))}registerDataListener(e){this.websocket&&this.websocket.readyState===this.websocket.OPEN&&(console.log("Register data listener:",e),this.websocket.send(JSON.stringify({api_key:this.apiKey,event:"REGISTER_DATA_LISTENER",modules:e})))}sendPlayerStatus(e){this.websocket&&this.websocket.readyState===this.websocket.OPEN&&this.websocket.send(JSON.stringify({api_key:this.apiKey,event:"MEDIA_STATUS",status:e}))}updateSetting(e,t){this.websocket&&this.websocket.readyState===this.websocket.OPEN&&(console.log("Update setting:",{key:e,value:t}),this.websocket.send(JSON.stringify({api_key:this.apiKey,event:"UPDATE_SETTING",setting:e,value:t})))}constructor(e,t,n){this.port=e||9170,this.apiKey=t,(async()=>{this.websocket=await this.connect(),n&&this.websocket&&this.websocket.readyState===this.websocket.OPEN&&n()})()}}},9951:function(e,t,n){"use strict";let i;n.r(t),n.d(t,{default:function(){return settings}});var s=n(5893),o=n(7294),a=n(5582),r=n(1755),l=n(2734),c=n(6886),d=n(8456),u=n(1163),p=n(5317),h=n(4583),g=n(4103),m=n(7632),x=n(8619),y=n(9294),j=n(796),v=n(9953),f=n(3395),b=n(9653),k=n(4054),S=n(7709),Z=n(7109),w=n(3946),C=n(6443),_=n(699),P=n(8849),I=n(2301),E=n(8396),N=n(657),A=n(7645),T=n(8951),O=n(6514),R=n(8462),W=n(1425),z=n(9417),D=n(6486),L=n.n(D);let G={additional_media_directories:{name:"Name",value:"Path"},keyboard_hotkeys:{name:"Hotkey",value:"Action"}};var Settings_ItemList=function(e){let{id:t,setting:n,listIn:i,open:a,setOpen:r,handleChanged:d}=e,[u,h]=(0,o.useState)([]),{name:g,description:m,icon:f}=n;(0,o.useEffect)(()=>{!a&&i&&h(i)},[i,a]);let b=(0,l.Z)(),k=(0,E.Z)(b.breakpoints.down("md"));return(0,s.jsxs)(N.Z,{fullScreen:k,fullWidth:!0,maxWidth:"lg",open:a,scroll:"paper",PaperProps:{style:{background:b.palette.background.paper}},children:[(0,s.jsxs)(A.Z,{children:[(0,s.jsx)(P.Icon,{id:"copy-to-clipboard",title:"Copy to clipboard",size:.7,path:f,style:{marginRight:b.spacing(1)}}),g]}),(0,s.jsx)(T.Z,{sx:{margin:b.spacing(0,3)},children:m}),(0,s.jsx)(O.Z,{children:(0,s.jsxs)(R.Z,{children:[u.map((e,n)=>{var i,o;return(0,s.jsx)(y.ZP,{children:(0,s.jsxs)(c.ZP,{container:!0,alignItems:"center",children:[(0,s.jsx)(c.ZP,{item:!0,xs:4,sx:{marginRight:b.spacing(1)},children:(0,s.jsx)(_.Z,{id:"name",label:(null===(i=G[t])||void 0===i?void 0:i.name)||"Name",fullWidth:!0,variant:"outlined",value:e.name,onChange:e=>{let t=L().cloneDeep(u);console.log("Update name:",n,t,t[n]),t&&t[n]&&(t[n].name=e.target.value,h(t))}})}),(0,s.jsx)(c.ZP,{item:!0,xs:!0,sx:{marginLeft:b.spacing(1)},children:(0,s.jsx)(_.Z,{id:"value",label:(null===(o=G[t])||void 0===o?void 0:o.value)||"Value",fullWidth:!0,variant:"outlined",value:e.value,onChange:e=>{let t=L().cloneDeep(u);console.log("Update value:",n,t,t[n]),t&&t[n]&&(t[n].value=e.target.value,h(t))}})}),(0,s.jsx)(c.ZP,{item:!0,children:(0,s.jsx)(w.Z,{"aria-label":"Remove",size:"large",onClick:()=>{let e=L().cloneDeep(u);e.splice(n,1),h(e)},children:(0,s.jsx)(P.Icon,{id:"remove-item",title:"Remove",size:.8,path:p.S6N})})})]})},n)}),(0,s.jsxs)(x.Z,{onClick:()=>{let e=L().cloneDeep(u);e.push({name:"",value:""}),h(e)},children:[(0,s.jsx)(j.Z,{children:(0,s.jsx)(P.Icon,{id:"add",title:"Add",size:1,path:p.qX5})}),(0,s.jsx)(v.Z,{primary:"Add",secondary:"Add a new item"})]})]})}),(0,s.jsxs)(W.Z,{children:[(0,s.jsx)(z.Z,{onClick:()=>{r(!1)},color:"primary",variant:"outlined",children:"Cancel"}),(0,s.jsx)(z.Z,{onClick:()=>{r(!1),d(u)},color:"primary",variant:"outlined",children:"Save"})]})]})},Settings_Item=function(e){let{keyIn:t,valueIn:n,handleChanged:i}=e,[a,r]=(0,o.useState)(!1),[d,u]=(0,o.useState)(!1),[h,g]=(0,o.useState)(n);function handleInputChanged(e){g(e.target.value)}let E=(0,o.useMemo)(()=>n!==h,[n,h]),{name:N,description:A,icon:T,containerDisabled:O,isList:R,isPassword:W,minimum:z}=F[t],D=(0,l.Z)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e=>{let{children:t}=e;return R?(0,s.jsx)(x.Z,{onClick:()=>r(!0),children:t}):(0,s.jsx)(y.ZP,{children:t})},{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Z,{children:(0,s.jsx)(P.Icon,{id:"icon",title:N,size:1,path:T})}),(0,s.jsx)(v.Z,{primary:N,secondary:A,sx:{maxWidth:"64%",userSelect:"none"}}),R?"":(0,s.jsx)(f.Z,{sx:{width:420,textAlign:"end"},children:(0,s.jsxs)(c.ZP,{container:!0,alignItems:"center",justifyContent:"flex-end",children:[(0,s.jsx)(c.ZP,{item:!0,children:"boolean"==typeof h?(0,s.jsx)(b.Z,{edge:"end",disabled:O,checked:h,onChange:function(e,t){g(t)}}):"string"==typeof n&&"api_key"===t?(0,s.jsx)(k.Z,{fullWidth:!0,variant:"outlined",children:(0,s.jsx)(S.Z,{type:"text",disabled:!0,value:h,endAdornment:(0,s.jsxs)(Z.Z,{position:"end",children:[(0,s.jsx)(w.Z,{"aria-label":"Generate Api Key",onClick:function(){g((0,m.Z)())},edge:"end",size:"large",sx:{margin:D.spacing(-1,-.5)},children:(0,s.jsx)(P.Icon,{id:"generate-api-key",title:"Generate API Key",size:1,path:p.VmU})}),(0,s.jsx)(w.Z,{"aria-label":"Copy to clipboard",onClick:()=>(0,I.X)(String(h)),size:"large",sx:{margin:D.spacing(-1,-.5)},children:(0,s.jsx)(P.Icon,{id:"copy-to-clipboard",title:"Copy to clipboard",size:.8,path:p.a0Z})})]})})}):"string"==typeof n&&"string"==typeof h&&"log_level"===t?(0,s.jsx)(C.Z,{id:t,options:["DEBUG","INFO","WARNING","ERROR","CRITICAL"],renderInput:e=>(0,s.jsx)(_.Z,{...e,variant:"outlined"}),onChange:function(e,t){t&&g(t)},sx:{width:210},value:h}):"string"==typeof n&&W?(0,s.jsx)(k.Z,{variant:"outlined",children:(0,s.jsx)(S.Z,{type:d?"text":"password",defaultValue:h,onChange:handleInputChanged,endAdornment:(0,s.jsx)(Z.Z,{position:"end",children:(0,s.jsx)(w.Z,{"aria-label":"Toggle visibility",onClick:function(){u(!d)},onMouseDown:function(e){e.preventDefault()},size:"large",children:(0,s.jsx)(P.Icon,{id:"copy-to-clipboard",title:"Copy to clipboard",size:.8,path:d?p.rgx:p.DqW})})})})}):"string"==typeof n?(0,s.jsx)(_.Z,{type:"text",defaultValue:h,disabled:O,onChange:handleInputChanged,variant:"outlined"}):"number"==typeof n?(0,s.jsx)(_.Z,{error:!!z&&Number(h)<z,type:"number",disabled:O,inputProps:{minimum:z},defaultValue:h,onChange:handleInputChanged,variant:"outlined"}):""}),(0,s.jsx)(c.ZP,{item:!0,children:(0,s.jsx)(w.Z,{disabled:!1===E,onClick:()=>{i(t,h)},sx:{margin:D.spacing(1)},children:(0,s.jsx)(P.Icon,{id:"save",title:"Save",size:1,path:p.JTj,style:{opacity:E?1:.25}})})})]})})]})}),R&&Array.isArray(h)?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(Settings_ItemList,{id:t,setting:F[t],listIn:h,open:a,setOpen:r,handleChanged:e=>{g(e),i(t,JSON.stringify(e))}})}):""]})},K=n(5861),q=n(629),Settings_Section=function(e){let{name:t,description:n,children:i}=e;return(0,s.jsxs)(c.ZP,{container:!0,direction:"row",item:!0,xs:12,children:[(0,s.jsxs)(c.ZP,{item:!0,xs:4,style:{userSelect:"none"},children:[(0,s.jsx)(K.Z,{component:"h3",variant:"h5",children:t}),(0,s.jsx)(K.Z,{variant:"subtitle1",children:n})]}),(0,s.jsx)(c.ZP,{item:!0,xs:8,children:(0,s.jsx)(q.Z,{children:(0,s.jsx)(R.Z,{children:i})})})]})};let F={autostart:{name:"Autostart",description:"Automatically start the application on startup",icon:p.USr},log_level:{name:"Log Level",description:"Log level for the application",icon:p.eLz},port_api:{name:"API Port",description:"Port for the API and WebSocket",icon:p.A0p},additional_media_directories:{name:"Additional Media Directories",description:"Additional media directories for the media endpoint",icon:p.Rmq,isList:!0},keyboard_hotkeys:{name:"Keyboard Hotkeys",description:"Setup hotkeys for triggering actions",icon:p.Wpj,isList:!0}};var components_Settings_Settings=function(){let[e,t]=(0,h.r)(),[n,a]=(0,o.useState)(!1),r=(0,u.useRouter)().query,p=(0,o.useCallback)(e=>{if(console.log("Event:",e),"SETTINGS_RESULT"===e.type){console.log("Settings result data:",e.data);let n={};console.log("settingsMap:",F);let i=Object.keys(F);e.data.sort((e,t)=>i.indexOf(e.key)>i.indexOf(t.key)?1:-1).forEach(e=>{var t;(null===(t=F[e.key])||void 0===t?void 0:t.isList)&&"string"==typeof e.value?n[e.key]=JSON.parse(e.value):n[e.key]=e.value}),console.log("Settings:",n),t(n)}},[t]),m=(0,o.useCallback)((e,t)=>{console.log("Setup WebSocketConnection"),(i=new g.C(e,t,async()=>{i.getSettings()})).onEvent=p},[p]),x=(0,o.useCallback)((n,s)=>{i.updateSetting(n,s),t({...e,[n]:s})},[e,t]);(0,o.useEffect)(()=>{!n&&r&&r.apiKey&&(a(!0),m(Number(r.apiPort)||9170,String(r.apiKey)))},[n,m,r]);let y=(0,l.Z)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.ZP,{container:!0,direction:"column",spacing:2,alignItems:"stretch",sx:{marginBottom:y.spacing(8),padding:y.spacing(2)},children:e?(0,s.jsx)(Settings_Section,{name:"General",description:"General settings",children:(0,s.jsx)(s.Fragment,{children:Object.keys(e).map((t,n)=>(0,s.jsx)(Settings_Item,{keyIn:t,valueIn:e[t],handleChanged:x},n))})}):(0,s.jsx)(c.ZP,{container:!0,direction:"row",justifyContent:"center",sx:{margin:y.spacing(2,0,10)},children:(0,s.jsx)(d.Z,{})})})})},settings=function(){return(0,s.jsx)(r.Z,{title:"Settings",url:"https://system-bridge.timmo.dev",description:"Frontend for System Bridge",children:(0,s.jsx)(a.Z,{component:"article",maxWidth:"xl",children:(0,s.jsx)(components_Settings_Settings,{})})})}}},function(e){e.O(0,[702,662,920,67,8,699,443,767,826,774,888,179],function(){return e(e.s=4768)}),_N_E=e.O()}]);