_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(r.AmpStateContext))};var a,i=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,i=void 0!==a&&a,r=e.hasQuery;return n||i&&(void 0!==r&&r)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=a?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},o=n("lwAK"),l=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(i){var r=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?r=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?r=!1:t.add(i.type);break;case"meta":for(var l=0,c=u.length;l<c;l++){var s=u[l];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?r=!1:n.add(s);else{var p=i.props[s],d=a[s]||new Set;d.has(p)?r=!1:(d.add(p),a[s]=d)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,i.useContext)(o.AmpStateContext),a=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(r.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var f=h;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),i=n("EbDI"),r=n("ZhPi"),o=n("Bnag");e.exports=function(e){return a(e)||i(e)||r(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var a=n("q1tI"),i=n.n(a),r=n("8Kt/"),o=n.n(r),l=n("vOnD"),c=n("FWKw"),s=i.a.createElement,p=l.c.svg.withConfig({displayName:"icon__Svg",componentId:"wiwual-0"})(["width:24px;height:24px;opacity:0;transition:opacity 0.2s linear;&.loaded{opacity:1;}"]);function d(e){var t=e.className,n=e.src,i=Object(a.useState)(!1),r=i[0],o=i[1];return Object(a.useEffect)((function(){o(!0)}),[]),s(p,{className:"icon".concat(r?" loaded":"").concat(t?" ".concat(t):"")},s("use",{href:n}))}d.defaultProps={className:"",src:void 0};var u=d,m=n("T4Ei"),h="about",f="exp",g=i.a.createElement,b=l.c.nav.withConfig({displayName:"top-nav__Nav",componentId:"sc-920a16-0"})([""," position:sticky;top:0;margin:32px auto 0;padding:12px 0;&::after{content:'';width:100%;height:130px;background:linear-gradient( 180deg,var(",") 50%,hsla(0,0%,100%,0) );position:absolute;z-index:0;top:0;left:0;}.wrapper{display:flex;align-items:center;height:40px;position:relative;z-index:1;}.logo{display:flex;align-items:center;flex-grow:1;color:var(",");.icon{margin-right:4px;animation-name:spin;animation-duration:2.5s;animation-iteration-count:infinite;animation-timing-function:linear;@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}}}.links,.toggler{color:var(",");}.toggler{display:flex;align-items:center;margin-left:20px;text-align:right;.icon{margin-right:4px;}}.btn{background-color:transparent;border:0;display:inline-flex;align-items:center;color:var(",");cursor:pointer;padding:8px;border-radius:8px;transition:color 0.2s ease-in-out;text-decoration:none;&:hover{color:var(",");}@media ","{&:hover{color:inherit;}&:active{color:var(",");}}}@media ","{margin-top:0;.wrapper{padding:0 16px;}.links{margin-right:0;}.toggler{margin-left:0;flex-grow:1;justify-content:flex-end;.icon{margin-right:0;}}.nav-label{display:none;}}"],c.b,c.a.neutral,c.a.secondary,c.a.accent,c.a.accent,c.a.accentEmp,c.d.belowTablet,c.a.accentEmp,c.d.belowTablet);function v(e){var t,n;(m.a.getState().toggleIsDarkMode(),null===e||void 0===e?void 0:e.target)&&(e.target.blur(),null===(t=e.target.parentElement)||void 0===t||t.blur(),null===(n=e.target.parentElement.parentElement)||void 0===n||n.blur())}var y=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(m.a)((function(e){return e.isDarkMode}));return Object(a.useEffect)((function(){n(i)}),[i]),g(b,null,g("ul",{className:"wrapper"},g("li",{className:"".concat(c.f.h3," logo")},g(u,{src:c.c.cog}),g("span",{className:"nav-label"},"Gear")),g("li",{className:"".concat(c.f.subtitle2," links")},g("a",{className:"btn",href:"#".concat(h)},"ABOUT"),"\xa0/\xa0",g("a",{className:"btn",href:"#".concat(f)},"EXPERIENCE")),g("li",{className:"toggler"},g("button",{className:"btn",onClick:v,type:"button"},g(u,{src:t?c.c.moon:c.c.light}),g("span",{className:"".concat(c.f.subtitle2," nav-label")},t?"DARK":"LIGHT")))))},w=n("xGmi"),x={title:"Gear - Chalermkried Sudjanakobkul",desc:"A Front End Engineer who likes, create, and optimize websites, problem-solving, helping people, and appreciate arts.",image:"https://chalermkried.github.io/assets/cover.jpg",url:"https://chalermkried.github.io"},k={title:"Chalermkried Sudjanakobkul",subtitle:"Front End Engineer",desc:"Hi, I'm Gear!\n\nI like to create and optimize websites, make them fast, easy to use, minimal efforts needed, an enjoyable experience for the users. I care deeply aboutthe UI and UX, make use of organic traffics with SEO, and last but not least, accessibility. With all those preferred results, I alwayslook for the best tools to help in the development, new tech stacks, and alternatives.\n  \nI also like to help people and solve problems, those challenges are sometimes enjoyable!\n  \nInterests: music, stories, football, philosophy, and awesome people!",github:"https://github.com/chalermkried/",linkedin:"https://www.linkedin.com/in/gear-chalermkried/"},S={title:"Experience",data:[{desc:"With the new role, I carry over most of the tasks from the previous role. But now as a Senior, I have the chance to help and teach other members of the team more. Also more responsibility to make decisions in the meetings with other teams.\n\nAfter a few months, due to the circumstances, I got to become the web team lead, internally. With this, it also meant my responsibility now covers more on the higher levels tasks such as team management, web monitoring, infrastructure monitoring, release management, documentations, and managing the team of outsource-developers.",icon:w.a.terminal,skills:["React Hook","Server Side Rendering","SEO","Github","Github Action","Nginx","Segment","Sentry","Datadog","Team Management","AWS"],subtitle:"Pomelofashion",title:"Senior Front End Engineer",titleCaption:"2020"},{desc:"Working as part of the Front End web team, to maintain, implement new features, and support campaigns with the newly released Pomelo web (at that time).\n\nThe Pomelo web is the main product to focus on, I closely worked with the UI/UX team to implement and improve the website following the mockups with prioritization from the Product team. Also correlated with the QA team to resolve issues and bugs. There are also other web projects such as Pomelo Screens and Internal Dashboards that I became the lead developer at the latter part of this time.\n      \nDuring this time, I also had the chance to work in the LEAD program, an internal employee development program. With the program, I got to learn how to work as an assistant product manager for Pomelo Partner project.",icon:w.a.terminal,skills:["HTML","SCSS","JavaScript","Git","Bitbucket","Bitbucket Pipeline","JIRA","Scrum","Agile","REST","React","Next.js","Redux","Product Management"],subtitle:"Pomelofashion",title:"Front End Engineer",titleCaption:"2018 - 2019"},{desc:"Worked as a member of the Front End web development team, in a multicultural software house company with a full team of product/software development consists of Designers (UI/UX), Products (PM/PO), Testers (QA), and Backend.\n\nHad the chance to work in many projects, the first project was the project that provided a good learning experience about the latest web technology and how does software development really like. One of the projects was a large one with a tight deadline going into MVP development phase, and we also provided an ongoing support after it's launched.",icon:w.a.terminal,skills:["HTML","SCSS","TypeScript","Git","Bitbucket","JIRA","Scrum","Agile","REST","Angular","RxJS","NgRx"],subtitle:"7 Peaks Software",title:"Junior Front End Developer",titleCaption:"2017 - 2018"},{desc:"Studied in Computer Science, learned about Data Structure, Algorithm, Mathematics, Statistics, and various topics related to the fundamentals of programming and problem-solving.\n\nYielded many full-stack web projects, and experienced in other programming languages and product development, such as C, C#, Swift, Visual Basic, mobile development, game development with Unity, and product development with system analysis.",icon:w.a.library,skills:["HTML","CSS","JavaScript","PHP","MySQL","Oracle","Full Stack"],subtitle:"Srinakharinwirot University",title:"Student",titleCaption:"2014 - 2017"}]},_=i.a.createElement,E=l.c.section.withConfig({displayName:"about__Section",componentId:"kb75i-0"})(["scroll-margin-top:80px;margin-top:60px;.","{color:var(",");}.desc{margin-top:48px;white-space:pre-line;text-align:justify;}.desc{margin-bottom:24px;}.link{display:inline-flex;align-items:center;color:var(",");text-decoration:none;transition:color 0.2s ease-in-out;&.is-last{margin-left:16px;}&:hover{color:var(",");}@media ","{&:hover{color:inherit;}&:active{color:var(",");}}.icon{width:20px;height:20px;margin-right:4px;}}@media ","{margin-top:24px;padding:0 20px;text-align:center;.desc{text-align:center;}}"],c.f.h2,c.a.secondary,c.a.accent,c.a.accentEmp,c.d.belowTablet,c.a.accentEmp,c.d.belowTablet);var I=function(){return _(E,{id:h},_("h1",{className:c.f.h1},k.title),_("h2",{className:c.f.h2},k.subtitle),_("p",{className:"".concat(c.f.body1," desc")},k.desc),_("a",{className:"".concat(c.f.subtitle2," link"),href:k.linkedin,target:"_blank",rel:"noopener"},_(u,{src:c.c.linkedin})," LinkedIn"),_("a",{className:"".concat(c.f.subtitle2," link is-last"),href:k.github,target:"_blank",rel:"noopener"},_(u,{src:c.c.github})," Github"))},N=i.a.createElement,C=l.c.div.withConfig({displayName:"chip__Div",componentId:"sc-6cmo33-0"})(["background-color:var(",");color:var(",");border-radius:48px;padding:4px 8px;"],c.a.secondary,c.a.neutral);function M(e){var t=e.children,n=e.className;return N(C,{className:"".concat(c.f.caption2).concat(n?" ".concat(n):"")},t)}M.defaultProps={className:""};var P=M,j=i.a.createElement,A=l.c.div.withConfig({displayName:"card__WrapperDiv",componentId:"sc-1lotfk-0"})(["margin:16px 0 32px;padding-right:64px;.subtitle{display:block;color:var(",");margin-top:4px;}.desc{margin:12px 0;text-align:justify;white-space:pre-line;}.skill-wrapper{display:flex;flex-wrap:wrap;gap:4px 8px;}.subtitle,.desc,.skill-wrapper{padding-left:","px;@media ","{padding-left:0;}}@media ","{margin:16px 8px 40px;padding-right:0;.subtitle{text-align:center;margin-top:8px;}}"],c.a.secondary,52,c.d.belowTablet,c.d.belowTablet),O=l.c.div.withConfig({displayName:"card__TitleDiv",componentId:"sc-1lotfk-1"})(["display:flex;flex-wrap:wrap;align-items:center;.icon{flex-shrink:0;margin-right:","px;width:","px;height:","px;}.title{display:inline-block;}.title-caption{color:var(",");margin-left:8px;}@media ","{justify-content:center;.icon{flex-basis:100%;margin-right:0;width:40px;height:40px;}.title-caption{flex-basis:100%;text-align:center;margin-left:0;}}"],20,32,32,c.a.lighten,c.d.belowTablet);function T(e){var t=e.desc,n=e.icon,i=e.skills,r=e.subtitle,o=e.title,l=e.titleCaption,s=Object(a.useMemo)((function(){return i.map((function(e){return j(P,{key:e},e)}))}),[i]);return j(A,null,j(O,null,j(u,{src:n}),j("h3",{className:"".concat(c.f.h3," title")},o),j("span",{className:"".concat(c.f.caption1," title-caption")},"(",l,")")),j("span",{className:"".concat(c.f.subtitle1," subtitle")},r),j("p",{className:"".concat(c.f.body2," desc")},t),j("div",{className:"skill-wrapper"},s))}T.defaultProps={desc:"",icon:"",skills:[],subtitle:"",title:"",titleCaption:""};var D=T,R=i.a.createElement,H=l.c.section.withConfig({displayName:"exp__Section",componentId:"sc-190kopu-0"})(["scroll-margin-top:96px;margin-top:72px;> .title{margin-bottom:36px;}@media ","{padding:0 16px;> .title{text-align:center;}}"],c.d.belowTablet);var W=function(){var e=Object(a.useMemo)((function(){return S.data.map((function(e){return R(D,{desc:e.desc,key:"".concat(e.title).concat(e.titleCaption),icon:e.icon,skills:e.skills,subtitle:e.subtitle,title:e.title,titleCaption:e.titleCaption})}))}),[]);return R(H,{id:f},R("span",{className:"".concat(c.f.h2," title")},S.title),e)},F=i.a.createElement,G=l.c.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1v0ky77-0"})(["color:var(",");margin:96px 16px 32px;text-align:center;"],c.a.lighten);var U=function(){return F(G,{className:c.f.body3},"Statically generated by Next.js and hosted on Github Page.",F("br",null),"With help from styled-components and Heroicons.")},q=i.a.createElement,J=l.c.main.withConfig({displayName:"pages__Main",componentId:"mcg2on-0"})(["",""],c.b);function B(){return q(i.a.Fragment,null,q(o.a,null,q("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),q("title",null,x.title),q("meta",{name:"title",content:x.title}),q("meta",{name:"description",content:x.desc}),q("meta",{property:"og:type",content:"website"}),q("meta",{property:"og:url",content:x.url}),q("meta",{property:"og:title",content:x.title}),q("meta",{property:"og:description",content:x.desc}),q("meta",{property:"og:image",content:x.image}),q("meta",{property:"twitter:card",content:"summary_large_image"}),q("meta",{property:"twitter:url",content:x.url}),q("meta",{property:"twitter:title",content:x.title}),q("meta",{property:"twitter:description",content:x.desc}),q("meta",{property:"twitter:image",content:x.image}),q("link",{rel:"canonical",href:x.url})),q(y,null),q(J,{role:"main"},q(I,null),q(W,null)),q(U,null))}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),i=n("lwsE"),r=n("W8MJ"),o=n("PJYZ"),l=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=!1,m=function(e){l(n,e);var t=p(n);function n(e){var r;return i(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,u&&r._hasHeadManager&&(r.props.headManager.mountedInstances.add(o(r)),r.emitChange()),r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=m},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var i=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=i},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);