(self.webpackChunksocial=self.webpackChunksocial||[]).push([[8592],{8910:(t,e,n)=>{"use strict";n.d(e,{D:()=>r,a:()=>a,c:()=>u,d:()=>h,g:()=>d,p:()=>o,s:()=>l});const r={dragThreshold:20,allowElementScroll:!1,maxDragAngle:40,sideMenuThreshold:50,transitionDuration:150,shortSwipeDuration:300,debug:!1,avoidElements:!1};function o(t){if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}const i="scrollBehavior"in document.documentElement.style;let s;s=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date);const a=s;function c(t,e,n,r,o,i){const s=a(),l=e===n?n:function(t,e,n,r,o){const i=(s=Math.min(1,(r-n)/o))<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1;var s;return Math.ceil(i*(e-t)+t)}(e,n,o,s,i);t.scrollTo(l,r),s-o>=i||requestAnimationFrame(()=>{c(t,e,n,r,o,i)})}const l=(t,e,n=0,r=!1,o=300)=>{o<=0?requestAnimationFrame(()=>{t.scrollTo(e,n)}):r&&i?t.scrollTo({left:e,top:n,behavior:"smooth"}):requestAnimationFrame(()=>{c(t,t.scrollLeft,e,n,a(),o)})};function u(t,e,n){if(!e)return!1;const r=n.maxDragAngle*(Math.PI/180),o=Math.cos(r),i=t.x-e.x,s=t.y-e.y;if(Math.sqrt(i*i+s*s)>=n.dragThreshold){const t=Math.atan2(s,i),e=Math.cos(t);return Math.abs(e)>o}return!1}function d(t,e,n=0){return Math.max(0,Math.min(t.scrollWidth-e,t.scrollLeft+n))}function h(t,e,n){t&&t.debug&&console.log("%csuper-tabs %c%s","background: linear-gradient(135deg,#4150b2,#f71947); border: 1px solid #9a9a9a; color: #ffffff; border-bottom-left-radius: 2px; border-top-left-radius: 2px; padding: 2px 0 2px 4px;","background: #252b3e; border: 1px solid #9a9a9a; border-top-right-radius: 2px; border-bottom-right-radius: 2px; margin-left: -2px; padding: 2px 4px; color: white;"," ".repeat(10-e.length)+e,...n)}},4689:(t,e,n)=>{"use strict";n.d(e,{c:()=>s});var r=n(2494),o=n(2610),i=n(7266);const s=(t,e)=>{let n,s;const a=(t,r,o)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(l(),c(i,o)):l()},c=(t,e)=>{n=t,s||(s=n);const o=n;(0,r.c)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,r.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),s=void 0}})}},3209:(t,e,n)=>{"use strict";n.d(e,{g:()=>r});const r=(t,e,n,r,s)=>i(t[1],e[1],n[1],r[1],s).map(i=>o(t[0],e[0],n[0],r[0],i)),o=(t,e,n,r,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*n*o+3*n+r*o))-t*Math.pow(o-1,3),i=(t,e,n,r,o)=>s((r-=o)-3*(n-=o)+3*(e-=o)-(t-=o),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),s=(t,e,n,r)=>{if(0===t)return((t,e,n)=>{const r=e*e-4*t*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*t),(-e-Math.sqrt(r))/(2*t)]})(e,n,r);const o=(3*(n/=t)-(e/=t)*e)/3,i=(2*e*e*e-9*e*n+27*(r/=t))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];const s=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===s)return[Math.pow(i/2,.5)-e/3];if(s>0)return[Math.pow(-i/2+Math.sqrt(s),1/3)-Math.pow(i/2+Math.sqrt(s),1/3)-e/3];const a=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),l=2*Math.pow(a,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}},8247:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,d:()=>i});var r=n(6268);const o=async(t,e,n,o,i)=>{if(t)return t.attachViewToDom(e,n,i,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>s.classList.add(t)),i&&Object.assign(s,i),e.appendChild(s),await new Promise(t=>(0,r.c)(s,t)),s},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2610:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,b:()=>s,c:()=>o,d:()=>c,h:()=>a});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{r.selection()},i=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}},2083:(t,e,n)=>{"use strict";n.d(e,{s:()=>r});const r=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=i(t);for(let e=0;e<s.length;e++)o(s[e])}});const r=i(e);for(let t=0;t<r.length;t++)o(r[t]);const a=document.createElement("div");a.appendChild(e);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!a.includes(r.toLowerCase())){t.removeAttribute(r);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=i(t);for(let n=0;n<e.length;n++)o(e[n])},i=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},5488:(t,e,n)=>{"use strict";n.d(e,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,o=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},5425:(t,e,n)=>{"use strict";n.d(e,{c:()=>o,g:()=>i,h:()=>r,o:()=>a});const r=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,r)}return!1}},6665:(t,e,n)=>{"use strict";n.d(e,{h:()=>i,Z:()=>o});var r=n(2304);let o=(()=>{class t{transform(e,n){return n&&e?t.filter(e,n):e}static filter(t,e){const n=e.toLowerCase();function r(t,e){for(let o in t)if(null!==t[o]&&null!=t[o]){if("object"==typeof t[o]&&r(t[o],e))return!0;if(t[o].toString().toLowerCase().includes(n))return!0}return!1}return t.filter(function(t){return r(t,e)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Yjl({name:"filter",type:t,pure:!1}),t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),t})(),i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})()}}]);