(self.webpackChunksocial=self.webpackChunksocial||[]).push([[5651],{5651:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>s});var r=a(3342),n=a(7266);a(850);const s=(e,t,a,s,c)=>{const o=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{s(e.deltaX/o.innerWidth)},onEnd:e=>{const t=o.innerWidth,a=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),i=(s?1-a:a)*t;let l=0;if(i>5){const e=i/Math.abs(n);l=Math.min(e,540)}c(s,a<=0?.01:(0,r.j)(0,a,.9999),l)}})}}}]);