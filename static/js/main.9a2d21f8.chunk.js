(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{56:function(n,e,t){n.exports=t(71)},61:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(21),c=t.n(a),i=(t(61),t(22)),u=t(7),l=function(n){var e=n.exact,t=n.component,r=n.path;return localStorage.getItem("access_token")?o.a.createElement(u.b,{exact:e||!1,path:r,component:t}):o.a.createElement(u.a,{to:"/"})},s=t(16),f=t.n(s),m=t(41),p=t(27),h=t(9),d=t(8);function b(){var n=Object(h.a)(["\n  display: inline-block;\n  width: 3px;\n  height: 100%;\n  background-color: ",";\n  margin-left: 5px;\n  animation: "," 1s infinite;\n"]);return b=function(){return n},n}function v(){var n=Object(h.a)(["\n  0% { background-color: "," }\n  49% { background-color: "," }\n  50% { background-color: "," }\n  99% { background-color: "," }\n  100% { background-color: "," }\n"]);return v=function(){return n},n}function g(){var n=Object(h.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return g=function(){return n},n}var x=d.c.div(g()),E=d.c.span(b(),(function(n){return n.theme.colors.secondary}),(function(n){var e=n.theme;return Object(d.d)(v(),e.colors.secondary,e.colors.secondary,e.colors.background,e.colors.background,e.colors.secondary)})),j=t(88),O=t(87),k=t(89);function y(){var n=Object(h.a)(["\n  font-size: ",";\n  color: ",";\n  margin: 20px;\n"]);return y=function(){return n},n}function w(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 1;\n  background-color: ",";\n  clip-path: circle(\n    ","\n  );\n  -webkit-clip-path: circle(\n    ","\n  );\n  transition: all 0.5s ease-in-out;\n"]);return w=function(){return n},n}function S(){var n=Object(h.a)(["\n  color: "," !important;\n  position: absolute !important;\n  top: 10px;\n  right: 10px;\n  z-index: 2;\n"]);return S=function(){return n},n}function z(){var n=Object(h.a)(["\n  font-size: ",";\n  color: ",";\n  margin: 0px 20px;\n"]);return z=function(){return n},n}function D(){var n=Object(h.a)(["\n  background-color: ",";\n  padding: 20px;\n  height: 10vh;\n  position: absolute;\n"]);return D=function(){return n},n}var F=Object(d.c)(O.a)(D(),(function(n){return n.theme.colors.background})),T=Object(d.c)(i.b)(z(),(function(n){return n.theme.fontSizes.text}),(function(n){var e=n.active,t=n.theme;return"true"===e?t.colors.secondary:t.colors.primary})),_=Object(d.c)(k.a)(S(),(function(n){return n.theme.colors.secondary})),P=d.c.div(w(),(function(n){return n.theme.colors.lightPrimary}),(function(n){return n.open?"200% at 90% -10%":"0 at 90% -10%"}),(function(n){return n.open?"200% at 90% -10%":"0 at 90% -10%"})),R=Object(d.c)(i.b)(y(),(function(n){return n.theme.fontSizes.text}),(function(n){var e=n.active,t=n.theme;return"true"===e?t.colors.secondary:t.colors.primary})),I=t(48),N=t.n(I),C=function(n){var e=n.options,t=Object(r.useState)(!1),a=Object(p.a)(t,2),c=a[0],i=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{onClick:function(){return i((function(n){return!n}))}},o.a.createElement(N.a,null)),o.a.createElement(P,{open:c},e.map((function(n){return o.a.createElement(R,{key:n.label,to:n.url,active:window.location.pathname.includes(n.url)?"true":"false"},n.label)}))))},L=function(n){var e=n.options;return o.a.createElement(F,{container:!0,direction:"row",justify:"flex-end"},e.map((function(n){return o.a.createElement(T,{key:n.label,to:n.url,active:window.location.pathname.includes(n.url)?"true":"false"},n.label)})))},A=[{url:"/portfolio",label:"Home"},{url:"/portfolio/about",label:"About"},{url:"/portfolio/projects",label:"Projects"},{url:"/portfolio/skills",label:"Skills"},{url:"/portfolio/contact",label:"Contact"}],B=function(){return Object(j.a)("(max-width: 475px)")?o.a.createElement(C,{options:A}):o.a.createElement(L,{options:A})};function W(){var n=Object(h.a)(["\n  margin: 10px 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  text-align: center;\n  @media screen and (max-width: 600px) {\n    font-size: ",";\n  }\n"]);return W=function(){return n},n}var G=d.c.p(W(),(function(n){return n.theme.fontFamilies.nunito}),(function(n){return n.theme.fontSizes.sectionTitle}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontSizes.title}));function H(){var n=Object(h.a)(["\n  margin: 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"]);return H=function(){return n},n}var J=d.c.p(H(),(function(n){return n.theme.fontFamilies.lato}),(function(n){return n.theme.fontSizes.subtitle}),(function(n){return n.theme.colors.text})),M=["Creative","Hard Worker","Frontend","React","React Native"],X=function(n){return new Promise((function(e){return setTimeout(e,n)}))},Y=function(){var n=Object(r.useState)(0),e=Object(p.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(""),i=Object(p.a)(c,2),u=i[0],l=i[1],s=Object(r.useState)(!0),h=Object(p.a)(s,2),d=h[0],b=h[1],v=function(){var n=Object(m.a)(f.a.mark((function n(e){var t,r,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:b(!0),t=f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X(150);case 2:l((function(n){return n+e[t]}));case 3:case"end":return n.stop()}}),n)})),r=0;case 3:if(!(r<e.length)){n.next=8;break}return n.delegateYield(t(r),"t0",5);case 5:r++,n.next=3;break;case 8:return b(!1),n.next=11,X(1500);case 11:b(!0),o=0;case 13:if(!(o<e.length)){n.next=20;break}return n.next=16,X(100);case 16:l((function(n){return n.slice(0,n.length-1)}));case 17:o++,n.next=13;break;case 20:return b(!1),n.next=23,X(1e3);case 23:a((function(n){return(n+1)%M.length}));case 24:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){v(M[t])}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),o.a.createElement(x,null,o.a.createElement(J,null,"If you're searching for a"),o.a.createElement(G,null,u,o.a.createElement(E,{typing:d},"\xa0")),o.a.createElement(J,null,"Developer. You came to the right place!")))};function U(){var n=Object(h.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return U=function(){return n},n}var V,$=d.c.div(U()),q=[{path:"/",component:Y},{path:"*",component:function(){return o.a.createElement($,null,o.a.createElement(G,null,"Page not Found!"),o.a.createElement(J,null,"Dammit!"),o.a.createElement(J,null,"I swear to God it worked on my machine."))},notExact:!0}],K=function(){return o.a.createElement(i.a,null,o.a.createElement(u.d,null,q.map((function(n){return n.private?o.a.createElement(l,{exact:!(null===n||void 0===n?void 0:n.notExact),component:n.component,path:"/portfolio"+n.path}):o.a.createElement(u.b,{exact:!(null===n||void 0===n?void 0:n.notExact),path:"/portfolio"+n.path,component:n.component,key:n.path})}))))},Q=t(50),Z=t(19),nn=t(51);!function(n){n.RESET="GLOBAL/RESET"}(V||(V={}));var en={user:{}},tn=Object(Z.c)({auth:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,e=arguments.length>1?arguments[1]:void 0;return e.type,n}}),rn=t(52),on=f.a.mark(an);function an(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),on)}var cn=f.a.mark(un);function un(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,[Object(rn.a)(an)];case 2:case"end":return n.stop()}}),cn)}var ln=Object(nn.a)(),sn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,fn=Object(Z.e)((function(n,e){return e.type===V.RESET?tn(void 0,e):tn(n,e)}),sn(Object(Z.a)(ln)));ln.run(un);var mn=fn;function pn(){var n=Object(h.a)(["\nbody {\n  margin: 0;\n  background-color: ",";\n  min-height: 100vh;\n  font-family: Nunito, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  #root {\n    height: 100%;\n    overflow: hidden;\n    box-sizing: border-box;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  *{\n    box-sizing: border-box;\n  }\n"]);return pn=function(){return n},n}var hn=Object(d.b)(pn(),(function(n){return n.theme.colors.background})),dn={colors:{background:"#24213E",text:"#D4D4D4",primary:"#5E548E",secondary:"#E4E4A8",lightPrimary:"#322F4D"},fontSizes:{sectionTitle:"4.2rem",title:"2rem",subtitle:"1.2rem",text:"1rem",small:"12px"},fontFamilies:{nunito:"Nunito",lato:"Lato"}},bn=function(){return o.a.createElement(Q.a,{store:mn},o.a.createElement(d.a,{theme:dn},o.a.createElement(hn,null),o.a.createElement(i.a,null,o.a.createElement(u.d,null,o.a.createElement(K,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(bn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.9a2d21f8.chunk.js.map