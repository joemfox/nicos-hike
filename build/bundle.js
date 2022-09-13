var app=function(){"use strict";function n(){}const t=n=>n;function e(n){return n()}function i(){return Object.create(null)}function r(n){n.forEach(e)}function o(n){return"function"==typeof n}function l(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}let u;function a(n){return null==n?"":n}function c(t){return t&&o(t.destroy)?t.destroy:n}const f="undefined"!=typeof window;let s=f?()=>window.performance.now():()=>Date.now(),d=f?n=>requestAnimationFrame(n):n;const p=new Set;function h(n){p.forEach((t=>{t.c(n)||(p.delete(t),t.f())})),0!==p.size&&d(h)}function v(n){let t;return 0===p.size&&d(h),{promise:new Promise((e=>{p.add(t={c:n,f:e})})),abort(){p.delete(t)}}}function g(n,t){n.appendChild(t)}function m(n,t,e){n.insertBefore(t,e||null)}function y(n){n.parentNode.removeChild(n)}function $(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function E(n){return document.createElement(n)}function x(n){return document.createTextNode(n)}function S(){return x(" ")}function M(n,t,e,i){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e,i)}function b(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function w(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}let _;function L(){if(void 0===_){_=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(n){_=!0}}return _}function T(n,t,e){n.classList[e?"add":"remove"](t)}const k=new Map;let A,N=0;function j(n,t,e,i,r,o,l,u=0){const a=16.666/i;let c="{\n";for(let n=0;n<=1;n+=a){const i=t+(e-t)*o(n);c+=100*n+`%{${l(i,1-i)}}\n`}const f=c+`100% {${l(e,1-e)}}\n}`,s=`__svelte_${function(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}(f)}_${u}`,d=function(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}(n),{style_element:p,rules:h}=k.get(d)||function(n){const t={style_element:E("style"),rules:{}};return k.set(n,t),t}(d);if(!h[s]){const n=function(n,t){return g(n.head||n,t),t.sheet}(d,p);h[s]=!0,n.insertRule(`@keyframes ${s} ${f}`,n.cssRules.length)}const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${s} ${i}ms linear ${r}ms 1 both`,N+=1,s}function q(n,t){const e=(n.style.animation||"").split(", "),i=e.filter(t?n=>n.indexOf(t)<0:n=>-1===n.indexOf("__svelte")),r=e.length-i.length;r&&(n.style.animation=i.join(", "),N-=r,N||d((()=>{N||(k.forEach((n=>{const{style_element:t}=n;y(t)})),k.clear())})))}function I(n){A=n}function O(n){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(n)}const C=[],z=[],P=[],R=[],D=Promise.resolve();let F=!1;function H(n){P.push(n)}const W=new Set;let U,B=0;function Y(){const n=A;do{for(;B<C.length;){const n=C[B];B++,I(n),J(n.$$)}for(I(null),C.length=0,B=0;z.length;)z.pop()();for(let n=0;n<P.length;n+=1){const t=P[n];W.has(t)||(W.add(t),t())}P.length=0}while(C.length);for(;R.length;)R.pop()();F=!1,W.clear(),I(n)}function J(n){if(null!==n.fragment){n.update(),r(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(H)}}function G(){return U||(U=Promise.resolve(),U.then((()=>{U=null}))),U}function X(n,t,e){n.dispatchEvent(function(n,t,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,e,i,t),r}(`${t?"intro":"outro"}${e}`))}const K=new Set;let Q;function V(){Q={r:0,c:[],p:Q}}function Z(){Q.r||r(Q.c),Q=Q.p}function nn(n,t){n&&n.i&&(K.delete(n),n.i(t))}function tn(n,t,e,i){if(n&&n.o){if(K.has(n))return;K.add(n),Q.c.push((()=>{K.delete(n),i&&(e&&n.d(1),i())})),n.o(t)}else i&&i()}const en={duration:0};function rn(e,i,r){let l,u,a=i(e,r),c=!1,f=0;function d(){l&&q(e,l)}function p(){const{delay:i=0,duration:r=300,easing:o=t,tick:p=n,css:h}=a||en;h&&(l=j(e,0,1,r,i,o,h,f++)),p(0,1);const g=s()+i,m=g+r;u&&u.abort(),c=!0,H((()=>X(e,!0,"start"))),u=v((n=>{if(c){if(n>=m)return p(1,0),X(e,!0,"end"),d(),c=!1;if(n>=g){const t=o((n-g)/r);p(t,1-t)}}return c}))}let h=!1;return{start(){h||(h=!0,q(e),o(a)?(a=a(),G().then(p)):p())},invalidate(){h=!1},end(){c&&(d(),c=!1)}}}function on(e,i,l){let u,a=i(e,l),c=!0;const f=Q;function d(){const{delay:i=0,duration:o=300,easing:l=t,tick:d=n,css:p}=a||en;p&&(u=j(e,1,0,o,i,l,p));const h=s()+i,g=h+o;H((()=>X(e,!1,"start"))),v((n=>{if(c){if(n>=g)return d(0,1),X(e,!1,"end"),--f.r||r(f.c),!1;if(n>=h){const t=l((n-h)/o);d(1-t,t)}}return c}))}return f.r+=1,o(a)?G().then((()=>{a=a(),d()})):d(),{end(n){n&&a.tick&&a.tick(1,0),c&&(u&&q(e,u),c=!1)}}}function ln(n){n&&n.c()}function un(n,t,i,l){const{fragment:u,on_mount:a,on_destroy:c,after_update:f}=n.$$;u&&u.m(t,i),l||H((()=>{const t=a.map(e).filter(o);c?c.push(...t):r(t),n.$$.on_mount=[]})),f.forEach(H)}function an(n,t){const e=n.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function cn(n,t){-1===n.$$.dirty[0]&&(C.push(n),F||(F=!0,D.then(Y)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function fn(t,e,o,l,u,a,c,f=[-1]){const s=A;I(t);const d=t.$$={fragment:null,ctx:null,props:a,update:n,not_equal:u,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:i(),dirty:f,skip_bound:!1,root:e.target||s.$$.root};c&&c(d.root);let p=!1;if(d.ctx=o?o(t,e.props||{},((n,e,...i)=>{const r=i.length?i[0]:e;return d.ctx&&u(d.ctx[n],d.ctx[n]=r)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](r),p&&cn(t,n)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);d.fragment&&d.fragment.l(n),n.forEach(y)}else d.fragment&&d.fragment.c();e.intro&&nn(t.$$.fragment),un(t,e.target,e.anchor,e.customElement),Y()}I(s)}class sn{$destroy(){an(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}class dn{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const t=this._partials;let e=0;for(let i=0;i<this._n&&i<32;i++){const r=t[i],o=n+r,l=Math.abs(n)<Math.abs(r)?n-(o-r):r-(o-n);l&&(t[e++]=l),n=o}return t[e]=n,this._n=e+1,this}valueOf(){const n=this._partials;let t,e,i,r=this._n,o=0;if(r>0){for(o=n[--r];r>0&&(t=o,e=n[--r],o=t+e,i=e-(o-t),!i););r>0&&(i<0&&n[r-1]<0||i>0&&n[r-1]>0)&&(e=2*i,t=o+e,e==t-o&&(o=t))}return o}}function pn(n){return Array.from(function*(n){for(const t of n)yield*t}(n))}var hn=1e-6,vn=Math.PI,gn=vn/2,mn=vn/4,yn=2*vn,$n=180/vn,En=vn/180,xn=Math.abs,Sn=Math.atan,Mn=Math.atan2,bn=Math.cos,wn=Math.exp,_n=Math.log,Ln=Math.sin,Tn=Math.sign||function(n){return n>0?1:n<0?-1:0},kn=Math.sqrt,An=Math.tan;function Nn(n){return n>1?gn:n<-1?-gn:Math.asin(n)}function jn(){}function qn(n,t){n&&On.hasOwnProperty(n.type)&&On[n.type](n,t)}var In={Feature:function(n,t){qn(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,r=e.length;++i<r;)qn(e[i].geometry,t)}},On={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,i=-1,r=e.length;++i<r;)n=e[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){Cn(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,i=-1,r=e.length;++i<r;)Cn(e[i],t,0)},Polygon:function(n,t){zn(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,i=-1,r=e.length;++i<r;)zn(e[i],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,r=e.length;++i<r;)qn(e[i],t)}};function Cn(n,t,e){var i,r=-1,o=n.length-e;for(t.lineStart();++r<o;)i=n[r],t.point(i[0],i[1],i[2]);t.lineEnd()}function zn(n,t){var e=-1,i=n.length;for(t.polygonStart();++e<i;)Cn(n[e],t,1);t.polygonEnd()}function Pn(n){return[Mn(n[1],n[0]),Nn(n[2])]}function Rn(n){var t=n[0],e=n[1],i=bn(e);return[i*bn(t),i*Ln(t),Ln(e)]}function Dn(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Fn(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Hn(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Wn(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Un(n){var t=kn(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Bn(n,t){function e(e,i){return e=n(e,i),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,i){return(e=t.invert(e,i))&&n.invert(e[0],e[1])}),e}function Yn(n,t){return[xn(n)>vn?n+Math.round(-n/yn)*yn:n,t]}function Jn(n,t,e){return(n%=yn)?t||e?Bn(Xn(n),Kn(t,e)):Xn(n):t||e?Kn(t,e):Yn}function Gn(n){return function(t,e){return[(t+=n)>vn?t-yn:t<-vn?t+yn:t,e]}}function Xn(n){var t=Gn(n);return t.invert=Gn(-n),t}function Kn(n,t){var e=bn(n),i=Ln(n),r=bn(t),o=Ln(t);function l(n,t){var l=bn(t),u=bn(n)*l,a=Ln(n)*l,c=Ln(t),f=c*e+u*i;return[Mn(a*r-f*o,u*e-c*i),Nn(f*r+a*o)]}return l.invert=function(n,t){var l=bn(t),u=bn(n)*l,a=Ln(n)*l,c=Ln(t),f=c*r-a*o;return[Mn(a*r+c*o,u*e+f*i),Nn(f*e-u*i)]},l}function Qn(n,t){(t=Rn(t))[0]-=n,Un(t);var e,i=(e=-t[1])>1?0:e<-1?vn:Math.acos(e);return((-t[2]<0?-i:i)+yn-hn)%yn}function Vn(){var n,t=[];return{point:function(t,e,i){n.push([t,e,i])},lineStart:function(){t.push(n=[])},lineEnd:jn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var e=t;return t=[],n=null,e}}}function Zn(n,t){return xn(n[0]-t[0])<hn&&xn(n[1]-t[1])<hn}function nt(n,t,e,i){this.x=n,this.z=t,this.o=e,this.e=i,this.v=!1,this.n=this.p=null}function tt(n,t,e,i,r){var o,l,u=[],a=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,e,i=n[0],l=n[t];if(Zn(i,l)){if(!i[2]&&!l[2]){for(r.lineStart(),o=0;o<t;++o)r.point((i=n[o])[0],i[1]);return void r.lineEnd()}l[0]+=2e-6}u.push(e=new nt(i,n,null,!0)),a.push(e.o=new nt(i,null,e,!1)),u.push(e=new nt(l,n,null,!1)),a.push(e.o=new nt(l,null,e,!0))}})),u.length){for(a.sort(t),et(u),et(a),o=0,l=a.length;o<l;++o)a[o].e=e=!e;for(var c,f,s=u[0];;){for(var d=s,p=!0;d.v;)if((d=d.n)===s)return;c=d.z,r.lineStart();do{if(d.v=d.o.v=!0,d.e){if(p)for(o=0,l=c.length;o<l;++o)r.point((f=c[o])[0],f[1]);else i(d.x,d.n.x,1,r);d=d.n}else{if(p)for(c=d.p.z,o=c.length-1;o>=0;--o)r.point((f=c[o])[0],f[1]);else i(d.x,d.p.x,-1,r);d=d.p}c=(d=d.o).z,p=!p}while(!d.v);r.lineEnd()}}}function et(n){if(t=n.length){for(var t,e,i=0,r=n[0];++i<t;)r.n=e=n[i],e.p=r,r=e;r.n=e=n[0],e.p=r}}function it(n){return xn(n[0])<=vn?n[0]:Tn(n[0])*((xn(n[0])+vn)%yn-vn)}function rt(n,t,e,i){return function(r){var o,l,u,a=t(r),c=Vn(),f=t(c),s=!1,d={point:p,lineStart:v,lineEnd:g,polygonStart:function(){d.point=m,d.lineStart=y,d.lineEnd=$,l=[],o=[]},polygonEnd:function(){d.point=p,d.lineStart=v,d.lineEnd=g,l=pn(l);var n=function(n,t){var e=it(t),i=t[1],r=Ln(i),o=[Ln(e),-bn(e),0],l=0,u=0,a=new dn;1===r?i=gn+hn:-1===r&&(i=-gn-hn);for(var c=0,f=n.length;c<f;++c)if(d=(s=n[c]).length)for(var s,d,p=s[d-1],h=it(p),v=p[1]/2+mn,g=Ln(v),m=bn(v),y=0;y<d;++y,h=E,g=S,m=M,p=$){var $=s[y],E=it($),x=$[1]/2+mn,S=Ln(x),M=bn(x),b=E-h,w=b>=0?1:-1,_=w*b,L=_>vn,T=g*S;if(a.add(Mn(T*w*Ln(_),m*M+T*bn(_))),l+=L?b+w*yn:b,L^h>=e^E>=e){var k=Fn(Rn(p),Rn($));Un(k);var A=Fn(o,k);Un(A);var N=(L^b>=0?-1:1)*Nn(A[2]);(i>N||i===N&&(k[0]||k[1]))&&(u+=L^b>=0?1:-1)}}return(l<-hn||l<hn&&a<-1e-12)^1&u}(o,i);l.length?(s||(r.polygonStart(),s=!0),tt(l,lt,n,e,r)):n&&(s||(r.polygonStart(),s=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),s&&(r.polygonEnd(),s=!1),l=o=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(t,e){n(t,e)&&r.point(t,e)}function h(n,t){a.point(n,t)}function v(){d.point=h,a.lineStart()}function g(){d.point=p,a.lineEnd()}function m(n,t){u.push([n,t]),f.point(n,t)}function y(){f.lineStart(),u=[]}function $(){m(u[0][0],u[0][1]),f.lineEnd();var n,t,e,i,a=f.clean(),d=c.result(),p=d.length;if(u.pop(),o.push(u),u=null,p)if(1&a){if((t=(e=d[0]).length-1)>0){for(s||(r.polygonStart(),s=!0),r.lineStart(),n=0;n<t;++n)r.point((i=e[n])[0],i[1]);r.lineEnd()}}else p>1&&2&a&&d.push(d.pop().concat(d.shift())),l.push(d.filter(ot))}return d}}function ot(n){return n.length>1}function lt(n,t){return((n=n.x)[0]<0?n[1]-gn-hn:gn-n[1])-((t=t.x)[0]<0?t[1]-gn-hn:gn-t[1])}Yn.invert=Yn;var ut=rt((function(){return!0}),(function(n){var t,e=NaN,i=NaN,r=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(o,l){var u=o>0?vn:-vn,a=xn(o-e);xn(a-vn)<hn?(n.point(e,i=(i+l)/2>0?gn:-gn),n.point(r,i),n.lineEnd(),n.lineStart(),n.point(u,i),n.point(o,i),t=0):r!==u&&a>=vn&&(xn(e-r)<hn&&(e-=r*hn),xn(o-u)<hn&&(o-=u*hn),i=function(n,t,e,i){var r,o,l=Ln(n-e);return xn(l)>hn?Sn((Ln(t)*(o=bn(i))*Ln(e)-Ln(i)*(r=bn(t))*Ln(n))/(r*o*l)):(t+i)/2}(e,i,o,l),n.point(r,i),n.lineEnd(),n.lineStart(),n.point(u,i),t=0),n.point(e=o,i=l),r=u},lineEnd:function(){n.lineEnd(),e=i=NaN},clean:function(){return 2-t}}}),(function(n,t,e,i){var r;if(null==n)r=e*gn,i.point(-vn,r),i.point(0,r),i.point(vn,r),i.point(vn,0),i.point(vn,-r),i.point(0,-r),i.point(-vn,-r),i.point(-vn,0),i.point(-vn,r);else if(xn(n[0]-t[0])>hn){var o=n[0]<t[0]?vn:-vn;r=e*o/2,i.point(-o,r),i.point(0,r),i.point(o,r)}else i.point(t[0],t[1])}),[-vn,-gn]);function at(n){var t=bn(n),e=6*En,i=t>0,r=xn(t)>hn;function o(n,e){return bn(n)*bn(e)>t}function l(n,e,i){var r=[1,0,0],o=Fn(Rn(n),Rn(e)),l=Dn(o,o),u=o[0],a=l-u*u;if(!a)return!i&&n;var c=t*l/a,f=-t*u/a,s=Fn(r,o),d=Wn(r,c);Hn(d,Wn(o,f));var p=s,h=Dn(d,p),v=Dn(p,p),g=h*h-v*(Dn(d,d)-1);if(!(g<0)){var m=kn(g),y=Wn(p,(-h-m)/v);if(Hn(y,d),y=Pn(y),!i)return y;var $,E=n[0],x=e[0],S=n[1],M=e[1];x<E&&($=E,E=x,x=$);var b=x-E,w=xn(b-vn)<hn;if(!w&&M<S&&($=S,S=M,M=$),w||b<hn?w?S+M>0^y[1]<(xn(y[0]-E)<hn?S:M):S<=y[1]&&y[1]<=M:b>vn^(E<=y[0]&&y[0]<=x)){var _=Wn(p,(-h+m)/v);return Hn(_,d),[y,Pn(_)]}}}function u(t,e){var r=i?n:vn-n,o=0;return t<-r?o|=1:t>r&&(o|=2),e<-r?o|=4:e>r&&(o|=8),o}return rt(o,(function(n){var t,e,a,c,f;return{lineStart:function(){c=a=!1,f=1},point:function(s,d){var p,h=[s,d],v=o(s,d),g=i?v?0:u(s,d):v?u(s+(s<0?vn:-vn),d):0;if(!t&&(c=a=v)&&n.lineStart(),v!==a&&(!(p=l(t,h))||Zn(t,p)||Zn(h,p))&&(h[2]=1),v!==a)f=0,v?(n.lineStart(),p=l(h,t),n.point(p[0],p[1])):(p=l(t,h),n.point(p[0],p[1],2),n.lineEnd()),t=p;else if(r&&t&&i^v){var m;g&e||!(m=l(h,t,!0))||(f=0,i?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1],3)))}!v||t&&Zn(t,h)||n.point(h[0],h[1]),t=h,a=v,e=g},lineEnd:function(){a&&n.lineEnd(),t=null},clean:function(){return f|(c&&a)<<1}}}),(function(t,i,r,o){!function(n,t,e,i,r,o){if(e){var l=bn(t),u=Ln(t),a=i*e;null==r?(r=t+i*yn,o=t-a/2):(r=Qn(l,r),o=Qn(l,o),(i>0?r<o:r>o)&&(r+=i*yn));for(var c,f=r;i>0?f>o:f<o;f-=a)c=Pn([l,-u*bn(f),-u*Ln(f)]),n.point(c[0],c[1])}}(o,n,e,r,t,i)}),i?[0,-n]:[-vn,n-vn])}var ct=1e9,ft=-ct;function st(n,t,e,i){function r(r,o){return n<=r&&r<=e&&t<=o&&o<=i}function o(r,o,u,c){var f=0,s=0;if(null==r||(f=l(r,u))!==(s=l(o,u))||a(r,o)<0^u>0)do{c.point(0===f||3===f?n:e,f>1?i:t)}while((f=(f+u+4)%4)!==s);else c.point(o[0],o[1])}function l(i,r){return xn(i[0]-n)<hn?r>0?0:3:xn(i[0]-e)<hn?r>0?2:1:xn(i[1]-t)<hn?r>0?1:0:r>0?3:2}function u(n,t){return a(n.x,t.x)}function a(n,t){var e=l(n,1),i=l(t,1);return e!==i?e-i:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(l){var a,c,f,s,d,p,h,v,g,m,y,$=l,E=Vn(),x={point:S,lineStart:function(){x.point=M,c&&c.push(f=[]);m=!0,g=!1,h=v=NaN},lineEnd:function(){a&&(M(s,d),p&&g&&E.rejoin(),a.push(E.result()));x.point=S,g&&$.lineEnd()},polygonStart:function(){$=E,a=[],c=[],y=!0},polygonEnd:function(){var t=function(){for(var t=0,e=0,r=c.length;e<r;++e)for(var o,l,u=c[e],a=1,f=u.length,s=u[0],d=s[0],p=s[1];a<f;++a)o=d,l=p,d=(s=u[a])[0],p=s[1],l<=i?p>i&&(d-o)*(i-l)>(p-l)*(n-o)&&++t:p<=i&&(d-o)*(i-l)<(p-l)*(n-o)&&--t;return t}(),e=y&&t,r=(a=pn(a)).length;(e||r)&&(l.polygonStart(),e&&(l.lineStart(),o(null,null,1,l),l.lineEnd()),r&&tt(a,u,t,o,l),l.polygonEnd());$=l,a=c=f=null}};function S(n,t){r(n,t)&&$.point(n,t)}function M(o,l){var u=r(o,l);if(c&&f.push([o,l]),m)s=o,d=l,p=u,m=!1,u&&($.lineStart(),$.point(o,l));else if(u&&g)$.point(o,l);else{var a=[h=Math.max(ft,Math.min(ct,h)),v=Math.max(ft,Math.min(ct,v))],E=[o=Math.max(ft,Math.min(ct,o)),l=Math.max(ft,Math.min(ct,l))];!function(n,t,e,i,r,o){var l,u=n[0],a=n[1],c=0,f=1,s=t[0]-u,d=t[1]-a;if(l=e-u,s||!(l>0)){if(l/=s,s<0){if(l<c)return;l<f&&(f=l)}else if(s>0){if(l>f)return;l>c&&(c=l)}if(l=r-u,s||!(l<0)){if(l/=s,s<0){if(l>f)return;l>c&&(c=l)}else if(s>0){if(l<c)return;l<f&&(f=l)}if(l=i-a,d||!(l>0)){if(l/=d,d<0){if(l<c)return;l<f&&(f=l)}else if(d>0){if(l>f)return;l>c&&(c=l)}if(l=o-a,d||!(l<0)){if(l/=d,d<0){if(l>f)return;l>c&&(c=l)}else if(d>0){if(l<c)return;l<f&&(f=l)}return c>0&&(n[0]=u+c*s,n[1]=a+c*d),f<1&&(t[0]=u+f*s,t[1]=a+f*d),!0}}}}}(a,E,n,t,e,i)?u&&($.lineStart(),$.point(o,l),y=!1):(g||($.lineStart(),$.point(a[0],a[1])),$.point(E[0],E[1]),u||$.lineEnd(),y=!1)}h=o,v=l,g=u}return x}}var dt=n=>n,pt=1/0,ht=pt,vt=-pt,gt=vt;var mt={point:function(n,t){n<pt&&(pt=n);n>vt&&(vt=n);t<ht&&(ht=t);t>gt&&(gt=t)},lineStart:jn,lineEnd:jn,polygonStart:jn,polygonEnd:jn,result:function(){var n=[[pt,ht],[vt,gt]];return vt=gt=-(ht=pt=1/0),n}};function yt(n){return function(t){var e=new $t;for(var i in n)e[i]=n[i];return e.stream=t,e}}function $t(){}function Et(n,t,e){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=i&&n.clipExtent(null),function(n,t){n&&In.hasOwnProperty(n.type)?In[n.type](n,t):qn(n,t)}(e,n.stream(mt)),t(mt.result()),null!=i&&n.clipExtent(i),n}function xt(n,t,e){return Et(n,(function(e){var i=t[1][0]-t[0][0],r=t[1][1]-t[0][1],o=Math.min(i/(e[1][0]-e[0][0]),r/(e[1][1]-e[0][1])),l=+t[0][0]+(i-o*(e[1][0]+e[0][0]))/2,u=+t[0][1]+(r-o*(e[1][1]+e[0][1]))/2;n.scale(150*o).translate([l,u])}),e)}$t.prototype={constructor:$t,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var St=bn(30*En);function Mt(n,t){return+t?function(n,t){function e(i,r,o,l,u,a,c,f,s,d,p,h,v,g){var m=c-i,y=f-r,$=m*m+y*y;if($>4*t&&v--){var E=l+d,x=u+p,S=a+h,M=kn(E*E+x*x+S*S),b=Nn(S/=M),w=xn(xn(S)-1)<hn||xn(o-s)<hn?(o+s)/2:Mn(x,E),_=n(w,b),L=_[0],T=_[1],k=L-i,A=T-r,N=y*k-m*A;(N*N/$>t||xn((m*k+y*A)/$-.5)>.3||l*d+u*p+a*h<St)&&(e(i,r,o,l,u,a,L,T,w,E/=M,x/=M,S,v,g),g.point(L,T),e(L,T,w,E,x,S,c,f,s,d,p,h,v,g))}}return function(t){var i,r,o,l,u,a,c,f,s,d,p,h,v={point:g,lineStart:m,lineEnd:$,polygonStart:function(){t.polygonStart(),v.lineStart=E},polygonEnd:function(){t.polygonEnd(),v.lineStart=m}};function g(e,i){e=n(e,i),t.point(e[0],e[1])}function m(){f=NaN,v.point=y,t.lineStart()}function y(i,r){var o=Rn([i,r]),l=n(i,r);e(f,s,c,d,p,h,f=l[0],s=l[1],c=i,d=o[0],p=o[1],h=o[2],16,t),t.point(f,s)}function $(){v.point=g,t.lineEnd()}function E(){m(),v.point=x,v.lineEnd=S}function x(n,t){y(i=n,t),r=f,o=s,l=d,u=p,a=h,v.point=y}function S(){e(f,s,c,d,p,h,r,o,i,l,u,a,16,t),v.lineEnd=$,$()}return v}}(n,t):function(n){return yt({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}(n)}var bt=yt({point:function(n,t){this.stream.point(n*En,t*En)}});function wt(n,t,e,i,r,o){if(!o)return function(n,t,e,i,r){function o(o,l){return[t+n*(o*=i),e-n*(l*=r)]}return o.invert=function(o,l){return[(o-t)/n*i,(e-l)/n*r]},o}(n,t,e,i,r);var l=bn(o),u=Ln(o),a=l*n,c=u*n,f=l/n,s=u/n,d=(u*e-l*t)/n,p=(u*t+l*e)/n;function h(n,o){return[a*(n*=i)-c*(o*=r)+t,e-c*n-a*o]}return h.invert=function(n,t){return[i*(f*n-s*t+d),r*(p-s*n-f*t)]},h}function _t(n){return function(n){var t,e,i,r,o,l,u,a,c,f,s=150,d=480,p=250,h=0,v=0,g=0,m=0,y=0,$=0,E=1,x=1,S=null,M=ut,b=null,w=dt,_=.5;function L(n){return a(n[0]*En,n[1]*En)}function T(n){return(n=a.invert(n[0],n[1]))&&[n[0]*$n,n[1]*$n]}function k(){var n=wt(s,0,0,E,x,$).apply(null,t(h,v)),i=wt(s,d-n[0],p-n[1],E,x,$);return e=Jn(g,m,y),u=Bn(t,i),a=Bn(e,u),l=Mt(u,_),A()}function A(){return c=f=null,L}return L.stream=function(n){return c&&f===n?c:c=bt(function(n){return yt({point:function(t,e){var i=n(t,e);return this.stream.point(i[0],i[1])}})}(e)(M(l(w(f=n)))))},L.preclip=function(n){return arguments.length?(M=n,S=void 0,A()):M},L.postclip=function(n){return arguments.length?(w=n,b=i=r=o=null,A()):w},L.clipAngle=function(n){return arguments.length?(M=+n?at(S=n*En):(S=null,ut),A()):S*$n},L.clipExtent=function(n){return arguments.length?(w=null==n?(b=i=r=o=null,dt):st(b=+n[0][0],i=+n[0][1],r=+n[1][0],o=+n[1][1]),A()):null==b?null:[[b,i],[r,o]]},L.scale=function(n){return arguments.length?(s=+n,k()):s},L.translate=function(n){return arguments.length?(d=+n[0],p=+n[1],k()):[d,p]},L.center=function(n){return arguments.length?(h=n[0]%360*En,v=n[1]%360*En,k()):[h*$n,v*$n]},L.rotate=function(n){return arguments.length?(g=n[0]%360*En,m=n[1]%360*En,y=n.length>2?n[2]%360*En:0,k()):[g*$n,m*$n,y*$n]},L.angle=function(n){return arguments.length?($=n%360*En,k()):$*$n},L.reflectX=function(n){return arguments.length?(E=n?-1:1,k()):E<0},L.reflectY=function(n){return arguments.length?(x=n?-1:1,k()):x<0},L.precision=function(n){return arguments.length?(l=Mt(u,_=n*n),A()):kn(_)},L.fitExtent=function(n,t){return xt(L,n,t)},L.fitSize=function(n,t){return function(n,t,e){return xt(n,[[0,0],t],e)}(L,n,t)},L.fitWidth=function(n,t){return function(n,t,e){return Et(n,(function(e){var i=+t,r=i/(e[1][0]-e[0][0]),o=(i-r*(e[1][0]+e[0][0]))/2,l=-r*e[0][1];n.scale(150*r).translate([o,l])}),e)}(L,n,t)},L.fitHeight=function(n,t){return function(n,t,e){return Et(n,(function(e){var i=+t,r=i/(e[1][1]-e[0][1]),o=-r*e[0][0],l=(i-r*(e[1][1]+e[0][1]))/2;n.scale(150*r).translate([o,l])}),e)}(L,n,t)},function(){return t=n.apply(this,arguments),L.invert=t.invert&&T,k()}}((function(){return n}))()}function Lt(n,t){return[n,_n(An((gn+t)/2))]}function Tt(n){var t,e,i,r=_t(n),o=r.center,l=r.scale,u=r.translate,a=r.clipExtent,c=null;function f(){var o=vn*l(),u=r(function(n){function t(t){return(t=n(t[0]*En,t[1]*En))[0]*=$n,t[1]*=$n,t}return n=Jn(n[0]*En,n[1]*En,n.length>2?n[2]*En:0),t.invert=function(t){return(t=n.invert(t[0]*En,t[1]*En))[0]*=$n,t[1]*=$n,t},t}(r.rotate()).invert([0,0]));return a(null==c?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:n===Lt?[[Math.max(u[0]-o,c),t],[Math.min(u[0]+o,e),i]]:[[c,Math.max(u[1]-o,t)],[e,Math.min(u[1]+o,i)]])}return r.scale=function(n){return arguments.length?(l(n),f()):l()},r.translate=function(n){return arguments.length?(u(n),f()):u()},r.center=function(n){return arguments.length?(o(n),f()):o()},r.clipExtent=function(n){return arguments.length?(null==n?c=t=e=i=null:(c=+n[0][0],t=+n[0][1],e=+n[1][0],i=+n[1][1]),f()):null==c?null:[[c,t],[e,i]]},f()}function kt(n,t){return[_n(An((gn+t)/2)),-n]}Lt.invert=function(n,t){return[n,2*Sn(wn(t))-gn]},kt.invert=function(n,t){return[-t,2*Sn(wn(n))-gn]};var At={updates:[{date:"9/12/22",location:["-92.071","46.863"],text:"I'm hiking the Superior Hiking Trail! Check back daily for trail updates!",mileage:"0",miles_to_date:"0"}]},Nt={0:"Jan.",1:"Feb.",2:"March",3:"April",4:"May",5:"June",6:"July",7:"Aug.",8:"Sept.",9:"Oct.",10:"Nov.",11:"Dec."};function jt(n){return void 0===n&&(n=new Date),Nt[n.getMonth()]}function qt(n){return void 0===n&&(n=new Date),jt(n)+" "+n.getDate()+", "+n.getFullYear()}function It(n,t,e){const i=n.slice();return i[12]=t[e],i[14]=e,i}function Ot(n,t,e){const i=n.slice();return i[12]=t[e],i[14]=e,i}function Ct(n,t,e){const i=n.slice();return i[16]=t[e],i}function zt(n){let t,e,i,r,l,u,f=n[16][0]+"";return{c(){t=E("div"),e=x(f),b(t,"class",i=a(`map-label ${n[16][3]}`)+" svelte-1uloj0q")},m(i,o){m(i,t,o),g(t,e),l||(u=c(r=Wt.call(null,t,n[16][2])),l=!0)},p(l,u){n=l,8&u&&f!==(f=n[16][0]+"")&&w(e,f),8&u&&i!==(i=a(`map-label ${n[16][3]}`)+" svelte-1uloj0q")&&b(t,"class",i),r&&o(r.update)&&8&u&&r.update.call(null,n[16][2])},d(n){n&&y(t),l=!1,u()}}}function Pt(n){let t,e,i,r,o,l,u,a,c,f,s=qt(n[12].date)+"",d=n[12].text+"";return{c(){t=E("div"),e=E("p"),i=x(s),r=S(),o=E("p"),l=x(d),b(e,"class","bold svelte-1uloj0q"),b(o,"class","svelte-1uloj0q"),b(t,"data-mileage",u=`${n[12].miles_to_date}/${n[0]} miles (${Math.round(n[12].miles_to_date/n[0]*100)}%) done  \n${n[12].mileage} miles today`),b(t,"class","update-box svelte-1uloj0q")},m(n,u){m(n,t,u),g(t,e),g(e,i),g(t,r),g(t,o),g(o,l),f=!0},p(n,e){(!f||16&e)&&s!==(s=qt(n[12].date)+"")&&w(i,s),(!f||16&e)&&d!==(d=n[12].text+"")&&w(l,d),(!f||17&e&&u!==(u=`${n[12].miles_to_date}/${n[0]} miles (${Math.round(n[12].miles_to_date/n[0]*100)}%) done  \n${n[12].mileage} miles today`))&&b(t,"data-mileage",u)},i(n){f||(H((()=>{c&&c.end(1),a=rn(t,Bt,{duration:500}),a.start()})),f=!0)},o(n){a&&a.invalidate(),c=on(t,Yt,{duration:500}),f=!1},d(n){n&&y(t),n&&c&&c.end()}}}function Rt(n){let t,e,i,l,u,a,f,s,d;function p(){return n[7](n[14])}let h=!n[12].hidden&&Pt(n);return{c(){t=E("div"),i=S(),l=E("div"),h&&h.c(),u=S(),b(t,"class","update-button svelte-1uloj0q"),T(t,"hidden",n[12].hidden),b(l,"class","update svelte-1uloj0q"),T(l,"hidden",n[12].hidden)},m(r,o){m(r,t,o),m(r,i,o),m(r,l,o),h&&h.m(l,null),g(l,u),f=!0,s||(d=[M(t,"click",p),c(e=Wt.call(null,t,n[12].xy)),c(a=Wt.call(null,l,{...n[12].xy,overset:n[1]/3+"px"}))],s=!0)},p(i,r){n=i,e&&o(e.update)&&16&r&&e.update.call(null,n[12].xy),(!f||16&r)&&T(t,"hidden",n[12].hidden),n[12].hidden?h&&(V(),tn(h,1,1,(()=>{h=null})),Z()):h?(h.p(n,r),16&r&&nn(h,1)):(h=Pt(n),h.c(),nn(h,1),h.m(l,u)),a&&o(a.update)&&18&r&&a.update.call(null,{...n[12].xy,overset:n[1]/3+"px"}),(!f||16&r)&&T(l,"hidden",n[12].hidden)},i(n){f||(nn(h),f=!0)},o(n){tn(h),f=!1},d(n){n&&y(t),n&&y(i),n&&y(l),h&&h.d(),s=!1,r(d)}}}function Dt(n){let t,e,i,r,o,l,u,a,c,f,s=qt(n[12].date)+"",d=n[12].text+"";return{c(){t=E("div"),e=E("p"),i=x(s),r=S(),o=E("p"),l=x(d),b(e,"class","bold svelte-1uloj0q"),b(o,"class","svelte-1uloj0q"),b(t,"data-mileage",u=`${n[12].miles_to_date}/${n[0]} miles (${Math.round(n[12].miles_to_date/n[0]*100)}%) done  \n${n[12].mileage} miles today`),b(t,"class","update-box svelte-1uloj0q")},m(n,u){m(n,t,u),g(t,e),g(e,i),g(t,r),g(t,o),g(o,l),f=!0},p(n,e){(!f||16&e)&&s!==(s=qt(n[12].date)+"")&&w(i,s),(!f||16&e)&&d!==(d=n[12].text+"")&&w(l,d),(!f||17&e&&u!==(u=`${n[12].miles_to_date}/${n[0]} miles (${Math.round(n[12].miles_to_date/n[0]*100)}%) done  \n${n[12].mileage} miles today`))&&b(t,"data-mileage",u)},i(n){f||(H((()=>{c&&c.end(1),a=rn(t,Bt,{duration:500}),a.start()})),f=!0)},o(n){a&&a.invalidate(),c=on(t,Yt,{duration:500}),f=!1},d(n){n&&y(t),n&&c&&c.end()}}}function Ft(n){let t,e,i,l,u,a,f,s,d;function p(){return n[9](n[14])}let h=!n[12].hidden&&Dt(n);return{c(){t=E("div"),i=S(),l=E("div"),h&&h.c(),u=S(),b(t,"class","update-button svelte-1uloj0q"),T(t,"hidden",n[12].hidden),b(l,"class","update svelte-1uloj0q"),T(l,"hidden",n[12].hidden)},m(r,o){m(r,t,o),m(r,i,o),m(r,l,o),h&&h.m(l,null),g(l,u),f=!0,s||(d=[M(t,"click",p),c(e=Wt.call(null,t,n[12].xy)),c(a=Wt.call(null,l,{...n[12].xy,overset:n[1]/3+"px"}))],s=!0)},p(i,r){n=i,e&&o(e.update)&&16&r&&e.update.call(null,n[12].xy),(!f||16&r)&&T(t,"hidden",n[12].hidden),n[12].hidden?h&&(V(),tn(h,1,1,(()=>{h=null})),Z()):h?(h.p(n,r),16&r&&nn(h,1)):(h=Dt(n),h.c(),nn(h,1),h.m(l,u)),a&&o(a.update)&&18&r&&a.update.call(null,{...n[12].xy,overset:n[1]/3+"px"}),(!f||16&r)&&T(l,"hidden",n[12].hidden)},i(n){f||(nn(h),f=!0)},o(n){tn(h),f=!1},d(n){n&&y(t),n&&y(i),n&&y(l),h&&h.d(),s=!1,r(d)}}}function Ht(n){let t,e,i,r,o,l,u,a,c,f=n[3],s=[];for(let t=0;t<f.length;t+=1)s[t]=zt(Ct(n,f,t));let d=n[4],p=[];for(let t=0;t<d.length;t+=1)p[t]=Rt(Ot(n,d,t));const h=n=>tn(p[n],1,1,(()=>{p[n]=null}));let v=n[4],x=[];for(let t=0;t<v.length;t+=1)x[t]=Ft(It(n,v,t));const w=n=>tn(x[n],1,1,(()=>{x[n]=null}));return{c(){t=E("div"),e=E("div");for(let n=0;n<s.length;n+=1)s[n].c();i=S();for(let n=0;n<p.length;n+=1)p[n].c();o=S(),l=E("div");for(let n=0;n<x.length;n+=1)x[n].c();b(e,"class","aspect svelte-1uloj0q"),H((()=>n[8].call(e))),b(l,"class","update-wrapper svelte-1uloj0q"),b(t,"id","map-frame"),b(t,"class","svelte-1uloj0q")},m(f,d){m(f,t,d),g(t,e);for(let n=0;n<s.length;n+=1)s[n].m(e,null);g(e,i);for(let n=0;n<p.length;n+=1)p[n].m(e,null);r=function(n,t){"static"===getComputedStyle(n).position&&(n.style.position="relative");const e=E("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const i=L();let r;return i?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=M(window,"message",(n=>{n.source===e.contentWindow&&t()}))):(e.src="about:blank",e.onload=()=>{r=M(e.contentWindow,"resize",t)}),g(n,e),()=>{(i||r&&e.contentWindow)&&r(),y(e)}}(e,n[8].bind(e)),g(t,o),g(t,l);for(let n=0;n<x.length;n+=1)x[n].m(l,null);u=!0,a||(c=M(window,"resize",n[5]),a=!0)},p(n,[t]){if(8&t){let r;for(f=n[3],r=0;r<f.length;r+=1){const o=Ct(n,f,r);s[r]?s[r].p(o,t):(s[r]=zt(o),s[r].c(),s[r].m(e,i))}for(;r<s.length;r+=1)s[r].d(1);s.length=f.length}if(83&t){let i;for(d=n[4],i=0;i<d.length;i+=1){const r=Ot(n,d,i);p[i]?(p[i].p(r,t),nn(p[i],1)):(p[i]=Rt(r),p[i].c(),nn(p[i],1),p[i].m(e,null))}for(V(),i=d.length;i<p.length;i+=1)h(i);Z()}if(83&t){let e;for(v=n[4],e=0;e<v.length;e+=1){const i=It(n,v,e);x[e]?(x[e].p(i,t),nn(x[e],1)):(x[e]=Ft(i),x[e].c(),nn(x[e],1),x[e].m(l,null))}for(V(),e=v.length;e<x.length;e+=1)w(e);Z()}},i(n){if(!u){for(let n=0;n<d.length;n+=1)nn(p[n]);for(let n=0;n<v.length;n+=1)nn(x[n]);u=!0}},o(n){p=p.filter(Boolean);for(let n=0;n<p.length;n+=1)tn(p[n]);x=x.filter(Boolean);for(let n=0;n<x.length;n+=1)tn(x[n]);u=!1},d(n){n&&y(t),$(s,n),$(p,n),r(),$(x,n),a=!1,c()}}}function Wt(n,t){return Ut(n,t),{update(t){Ut(n,t)}}}function Ut(n,t){for(const e in t)n.style.setProperty(`--${e}`,t[e])}function Bt(n,{duration:t}){return{duration:t,css:n=>`transform:translateY(-${100*(1-n)}%)`}}function Yt(n,{duration:t}){return{duration:t,css:n=>`transform:translateY(${-100*(1-n)}%)`}}function Jt(n,t,e){let i,r,{TOTALMILES:o}=t,l=[["Lake\nSuperior",[-90.9723671181851,47.422775426021936],{x:100,y:100},"water right"],["Duluth",[-92.12158682183562,46.77394061610688],{x:0,y:0},"city center"],["Silver Bay",[-91.23951935174807,47.28011825781504],{x:0,y:0},"city right"],["Two Harbors",[-91.64245720122472,47.001486961532194],{x:0,y:0},"city right"],["Tofte",[-90.81520984576878,47.55753174331404],{x:0,y:0},"city right"],["Grand Marais",[-90.35334601263449,47.733470516951584],{x:0,y:0},"city right"],["Minnesota",[-92.0497067919744,47.52108865683481],{x:0,y:0},"state right"],["Wisconsin",[-91.6438416420776,46.671178157783125],{x:0,y:0},"state right"],["Canada",[-89.86373098941874,48.03288607250681],{x:0,y:0},"country center"],["Superior\nHiking\nTrail",[-91.52589435664864,47.18261550318792],{x:0,y:0},"trail left"]];const u={type:"Polygon",coordinates:[[[-93.06402062100331,47.383390452738126],[-90.50577234759776,48.724378875357516],[-89.13746283717852,47.45341249771137],[-91.51889561667839,46.18173504256259],[-93.06402062100331,47.383390452738126]]]},a=(c=Tt(kt),f=c.center,s=c.rotate,c.center=function(n){return arguments.length?f([-n[1],n[0]]):[(n=f())[1],-n[0]]},c.rotate=function(n){return arguments.length?s([n[0],n[1],n.length>2?n[2]+90:90]):[(n=s())[0],n[1],n[2]-90]},s([0,0,90]).scale(159.155)).rotate([93,-47,-130]).fitSize([i,r],u);var c,f,s;let d=At.updates.map(((n,t)=>(n.date=new Date(n.date),n.location=n.location.map((n=>parseFloat(n))),n.hidden=!(t===At.updates.length-1),n))).map((n=>(n.xy={x:`${a(n.location)[0]}px`,y:`${a(n.location)[1]}px`},n)));function p(){a.fitSize([i,r],u),l.map((n=>(n[2]={x:`${a(n[1])[0]}px`,y:`${a(n[1])[1]}px`},n))),e(3,l),d.map((n=>{n.xy={x:`${a(n.location)[0]}px`,y:`${a(n.location)[1]}px`}})),e(4,d)}O((async()=>{p()}));const h=n=>{d[n].hidden&&d.filter(((t,e)=>!t.hidden&&e!==n)).map((n=>(n.hidden=!0,n))),e(4,d[n].hidden=!d[n].hidden,d),e(4,d)};return n.$$set=n=>{"TOTALMILES"in n&&e(0,o=n.TOTALMILES)},[o,i,r,l,d,p,h,n=>{h(n)},function(){i=this.clientWidth,r=this.clientHeight,e(1,i),e(2,r)},n=>{h(n)}]}class Gt extends sn{constructor(n){super(),fn(this,n,Jt,Ht,l,{TOTALMILES:0})}}function Xt(t){let e,i,r,o,l,a,c,f,s;return{c(){var n,d,p,h,v,g;e=E("div"),i=E("div"),i.innerHTML='<div class="circle circle1 svelte-fh1vb2"></div> \n        <div class="circle circle2 svelte-fh1vb2"></div>',r=S(),o=E("div"),o.innerHTML='<div class="circle circle1 svelte-fh1vb2"></div> \n        <div class="circle circle2 svelte-fh1vb2"></div>',l=S(),a=E("div"),c=E("div"),f=E("img"),b(i,"class","squiggle-wrapper dark svelte-fh1vb2"),b(o,"class","squiggle-wrapper svelte-fh1vb2"),b(f,"alt","illustration of nico"),n=f.src,d=s="/nicohiking.gif",u||(u=document.createElement("a")),u.href=d,n!==u.href&&b(f,"src","/nicohiking.gif"),b(f,"class","svelte-fh1vb2"),b(c,"id","pixel-hiker"),p=c,h="--done",null===(v=t[0])?p.style.removeProperty(h):p.style.setProperty(h,v,g?"important":""),b(c,"class","svelte-fh1vb2"),b(a,"class","hiker-wrapper svelte-fh1vb2"),b(e,"class","nav-bar svelte-fh1vb2")},m(n,t){m(n,e,t),g(e,i),g(e,r),g(e,o),g(e,l),g(e,a),g(a,c),g(c,f)},p:n,i:n,o:n,d(n){n&&y(e)}}}function Kt(n,t,e){let{TOTALMILES:i}=t,{CURRENTMILES:r}=t;const o=`${Math.round(r/i*100)}%`;return n.$$set=n=>{"TOTALMILES"in n&&e(1,i=n.TOTALMILES),"CURRENTMILES"in n&&e(2,r=n.CURRENTMILES)},[o,i,r]}class Qt extends sn{constructor(n){super(),fn(this,n,Kt,Xt,l,{TOTALMILES:1,CURRENTMILES:2})}}function Vt(t){let e,i,r,o,l,u;return e=new Qt({props:{TOTALMILES:Zt,CURRENTMILES:t[0]}}),l=new Gt({props:{TOTALMILES:Zt}}),{c(){ln(e.$$.fragment),i=S(),r=E("div"),o=E("div"),ln(l.$$.fragment),b(o,"class","map"),b(r,"class","container svelte-1qisjtq")},m(n,t){un(e,n,t),m(n,i,t),m(n,r,t),g(r,o),un(l,o,null),u=!0},p:n,i(n){u||(nn(e.$$.fragment,n),nn(l.$$.fragment,n),u=!0)},o(n){tn(e.$$.fragment,n),tn(l.$$.fragment,n),u=!1},d(n){an(e,n),n&&y(i),n&&y(r),an(l)}}}const Zt=260;function ne(n){return[parseInt(At.updates[At.updates.length-1].miles_to_date)]}return new class extends sn{constructor(n){super(),fn(this,n,ne,Vt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
