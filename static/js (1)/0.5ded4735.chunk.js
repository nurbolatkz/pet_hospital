/*! For license information please see 0.5ded4735.chunk.js.LICENSE.txt */
(this.webpackJsonppet_hospital=this.webpackJsonppet_hospital||[]).push([[0],{59:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return s}));var r=n(3),c=n(10),o=n(16);const s=(t,e,n,s,a)=>{const i=t.ownerDocument.defaultView;let u=Object(c.a)(t);const h=t=>u?-t.deltaX:t.deltaX;return Object(o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:n=>(u=Object(c.a)(t),(t=>{const{startX:e}=t;return u?e>=i.innerWidth-50:e<=50})(n)&&e()),onStart:n,onMove:t=>{const e=h(t)/i.innerWidth;s(e)},onEnd:t=>{const e=h(t),n=i.innerWidth,c=e/n,o=(t=>u?-t.velocityX:t.velocityX)(t),s=o>=0&&(o>.2||e>n/2),l=(s?1-c:c)*n;let p=0;if(l>5){const t=l/Math.abs(o);p=Math.min(t,540)}a(s,c<=0?.01:Object(r.m)(0,c,.9999),p)}})}}}]);
//# sourceMappingURL=0.5ded4735.chunk.js.map