/*! For license information please see 9.bc955c63.chunk.js.LICENSE.txt */
(this.webpackJsonppet_hospital=this.webpackJsonppet_hospital||[]).push([[9],{58:function(t,e,s){"use strict";s.r(e),s.d(e,"scopeCss",(function(){return C}));const o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),n=new RegExp("(-shadowcsscontext"+o,"gim"),r=new RegExp("(-shadowcssslotted"+o,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,l=[/::shadow/g,/::content/g],i=/-shadowcsshost/gim,h=t=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(t,"\\b)"),"gim"),p=h("::slotted"),d=h(":host"),g=h(":host-context"),u=/\/\*\s*[\s\S]*?\*\//g,m=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,f=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,x=/(^.*?[^\\])??((:+)(.*)|$)/,_=(t,e)=>{const s=b(t);let o=0;return s.escapedString.replace(f,(function(){const t=arguments.length<=2?void 0:arguments[2];let c="",n=arguments.length<=4?void 0:arguments[4],r="";n&&n.startsWith("{%BLOCK%")&&(c=s.blocks[o++],n=n.substring("%BLOCK%".length+1),r="{");const a={selector:t,content:c},l=e(a);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(n)}))},b=t=>{const e=t.split(w),s=[],o=[];let c=0,n=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&c--,c>0?n.push(t):(n.length>0&&(o.push(n.join("")),s.push("%BLOCK%"),n=[]),s.push(t)),"{"===t&&c++}n.length>0&&(o.push(n.join("")),s.push("%BLOCK%"));return{escapedString:s.join(""),blocks:o}},S=(t,e,s)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){const t=e[2].split(","),o=[];for(let c=0;c<t.length;c++){const n=t[c].trim();if(!n)break;o.push(s("-shadowcsshost-no-combinator",n,e[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+e[3]})),v=(t,e,s)=>t+e.replace("-shadowcsshost","")+s,O=(t,e,s)=>e.indexOf("-shadowcsshost")>-1?v(t,e,s):t+e+s+", "+e+" "+t+s,E=(t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t),W=(t,e)=>t.replace(x,(function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return s+e+o+c})),$=(t,e,s)=>{const o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),c=t=>{let c=t.trim();if(!c)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)c=((t,e,s)=>{if(i.lastIndex=0,i.test(t)){const e=".".concat(s);return t.replace(a,(t,s)=>W(s,e)).replace(i,e+" ")}return e+" "+t})(t,e,s);else{const e=t.replace(i,"");e.length>0&&(c=W(e,o))}return c},n=(t=>{const e=[];let s=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(t,o)=>{const c="__ph-".concat(s,"__");return e.push(o),s++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,o,c)=>{const n="__ph-".concat(s,"__");return e.push(c),s++,o+n}),placeholders:e}})(t);let r,l="",h=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=n.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(r=p.exec(t));){const e=r[1],s=t.slice(h,r.index).trim();d=d||s.indexOf("-shadowcsshost-no-combinator")>-1;const o=d?c(s):s;l+="".concat(o," ").concat(e," "),h=p.lastIndex}const g=t.substring(h);return d=d||g.indexOf("-shadowcsshost-no-combinator")>-1,l+=d?c(g):g,u=n.placeholders,l.replace(/__ph-(\d+)__/g,(t,e)=>u[+e]);var u},R=(t,e,s,o,c)=>_(t,t=>{let c=t.selector,n=t.content;"@"!==t.selector[0]?c=((t,e,s,o)=>t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():E(t,e)?$(t,e,s).trim():t.trim()).join(", "))(t.selector,e,s,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(n=R(t.content,e,s,o));return{selector:c.replace(/\s{2,}/g," ").trim(),content:n}}),j=(t,e,s,o,a)=>{const i=((t,e)=>{const s="."+e+" > ",o=[];return t=t.replace(r,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){const t=e[2].trim(),c=e[3],n=s+t+c;let r="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;r=t+r}const a=(r+n).trim(),l="".concat(r.trimEnd()).concat(n.trim()).trim();if(a!==l){const t="".concat(l,", ").concat(a);o.push({orgSelector:a,updatedSelector:t})}return n}return"-shadowcsshost-no-combinator"+e[3]})),{selectors:o,cssText:t}})(t=(t=>S(t,n,O))(t=(t=>S(t,c,v))(t=(t=>t=t.replace(g,"$1".concat("-shadowcsscontext")).replace(d,"$1".concat("-shadowcsshost")).replace(p,"$1".concat("-shadowcssslotted")))(t))),o);return t=(t=>l.reduce((t,e)=>t.replace(e," "),t))(t=i.cssText),e&&(t=R(t,e,s,o)),{cssText:(t=(t=k(t,s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors.map(t=>({orgSelector:k(t.orgSelector,s),updatedSelector:k(t.updatedSelector,s)}))}},k=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,".".concat(e)),C=(t,e,s)=>{const o=e+"-h",c=e+"-s",n=t.match(m)||[];t=(t=>t.replace(u,""))(t);const r=[];if(s){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),s="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:s}),t.selector=e+t.selector,t};t=_(t,t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=_(t.content,e),t):t)}const a=j(t,e,o,c);return t=[a.cssText,...n].join("\n"),s&&r.forEach(e=>{let{placeholder:s,comment:o}=e;t=t.replace(s,o)}),a.slottedSelectors.forEach(e=>{const s=new RegExp(e.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");t=t.replace(s,e.updatedSelector)}),t}}}]);
//# sourceMappingURL=9.bc955c63.chunk.js.map