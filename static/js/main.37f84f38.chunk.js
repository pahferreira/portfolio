(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{59:function(n,e,t){n.exports=t(75)},64:function(n,e,t){},65:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(15),c=t.n(o),i=(t(64),t(65),t(18)),l=t(10),u=function(n){var e=n.exact,t=n.component,r=n.path;return localStorage.getItem("access_token")?a.a.createElement(l.b,{exact:e||!1,path:r,component:t}):a.a.createElement(l.a,{to:"/"})},f=t(17),s=t.n(f),m=t(42),p=t(23),d=t(6),h=t(4);function x(){var n=Object(d.a)(["\n  margin: 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"]);return x=function(){return n},n}function b(){var n=Object(d.a)(["\n  margin: 5px 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  text-align: center;\n  @media screen and (max-width: 600px) {\n    font-size: ",";\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(d.a)(["\n  display: inline-block;\n  width: 3px;\n  height: 100%;\n  background-color: ",";\n  margin-left: 5px;\n  animation: "," 1s infinite;\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n  0% { background-color: "," }\n  49% { background-color: "," }\n  50% { background-color: "," }\n  99% { background-color: "," }\n  100% { background-color: "," }\n"]);return v=function(){return n},n}function E(){var n=Object(d.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return E=function(){return n},n}var y=h.c.div(E()),j=h.c.span(g(),(function(n){return n.theme.colors.secondary}),(function(n){var e=n.theme;return Object(h.d)(v(),e.colors.secondary,e.colors.secondary,e.colors.background,e.colors.background,e.colors.secondary)})),O=h.c.p(b(),(function(n){return n.theme.fontFamilies.nunito}),(function(n){return n.theme.fontSizes.sectionTitle}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontSizes.title})),w=h.c.p(x(),(function(n){return n.theme.fontFamilies.lato}),(function(n){return n.theme.fontSizes.subtitle}),(function(n){return n.theme.colors.text})),k=t(91),S=t(90),z=t(92);function F(){var n=Object(d.a)(["\n  font-size: ",";\n  color: ",";\n  margin: 20px;\n"]);return F=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 1;\n  background-color: ",";\n  clip-path: circle(\n    ","\n  );\n  -webkit-clip-path: circle(\n    ","\n  );\n  transition: all 0.5s ease-in-out;\n"]);return T=function(){return n},n}function P(){var n=Object(d.a)(["\n  color: "," !important;\n  position: absolute !important;\n  top: 10px;\n  right: 10px;\n  z-index: 2;\n"]);return P=function(){return n},n}function D(){var n=Object(d.a)(["\n  font-size: ",";\n  color: ",";\n  margin: 0px 20px;\n"]);return D=function(){return n},n}function I(){var n=Object(d.a)(["\n  background-color: ",";\n  padding: 20px;\n  height: 10vh;\n  position: absolute;\n"]);return I=function(){return n},n}var R=Object(h.c)(S.a)(I(),(function(n){return n.theme.colors.background})),A=Object(h.c)(i.b)(D(),(function(n){return n.theme.fontSizes.text}),(function(n){var e=n.active,t=n.theme;return"true"===e?t.colors.secondary:t.colors.primary})),M=Object(h.c)(z.a)(P(),(function(n){return n.theme.colors.secondary})),N=h.c.div(T(),(function(n){return n.theme.colors.lightPrimary}),(function(n){return n.open?"200% at 90% -10%":"0 at 90% -10%"}),(function(n){return n.open?"200% at 90% -10%":"0 at 90% -10%"})),_=Object(h.c)(i.b)(F(),(function(n){return n.theme.fontSizes.text}),(function(n){var e=n.active,t=n.theme;return"true"===e?t.colors.secondary:t.colors.primary})),C=t(49),G=t.n(C),L=function(n){var e=n.options,t=Object(r.useState)(!1),o=Object(p.a)(t,2),c=o[0],i=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{onClick:function(){return i((function(n){return!n}))}},a.a.createElement(G.a,null)),a.a.createElement(N,{open:c},e.map((function(n){return a.a.createElement(_,{key:n.label,to:n.url,active:window.location.pathname===n.url?"true":"false"},n.label)}))))},U=function(n){var e=n.options;return a.a.createElement(R,{container:!0,direction:"row",justify:"flex-end"},e.map((function(n){return a.a.createElement(A,{key:n.label,to:n.url,active:window.location.pathname===n.url?"true":"false"},n.label)})))},B=[{url:"/portfolio",label:"Home"},{url:"/portfolio/about",label:"About"},{url:"/portfolio/projects",label:"Projects"},{url:"/portfolio/skills",label:"Skills"},{url:"/portfolio/contact",label:"Contact"}],J=function(){return Object(k.a)("(max-width: 475px)")?a.a.createElement(L,{options:B}):a.a.createElement(U,{options:B})},X=["Creative","Hard Worker","Frontend","React","React Native"],H=function(n){return new Promise((function(e){return setTimeout(e,n)}))},W=function(){var n=Object(r.useState)(0),e=Object(p.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(""),i=Object(p.a)(c,2),l=i[0],u=i[1],f=Object(r.useState)(!0),d=Object(p.a)(f,2),h=d[0],x=d[1],b=function(){var n=Object(m.a)(s.a.mark((function n(e){var t,r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:x(!0),t=s.a.mark((function n(t){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H(150);case 2:u((function(n){return n+e[t]}));case 3:case"end":return n.stop()}}),n)})),r=0;case 3:if(!(r<e.length)){n.next=8;break}return n.delegateYield(t(r),"t0",5);case 5:r++,n.next=3;break;case 8:return x(!1),n.next=11,H(1500);case 11:x(!0),a=0;case 13:if(!(a<e.length)){n.next=20;break}return n.next=16,H(100);case 16:u((function(n){return n.slice(0,n.length-1)}));case 17:a++,n.next=13;break;case 20:return x(!1),n.next=23,H(1e3);case 23:o((function(n){return(n+1)%X.length}));case 24:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){b(X[t])}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(J,null),a.a.createElement(y,null,a.a.createElement(w,null,"If you're searching for a"),a.a.createElement(O,null,l,a.a.createElement(j,{typing:h},"\xa0")),a.a.createElement(w,null,"Developer. You came to the right place!")))};function V(){var n=Object(d.a)(["\n  color: ",";\n  margin-top: 20px;\n  text-decoration: underline;\n"]);return V=function(){return n},n}function Y(){var n=Object(d.a)(["\n  margin: 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"]);return Y=function(){return n},n}function Q(){var n=Object(d.a)(["\n  margin: 5px 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  text-align: center;\n  @media screen and (max-width: 600px) {\n    font-size: ",";\n  }\n"]);return Q=function(){return n},n}function Z(){var n=Object(d.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return Z=function(){return n},n}var $=h.c.div(Z()),q=h.c.p(Q(),(function(n){return n.theme.fontFamilies.nunito}),(function(n){return n.theme.fontSizes.sectionTitle}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontSizes.title})),K=h.c.p(Y(),(function(n){return n.theme.fontFamilies.lato}),(function(n){return n.theme.fontSizes.subtitle}),(function(n){return n.theme.colors.text})),nn=Object(h.c)(i.b)(V(),(function(n){return n.theme.colors.secondary})),en=function(){return a.a.createElement($,null,a.a.createElement(q,null,"Page not Found!"),a.a.createElement(K,null,"Dammit!"),a.a.createElement(K,null,"I swear to God it worked on my machine."),a.a.createElement(nn,{to:"/portfolio"},"Back to homepage"))};function tn(){var n=Object(d.a)(["\n  width: 33%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 960px) {\n    width: 100%;\n    align-self: center;\n  }\n  @media screen and (max-width: 475px) {\n    width: 100%;\n    align-self: flex-start;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(d.a)(["\n  min-height: 70%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  @media screen and (max-width: 960px) {\n    flex-direction: column;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(d.a)(["\n  min-height: 80vh;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  @media screen and (max-width: 960px) {\n    min-height: 90vh;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(d.a)(["\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  @media screen and (max-width: 960px) {\n    padding: 15% 0 5% 0;\n  }\n"]);return on=function(){return n},n}var cn=h.c.div(on()),ln=h.c.div(an()),un=h.c.div(rn()),fn=h.c.div(tn());function sn(){var n=Object(d.a)(["\n  margin: 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n"]);return sn=function(){return n},n}var mn=h.c.p(sn(),(function(n){return n.theme.fontFamilies.nunito}),(function(n){return n.theme.fontSizes.sectionTitle}),(function(n){return n.theme.colors.lightPrimary}));function pn(){var n=Object(d.a)(["\n  margin: 20px 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  text-align: center;\n  @media screen and (max-width: 475px) {\n    text-align: left;\n  }\n"]);return pn=function(){return n},n}var dn=h.c.p(pn(),(function(n){return n.theme.fontFamilies.nunito}),(function(n){return n.theme.fontSizes.title}),(function(n){return n.theme.colors.secondary}));function hn(){var n=Object(d.a)(["\n  margin: 15px 0;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  text-align: center;\n  @media screen and (max-width: 475px) {\n    text-align: left;\n  }\n"]);return hn=function(){return n},n}var xn=h.c.p(hn(),(function(n){return n.theme.fontFamilies.nunito}),(function(n){return n.theme.fontSizes.subtitle}),(function(n){return n.theme.colors.secondary}));function bn(){var n=Object(d.a)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-align: center;\n  margin: 2px 0;\n  @media screen and (max-width: 475px) {\n    text-align: left;\n  }\n"]);return bn=function(){return n},n}var gn=h.c.p(bn(),(function(n){return n.theme.fontFamilies.lato}),(function(n){return n.theme.fontSizes.text}),(function(n){return n.theme.colors.text}));function vn(){var n=Object(d.a)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-align: center;\n  margin: 0;\n  @media screen and (max-width: 475px) {\n    text-align: left;\n  }\n"]);return vn=function(){return n},n}var En,yn=h.c.p(vn(),(function(n){return n.theme.fontFamilies.lato}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.colors.text})),jn=["Project Management Tools","Figma","Adobe XD","Pen & Papper"],On=function(){return a.a.createElement(fn,null,a.a.createElement(dn,null,"Idea & Planning"),a.a.createElement(gn,null,"I value conceiving the idea and make part of the plan creation to achieve it in the most effective way."),a.a.createElement(xn,null,"Principles"),a.a.createElement(gn,null,"UI/UX, Responsive Design, User friendly, Agile Development, SCRUM."),a.a.createElement(xn,null,"Tools"),jn.map((function(n,e){return a.a.createElement(gn,{key:e},n)})),a.a.createElement(yn,null,"(Always with it for insights)"))},wn=["VS Code","Material UI","Ant Design","Github","Github Actions"],kn=function(){return a.a.createElement(fn,null,a.a.createElement(dn,null,"Programming"),a.a.createElement(gn,null,"I really like to code things that make people's life easier and happier. Give life to anyone's idea."),a.a.createElement(xn,null,"Languages"),a.a.createElement(gn,null,"JavaScript, TypeScript, React, React Native, HTML & CSS, NodeJS, ExpressJS, Strapi, MongoDB."),a.a.createElement(xn,null,"Tools"),wn.map((function(n,e){return a.a.createElement(gn,{key:e},n)})))},Sn=["Slack","Zoom","Google Meets","Spotify"],zn=function(){return a.a.createElement(fn,null,a.a.createElement(dn,null,"Personal Skills"),a.a.createElement(gn,null,"My friends says I'm can jump easily between fun and work, making any activity painless and enjoyable."),a.a.createElement(xn,null,"Qualities"),a.a.createElement(gn,null,"Patient, creative, teamwork, funny, motivated and communicative"),a.a.createElement(xn,null,"Tools"),Sn.map((function(n,e){return a.a.createElement(gn,{key:e},n)})),a.a.createElement(yn,null,"(A good song to hype!)"))},Fn=t(93),Tn=[{path:"/",component:W},{path:"/skills",component:function(){var n=Object(r.useState)(!1),e=Object(p.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(0);return Object(r.useEffect)((function(){return c.current=setTimeout((function(){o(!0)}),1e3),function(){}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(J,null),a.a.createElement(cn,null,a.a.createElement(ln,null,a.a.createElement(mn,null,"Skills"),a.a.createElement(Fn.a,{in:t,classNames:"fade",timeout:500,unmountOnExit:!0},a.a.createElement(un,null,a.a.createElement(On,null),a.a.createElement(kn,null),a.a.createElement(zn,null))))))}},{path:"*",component:en,notExact:!0}],Pn=function(){return a.a.createElement(i.a,null,a.a.createElement(l.d,null,Tn.map((function(n){return n.private?a.a.createElement(u,{exact:!(null===n||void 0===n?void 0:n.notExact),component:n.component,path:"/portfolio"+n.path}):a.a.createElement(l.b,{exact:!(null===n||void 0===n?void 0:n.notExact),path:"/portfolio"+n.path,component:n.component,key:n.path})}))))},Dn=t(51),In=t(21),Rn=t(52);!function(n){n.RESET="GLOBAL/RESET"}(En||(En={}));var An={user:{}},Mn=Object(In.c)({auth:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:An,e=arguments.length>1?arguments[1]:void 0;return e.type,n}}),Nn=t(53),_n=s.a.mark(Cn);function Cn(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),_n)}var Gn=s.a.mark(Ln);function Ln(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,[Object(Nn.a)(Cn)];case 2:case"end":return n.stop()}}),Gn)}var Un=Object(Rn.a)(),Bn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||In.d,Jn=Object(In.e)((function(n,e){return e.type===En.RESET?Mn(void 0,e):Mn(n,e)}),Bn(Object(In.a)(Un)));Un.run(Ln);var Xn=Jn;function Hn(){var n=Object(d.a)(["\nbody {\n  margin: 0;\n  background-color: ",";\n  min-height: 100vh;\n  font-family: Nunito, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  #root {\n    height: 100%;\n    overflow: hidden;\n    box-sizing: border-box;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  *{\n    box-sizing: border-box;\n  }\n"]);return Hn=function(){return n},n}var Wn=Object(h.b)(Hn(),(function(n){return n.theme.colors.background})),Vn={colors:{background:"#24213E",text:"#D4D4D4",primary:"#5E548E",secondary:"#E4E4A8",lightPrimary:"#322F4D"},fontSizes:{sectionTitle:"4.2rem",title:"2rem",subtitle:"1.2rem",text:"1rem",small:"12px"},fontFamilies:{nunito:"Nunito Sans",lato:"Lato"}},Yn=function(){return a.a.createElement(Dn.a,{store:Xn},a.a.createElement(h.a,{theme:Vn},a.a.createElement(Wn,null),a.a.createElement(i.a,null,a.a.createElement(l.d,null,a.a.createElement(Pn,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Yn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.37f84f38.chunk.js.map