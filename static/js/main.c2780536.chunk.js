(this.webpackJsonptarea_3_integracion=this.webpackJsonptarea_3_integracion||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(21),i=n.n(a),r=(n(49),n(3)),o=(n(50),n(18)),j=n(27),l=n(2),d=n(44),b=n.n(d),h=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(r.a)(a,2),d=i[0],h=i[1],O=Object(c.useRef)(),u=Object(c.useState)({no_fly:[2.2,4.3]}),p=Object(r.a)(u,2),m=p[0],g=(p[1],Object(c.useReducer)((function(e,t){return Object.keys(e).includes(t.payload.code)?Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},t.payload.code,[].concat(Object(j.a)(e[t.payload.code]),[t.payload.position]))):Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},t.payload.code,[t.payload.position]))}),{no_fly:[1.1,2.2]})),x=Object(r.a)(g,2),f=x[0],v=x[1];Object(c.useEffect)((function(){return O.current=b()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),O.current.emit("FLIGHTS"),O.current.on("CHAT",(function(e){s((function(t){return[e].concat(Object(j.a)(t))}))})),O.current.on("FLIGHTS",(function(e){h(e),console.log("FLIGHTS!!::\n",e)})),O.current.on("POSITION",(function(e){e.code,e.position;v({type:"FlightPosition",payload:e})})),function(){O.current.disconnect()}}),[]);return{flights:d,positions:m,state:f,messages:n,sendMessage:function(e,t){O.current.emit("CHAT",{name:t,message:e})}}},O=n(85),u=n(89),p=n(86),m=n(87),g=n(88),x=n(90),f=n(0);var v=function(e){var t=e.flight,n=t.code,c=t.airline,s=t.origin,a=t.destination,i=t.plane,r=t.seats,o=t.passengers;return Object(f.jsxs)("div",{className:"flightCard",children:[Object(f.jsxs)("h3",{children:["Flight ",n]}),Object(f.jsx)("p",{children:c}),Object(f.jsxs)("p",{children:["Origin: (",s[0],"; ",s[1],")"]}),Object(f.jsxs)("p",{children:["Destination: (",a[0],"; ",a[1],")"]}),Object(f.jsxs)("p",{children:["Plane: ",i]}),Object(f.jsxs)("p",{children:["Seats: ",r]}),Object(f.jsxs)("p",{children:["Passengers: ",o.map((function(e){return Object(f.jsxs)(f.Fragment,{children:[e.name," | "]})}))]})]})};var N=function(e){var t=e.messages,n=e.nickname;return Object(f.jsx)("div",{className:"chatListDiv",children:Object(f.jsx)("ul",{className:"messages-list",children:t.map((function(e,t){var c=new Date(e.date);c.getDate(),c.getMonth(),c.getFullYear();return Object(f.jsxs)("li",{className:e.name==n?"mine":"not_mine",children:[Object(f.jsxs)("p",{className:"messageName",children:["NAME: ",e.name,Object(f.jsx)("br",{}),"DATE: ",c[Symbol.toPrimitive]("string").split("GMT")[0],Object(f.jsx)("br",{}),"MESSAGE: ",e.message,"."]}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]},t)}))})})};var S=function(){var e=h(),t=e.flights,n=(e.positions,e.state),s=e.messages,a=e.sendMessage,i=Object(c.useState)(""),o=Object(r.a)(i,2),j=o[0],l=o[1],d=Object(c.useState)(""),b=Object(r.a)(d,2),S=b[0],y=b[1],F=Object(c.useState)(""),k=Object(r.a)(F,2),D=k[0],C=k[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)("h1",{children:"\u2708\u2708\ud83d\udc68\u200d\u2708\ufe0fLa app de los Vuelos.\ud83d\udc68\u200d\u2708\ufe0f\u2708\u2708"})}),Object(f.jsxs)("div",{className:"mainDiv",children:[Object(f.jsxs)("div",{className:"leftDiv",children:[Object(f.jsx)("div",{id:"mapDiv",children:Object(f.jsxs)(O.a,{center:[51.505,-.09],zoom:1,scrollWheelZoom:!1,children:[Object(f.jsx)(u.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e,t){if(n[e.code])return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.a,{position:n[e.code][n[e.code].length-1],children:Object(f.jsx)(m.a,{children:e.code})},t),Object(f.jsx)(g.a,{pathOptions:{color:"white"},positions:[e.origin,e.destination],children:Object(f.jsxs)(m.a,{children:[e.code," planned path"]})}),Object(f.jsx)(g.a,{pathOptions:{color:"green"},positions:n[e.code],children:Object(f.jsxs)(m.a,{children:[e.code," real path"]})}),Object(f.jsx)(x.a,{center:e.origin,pathOptions:{color:"blue"},radius:7*(1+t/4),children:Object(f.jsxs)(m.a,{permanent:!0,children:[e.code," Origin"]})}),Object(f.jsx)(x.a,{center:e.destination,pathOptions:{color:"red"},radius:7*(1+t/4),children:Object(f.jsxs)(m.a,{permanent:!0,children:[e.code," Destination"]})})]})}))]})}),Object(f.jsx)("div",{id:"infoDiv",children:t.map((function(e,t){return Object(f.jsx)(v,{flight:e})}))})]}),Object(f.jsxs)("div",{className:"chatDiv",children:[Object(f.jsx)("h3",{id:"chatTitle",children:"Chat"}),Object(f.jsxs)("p",{children:["Nickname: ",D]}),Object(f.jsx)("textarea",{value:S,onChange:function(e){y(e.target.value)},placeholder:"Set nickname...",className:"nickname-input-field"}),Object(f.jsx)("button",{onClick:function(){C(S)},className:"new-nickname-button",children:"Set Nickname"}),Object(f.jsx)(N,{messages:s,nickname:D}),Object(f.jsx)("textarea",{value:j,onChange:function(e){l(e.target.value)},placeholder:"Write message...",className:"new-message-input-field"}),Object(f.jsx)("button",{onClick:function(){a(j,D),l("")},className:"send-message-button",children:"Send"})]})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("head",{children:Object(f.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossorigin:""})}),Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(S,{})})]}),document.getElementById("root")),y()}},[[83,1,2]]]);
//# sourceMappingURL=main.c2780536.chunk.js.map