!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t["raf-plus"]=t["raf-plus"]||{})}(this,function(t){"use strict";function n(t,n){return n={exports:{}},t(n,n.exports),n.exports}var r=Math.ceil,e=Math.floor,o=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)},i=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},u=n(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),f=n(function(t){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)}),c=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},a=function(t,n,r){if(c(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}},s=function(t){return"object"==typeof t?null!==t:"function"==typeof t},l=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t},p=function(t){try{return!!t()}catch(t){return!0}},v=!p(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),h=u.document,y=s(h)&&s(h.createElement),d=function(t){return y?h.createElement(t):{}},_=!v&&!p(function(){return 7!=Object.defineProperty(d("div"),"a",{get:function(){return 7}}).a}),g=function(t,n){if(!s(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!s(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!s(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!s(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},w=Object.defineProperty,b={f:v?Object.defineProperty:function(t,n,r){if(l(t),n=g(n,!0),l(r),_)try{return w(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},m=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},O=v?function(t,n,r){return b.f(t,n,m(1,r))}:function(t,n,r){return t[n]=r,t},E=function(t,n,r){var e,o,i,c=t&E.F,s=t&E.G,l=t&E.S,p=t&E.P,v=t&E.B,h=t&E.W,y=s?f:f[n]||(f[n]={}),d=y.prototype,_=s?u:l?u[n]:(u[n]||{}).prototype;s&&(r=n);for(e in r)(o=!c&&_&&void 0!==_[e])&&e in y||(i=o?_[e]:r[e],y[e]=s&&"function"!=typeof _[e]?r[e]:v&&o?a(i,u):h&&_[e]==i?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(i):p&&"function"==typeof i?a(Function.call,i):i,p&&((y.virtual||(y.virtual={}))[e]=i,t&E.R&&d&&!d[e]&&O(d,e,i)))};E.F=1,E.G=2,E.S=4,E.P=8,E.B=16,E.W=32,E.U=64,E.R=128;var S=E,j=O,A={}.hasOwnProperty,k=function(t,n){return A.call(t,n)},M={},x={}.toString,P=function(t){return x.call(t).slice(8,-1)},F=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==P(t)?t.split(""):Object(t)},T=function(t){return F(i(t))},N=Math.min,R=function(t){return t>0?N(o(t),9007199254740991):0},C=Math.max,I=Math.min,z=function(t,n){return(t=o(t))<0?C(t+n,0):I(t,n)},L=u["__core-js_shared__"]||(u["__core-js_shared__"]={}),W=function(t){return L[t]||(L[t]={})},D=0,K=Math.random(),B=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++D+K).toString(36))},G=W("keys"),J=function(t){return G[t]||(G[t]=B(t))},U=function(t){return function(n,r,e){var o,i=T(n),u=R(i.length),f=z(e,u);if(t&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((t||f in i)&&i[f]===r)return t||f||0;return!t&&-1}}(!1),q=J("IE_PROTO"),Y=function(t,n){var r,e=T(t),o=0,i=[];for(r in e)r!=q&&k(e,r)&&i.push(r);for(;n.length>o;)k(e,r=n[o++])&&(~U(i,r)||i.push(r));return i},H="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Q=Object.keys||function(t){return Y(t,H)},V=v?Object.defineProperties:function(t,n){l(t);for(var r,e=Q(n),o=e.length,i=0;o>i;)b.f(t,r=e[i++],n[r]);return t},X=u.document&&document.documentElement,Z=J("IE_PROTO"),$=function(){},tt=function(){var t,n=d("iframe"),r=H.length;for(n.style.display="none",X.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),tt=t.F;r--;)delete tt.prototype[H[r]];return tt()},nt=Object.create||function(t,n){var r;return null!==t?($.prototype=l(t),r=new $,$.prototype=null,r[Z]=t):r=tt(),void 0===n?r:V(r,n)},rt=n(function(t){var n=W("wks"),r=u.Symbol,e="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=e&&r[t]||(e?r:B)("Symbol."+t))}).store=n}),et=b.f,ot=rt("toStringTag"),it=function(t,n,r){t&&!k(t=r?t:t.prototype,ot)&&et(t,ot,{configurable:!0,value:n})},ut={};O(ut,rt("iterator"),function(){return this});var ft=function(t,n,r){t.prototype=nt(ut,{next:m(1,r)}),it(t,n+" Iterator")},ct=function(t){return Object(i(t))},at=J("IE_PROTO"),st=Object.prototype,lt=Object.getPrototypeOf||function(t){return t=ct(t),k(t,at)?t[at]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?st:null},pt=rt("iterator"),vt=!([].keys&&"next"in[].keys()),ht=function(){return this},yt=function(t,n,r,e,o,i,u){ft(r,n,e);var f,c,a,s=function(t){if(!vt&&t in h)return h[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},l=n+" Iterator",p="values"==o,v=!1,h=t.prototype,y=h[pt]||h["@@iterator"]||o&&h[o],d=y||s(o),_=o?p?s("entries"):d:void 0,g="Array"==n?h.entries||y:y;if(g&&(a=lt(g.call(new t)))!==Object.prototype&&it(a,l,!0),p&&y&&"values"!==y.name&&(v=!0,d=function(){return y.call(this)}),u&&(vt||v||!h[pt])&&O(h,pt,d),M[n]=d,M[l]=ht,o)if(f={values:p?d:s("values"),keys:i?d:s("keys"),entries:_},u)for(c in f)c in h||j(h,c,f[c]);else S(S.P+S.F*(vt||v),n,f);return f},dt=function(t){return function(n,r){var e,u,f=String(i(n)),c=o(r),a=f.length;return c<0||c>=a?t?"":void 0:(e=f.charCodeAt(c))<55296||e>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):e:t?f.slice(c,c+2):u-56320+(e-55296<<10)+65536}}(!0);yt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=dt(n,r),this._i+=t.length,{value:t,done:!1})});var _t=function(){},gt=function(t,n){return{value:n,done:!!t}};yt(Array,"Array",function(t,n){this._t=T(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,gt(1)):"keys"==n?gt(0,r):"values"==n?gt(0,t[r]):gt(0,[r,t[r]])},"values");M.Arguments=M.Array,_t(),_t(),_t();for(var wt=rt("toStringTag"),bt=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],mt=0;mt<5;mt++){var Ot=bt[mt],Et=u[Ot],St=Et&&Et.prototype;St&&!St[wt]&&O(St,wt,Ot),M[Ot]=M.Array}var jt=function(t,n,r){for(var e in n)r&&t[e]?t[e]=n[e]:O(t,e,n[e]);return t},At=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t},kt=function(t,n,r,e){try{return e?n(l(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&l(o.call(t)),n}},Mt=rt("iterator"),xt=Array.prototype,Pt=function(t){return void 0!==t&&(M.Array===t||xt[Mt]===t)},Ft=rt("toStringTag"),Tt="Arguments"==P(function(){return arguments}()),Nt=function(t,n){try{return t[n]}catch(t){}},Rt=function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=Nt(n=Object(t),Ft))?r:Tt?P(n):"Object"==(e=P(n))&&"function"==typeof n.callee?"Arguments":e},Ct=rt("iterator"),It=f.getIteratorMethod=function(t){if(void 0!=t)return t[Ct]||t["@@iterator"]||M[Rt(t)]},zt=n(function(t){var n={},r={},e=t.exports=function(t,e,o,i,u){var f,c,s,p,v=u?function(){return t}:It(t),h=a(o,i,e?2:1),y=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(Pt(v)){for(f=R(t.length);f>y;y++)if((p=e?h(l(c=t[y])[0],c[1]):h(t[y]))===n||p===r)return p}else for(s=v.call(t);!(c=s.next()).done;)if((p=kt(s,h,c.value,e))===n||p===r)return p};e.BREAK=n,e.RETURN=r}),Lt=rt("species"),Wt=function(t){var n="function"==typeof f[t]?f[t]:u[t];v&&n&&!n[Lt]&&b.f(n,Lt,{configurable:!0,get:function(){return this}})},Dt=n(function(t){var n=B("meta"),r=b.f,e=0,o=Object.isExtensible||function(){return!0},i=!p(function(){return o(Object.preventExtensions({}))}),u=function(t){r(t,n,{value:{i:"O"+ ++e,w:{}}})},f=t.exports={KEY:n,NEED:!1,fastKey:function(t,r){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!k(t,n)){if(!o(t))return"F";if(!r)return"E";u(t)}return t[n].i},getWeak:function(t,r){if(!k(t,n)){if(!o(t))return!0;if(!r)return!1;u(t)}return t[n].w},onFreeze:function(t){return i&&f.NEED&&o(t)&&!k(t,n)&&u(t),t}}}),Kt=b.f,Bt=Dt.fastKey,Gt=v?"_s":"size",Jt=function(t,n){var r,e=Bt(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r},Ut={getConstructor:function(t,n,r,e){var o=t(function(t,i){At(t,o,n,"_i"),t._i=nt(null),t._f=void 0,t._l=void 0,t[Gt]=0,void 0!=i&&zt(i,r,t[e],t)});return jt(o.prototype,{clear:function(){for(var t=this,n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[Gt]=0},delete:function(t){var n=this,r=Jt(n,t);if(r){var e=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=e),e&&(e.p=o),n._f==r&&(n._f=e),n._l==r&&(n._l=o),n[Gt]--}return!!r},forEach:function(t){At(this,o,"forEach");for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!Jt(this,t)}}),v&&Kt(o.prototype,"size",{get:function(){return i(this[Gt])}}),o},def:function(t,n,r){var e,o,i=Jt(t,n);return i?i.v=r:(t._l=i={i:o=Bt(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=i),e&&(e.n=i),t[Gt]++,"F"!==o&&(t._i[o]=i)),t},getEntry:Jt,setStrong:function(t,n,r){yt(t,n,function(t,n){this._t=t,this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?gt(0,r.k):"values"==n?gt(0,r.v):gt(0,[r.k,r.v]):(t._t=void 0,gt(1))},r?"entries":"values",!r,!0),Wt(n)}},qt=Array.isArray||function(t){return"Array"==P(t)},Yt=rt("species"),Ht=function(t){var n;return qt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!qt(n.prototype)||(n=void 0),s(n)&&null===(n=n[Yt])&&(n=void 0)),void 0===n?Array:n},Qt=function(t,n){return new(Ht(t))(n)},Vt=b.f,Xt=function(t,n){var r=1==t,e=2==t,o=3==t,i=4==t,u=6==t,f=5==t||u,c=n||Qt;return function(n,s,l){for(var p,v,h=ct(n),y=F(h),d=a(s,l,3),_=R(y.length),g=0,w=r?c(n,_):e?c(n,0):void 0;_>g;g++)if((f||g in y)&&(p=y[g],v=d(p,g,h),t))if(r)w[g]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return g;case 2:w.push(p)}else if(i)return!1;return u?-1:o||i?i:w}}(0),Zt=(function(t,n,r,e,o,i){var f=u[t],c=f,a=o?"set":"add",l=c&&c.prototype,h={};v&&"function"==typeof c&&(i||l.forEach&&!p(function(){(new c).entries().next()}))?(c=n(function(n,r){At(n,c,t,"_c"),n._c=new f,void 0!=r&&zt(r,o,n[a],n)}),Xt("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var n="add"==t||"set"==t;t in l&&(!i||"clear"!=t)&&O(c.prototype,t,function(r,e){if(At(this,c,t),!n&&i&&!s(r))return"get"==t&&void 0;var o=this._c[t](0===r?0:r,e);return n?this:o})}),"size"in l&&Vt(c.prototype,"size",{get:function(){return this._c.size}})):(c=e.getConstructor(n,t,o,a),jt(c.prototype,r),Dt.NEED=!0),it(c,t),h[t]=c,S(S.G+S.W+S.F,h),i||e.setStrong(c,t,o)}("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=Ut.getEntry(this,t);return n&&n.v},set:function(t,n){return Ut.def(this,0===t?0:t,n)}},Ut,!0),function(t,n){var r=[];return zt(t,!1,r.push,r,n),r});S(S.P+S.R,"Map",{toJSON:function(t){return function(){if(Rt(this)!=t)throw TypeError(t+"#toJSON isn't generic");return Zt(this)}}("Map")});var $t=f.Map,tn=function(t,n){var r=null;return t.forEach(function(t,e){t===n&&(r=e)}),r},nn=new(function(t){return t&&t.__esModule?t.default:t}(n(function(t){t.exports={default:$t,__esModule:!0}})));t.requestAnimationFrame=function(t){if(nn.has(t))return nn.get(t);var n=window.requestAnimationFrame(function(n){nn.delete(t),t(n)});return nn.set(t,n),n},t.cancelAnimationFrame=function(t){return nn.delete(tn(nn,t)),window.cancelAnimationFrame(t)},Object.defineProperty(t,"__esModule",{value:!0})});
