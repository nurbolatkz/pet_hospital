/*! For license information please see 6.173058e6.chunk.js.LICENSE.txt */
(this.webpackJsonppet_hospital=this.webpackJsonppet_hospital||[]).push([[6],{56:function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return f})),o.d(e,"shadow",(function(){return c}));var n=o(4),a=o(11);const r=t=>document.querySelector("".concat(t,".ion-cloned-element")),c=t=>t.shadowRoot||t,l=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},s=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const a of n){const t=a.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=a.querySelector("ion-back-button"),r=a.classList.contains("buttons-collapse"),c="start"===a.slot||""===a.slot;if(null!==n&&c&&(r&&o&&e||!r))return n}return null},i=(t,e,o,a,l,s,i,d,f)=>{var y,u;const p=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),b=e?"right":"left",S=e?"left":"right",g=e?"right":"left",h=(null===(y=s.textContent)||void 0===y?void 0:y.trim())===(null===(u=d.textContent)||void 0===u?void 0:u.trim()),q=f.width/i.width,T=(f.height-m)/i.height,x=h?"scale(".concat(q,", ").concat(T,")"):"scale(".concat(T,")"),X=c(a).querySelector("ion-icon").getBoundingClientRect(),v="".concat(e?X.width/2-(X.right-l.right):l.left-X.width/2,"px"),E=e?"-".concat(window.innerWidth-l.right,"px"):"".concat(l.left,"px"),A="".concat(f.top,"px"),O="".concat(l.top,"px"),j=[{offset:0,transform:"translate3d(".concat(v,", ").concat(A,", 0)")},{offset:1,transform:"translate3d(".concat(E,", ").concat(O,", 0)")}],C=[{offset:0,transform:"translate3d(".concat(E,", ").concat(O,", 0)")},{offset:1,transform:"translate3d(".concat(v,", ").concat(A,", 0)")}],w=o?C:j,k=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:1,opacity:0,transform:x}]:[{offset:0,opacity:0,transform:x},{offset:1,opacity:1,transform:"scale(1)"}],B=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],P=Object(n.a)(),R=Object(n.a)(),L=Object(n.a)(),W=r("ion-back-button"),N=c(W).querySelector(".button-text"),z=c(W).querySelector("ion-icon");W.text=a.text,W.mode=a.mode,W.icon=a.icon,W.color=a.color,W.disabled=a.disabled,W.style.setProperty("display","block"),W.style.setProperty("position","fixed"),R.addElement(z),P.addElement(N),L.addElement(W),L.beforeStyles({position:"absolute",top:"0px",[g]:"0px"}).keyframes(w),P.beforeStyles({"transform-origin":"".concat(b," top")}).beforeAddWrite(()=>{a.style.setProperty("display","none"),W.style.setProperty(b,p)}).afterAddWrite(()=>{a.style.setProperty("display",""),W.style.setProperty("display","none"),W.style.removeProperty(b)}).keyframes(k),R.beforeStyles({"transform-origin":"".concat(S," center")}).keyframes(B),t.addAnimation([P,R,L])},d=(t,e,o,a,c,l,s,i)=>{var d,f;const y=e?"right":"left",u=e?"calc(100% - ".concat(c.right,"px)"):"".concat(c.left,"px"),p="".concat(c.top,"px"),b=e?"-".concat(window.innerWidth-i.right-8,"px"):"".concat(i.x-8,"px"),S="".concat(i.y-2,"px"),g=(null===(d=s.textContent)||void 0===d?void 0:d.trim())===(null===(f=a.textContent)||void 0===f?void 0:f.trim()),h=i.width/l.width,q=i.height/(l.height-m),T=g?"scale(".concat(h,", ").concat(q,")"):"scale(".concat(q,")"),x=[{offset:0,opacity:0,transform:"translate3d(".concat(b,", ").concat(S,", 0) ").concat(T)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat("0px",", ").concat(p,", 0) ").concat("scale(1)")}],X=[{offset:0,opacity:.99,transform:"translate3d(".concat("0px",", ").concat(p,", 0) ").concat("scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(b,", ").concat(S,", 0) ").concat(T)}],v=o?x:X,E=r("ion-title"),A=Object(n.a)();E.innerText=a.innerText,E.size=a.size,E.color=a.color,A.addElement(E),A.beforeStyles({"transform-origin":"".concat(y," top"),height:"".concat(c.height,"px"),display:"",position:"relative",[y]:u}).beforeAddWrite(()=>{a.style.setProperty("opacity","0")}).afterAddWrite(()=>{a.style.setProperty("opacity",""),E.style.setProperty("display","none")}).keyframes(v),t.addAnimation(A)},f=(t,e)=>{var o;try{const r="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",u=.8,p="rtl"===t.ownerDocument.dir,b=p?"-99.5%":"99.5%",S=p?"33%":"-33%",g=e.enteringEl,h=e.leavingEl,q="back"===e.direction,T=g.querySelector(":scope > ion-content"),x=g.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),X=g.querySelectorAll(":scope > ion-header > ion-toolbar"),v=Object(n.a)(),E=Object(n.a)();if(v.addElement(g).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||r).fill("both").beforeRemoveClass("ion-page-invisible"),h&&null!==t&&void 0!==t){const e=Object(n.a)();e.addElement(t),v.addAnimation(e)}if(T||0!==X.length||0!==x.length?(E.addElement(T),E.addElement(x)):E.addElement(g.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(E),q?E.beforeClearStyles([f]).fromTo("transform","translateX(".concat(S,")"),"translateX(".concat(y,")")).fromTo(f,u,1):E.beforeClearStyles([f]).fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")),T){const t=c(T).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),a=Object(n.a)(),r=Object(n.a)(),c=Object(n.a)();a.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),r.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),c.addElement(o).beforeClearStyles([f]).fromTo(f,.03,.7),a.addAnimation([r,c]),E.addAnimation([a])}}const A=g.querySelector("ion-header.header-collapse-condense"),{forward:O,backward:j}=((t,e,o,n,a)=>{const r=s(n,o),f=l(a),m=l(n),y=s(a,o),u=null!==r&&null!==f&&!o,p=null!==m&&null!==y&&o;if(u){const n=f.getBoundingClientRect(),a=r.getBoundingClientRect(),l=c(r).querySelector(".button-text"),s=l.getBoundingClientRect(),m=c(f).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,f,n,m,l,s),i(t,e,o,r,a,l,s,f,m)}else if(p){const n=m.getBoundingClientRect(),a=y.getBoundingClientRect(),r=c(y).querySelector(".button-text"),l=r.getBoundingClientRect(),s=c(m).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,m,n,s,r,l),i(t,e,o,y,a,r,l,m,s)}return{forward:u,backward:p}})(v,p,q,g,h);if(X.forEach(t=>{const e=Object(n.a)();e.addElement(t),v.addAnimation(e);const o=Object(n.a)();o.addElement(t.querySelector("ion-title"));const a=Object(n.a)(),r=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),l=t.closest("ion-header"),s=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive");let i;i=q?r.filter(t=>{const e=t.classList.contains("buttons-collapse");return e&&!s||!e}):r.filter(t=>!t.classList.contains("buttons-collapse")),a.addElement(i);const d=Object(n.a)();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=Object(n.a)();m.addElement(c(t).querySelector(".toolbar-background"));const u=Object(n.a)(),g=t.querySelector("ion-back-button");if(g&&u.addElement(g),e.addAnimation([o,a,d,m,u]),a.fromTo(f,.01,1),d.fromTo(f,.01,1),q)s||o.fromTo("transform","translateX(".concat(S,")"),"translateX(".concat(y,")")).fromTo(f,.01,1),d.fromTo("transform","translateX(".concat(S,")"),"translateX(".concat(y,")")),u.fromTo(f,.01,1);else{A||o.fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")).fromTo(f,.01,1),d.fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")),m.beforeClearStyles([f,"transform"]);if((null===l||void 0===l?void 0:l.translucent)?m.fromTo("transform",p?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),O||u.fromTo(f,.01,1),g&&!O){const t=Object(n.a)();t.addElement(c(g).querySelector(".button-text")).fromTo("transform",p?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}}),h){const t=Object(n.a)(),e=h.querySelector(":scope > ion-content"),o=h.querySelectorAll(":scope > ion-header > ion-toolbar"),r=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==r.length?(t.addElement(e),t.addElement(r)):t.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(t),q){t.beforeClearStyles([f]).fromTo("transform","translateX(".concat(y,")"),p?"translateX(-100%)":"translateX(100%)");const e=Object(a.e)(h);v.afterAddWrite(()=>{"normal"===v.getDirection()&&e.style.setProperty("display","none")})}else t.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(S,")")).fromTo(f,1,u);if(e){const o=c(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),a=o.querySelector(".transition-shadow"),r=Object(n.a)(),c=Object(n.a)(),l=Object(n.a)();r.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),c.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),l.addElement(a).beforeClearStyles([f]).fromTo(f,.7,.03),r.addAnimation([c,l]),t.addAnimation([r])}}o.forEach(t=>{const e=Object(n.a)();e.addElement(t);const o=Object(n.a)();o.addElement(t.querySelector("ion-title"));const a=Object(n.a)(),r=t.querySelectorAll("ion-buttons,[menuToggle]"),l=t.closest("ion-header"),s=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive"),i=Array.from(r).filter(t=>{const e=t.classList.contains("buttons-collapse");return e&&!s||!e});a.addElement(i);const d=Object(n.a)(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&d.addElement(u);const b=Object(n.a)();b.addElement(c(t).querySelector(".toolbar-background"));const g=Object(n.a)(),h=t.querySelector("ion-back-button");if(h&&g.addElement(h),e.addAnimation([o,a,d,g,b]),v.addAnimation(e),g.fromTo(f,.99,0),a.fromTo(f,.99,0),d.fromTo(f,.99,0),q){s||o.fromTo("transform","translateX(".concat(y,")"),p?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform","translateX(".concat(y,")"),p?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]);if((null===l||void 0===l?void 0:l.translucent)?b.fromTo("transform","translateX(0px)",p?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),h&&!j){const t=Object(n.a)();t.addElement(c(h).querySelector(".button-text")).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat((p?-124:124)+"px",")")),e.addAnimation(t)}}else s||o.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(S,")")).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(S,")")).afterClearStyles([m,f]),g.afterClearStyles([f]),o.afterClearStyles([f]),a.afterClearStyles([f])})}return v}catch(r){throw r}},m=10}}]);
//# sourceMappingURL=6.173058e6.chunk.js.map