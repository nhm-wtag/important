(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ia(a,a)}
function ia(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function sa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ta(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
sa.prototype.A=function(a){this.l=a};
function ua(a,b){a.i={Kd:b,ee:!0};a.g=a.o||a.s}
sa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.M=function(a){this.g=a};
function va(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function wa(a){a.o=0;var b=a.i.Kd;a.i=null;return b}
function xa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.ee?a.g=a.o||a.s:b.M!=void 0&&a.s<b.M?(a.g=b.M,a.i=null):a.g=a.s:a.g=0}
function ya(a){this.g=new sa;this.l=a}
function za(a,b){ta(a.g);var c=a.g.m;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ua(a.g,g),Ba(a)}a.g.m=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ua(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ee)throw b.Kd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m["throw"],b,a.g.A):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.m(k)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}typeof h=="function"?this.O(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if(typeof l==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.cc(h.resolve,h.reject)};
b.prototype.O=function(g,h){var l=this.m();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(r,q){return typeof r=="function"?function(t){try{k(r(t))}catch(u){m(u)}}:q}
var k,m,p=new b(function(r,q){k=r;m=q});
this.cc(l(g,k),l(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;this.l==null?f.l(l):this.l.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).cc(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function p(t){return function(u){r[t]=u;q--;q==0&&k(r)}}
var r=[],q=0;do r.push(void 0),q++,d(l.value).cc(p(r.length-1),m),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||qa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("globalThis",function(a){return a||ea});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return k==="object"&&l!==null||k==="function"}
function e(l){if(!ja(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(m.get(l)!=2||m.get(k)!=3)return!1;m.delete(l);m.set(k,4);return!m.has(l)&&m.get(k)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ja(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&ja(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return fa(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;k=="object"||k=="function"?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&ja(h[0],k))for(h=0;h<m.length;h++){var p=m[h];if(l!==l&&p.key!==p.key||l===p.key)return{id:k,list:m,index:h,entry:p}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if(l.get(h)!="s"||l.size!=1||l.get({x:4})||l.set({x:4},"t")!=l||l.size!=2)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=k.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!k.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=h===0?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
function Ha(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ha(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ia(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"}
function Ja(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ka(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ka:Ma;return E.apply(null,arguments)}
function F(){return Date.now()}
function G(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Hh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function Na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Na);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
H(Na,Error);Na.prototype.name="CustomError";function Oa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Qa(a,b){return a<b?-1:a>b?1:0}
;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Ra(a){return{valueOf:a}.valueOf()}
;var Sa=globalThis.trustedTypes,Ta;function Ua(){var a=null;if(!Sa)return a;try{var b=function(c){return c};
a=Sa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function Wa(){Ta===void 0&&(Ta=Ua());return Ta}
;function Xa(a){this.g=a}
Xa.prototype.toString=function(){return this.g+""};
function Ya(a){var b=Wa();return new Xa(b?b.createScriptURL(a):a)}
function Za(a){if(a instanceof Xa)return a.g;throw Error("");}
;function $a(a){this.g=a}
$a.prototype.toString=function(){return this.g};
var ab=new $a("about:invalid#zClosurez");function bb(a){this.jg=a}
function cb(a){return new bb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var db=[cb("data"),cb("http"),cb("https"),cb("mailto"),cb("ftp"),new bb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function eb(a){for(var b=Fa.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new $a(c.join(""))}
var hb=Ra(function(){return typeof URL==="function"}),ib=["data:",
"http:","https:","mailto:","ftp:"],jb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function kb(a){if(a instanceof $a)if(a instanceof $a)a=a.g;else throw Error("");else a=jb.test(a)?a:void 0;return a}
;function lb(a,b){b=kb(b);b!==void 0&&(a.href=b)}
;function mb(a){this.g=a}
mb.prototype.toString=function(){return this.g+""};
function nb(a){var b=Wa();return new mb(b?b.createHTML(a):a)}
function ob(a){if(a instanceof mb)return a.g;throw Error("");}
;function pb(a,b){if(a.nodeType===1&&/^(script|style)$/i.test(a.tagName))throw Error("");a.innerHTML=ob(b)}
;function qb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function rb(a,b){a.src=Za(b);var c;b=a.ownerDocument&&a.ownerDocument.defaultView||window;b=b===void 0?document:b;var d;b=(d=(c="document"in b?b.document:b).querySelector)==null?void 0:d.call(c,"script[nonce]");(c=b==null?"":b.nonce||b.getAttribute("nonce")||"")&&a.setAttribute("nonce",c)}
;var sb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},tb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},ub=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e};
function vb(a,b){b=sb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function wb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function xb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function yb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ab(a){return a?decodeURI(a):a}
function Bb(a){return Ab(a.match(zb)[3]||null)}
function Cb(a){var b=a.match(zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Db(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Eb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Eb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Fb(a){var b=[],c;for(c in a)Eb(c,a[c],b);return b.join("&")}
function Gb(a,b){b=Fb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Hb(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Ib=/#|$/,Jb=/[?&]($|#)/;function Kb(a){C.setTimeout(function(){throw a;},0)}
;var Lb,Mb=D("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=Nb!=null?Nb:!1;function Ob(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=C.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Ob().indexOf(a)!=-1}
;function Sb(){return Lb?!!Pb&&Pb.brands.length>0:!1}
function Tb(){return Sb()?!1:I("Opera")}
function Ub(){return Sb()?!1:I("Trident")||I("MSIE")}
function Vb(){return Sb()?Rb("Microsoft Edge"):I("Edg/")}
function Wb(){return I("Safari")&&!(Xb()||(Sb()?0:I("Coast"))||Tb()||(Sb()?0:I("Edge"))||Vb()||(Sb()?Rb("Opera"):I("OPR"))||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))}
function Xb(){return Sb()?Rb("Chromium"):(I("Chrome")||I("CriOS"))&&!(Sb()?0:I("Edge"))||I("Silk")}
function Yb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function Zb(){var a=Ob();if(Ub()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=Yb(b);return Tb()?a(["Version","Opera"]):
(Sb()?0:I("Edge"))?a(["Edge"]):Vb()?a(["Edg"]):I("Silk")?a(["Silk"]):Xb()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function $b(){return Lb&&Pb&&Pb.platform?Pb.platform==="Android":I("Android")}
function ac(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;var bc=Ub(),cc=I("Edge"),dc=$b();var ec=ac()||I("iPod"),fc=I("iPad");!I("Android")||Xb();Xb();var gc=Wb()&&!(ac()||I("iPad")||I("iPod"));var hc={},ic=null;
function jc(a,b){Ia(a);b===void 0&&(b=0);if(!ic){ic={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));hc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];ic[h]===void 0&&(ic[h]=g)}}}b=hc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var kc=typeof Uint8Array!=="undefined",lc=!bc&&typeof btoa==="function";var mc;function nc(){var a=Error();xb(a,"incident");Kb(a)}
function oc(a){a=Error(a);xb(a,"warning");return a}
;function pc(){return typeof BigInt==="function"}
;var qc=typeof Symbol==="function"&&typeof Symbol()==="symbol";function rc(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var sc=rc(),tc=rc("2ex"),uc=rc("1oa");Math.max.apply(Math,x(Object.values({th:1,rh:2,qh:4,wh:8,vh:16,uh:32,kh:64,yh:128,ph:256,oh:512,sh:1024,mh:2048,xh:4096,nh:8192,lh:16384})));var vc=qc?function(a,b){a[sc]|=b}:function(a,b){a.Da!==void 0?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},wc=qc?function(a,b){a[sc]&=~b}:function(a,b){a.Da!==void 0&&(a.Da&=~b)},xc=qc?function(a){return a[sc]|0}:function(a){return a.Da|0},yc=qc?function(a){return a[sc]}:function(a){return a.Da},zc=qc?function(a,b){a[sc]=b}:function(a,b){a.Da!==void 0?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ac(a,b){zc(b,(a|0)&-30975)}
function Bc(a,b){zc(b,(a|34)&-30941)}
;var Cc={},Dc={};function Ec(a){return!(!a||typeof a!=="object"||a.g!==Dc)}
function Fc(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Gc(a){return!Array.isArray(a)||a.length?!1:xc(a)&1?!0:!1}
var Hc,Ic=[];zc(Ic,55);Hc=Object.freeze(Ic);function Jc(a){if(a&2)throw Error();}
;function Kc(a){a.Xh=!0;return a}
;var Lc=Kc(function(a){return typeof a==="number"}),Mc=Kc(function(a){return typeof a==="string"}),Nc=Kc(function(a){return typeof a==="boolean"});var Oc=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Pc(a){var b=a;if(Mc(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Lc(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Oc?BigInt(a):a=Nc(a)?a?"1":"0":Mc(a)?a.trim()||"0":String(a)}
var Vc=Kc(function(a){return Oc?a>=Qc&&a<=Rc:a[0]==="-"?Sc(a,Tc):Sc(a,Uc)}),Tc=Number.MIN_SAFE_INTEGER.toString(),Qc=Oc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Uc=Number.MAX_SAFE_INTEGER.toString(),Rc=Oc?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Sc(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var Wc=0,Xc=0;function Yc(a){var b=a>>>0;Wc=b;Xc=(a-b)/4294967296>>>0}
function Zc(a){if(a<0){Yc(0-a);var b=w($c(Wc,Xc));a=b.next().value;b=b.next().value;Wc=a>>>0;Xc=b>>>0}else Yc(a)}
function ad(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else pc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+bd(c)+bd(a));return c}
function bd(a){a=String(a);return"0000000".slice(a.length)+a}
function cd(){var a=Wc,b=Xc;b&2147483648?pc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w($c(a,b)),a=b.next().value,b=b.next().value,a="-"+ad(a,b)):a=ad(a,b);return a}
function $c(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function dd(a){return a.displayName||a.name||"unknown type name"}
var ed=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function fd(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:ed.test(a)}
function gd(a){var b=0;b=b===void 0?0:b;if(!fd(a))throw oc("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return hd(a);case "bigint":return String(BigInt.asIntN(64,a));default:return id(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Pc(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=pc()?Pc(BigInt.asIntN(64,BigInt(a))):Pc(jd(a))),a;case "bigint":return Pc(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?Pc(kd(a)):Pc(id(a))}case 0:switch(c){case "string":return hd(a);
case "bigint":return Pc(BigInt.asIntN(64,a));default:return kd(a)}default:return qb(b,"Unknown format requested type for int64")}}
function ld(a){return a==null?a:gd(a)}
function md(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function jd(a){if(md(a))return a;if(a.length<16)Zc(Number(a));else if(pc())a=BigInt(a),Wc=Number(a&BigInt(4294967295))>>>0,Xc=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Xc=Wc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Xc*=1E6,Wc=Wc*1E6+d,Wc>=4294967296&&(Xc+=Math.trunc(Wc/4294967296),Xc>>>=0,Wc>>>=0);b&&(b=w($c(Wc,Xc)),a=b.next().value,b=b.next().value,Wc=a,Xc=b)}return cd()}
function kd(a){fd(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Zc(a);var b=Wc,c=Xc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function id(a){fd(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);md(b)?a=b:(Zc(a),a=cd())}return a}
function hd(a){fd(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return jd(a)}
function nd(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function od(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+dd(b)+" but got "+(a&&dd(a.constructor)));return a}
function pd(a,b,c){if(a!=null&&typeof a==="object"&&a.cd===Cc)return a;if(Array.isArray(a)){var d=xc(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&zc(a,e);return new b(a)}}
;function qd(a){rd===void 0&&(rd=typeof Proxy==="function"?sd(Proxy):null);if(!rd||!td())return a;var b=ud(a);if(b)return b;if(Math.random()>.01)return a;vd(a);b=new rd(a,{set:function(c,d,e){wd();c[d]=e;return!0}});
xd(a,b);return b}
function wd(){nc()}
var yd=void 0,zd=void 0;function ud(a){var b;return(b=yd)==null?void 0:b.get(a)}
function xd(a,b){(yd||(yd=new Ad)).set(a,b);(zd||(zd=new Ad)).set(b,a)}
var rd=void 0,Ad=void 0;function td(){Ad===void 0&&(Ad=typeof WeakMap==="function"?sd(WeakMap):null);return Ad}
function sd(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Bd=void 0;function vd(a){if(Bd===void 0){var b=new rd([],{});Bd=Array.prototype.concat.call([],b).length===1}Bd&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
function Cd(a,b){var c=Dd(a,b);c&&!Ed(a,c)&&(Fd(),Gd(a,b))}
function Ed(a,b){if(a.length!==b.length)return!1;for(var c in b){var d=Number(c),e;if(e=Number.isInteger(d))e=a[d],d=b[d],e=!(Number.isNaN(e)?Number.isNaN(d):e===d);if(e)return!1}return!0}
function Hd(a){var b;if(a&&(b=Id)!=null&&b.has(a)&&(b=a.T))for(var c=0;c<b.length;c++){var d=b[c];if(c===b.length-1&&Fc(d))for(var e in d){var f=d[e];Array.isArray(f)&&Cd(f,a)}else Array.isArray(d)&&Cd(d,a)}}
function Fd(){nc()}
var Id=void 0;function Dd(a,b){var c,d;return(c=Id)==null?void 0:(d=c.get(b))==null?void 0:d.get(a)}
function Gd(a,b){var c,d;(c=Id)==null||(d=c.get(b))==null||d.delete(a)}
;var Jd;
function Kd(a,b,c){a==null&&(a=Jd);Jd=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=xc(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Fc(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<
15}}}zc(a,d);return a}
;function Ld(a,b){return Md(b)}
function Md(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return Vc(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Gc(a))return}else if(kc&&a!=null&&a instanceof Uint8Array){if(lc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=jc(a);return a}}return a}
;function Nd(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Od(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Gc(a)?void 0:e&&xc(a)&2?a:Pd(a,b,c,d!==void 0,e);else if(Fc(a)){var f={},g;for(g in a)f[g]=Od(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Pd(a,b,c,d,e){var f=d||c?xc(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=Od(a[g],b,c,d,e);c&&c(f,a);return a}
function Qd(a){return a.cd===Cc?a.toJSON():Md(a)}
;function Rd(a,b,c){c=c===void 0?Bc:c;if(a!=null){if(kc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=xc(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(zc(a,(d|34)&-12293),a):Pd(a,Rd,d&4?Bc:c,!0,!0)}a.cd===Cc&&(c=a.T,d=yc(c),a=d&2?a:Sd(a,c,d,!0));return a}}
function Sd(a,b,c,d){Hd(a);a=a.constructor;b=Td(b,c,d);xc(b);Jd=b;b=new a(b);Jd=void 0;return b}
function Td(a,b,c){var d=c||b&2?Bc:Ac,e=!!(b&32);a=Nd(a,b,function(f){return Rd(f,e,d)});
vc(a,32|(c?2:0));return a}
function Ud(a){var b=a.T,c=yc(b);return c&2?Sd(a,b,c,!1):a}
;function Vd(a,b){a=a.T;return Wd(a,yc(a),b)}
function Xd(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Wd(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Xd(a,b,e,c)&&tc!=null){var g;a=(g=mc)!=null?g:mc={};g=a[tc]||0;g>=4||(a[tc]=g+1,nc())}return d}return Xd(a,b,e,c)}}
function Yd(a,b,c){var d=a.T,e=yc(d);Jc(e);Zd(d,e,b,c);return a}
function Zd(a,b,c,d){Fc(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&zc(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function $d(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ae(a){if(qc){var b;return(b=a[uc])!=null?b:a[uc]=new Map}if(uc in a)return a[uc];b=new Map;Object.defineProperty(a,uc,{value:b});return b}
function be(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Wd(b,c,g)!=null&&(e!==0&&(c=Zd(b,c,e)),e=g)}a.set(d,e);return e}
function ce(a,b,c){var d=d===void 0?!1:d;var e=a.T;var f=yc(e);d=Wd(e,f,c,d);b=pd(d,b,f);b!==d&&b!=null&&Zd(e,f,c,b);e=b;if(e==null)return e;a=a.T;f=yc(a);f&2||(b=Ud(e),b!==e&&(e=b,Zd(a,f,c,e)));return e}
function de(a,b,c,d){d!=null?od(d,b):d=void 0;return Yd(a,c,d)}
function ee(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function fe(a,b){var c=!0;32&b&&c||(a&=-33);return a}
function ge(a,b,c,d){var e=yc(a.T);Jc(e);var f=e,g,h=a.T,l=(e=!!(2&f))?1:2;g&&(g=!e);e=Wd(h,f,b);e=Array.isArray(e)?e:Hc;var k=xc(e),m=e;Cd(m,a);l!==2&&l!==1||Gd(m,a);m=!!(4&k);if(!m){var p=k;p===0&&(p=ee(p,f));k=e;p|=1;var r=f,q=!!(2&p);q&&(r|=2);for(var t=!q,u=!0,z=0,K=0;z<k.length;z++){var P=pd(k[z],c,r);if(P instanceof c){if(!q){var X=!!(xc(P.T)&2);t&&(t=!X);u&&(u=X)}k[K++]=P}}K<z&&(k.length=K);p|=4;p=u?p|16:p&-17;p=t?p|8:p&-9;zc(k,p);q&&Object.freeze(k);k=p}if(g&&!(8&k||!e.length&&(l===1||l===
4&&32&k))){$d(k)?(e=Array.prototype.slice.call(e),k=ee(k,f),f=Zd(h,f,b,e)):Gd(e,a);g=e;for(p=0;p<g.length;p++)r=g[p],q=Ud(r),r!==q&&(g[p]=q);k|=8;k=g.length?k&-17:k|16;zc(g,k)}if(l===1||l===4&&32&k)$d(k)||(a=k,b=!!(32&k),k|=!e.length||16&k&&(!m||b)?2:2048,k!==a&&zc(e,k),Object.freeze(e));else if(m=l!==5?!1:!!(32&k)||$d(k)||!!ud(e),(l===2||m)&&$d(k)&&(e=Array.prototype.slice.call(e),k=ee(k,f),k=fe(k,f),zc(e,k),f=Zd(h,f,b,e)),$d(k)||(b=k,k=fe(k,f),k!==b&&zc(e,k)),m){var O=qd(e);b=e;if(td()&&!(Dd(b,
a)||Math.random()>.01)){h=b.length;f={length:h};for(l=0;l<Math.min(h,10);l++)h<=10?m=l:(m=h/10,g=Math.floor(l*m),m=g+Math.floor(Math.random()*(Math.floor((l+1)*m)-g))),f[m]=b[m];Ed(b,f)?(h=Id||(Id=new Ad),l=h.get(a),l||(l=new Ad,h.set(a,l)),l.set(b,f)):(nc(),Gd(b,a))}}O=O||e;d=d!=null?od(d,c):new c;O.push(d);xc(d.T)&2?wc(O,8):wc(O,16)}
function he(a,b){var c=0;c=c===void 0?0:c;a=Vd(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function ie(a,b){var c=je;var d=a.T;c=be(ae(d),d,yc(d),c);a=Vd(a,c===b?b:-1);return a==null||typeof a==="string"?a:void 0}
function J(a,b,c){return Yd(a,b,nd(c))}
function ke(a,b,c){if(c!=null){if(!Number.isFinite(c))throw oc("enum");c|=0}return Yd(a,b,c)}
;var le;function me(a,b,c){this.T=Kd(a,b,c)}
me.prototype.toJSON=function(){return ne(this)};
me.prototype.clone=function(){var a=this.T;return Sd(this,a,yc(a),!1)};
me.prototype.cd=Cc;me.prototype.toString=function(){try{return le=!0,ne(this).toString()}finally{le=!1}};
function ne(a){Hd(a);var b;le?b=a.T:b=Pd(a.T,Qd,void 0,void 0,!1);var c=!le;yc(c?a.T:b);if(a=b.length){var d=b[a-1],e=Fc(d);e?a--:d=void 0;var f=b;if(e){b:{var g=d;var h;var l=!1;if(g)for(var k in g)if(isNaN(+k))e=void 0,((e=h)!=null?e:h={})[k]=g[k];else if(e=g[k],Array.isArray(e)&&(Gc(e)||Ec(e)&&e.size===0)&&(e=null),e==null&&(l=!0),e!=null){var m=void 0;((m=h)!=null?m:h={})[k]=e}l||(h=g);if(h)for(var p in h){l=h;break b}l=null}g=l==null?d!=null:l!==d}for(;a>0;a--){h=f[a-1];if(!(h==null||Gc(h)||
Ec(h)&&h.size===0))break;var r=!0}if(f!==b||g||r){if(!c)f=Array.prototype.slice.call(f,0,a);else if(r||g||l)f.length=a;l&&f.push(l)}r=f}else r=b;return r}
;var oe=window;function pe(){}
;function qe(a,b){this.width=a;this.height=b}
n=qe.prototype;n.clone=function(){return new qe(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function re(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function se(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=se(a[c]);return b}
var te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<te.length;f++)c=te[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function ve(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return ve.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function we(){var a=xe;return document.createRange().createContextualFragment(ob(nb(a[0])))}
;function ye(a,b){var c=b.createRange();c.selectNode(b.body);a=nb(a);return c.createContextualFragment(ob(a))}
;function ze(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function Ae(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var Be="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
Ce=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:5,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["IMG",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["VIDEO",new Map([["src",{ja:5}]])],["AUDIO",new Map([["src",{ja:5}]])]],De="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
Ee=[["dir",{ja:3,conditions:Ra(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Ra(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Ra(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Ra(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],Fe=new function(){var a=new Set(De),b=new Map(Ee),c=new Map(Ce);
this.l=new Set(Be);this.g=c;this.i=a;this.m=b};function Ge(){this.g=Fe}
function He(a,b){var c=document.implementation.createHTMLDocument("");a=Ie(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return nb(c)}
function Ie(a,b,c){b=ye(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(Ae(h))if(h=ze(h),h===null)h=2;else{var l=a.g;h=h!=="FORM"&&(l.l.has(h)||l.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(Ae(d))g=Je(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function Je(a,b,c){var d=ze(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var l=h.g.get(d);h=(l==null?0:l.has(f))?l.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(l=h.conditions){l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value);k=m.next().value;m=m.next().value;var p=void 0;if((k=(p=b.getNamedItem(k))==null?void 0:p.value)&&!m.has(k)){l=!1;break a}}}l=!0}if(l)switch(h.ja){case 1:Ke(c,f,g);break;
case 2:a:if(h=void 0,hb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}Ke(c,f,h!==void 0&&ib.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:Ke(c,f,g.toLowerCase());break;case 4:Ke(c,f,g);break;case 5:Ke(c,f,g);break;case 6:Ke(c,f,g)}}return c}
function Ke(a,b,c){a.setAttribute(b,c)}
var Le=Ra(function(){return new Ge});function Me(a){var b=Fa.apply(1,arguments);if(b.length===0)return Ya(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Ya(c)}
function Ne(a,b,c,d){function e(g,h){g!=null&&(Array.isArray(g)?g.forEach(function(l){return e(l,h)}):(b+=f+encodeURIComponent(h)+"="+encodeURIComponent(g),f="&"))}
var f=b.length?"&":"?";d.constructor===Object&&(d=Object.entries(d));Array.isArray(d)?d.forEach(function(g){return e(g[1],g[0])}):d.forEach(e);
return Ya(a+b+c)}
;function Oe(){return Lb&&Pb?Pb.mobile:!(Lb&&Pb?!Pb.mobile&&(I("iPad")||I("Android")||I("Silk")):I("iPad")||I("Android")&&!I("Mobile")||I("Silk"))&&(I("iPod")||I("iPhone")||I("Android")||I("IEMobile"))}
;function Pe(a){var b=Qe;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Re(){var a=[];Pe(function(b){a.push(b)});
return a}
var Qe={Yg:"allow-forms",Zg:"allow-modals",ah:"allow-orientation-lock",bh:"allow-pointer-lock",dh:"allow-popups",eh:"allow-popups-to-escape-sandbox",fh:"allow-presentation",gh:"allow-same-origin",hh:"allow-scripts",ih:"allow-top-navigation",jh:"allow-top-navigation-by-user-activation"},Se=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Re()});
function Te(){var a=Ue(),b={};tb(Se(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ue(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Ve(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var We=(new Date).getTime();function Xe(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Ye(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],z=e[3],K=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var P=z^t&(u^z);var X=1518500249}else P=t^u^z,X=1859775393;else q<60?(P=t&u|z&(t|u),X=2400959708):(P=t^u^z,X=3395469782);P=((p<<5|p>>>27)&4294967295)+P+K+X+r[q]&4294967295;K=z;z=u;u=(t<<30|t>>>2)&4294967295;t=p;p=P}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+K&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(k==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[k++]=p[q++],m++,k==64)for(k=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;k<56?c(h,56-k):c(h,64-(k-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],l=1;l<64;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,af:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Ze(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,$e(Xe(d),a,c||null)].join(" "):null}
function $e(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],tb(d,function(h){e.push(h)}),af(e.join(" "));
var f=[],g=[];tb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];tb(d,function(h){e.push(h)});
a=af(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function af(a){var b=Ye();b.update(a);return b.af().toLowerCase()}
;var bf={};function cf(a){this.g=a||{cookie:""}}
n=cf.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ad:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.li;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ad}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Pa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{ad:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Pa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var df=new cf(typeof document=="undefined"?null:document);function ef(a){return!!bf.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function ff(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;ef(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new cf(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");ef(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function gf(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new cf(document)).get(b));return a?Ze(a,c,d):null}
function hf(a){var b=b===void 0?!1:b;var c=Xe(String(C.location.href)),d=[];if(ff(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new cf(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Ze(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ef(b)&&((b=gf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=gf("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function jf(){this.ab=this.ab;this.m=this.m}
jf.prototype.ab=!1;jf.prototype.dispose=function(){this.ab||(this.ab=!0,this.Ba())};
jf.prototype[Symbol.dispose]=function(){this.dispose()};
jf.prototype.addOnDisposeCallback=function(a,b){this.ab?b!==void 0?a.call(b):a():(this.m||(this.m=[]),b&&(a=a.bind(b)),this.m.push(a))};
jf.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function kf(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
kf.prototype.stopPropagation=function(){this.i=!0};
kf.prototype.preventDefault=function(){this.defaultPrevented=!0};var lf=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function mf(a,b){kf.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
H(mf,kf);
mf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.l=a;a.defaultPrevented&&mf.Fa.preventDefault.call(this)};
mf.prototype.stopPropagation=function(){mf.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
mf.prototype.preventDefault=function(){mf.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var nf="closure_listenable_"+(Math.random()*1E6|0);var of=0;function pf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.lc=e;this.key=++of;this.Sb=this.Zb=!1}
function qf(a){a.Sb=!0;a.listener=null;a.proxy=null;a.src=null;a.lc=null}
;function rf(a){this.src=a;this.listeners={};this.g=0}
rf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=sf(a,b,d,e);g>-1?(b=a[g],c||(b.Zb=!1)):(b=new pf(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
rf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=sf(e,b,c,d);return b>-1?(qf(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function tf(a,b){var c=b.type;c in a.listeners&&vb(a.listeners[c],b)&&(qf(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function sf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sb&&f.listener==b&&f.capture==!!c&&f.lc==d)return e}return-1}
;var uf="closure_lm_"+(Math.random()*1E6|0),vf={},wf=0;function xf(a,b,c,d,e){if(d&&d.once)yf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)xf(a,b[f],c,d,e);else c=zf(c),a&&a[nf]?a.ra(b,c,Ja(d)?!!d.capture:!!d,e):Af(a,b,c,!1,d,e)}
function Af(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ja(e)?!!e.capture:!!e,h=Bf(a);h||(a[uf]=h=new rf(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Cf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)lf||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Df(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");wf++}}
function Cf(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ef;return a}
function yf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)yf(a,b[f],c,d,e);else c=zf(c),a&&a[nf]?a.g.add(String(b),c,!0,Ja(d)?!!d.capture:!!d,e):Af(a,b,c,!0,d,e)}
function Ff(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ff(a,b[f],c,d,e);else(d=Ja(d)?!!d.capture:!!d,c=zf(c),a&&a[nf])?a.g.remove(String(b),c,d,e):a&&(a=Bf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=sf(b,c,d,e)),(c=a>-1?b[a]:null)&&Gf(c))}
function Gf(a){if(typeof a!=="number"&&a&&!a.Sb){var b=a.src;if(b&&b[nf])tf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Df(c),d):b.addListener&&b.removeListener&&b.removeListener(d);wf--;(c=Bf(b))?(tf(c,a),c.g==0&&(c.src=null,b[uf]=null)):qf(a)}}}
function Df(a){return a in vf?vf[a]:vf[a]="on"+a}
function Ef(a,b){if(a.Sb)a=!0;else{b=new mf(b,this);var c=a.listener,d=a.lc||a.src;a.Zb&&Gf(a);a=c.call(d,b)}return a}
function Bf(a){a=a[uf];return a instanceof rf?a:null}
var Hf="__closure_events_fn_"+(Math.random()*1E9>>>0);function zf(a){if(typeof a==="function")return a;a[Hf]||(a[Hf]=function(b){return a.handleEvent(b)});
return a[Hf]}
;function If(){jf.call(this);this.g=new rf(this);this.B=this;this.u=null}
H(If,jf);If.prototype[nf]=!0;If.prototype.addEventListener=function(a,b,c,d){xf(this,a,b,c,d)};
If.prototype.removeEventListener=function(a,b,c,d){Ff(this,a,b,c,d)};
function Jf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new kf(b,a):b instanceof kf?b.target=b.target||a:(e=b,b=new kf(c,a),ue(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Kf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Kf(g,c,!0,b)&&e,b.i||(e=Kf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Kf(g,c,!1,b)&&e}
If.prototype.Ba=function(){If.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,qf(d[e]);delete a.listeners[c];a.g--}}this.u=null};
If.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Kf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Sb&&g.capture==c){var h=g.listener,l=g.lc||g.src;g.Zb&&tf(a.g,g);e=h.call(l,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Lf(a){If.call(this);var b=this;this.A=this.i=0;this.Ea=a!=null?a:{Ha:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return A(e,Mf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Nf(this)}
y(Lf,If);function Of(){var a=Pf;Lf.g||(Lf.g=new Lf(a));return Lf.g}
Lf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete Lf.g};
Lf.prototype.ya=function(){return this.l};
function Nf(a){a.A=a.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.M(3):A(c,Mf(a),3):A(c,Mf(a),3);Nf(a);c.g=0})},3E4)}
function Mf(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.Ea.Ha(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Jf(a,"networkstatus-online"):Jf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.M(3)}})})}
;function Qf(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Qf.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Rf(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Sf(a){Tf||(Tf=Uf());Tf(a)}
var Tf;function Uf(){if(typeof MessageChannel!=="undefined"){var a=new MessageChannel,b={},c=b;a.port1.onmessage=function(){if(b.next!==void 0){b=b.next;var d=b.Fd;b.Fd=null;d()}};
return function(d){c.next={Fd:d};c=c.next;a.port2.postMessage(0)}}return function(d){C.setTimeout(d,0)}}
;function Vf(){this.l=this.g=null}
Vf.prototype.add=function(a,b){var c=Wf.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
Vf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var Wf=new Qf(function(){return new Xf},function(a){return a.reset()});
function Xf(){this.next=this.scope=this.g=null}
Xf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Xf.prototype.reset=function(){this.next=this.scope=this.g=null};var Yf,Zf=!1,$f=new Vf;function ag(a,b){Yf||bg();Zf||(Yf(),Zf=!0);$f.add(a,b)}
function bg(){var a=Promise.resolve(void 0);Yf=function(){a.then(cg)}}
function cg(){for(var a;a=$f.remove();){try{a.g.call(a.scope)}catch(b){Kb(b)}Rf(Wf,a)}Zf=!1}
;function dg(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=pe)try{var b=this;a.call(void 0,function(c){eg(b,2,c)},function(c){eg(b,3,c)})}catch(c){eg(this,3,c)}}
function fg(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
fg.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var gg=new Qf(function(){return new fg},function(a){a.reset()});
function hg(a,b,c){var d=gg.get();d.i=a;d.l=b;d.context=c;return d}
dg.prototype.then=function(a,b,c){return ig(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
dg.prototype.$goog_Thenable=!0;dg.prototype.cancel=function(a){if(this.g==0){var b=new jg(a);ag(function(){kg(this,b)},this)}};
function kg(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?kg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):lg(c),mg(c,e,3,b)))}a.i=null}else eg(a,3,b)}
function ng(a,b){a.l||a.g!=2&&a.g!=3||og(a);a.m?a.m.next=b:a.l=b;a.m=b}
function ig(a,b,c,d){var e=hg(null,null,null);e.g=new dg(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.l=c?function(h){try{var l=c.call(d,h);l===void 0&&h instanceof jg?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;ng(a,e);return e.g}
dg.prototype.B=function(a){this.g=0;eg(this,2,a)};
dg.prototype.D=function(a){this.g=0;eg(this,3,a)};
function eg(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof dg){ng(d,hg(e||pe,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ja(d))try{var l=d.then;if(typeof l==="function"){pg(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,og(a),b!=3||c instanceof jg||qg(a,c))}}
function pg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function og(a){a.s||(a.s=!0,ag(a.A,a))}
function lg(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
dg.prototype.A=function(){for(var a;a=lg(this);)mg(this,a,this.g,this.u);this.s=!1};
function mg(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,rg(b,c,d);else try{b.m?b.i.call(b.context):rg(b,c,d)}catch(e){sg.call(null,e)}Rf(gg,b)}
function rg(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function qg(a,b){a.o=!0;ag(function(){a.o&&sg.call(null,b)})}
var sg=Kb;function jg(a){Na.call(this,a)}
H(jg,Na);jg.prototype.name="cancel";function tg(a,b){If.call(this);this.i=a||1;this.l=b||C;this.o=E(this.Rg,this);this.s=F()}
H(tg,If);n=tg.prototype;n.enabled=!1;n.La=null;n.Rg=function(){if(this.enabled){var a=F()-this.s;a>0&&a<this.i*.8?this.La=this.l.setTimeout(this.o,this.i-a):(this.La&&(this.l.clearTimeout(this.La),this.La=null),Jf(this,"tick"),this.enabled&&(ug(this),this.start()))}};
n.start=function(){this.enabled=!0;this.La||(this.La=this.l.setTimeout(this.o,this.i),this.s=F())};
function ug(a){a.enabled=!1;a.La&&(a.l.clearTimeout(a.La),a.La=null)}
n.Ba=function(){tg.Fa.Ba.call(this);ug(this);delete this.l};var vg=/^[6-9]$/,wg=/<\/?(?:b|em)>/gi;function xg(a){this.g=a}
var yg=new xg({});function zg(a){a=Ag(a);return nb(a)}
function Bg(a){a=Ag(a);return Ya(a)}
function Ag(a){return a===null?"null":a===void 0?"undefined":a}
;function Cg(a,b,c,d,e,f){this.A=a instanceof mb?a:zg(a);this.g=b;this.l=c;this.s=d;this.i=e;this.m=f||yg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
Cg.prototype.getHtml=function(){return ob(this.A).toString()};
Cg.prototype.u=function(){return this.l};
Cg.prototype.getType=function(){return this.s};var Dg=/^\s/,Eg=/\s+/,Fg=/\s+/g,Gg=/^\s+|\s+$/g,Hg=/^\s+$/,Ig=/<[^>]*>/g,Jg=/&nbsp;/g,Kg=/&#x3000;/g,Lg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Mg=document.getElementsByTagName("head")[0],Ng=0,Og=1;function Pg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Qg(a,b){function c(){return b}
b===void 0&&(b=a);return{Nb:c,Td:function(){return a},
vf:c,Uh:function(){return a<b},
equals:function(d){return d&&a==d.Td()&&b==d.vf()}}}
function Rg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Sg(a,b){var c=[],d;for(d in a)Rg(d,a[d],c,b);return c.join("&")}
function Tg(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Ug(a){return!!a&&!Hg.test(a)}
function Vg(a){for(var b=Lg.length,c=0;c<b;c+=2)a=a.replace(Lg[c],Lg[c+1].source);return a}
function Wg(a){for(var b=Lg.length,c=0;c<b;c+=2)a=a.replace(Lg[c+1],Lg[c].source);a=a.replace(Jg," ");return a.replace(Kg,"\u3000")}
function Xg(a,b){return a&&(a.indexOf(" ")>-1||Eg.test(a))?(a=a.replace(Fg," "),a.replace(b?Gg:Dg,"")):a}
function Yg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Zg(){}
function $g(a){var b=ah;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function bh(){return 0}
function ch(a){var b={},c;for(c in a)b[c]=a[c];return b}
function dh(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(sb(b,173)!=-1?14:1));return a}
;function eh(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(Ng++).toString(36);this.B=this.g.toLowerCase();this.l=Xg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
eh.prototype.getId=function(){return this.u};
function fh(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function gh(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function hh(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=yg)}
hh.prototype.getType=function(){return this.s};function ih(){}
ih.prototype.yd=function(){};
ih.prototype.redirect=function(){};
ih.prototype.xd=function(){return""};
ih.prototype.he=function(){};function jh(){this.l={};this.g={}}
jh.prototype.set=function(a,b){this.l[a]=b};
jh.prototype.has=function(a){return!!this.l[a]};
function kh(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function lh(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(mh);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.he(this.o);this.o.Ue();for(g=0;a=this.g[g++];)a.N(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.mb(this.config_);
for(g=0;a=this.g[g++];)a.P(this.config_);this.l=!0}
function nh(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Ga();a.l=!1}}
lh.prototype.isActive=function(){return this.l};
lh.prototype.get=function(a){return this.u[a]};
function oh(a,b){return a.m[b]||[]}
function mh(a,b){a=$g(a.getType());b=$g(b.getType());return a<0?1:b<0?-1:a-b}
var ah=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function L(a){this.l=a}
n=L.prototype;n.sa=function(){};
n.N=function(){};
n.ga=function(){};
n.mb=function(){};
n.P=function(){};
n.getType=function(){return this.l};
n.Ga=function(){};function ph(){this.l=149;this.g={};this.i=0}
y(ph,L);n=ph.prototype;n.N=function(a){this.A=a.get(127)};
n.P=function(a){if(a.connectionType==this.pb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.ec;this.u=b.xc;this.m=b.De}};
n.Ga=function(){qh(this);this.i=0};
n.Be=function(a,b,c){rh(this,a.getId(),a.g,b,c);return!0};
n.pb=function(){return 1};
n.Pc=function(){return this.i};
n.Lc=function(a){var b=this.g[a];b&&(sh(b),delete this.g[a])};
function rh(a,b,c,d,e){a.config_.Jd||qh(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Lc(b)}};
a.g[b]=f;f.send(null)}
function qh(a){for(var b in a.g)sh(a.g[b]);a.g={}}
function sh(a){a.onreadystatechange=Zg;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var th;function uh(){this.l=153}
y(uh,L);function vh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function wh(a){this.o=a}
wh.prototype.getType=function(){return this.o};
wh.prototype.s=function(){return!0};function xh(a){this.l=152;this.D=a}
H(xh,L);xh.prototype.zb=Zg;var yh=Ub(),zh;if(zh=yh){for(var Ah=Zb(),Bh=0,Ch=Pa(String(Ah)).split("."),Dh=Pa("10").split("."),Eh=Math.max(Ch.length,Dh.length),Fh=0;Bh==0&&Fh<Eh;Fh++){var Gh=Ch[Fh]||"",Hh=Dh[Fh]||"";do{var Ih=/(\d*)(\D*)(.*)/.exec(Gh)||["","","",""],Jh=/(\d*)(\D*)(.*)/.exec(Hh)||["","","",""];if(Ih[0].length==0&&Jh[0].length==0)break;Bh=Qa(Ih[1].length==0?0:parseInt(Ih[1],10),Jh[1].length==0?0:parseInt(Jh[1],10))||Qa(Ih[2].length==0,Jh[2].length==0)||Qa(Ih[2],Jh[2]);Gh=Ih[3];Hh=Jh[3]}while(Bh==0)}zh=Bh>=0}
var Kh=zh,Lh=I("Gecko")&&!(Ob().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Mh=Tb(),Nh=Ob().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");Wb();var Oh=Xb(),Ph=Oe()&&Wb(),Qh=$b(),Rh=Lb&&Pb&&Pb.platform?Pb.platform==="macOS":I("Macintosh"),Sh=Oe();var Th;ve("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Uh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Vh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(Th||(c={},Th=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Th,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Wh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Xh(a,b){var c="";b&&(c=b.id);Vh(a,"activedescendant",c)}
;var Yh=document.documentElement.style.opacity!=void 0,Zh={rtl:"right",ltr:"left"};function $h(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function ai(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Bc:b,Ta:c}}
function bi(a){try{return ci(a).activeElement==a}catch(b){}return!1}
function M(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function N(a){return M("div",a)}
function di(a,b){a.innerHTML!=b&&pb(a,zg(b))}
function ei(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Zh[b])}
function fi(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function gi(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return fi(a)}
function hi(a){var b=M("a");lb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function ii(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Ke:c,Yd:b}}
function ci(a){return a?a.ownerDocument||a.document:window.document}
function ji(a){return a?(a=ci(a),a.defaultView||a.parentWindow):window}
function ki(){return Yh?"opacity":"filter"}
function li(a){return Yh?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function mi(){this.o=507;ni(this)}
y(mi,wh);mi.prototype.g=function(){return this.i};
function oi(a,b,c,d){ni(a,c,d);pb(a.l,He(Le,b))}
function ni(a,b,c){a.i=N("sbfl_a");a.l=N("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var pi=[30,35,33,41],qi=[39,10,21];function ri(a,b){xh.call(this,507);this.m=a;this.g=b}
y(ri,xh);ri.prototype.N=function(a){this.i=a.get(128)};
ri.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
ri.prototype.Hb=function(){return new mi};
function si(a){return a.map(function(b){return{label:b.g}})}
ri.prototype.Ab=function(a,b){a=ub(this.i.m,function(c){a:if(pi.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(qi),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(oi(b,this.m,si(a),this.g),b.g().style.display=""):b.g().style.display="none"};var xe=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),ti=ha(["#ps"]);
function ui(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=N("sbpqs_d");this.u=N();this.O=M("span","sbpqs_a");this.J&&(this.l=M("a"),lb(this.l,eb(ti)),this.l.className="sbsb_i",this.I=N("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=N("sbpqs_c"),pb(this.m,He(Le,this.Y)),Uh(this.m,"alert"));this.u.appendChild(this.O);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(ui,wh);ui.prototype.g=function(){return this.i};
ui.prototype.s=function(){return this.B};
function vi(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";pb(a.O,He(Le,b));a.J&&(a.m.style.display="none",b=we(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){wi(a,f)},a.l.title=e)}
function wi(a,b){a.A=!0;xi(a.X,a.ca,function(){a.A&&(yi(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&zi(a.H),a.D.g==a.F&&(Ai(a.D),Bi(a.H)),a.B=!1)});
gi(b)}
;function Ci(){xh.call(this,35)}
y(Ci,xh);n=Ci.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.rd;this.s=a.md;this.o=a.ld};
n.Hb=function(){return new ui(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Ab=function(a,b){vi(b,a.getHtml(),a.g,a.l,this.s)};
n.zb=function(a,b,c){Di(c,b.g,1)};function Ei(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=N("sbpqs_d");this.m=N();this.O=M("span","sbpqs_a");this.J&&(this.u=M("a"),lb(this.u,"#ps"),this.u.className="sbsb_i",this.I=N("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=N("sbpqs_c"),pb(this.i,He(Le,this.Y)),Uh(this.i,"alert"));this.m.appendChild(this.O);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(Ei,wh);Ei.prototype.g=function(){return this.l};
Ei.prototype.s=function(){return this.B};
Ei.prototype.ea=function(a){this.A=!0;xi(this.X,this.ca,E(this.na,this));return gi(a)};
Ei.prototype.na=function(){this.A&&(yi(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&zi(this.H),this.D.g==this.F&&(Ai(this.D),Bi(this.H)),this.B=!1)};function Fi(){xh.call(this,35)}
y(Fi,xh);n=Fi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.rd;this.s=a.md;this.o=a.ld};
n.Hb=function(a){return new Ei(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Ab=function(a,b){var c=a.getHtml(),d=a.g;a=a.l;var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";pb(b.O,He(Le,c));b.J&&(b.i.style.display="none",pb(b.u,He(Le,e)),b.u.onclick=E(b.ea,b))};
n.zb=function(a,b,c){Di(c,b.g,1)};function Gi(){this.l=134;this.i={}}
y(Gi,L);n=Gi.prototype;n.N=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=E(this.Pe,this)};
n.P=function(a){this.A=Bg("//"+(a.nd||"clients1."+a.ec)+"/complete/deleteitems");this.s=a.vd;this.o=a.authuser;this.u=a.clientName};
n.Ga=function(){Hi(this)};
function Hi(a){a.g&&(Ii.removeChild(a.g),a.g=null)}
n.Pe=function(a){Hi(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var Ii=Mg;function Ji(){this.l=189}
y(Ji,L);Ji.prototype.N=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
Ji.prototype.ga=function(a){this.o=a.qf};
Ji.prototype.P=function(a){this.m=a.vd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(E(this.B,this),a),this.o=!1)};
function xi(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Tg(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=M("script");b=Za(b).toString();var d=b.split(/[?#]/),e=/[?]/.test(b)?"?"+d[1]:"";c=Ne(d[0],e,/[#]/.test(b)?"#"+(e?d[2]:d[1]):"",c);rb(a.g,c);Ii.appendChild(a.g)}
Ji.prototype.B=function(){var a=Ki(this.A,"",void 0,void 0,!0);Li(this.i,a);Mi(this.i)};function Ni(){this.l=156}
y(Ni,L);Ni.prototype.N=function(a){this.m=a.get(189)};
Ni.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Tg(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)gh(a,d,c[d]);return 1};
Ni.prototype.g=function(){return 12};function Oi(a){this.l=156;this.o=a;this.m=null}
H(Oi,L);Oi.prototype.i=function(a){var b=1,c=a.D;a=Ug(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
Oi.prototype.g=function(){return 2};
Oi.prototype.N=function(a){this.m=a.get(128)};function Pi(){this.l=157}
y(Pi,L);function Qi(){this.l=156}
y(Qi,L);Qi.prototype.i=function(a){var b=Tg(yb(window.location.href));b.v&&gh(a,"video_id",b.v,!0);return 1};
Qi.prototype.g=function(){return 24};function Ri(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(Ri,L);Ri.prototype.N=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
Ri.prototype.ga=function(a){this.m=a.kd;this.H=a.mf};
function Si(a,b){a.s=b;a.F.qd(a.s)}
function Ti(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&Ui(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(Ui(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new Cg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&Vi(a.g,c,!1);return!1}
;function Wi(){this.l=156}
y(Wi,L);Wi.prototype.N=function(a){this.m=a.get(598)};
Wi.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Tg(yb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Si(b,c)):d||b.s==""?d&&b.s==""&&Si(b,b.m):Si(b,"");return a.D!="mousedown"&&a.D!="focus"||!Ti(this.m)?1:2};
Wi.prototype.g=function(){return 46};function Xi(){this.l=149;this.i=Mg;this.g={}}
y(Xi,L);n=Xi.prototype;n.N=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.P=function(a){this.config_=a;a.connectionType==this.pb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.xc,this.A=a.De,this.F="https:"==document.location.protocol,Yi(this,E(this.Qe,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Ga=function(){Yi(this,null);Zi(this)};
n.Be=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Jd||Zi(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];Rg("q",e,a,!0);this.config_.Je||Rg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);Rg("gs_gbg",e,a)}e=M("script");this.config_.kg&&e.setAttribute("nonce",this.config_.kg);
rb(e,Bg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.pb=function(){return 0};
n.Pc=function(){return 0};
n.Lc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Zi(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Qe=function(a){this.m&&this.m(a)};
function Yi(a,b){b||(b=Zg);var c=window.google;a.config_.Je?c.ac.h=b:c.sbox["p"+a.u]=b}
;function $i(){this.l=115;this.o={}}
y($i,L);n=$i.prototype;n.N=function(a){this.m=a.get(116);if(a=oh(a,154))for(var b,c=0;b=a[c++];)this.o[aj]=b};
n.P=function(){this.g=!1};
n.Ga=function(){bj(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function bj(a){if(a.g){var b=a.m;b.B=0;cj(b.o.m,!1);dj(b.O,!1);dj(b.i,!1);ej(b,b.W);fj(b.F,9);a.g=!1}}
var gj={Zd:"left",isFullWidth:!0,ob:null,marginWidth:0};function hj(){this.l=118}
y(hj,L);n=hj.prototype;n.N=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=oh(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.P=function(a){this.config_=a;this.D=this.O=!1;ij(this)};
function jj(a){var b={};fj(a.s,11,b);!b.cancel&&a.config_.Sf&&Sf(function(){var c=a.i;Mi(c.D);kj(c)})}
function lj(a,b){if(a.config_.Ac==0||a.config_.Ac==2||a.config_.Ac==3&&!a.o&&!b)return!1;a:{if(mj(a.i)&&(a.i.i!=null?b=nj(a.i):(b=a.i,b=mj(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Yg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),oj(a,b,Qg(b.length),"",!0),pj(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function oj(a,b,c,d,e){a.config_.df&&!a.i.isVisible()&&d=="mousedown"&&qj(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Yg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,rj(a,b),fj(a.s,1,{Vb:d,ob:a.u}),g=F(),a.H||(a.H=g),a.W=g,Ug(b)&&(e=!0),g=!0;b=Ki(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(E(f.clear,f),f.config_.Tf))),a.O&&gh(b,"gs_is",1),Li(a.I,b)):g&&(a.i.clear(),Mi(a.I));fj(a.s,2,{Vb:d})}
function Bi(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,sj(a)}catch(b){}}
function tj(a,b){rj(a,b);uj(a.m);fj(a.s,4,{ob:a.u,input:b})}
function zi(a){a.g!=a.o&&rj(a,a.o);fj(a.s,5,{input:a.o,Ng:a.i.m,ob:a.u});uj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function vj(a){if(a.ca){if(a.config_.Sc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(rj(this,""),this.m.clear(),fj(this.s,1),fj(this.s,16),this.i.clear())};
function wj(a,b){var c=a.m.s.Nb();a.u==b?mj(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.jc&&!a.config_.Na&&Di(a.F,nj(a.i).g,6):a.config_.ge&&lj(a,!0)):a.A&&c==0&&a.A.g()}
function xj(a){var b=a.m.s.Nb();return a.config_.Na&&mj(a.i)&&a.i.i!=null&&b===a.g.length}
function pj(a,b,c){a.g=b||"";ij(a);uj(a.m);c||fj(a.s,4,{ob:a.u,input:a.g})}
function ij(a){var b=yj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Bb){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function rj(a,b){a.g=a.o=b||"";ij(a)}
;function zj(){this.l=128}
y(zj,L);n=zj.prototype;n.N=function(a){this.o=a.get(129);this.O=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=oh(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(bh)};
n.P=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;kj(this)};
function Vi(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=mj(a)?b[0].g:a.u.o;a:{var f=e;if(a.O.g){for(var g=!1,h=!1,l=0,k;l<f.length;++l)if(k=f.charAt(l),!Aj.test(k)&&(Bj.test(k)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=yj(a.O,e);if(a.config_.yg&&mj(a)&&c&&!Sh){a.F=!0;c=a.o;if(c.o){c.F=a.B;Cj(c);e=!1;for(f=0;g=b[f++];)Dj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Wg(e);b=a.ca;f=0;e&&(b.g||Ej(b),Fj(b),e in b.m?f=b.m[e]:(di(b.g,Vg(e)),b.m[e]=f=b.g.offsetWidth,di(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Jg&&!mj(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!vh(a.m,e););(f=e?e.length:0)&&(f-=Gj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=Gj(e,c,1));a.config_.Pf&&c.push(1);f&&(f-=Gj(e,c,2));f&&Gj(e,c,3);a.config_.Wd&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;Cj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=M("li"),l=h.style,l.position="relative",l.textAlign="center",l.whiteSpace="nowrap",h.dir=
g.H,g.i=N(),g.i.className="sbsb_g",g.config_.Wd&&(g.i.style.paddingBottom="1px"),Hj(g,g.config_.Gg,g.i,13),g.config_.Of?Hj(g,g.config_.Md,g.i,8):g.config_.Qf&&Hj(g,g.config_.Hg,g.i,14),h.appendChild(g.i),h.onmousedown=E(g.jd,g),h.className=g.config_.zc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=N("sbsb_j "+g.config_.zc);l=M("a");l.id="sbsb_f";lb(l,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Wc+"&answer=106230");var m=g.config_.lg;k={zg:!0};
if(m instanceof mb)k=m;else{m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");if(k==null?0:k.hi)m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;");if(k==null?0:k.zg)m=m.replace(/(\r\n|\n|\r)/g,"<br>");if(k==null?0:k.ii)m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>');k=nb(m)}pb(l,k);h.appendChild(l);h.onmousedown=E(g.jd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=M("li"),Vh(h,"hidden",!0),h.l=!0,l=M("div",
"sbsb_e"),h.appendChild(l)),g.g.appendChild(h)):Dj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),Ij(a,a.H.g()));c?Ui(a):a.clear()}
function Ij(a,b){if(a.g!=b){var c=a.g;a.g=b;Jj(a,c)}}
n.ze=function(){if(mj(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;Kj(this,a,E(this.ze,this))}else Ui(this)};
n.Ae=function(){if(mj(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;Kj(this,a,E(this.Ae,this))}else Ui(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function nj(a){return a.i!=null?a.m[a.i]:null}
function mj(a){return!(!a.m||!a.m.length)}
function Ui(a){if(!a.s){a:{var b=a.I,c=aj;if(c in b.o){if(b.i){if(c==aj)break a;bj(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=ch(gj);if(c.i){var e=c.i.i;d.ob=e.B;d.marginWidth=e.J;var f=e.config_.Og;f||(f=e.B=="rtl"?"right":"left");d.Zd=f}ej(b,d.ob||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.isFullWidth;b.ca=d.Zd;cj(b.o.m,!0);dj(b.O,
!0);dj(b.i,!0);fj(b.F,14);b.Ad();c.g=!0}a.s=!0}}
function kj(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),bj(a.I),a.s=!1)}
n.clear=function(){kj(this);this.m=null;this.F=!1;this.g!=null&&Lj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function Ai(a){a.g!=null&&Lj(a.o,a.g);a.i=a.g=null}
function qj(a,b,c){if(mj(a))Ui(a);else{var d=a.u.o;d&&(b=Ki(a.Y,d,b||a.u.m.s,c),Li(a.D,b))}}
function Gj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function Kj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(Jj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Na&&(c=c.querySelector('[role="gridcell"]')),c&&Xh(b.u,c)),a.g==null?zi(a.u):(b=a.m[a.g],b.getType(),pj(a.u,b.g))):(Lj(a.o,b),c())}
function Jj(a,b){b!=null&&Lj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&Mj(a.g().parentNode,b.X))}
var aj=Og++;function Nj(){this.l=154}
y(Nj,L);Nj.prototype.N=function(a){this.i=a.get(128);this.g=a.get(129)};function Oj(){this.l=145;this.g=Bj.test("x")}
y(Oj,L);Oj.prototype.sa=function(a){this.i=a.kc()};
function yj(a,b){var c=a.i;a.g&&(Bj.test(b)?c="ltr":Aj.test(b)||(c="rtl"));return c}
var Aj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Bj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function Pj(){this.l=117;this.i=[];this.g={Oe:1}}
y(Pj,L);function Qj(a,b,c,d,e,f){var g=Rj(a,b);g||(g={},a.i.push({element:b,Kf:g}));var h=g[c];h||(h=g[c]=[],a=Sj(a,c,b.Oe?window:ji(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({gg:!!f,Zc:!1,priority:e||0,process:d});h.sort(Tj);d.lf=c}
function Uj(a,b,c){if(a=Rj(a,b))if(a=a[c.lf])for(var d=0;b=a[d++];)if(b.process==c){b.Zc=!0;break}}
function fj(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Vb)}
Pj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Sj(a,b,c,d){return E(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.fg=!0)}e.Vb=f||b;f=e;for(var h,l,k=0;g=d[k++];)g.Zc?l=!0:h||(g.gg?Vj(g,f):h=g.process(f));if(l)for(l=0;h=d[l];)h.Zc?d.splice(l,1):++l;if(e.oc)return delete e.oc,e.fg&&(e=c.event||e),gi(e),e.returnValue=!1}},a)}
function Rj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Kf;return null}
function Vj(a,b){Sf(function(){a.process(b)})}
function Tj(a,b){return b.priority-a.priority}
;function Wj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Wj,L);Wj.prototype.P=function(){this.reset()};
Wj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Xj(){this.l=374}
y(Xj,L);Xj.prototype.P=function(){this.reset()};
Xj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Xj.prototype.reset=function(){this.g={}};function Yj(){this.l=120;this.D=-1}
y(Yj,L);Yj.prototype.N=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=oh(a,311)};
Yj.prototype.ga=function(a){this.u=a.ng};
Yj.prototype.P=function(a){this.config_=a;this.reset()};
function Zj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=ak(a.config_.clientName);d[28]=ak(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Pc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=dh(h.getType(),h.i||[]);if(h!=l){e>1&&(f+="l"+e);f+=(l?"j":"")+h;e=0;var l=h}++e}e>1&&(f+="l"+e)}d[3]=f;l="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var k=dh(g.getType(),
g.i||[]);k in b&&delete b[k]}if(b)for(k in b)l+=(l?"j":"")+k;d[35]=l;k=a.i.i;d[33]=k>-1?String(k):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=F()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Cb;l=a.g;l=(k=l.i)?l.g.m:0;d[25]=k?"1"+(a.config_.gf?"a":"")+(a.config_.Hd?"c":""):"";d[10]=l;k=a.g;d[11]=k.i?k.g.o:0;d[12]=a.g.na;f=a.g;k=f.ca;l=f.Y;f=f.ea;d[9]=k;d[22]=l;d[17]=f;d[13]=a.g.Bb;d[14]=a.g.H;d[15]=a.g.J;k=a.g;l=[];for(b=e=0;b<=bk;++b)f=k.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",l.push(e+f),e=0);d[16]=l.join("j");d[36]=a.g.O;k=0;for(var m in a.i.g)k++;d[30]=k;d[31]=a.i.u;d[32]=a.i.o;d[19]=ak(a.config_.td);m=a.i;l=a.B.g;k=!1;l&&(k=l.i.g.e||"");l=0;k?(l|=1,m.m>1&&(l|=2)):m.m>0&&(l|=2);m=l;d[20]=m==0?"":m+"";for(m=0;k=a.F[m++];)l=k.l,ck[l]&&(d[l]=d[l]==void 0?ak(k.g()):"");d=d.join(".").replace(dk,"");if(a.H&&a.u){m=c+d;b:{k=a.u;l=[];if(k)for(e=b=f=0;e<k.length;++e){g=k.charCodeAt(e);if(g<32||g>127||!ek[g-32]){k=[];break b}f<<=6;f|=ek[g-32]-1;b+=6;b>=8&&(l.push(f>>b-8&255),
b-=8)}k=l}f=k;k={};k.chain=Array(4);k.buffer=Array(4);k.Xg=Array(4);k.padding=Array(64);k.padding[0]=128;for(l=1;l<64;++l)k.padding[l]=0;fk(k);l=Array(64);f.length>64&&(fk(k),gk(k,f),f=hk(k));for(b=0;b<f.length;++b)l[b]=f[b]^92;for(b=f.length;b<64;++b)l[b]=92;fk(k);for(b=0;b<64;++b)k.buffer[b]=l[b]^106;ik(k,k.buffer);k.total=64;gk(k,jk(m));m=hk(k);fk(k);ik(k,l);k.total=64;gk(k,m);m=hk(k);m=m.slice(0,8);typeof m==="string"&&(m=jk(m));k="";if(m){l=m.length;for(e=b=f=0;l--;)for(b<<=8,b|=m[e++],f+=8;f>=
6;)k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=k}else m="";c={oq:c,gs_l:d+"."+m};a.config_.hg&&(c.q=a.m.g);return c}
Yj.prototype.reset=function(){this.s=F();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Cb=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Bb=0;a.H=0;a.J=0;a.O=0;a.I=[];for(b=0;b<=bk;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function ak(a){return a?a.replace(kk,"-"):""}
var dk=/\.+$/,kk=/\./g,ck=Pg([23]);function lk(){this.l=121}
y(lk,L);lk.prototype.sa=function(a){this.m=a.Qd()};
lk.prototype.N=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=oh(a,294)};
lk.prototype.P=function(a){this.config_=a};
function Di(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(Ug(b)||a.config_.kb||a.s&&a.s.kb()){if(vg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=M("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Mc&&mk(a.g,c);a.u.yd(c);nk(a);fj(a.F,12,{query:b})}}
lk.prototype.redirect=function(a){this.g&&this.config_.Mc&&mk(this.g);this.u.redirect(a);nk(this)};
function nk(a){Mi(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function ok(){this.l=553}
y(ok,L);ok.prototype.N=function(a){this.g=oh(a,156);a.get(126)};
ok.prototype.ga=function(){this.g.sort(pk)};
ok.prototype.P=function(a){this.config_=a;this.i=a.kd};
ok.prototype.qd=function(a){this.i=a};
function Ki(a,b,c,d,e){b=new eh(b,c||Qg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Jc!=null&&gh(b,"ds",a.config_.Jc,!0);a.config_.Ce!=null&&gh(b,"swl",a.config_.Ce,!0);gh(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=F(),"cp"in b.A||(a=b.J.Nb(),gh(b,"cp",a,!0)),gh(b,"gs_id",b.u),b.i=Sg(b.A)+":"+b.B,b.m=!0);return b}
function pk(a,b){return a.g()-b.g()}
;function qk(){this.l=123;this.A=!1;this.F=-1}
y(qk,L);n=qk.prototype;n.N=function(a){this.g=a.get(133);this.W=a.get(130);this.Ec=a.get(118);this.Fc=a.get(120);this.X=a.get(494);this.Ve=a.get(124);this.Db=a.get(125);this.Eb=a.get(230);this.Gc=a.get(127)};
n.P=function(a){this.u=this.Gc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Re=a.rf;this.Se=a.Wf;this.Ya=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Ga=function(){this.A=!1;rk(this);this.m=this.o=null;Mi(this)};
function Li(a,b){if(!(!a.A||a.Se||a.W&&a.W.l())){var c=!0,d=fh(b);d>a.F&&(a.F=d);++a.Cb;a.X.g[b.getId()]=!0;Ug(a.Ec.g)||Ug(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=F();for(var e in a.m)d-a.m[e].s>2500&&sk(a,e);a.i&&(e=a.g.get(b))&&((c=a.Re||b.I)&&a.config_.Xf&&(b.o=!0),a.Db.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.pe())}}
function Mi(a){a.Ya=a.F}
function yi(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function tk(a,b){return E(function(c){this.zd(c,b)},a)}
n.pe=function(){rk(this);if(!(this.u.Pc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)Rg(d,c[d],b);b=this.u.Be(a,b.join("&"),tk(this,a),E(this.zd,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(E(this.pe,this),a)}}};
function rk(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function sk(a,b){a.u.Lc(b);delete a.m[b];a.s&&--a.s}
n.zd=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ve;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var l=a[h];h in c.g&&(l=c.g[h].parse(l));g[h]=l}h=l=a=!1;for(var k,m=0;k=f[m++];)if((k[1]||0)==33?l=!0:a=!0,l&&a){h=!0;break}a=0;l=[];for(m=0;k=f[m++];){var p=k[1]||0;if(!h||p!=33){var r=k[0];c.m&&(r=c.i.bold(e.toLowerCase(),Wg(r).replace(Ig,"")));var q=l,t=q.push,u=Wg(r).replace(Ig,""),z=a++,K=k[3];t.call(q,new Cg(r,u,z,p,k[2]||[],K?new xg(K):yg))}}c=
new hh(d,l,new xg(g),!1,!0,!1);this.Eb&&(c=He(this.Eb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);fh(b)<=this.Ya?!b||b.g||c.o||(this.O=F()-b.s):(++this.ea,this.Db.process(c)||++this.Bb,this.D=c.i.g.d||0,b&&(sk(this,b.getId()),d=b.s,d=F()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>uk?bk:vk[Math.floor(d/100)]]):this.O=d));c&&(b=c.i.g.q||"")&&(this.Fc.u=b)}}};
var vk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],bk=vk[vk.length-1]+1,uk=vk.length*100-1;function wk(){this.l=124;this.g={}}
y(wk,L);wk.prototype.N=function(a){this.i=a.get(150);if(a=oh(a,158))for(var b,c=0;b=a[c++];)this.g[b.Rh()]=b};
wk.prototype.P=function(a){this.m=a.Rc};function xk(){this.l=125}
y(xk,L);xk.prototype.N=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=oh(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(yk)};
xk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Xg(c);var e=b.l;b=e?e.l:Xg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,Vi(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(Ug(g.g)||(b.i=h),g=g.s,g=F()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[dh(h,f.i||[])]=!0;fj(this.o,3,{input:a,Ng:e})}return c};
function yk(a,b){return a.g()-b.g()}
;function zk(){this.l=126}
y(zk,L);zk.prototype.N=function(a){this.i=a.get(123)};
zk.prototype.P=function(){this.g=null};var Ak=["expflags","plugin"];function Bk(){this.l=127;this.m={}}
y(Bk,L);Bk.prototype.N=function(a){a=oh(a,149);for(var b,c=0;b=a[c++];)this.m[b.pb()]=b};
Bk.prototype.P=function(a){var b="https:"==document.location.protocol,c=[];Rg("client",a.clientName,c);Rg("hl",a.Wc,c);Rg("gl",a.Fe,c);Rg("sugexp",a.td,c);Rg("gs_rn",64,c);Rg("gs_ri",a.requestIdentifier,c);var d=Tg(a.url||C.location.href);Ak.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&Rg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.nd||"clients1."+a.ec,xc:a.xc||"/complete/search",De:c.length?c.join("&"):""};this.g&&this.g.pb()==a.connectionType||(this.g=this.m[a.connectionType])};function Ck(){this.l=191}
y(Ck,L);function jk(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function fk(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Xb=a.total=0}
function ik(a,b){for(var c=a.Xg,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,l,k=0;k<64;++k)k<16?(g=f^b&(d^f),h=k):k<32?(g=d^f&(b^d),h=5*k+1&15):k<48?(g=b^d^f,h=3*k+5&15):(g=d^(b|~f),h=7*k&15),l=f,f=d,d=b,e=e+g+Dk[k]+c[h]&4294967295,g=Ek[k],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=l;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function gk(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Xb++]=b[d],a.Xb==64&&(ik(a,a.buffer),a.Xb=0)}
function hk(a){var b=Array(16),c=a.total*8,d=a.Xb;gk(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;ik(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var ek=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Ek=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Dk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Fk(){this.l=150}
H(Fk,L);
Fk.prototype.bold=function(a,b){b=Vg(b.replace(wg,""));a=Vg(Xg(a,!0));if(Yg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Tb:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Tb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Tb:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Tb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Tb].Tb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function Gk(){this.l=146}
H(Gk,L);function Hk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
Hk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");Hk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");Hk("D1,D4,D7,DA,DD");Hk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");Hk("D1__,D4__,D7__,DA__,DD");Hk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");Hk("CF,D2,D5,D8,DB");function Ik(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(Ik,L);n=Ik.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.kc();b.addRule(".sbdd_a",(Sh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Sh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.N=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.mb=function(a){this.g=N();this.g.className="gstl_"+this.Y+" sbdd_a";dj(this.g,!1);this.O=this.g;this.H=N("fl");this.g.appendChild(this.H);this.A=N();this.g.appendChild(this.A);this.s=N("sbdd_b");this.A.appendChild(this.s);this.na=N();this.A.appendChild(this.na);this.config_.Vd&&(this.i=M("iframe","gstl_"+this.Y+" sbdd_c"),dj(this.i,!1),(this.config_.Ia||document.body).appendChild(this.i));if(this.m=this.config_.ef)typeof this.m==="number"&&(this.m+=this.config_.hc[2],this.m-=Jk(this)),Kk(this,this.g,
this.m);Lk(this);(a.Ia||document.body).appendChild(this.g);a=this.F;var b=E(this.Ad,this);Qj(a,a.g,8,b)};
n.P=function(a){this.config_=a;this.g.style.position=a.Lb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Ad=function(){this.B=0;Lk(this);if(this.i){var a=this.config_.Cd[0],b=this.i.style;this.config_.Lb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";Kk(this,this.i,this.s.offsetWidth)}this.u&&Cj(this.u.g)};
function Lk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Nf||c.H==c.F?c.Ya:null;var d=(b=c)?b.offsetWidth:Mk(a.o.m);var e=a.m;c=Jk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.hc[2]-c,Kk(a,a.g,e));if(a.config_.Lb!="relative"){var f="rtl"==Ve()!=(a.D=="rtl"),g=a.config_.Ia;var h={Ta:0,Bc:0};if(f||!g||g==document.body||a.config_.Od)h=ai(a.o.m.F),b&&(h.Ta=ai(b).Ta);b=h;h=e;e=a.config_.hc;g=e[1];e=e[0];e=b.Bc+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Ve()!=(a.D=="rtl");var l=a.config_.Ia;g=-g;if(h||!l||l==document.body)g+=(ji(a.g)||window).document.documentElement.clientWidth-d-b.Ta;d=g;h=e;b=void 0}else b=b.Ta+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ta:0,Bc:0};a.config_.Lb=="absolute"&&a.config_.Ia&&a.config_.Ia!=document.body&&(f||a.config_.Od)&&(e=ai(a.config_.Ia));g=a.g.style;g.top=h-e.Bc+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Ta+"px":(b=0,a.config_.Ia&&f&&(b=document.body.clientWidth-(e.Ta+a.config_.Ia.offsetWidth)),
g.right=d+c-b+"px")}}
function Kk(a,b,c){typeof c==="number"?c>0&&(a.config_.Wg?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function dj(a,b){a&&(a.style.display=b?"":"none")}
function ej(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ia;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");ei(a.g,b)}}
function Jk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function Nk(){this.l=119;this.W=!1;this.s=Qg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(Nk,L);n=Nk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Qc();Uh(this.g,"combobox");Vh(this.g,"haspopup",!1);Vh(this.g,"autocomplete","list");this.Ec=a.kc();a.Hc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=Rh&&Nh||yh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),Kh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.N=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Bb=!!a.get(136);this.Fc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Ob;this.O=a.eg;this.Gc=a.Id;this.u=bi(this.g);this.Dc();var b=this;yh&&Qj(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.oc=!0)},10);
a=(ac()||I("iPad")||I("iPod"))&&Oh;Lh&&Ok(this);(Ph||a)&&Pk(this);this.F=this.g};
n.mb=function(a){var b=!!a.kf[130];if(this.Bb||vj(this.i)||b||a.sf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=N("gstl_"+this.Fc+" sbib_a"),a=this.A.style,this.O&&(a.width=this.O+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=Mh||yh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Vc,b&&(this.B=N("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),vj(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Ec,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=N("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),Qk(this,this.A,this.o)),this.config_.pd&&this.g&&this.o&&(this.g.removeAttribute("role"),Uh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Vh(this.o,"haspopup",!0)),this.config_.Na&&this.g&&(b=this.D.getId("sbsg"),Vh(this.g,"controls",b),this.config_.pd&&this.o?(Vh(this.o,"haspopup","grid"),Vh(this.o,
"owns",b)):Vh(this.g,"haspopup","grid")),this.config_.Kg||this.config_.bf||Rk(this,this.A),this.F=this.A;this.Gc&&(b=E(this.ne,this),Qj(this.m,this.g,"blur",b,10),b=E(this.we,this),Qj(this.m,this.g,"focus",b,10),this.Eb=!0);b=this.m;a=E(this.Jf,this);Qj(b,b.g,8,a);Sk(this)};
n.P=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ie?"":"none";this.Cb=this.g.value;this.Eb&&this.we();Tk(this)};
n.Ga=function(){this.Eb&&this.ne();Uk(this)};
function Qk(a,b,c){Uk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Bg&&(yh||Lh?Sf(function(){a.g.focus();$h(a.g,a.s.Nb())}):a.g.focus());
Tk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function Mk(a){return a.O?a.O:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Dc()};
function uj(a){Qh&&(a.g.value="");a.g.value=a.i.g;Qh&&(a.g.value=a.g.value);sj(a)}
function Vk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function sj(a){if(a.u){var b=a.g.value.length;a.s=Qg(b);$h(a.g,b)}}
function Rk(a,b){Qj(a.m,b,"mouseup",function(){a.g.focus()})}
function Sk(a){function b(e){Qj(a.m,a.g,e,E(a.te,a),10,c)}
Qj(a.m,a.g,"keydown",E(a.Hf,a));(Mh||a.config_.Ye)&&Qj(a.m,a.g,"keypress",E(a.If,a));Qj(a.m,a.g,"select",E(a.Dc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=E(a.Ef,a);Qj(a.m,a.g,"compositionstart",d);Qj(a.m,a.g,"compositionend",d)}
n.Ef=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Hf=function(a){var b=a.keyCode;this.ca=b;var c=(Nh||Lh)&&(b==38||b==40)&&mj(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=lj(this.i));if(d){(b=nj(this.X))&&b.getType();var f=this;Sf(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&nj(g).getType();g=g.u;Di(g.F,g.g,h)})}if(c||d||e||this.Y)a.oc=!0};
n.If=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.oc=!0};
n.te=function(a){if(!this.Db){var b=a.Vb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.O=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Fg?Di(a.F,a.g,5):(a.i.isVisible()?(c=a.i,Mi(c.D),kj(c)):Vk(a.m),zi(a));break;case 37:a=this.i;wj(a,"rtl");if(xj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Wk(a,c.i))&&!(c.length<=1))))for(d=Wh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Xh(a.u,c[e-1]);break;case 39:a=this.i;wj(a,"ltr");if(xj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Wk(a,c.i))))for(d=Wh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Xh(a.u,c[e+1]);break;case 38:this.i.i.Ae();break;case 40:a=this.i;c=this.s;mj(a.i)?a.i.ze():qj(a.i,c);break;case 46:a=this.i;a.g&&this.s.Td()==a.g.length&&(a.J&&a.J.clear(),a.config_.Eg&&Di(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Nb()==0&&a.A.g()}}this.Dc();oj(this.i,this.g.value,this.s,b)}};
n.Df=function(){this.u=!0;fj(this.i.s,10)};
n.Bf=function(){this.u=!1;jj(this.i)};
function Tk(a){a.W||(a.W=!0,a.Ya=E(a.Df,a),Qj(a.m,a.g,"focus",a.Ya,99),a.na=E(a.Bf,a),Qj(a.m,a.g,"blur",a.na,99))}
function Uk(a){a.W&&(a.W=!1,Uj(a.m,a.g,a.Ya),Uj(a.m,a.g,a.na))}
n.we=function(){this.H||(this.H=new tg(this.config_.xg||50),this.H.ra("tick",this.wg,void 0,this),this.H.start())};
n.ne=function(){this.H&&(ug(this.H),this.H=null)};
n.wg=function(){this.te({Vb:"polling"})};
n.Jf=function(){if(Lh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Dc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=ci(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=Qg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Ok(a){var b;a.m.ra(window,"pagehide",function(){a.Db=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Db=!1;(c.persisted||b!==void 0)&&tj(a.i,b)})}
function Pk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Cb&&tj(a.i,a.Cb)})}
function cj(a,b){a.config_.pd&&a.o?Vh(a.o,"expanded",b):Vh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Xk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Zk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Xk(a).match(/\S+/g)||[],b=sb(a,b)>=0);return b}
function Mj(a,b){if(a.classList)a.classList.add(b);else if(!Zk(a,b)){var c=Xk(a);Yk(a,c+(c.length>0?" "+b:b))}}
function $k(a,b){a.classList?a.classList.remove(b):Zk(a,b)&&Yk(a,Array.prototype.filter.call(a.classList?a.classList:Xk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function al(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(al,L);n=al.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.O=a;this.u=a.Qc();this.H=a.kc();Sh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Sh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Nh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Sh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.N=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=oh(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.mb=function(a){this.o=N();a.Na?(this.g=N("sbsb_b"),Uh(this.g,"grid"),this.g.id=this.O.getId("sbsg")):(this.g=M("ul","sbsb_b"),Uh(this.g,"listbox"));this.o.appendChild(this.g)};
n.P=function(a){this.config_=a;var b=a.se;b&&(this.Ya=this.O.Pd(b));this.o.className=a.Pg||"sbsb_a";this.X=a.Mg||"sbsb_d"};
function Wk(a,b){if(a.config_.Na&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function Lj(a,b){(b=a.m[b])&&$k(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function Dj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=bl(a,d));d.Ab(b,c);a.W.push(c);var e=c.g();if(a.config_.Na)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=cl(a);f.appendChild(e);if(b.u!==void 0){a.m.push(c);g=a.F;var h=b.l;a.config_.Uf&&(e.onmouseover=function(){Ij(a.D,h)},e.onmouseout=function(){Ai(a.D)});
var l=c.g();l.onclick=function(k){Vk(a.s.m);b.o&&pj(a.s,b.g);Ai(a.D);var m=a.D;m.i=m.g=h;k=k||ji(l).event;d.zb(k,b,a.I)}}else g=a.H;
ei(f,g);return!0}
function bl(a,b){b=b.Hb(a.I);var c=b.g();Mj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Na&&Uh(c,"option");a.ea++;return b}
function Hj(a,b,c,d){var e=M("input");e.type="button";e.value=Wg(b);e.onclick=function(){Di(a.I,a.s.g,d)};
if(a.config_.Mf){b="lsb";var f=M("span");var g=M("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function cl(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Na?(b=N(),Uh(b,"row")):(b=M("li"),Uh(b,"presentation"));b.className="sbsb_c "+a.config_.zc;b.onmousedown=E(a.jd,a);a.g.appendChild(b);return b}
n.jd=function(a){a=a||ji(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):yh&&!Mh&&(this.s.m.ea=!0);return!1};
function Cj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=Mk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function dl(){this.l=147}
H(dl,L);dl.prototype.sa=function(a){this.u=a.Qd()||document.body};
dl.prototype.ga=function(a){this.config_=a};
dl.prototype.getHeight=function(){this.g||Ej(this);Fj(this);this.i||(di(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function Ej(a){var b=N(a.config_.Vc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function Fj(a){var b=F();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=ji(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function el(){jh.call(this);this.set(191,new Ck);this.set(150,new Fk);this.set(146,new Gk);this.set(147,new dl);kh(this,149,new Xi);this.set(145,new Oj);this.set(117,new Pj);this.set(494,new Wj);this.set(374,new Xj);this.set(120,new Yj);this.set(121,new lk);this.set(553,new ok);this.set(124,new wk);this.set(125,new xk);this.set(123,new qk);this.set(126,new zk);this.set(127,new Bk);this.set(115,new $i);this.set(118,new hj);this.set(128,new zj);kh(this,154,new Nj);this.set(116,new Ik);this.set(119,
new Nk);this.set(129,new al)}
y(el,jh);function fl(){this.l=347;this.i=[];this.m=0}
y(fl,L);fl.prototype.N=function(a){this.o=a.get(120)};
fl.prototype.P=function(a){this.s="//"+(a.mg||"www."+a.ec)+"/gen_204?";this.g=a.Lg||{}};
function mk(a,b){b=Zj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Sg(b,!0);gl(a,a.s+c)}
function gl(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function hl(){this.l=151;this.g=!0;this.i={}}
y(hl,L);n=hl.prototype;n.N=function(a){this.m=a.get(150)};
n.ga=function(){this.s=Pg([0])};
n.P=function(a){this.o=a.Rc;this.g=a.Hd};
n.Ga=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Yg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,l,k=b.g,m,p=0;m=k[p++];)l=m.g,h=f?this.m.bold(c,l):Vg(l),g.push(new Cg(h,l,m.l,m.getType(),m.i||[],m.m));delete this.i[d];return new hh(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function il(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(il,L);il.prototype.N=function(a){this.g=oh(a,151);this.g.sort(jl)};
il.prototype.P=function(){this.o=this.m=0};
il.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new hh(a,b.g,b.i,b.o,b.m,b.u):null};
il.prototype.has=function(a){return!!this.i[a.i]};
function jl(){return 0}
;function kl(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function ll(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function ml(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function nl(){this.l=570;this.m=!1}
H(nl,L);n=nl.prototype;n.sa=function(a){this.u=a};
n.N=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Mb;if(this.g=b?this.u.Pd(b):null){b=this.s;var c=E(this.Cf,this);Qj(b,b.g,10,c);b=this.s;c=E(this.Af,this);Qj(b,b.g,11,c);Qj(this.s,this.g,"mouseover",E(this.Gf,this));Qj(this.s,this.g,"mouseout",E(this.Ff,this));a.Oc&&(this.o=new kl(a.Oc));a.Nc&&(this.i=new kl(a.Nc))}};
n.P=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&ll(this.i,this.g)};
n.Ga=function(){this.m=!1;this.g&&(this.o&&ml(this.o,this.g),this.i&&ml(this.i,this.g))};
n.Gf=function(){this.m&&this.o&&ll(this.o,this.g)};
n.Ff=function(){this.m&&this.o&&ml(this.o,this.g)};
n.Cf=function(){this.m&&this.i&&ll(this.i,this.g)};
n.Af=function(){this.m&&this.i&&ml(this.i,this.g)};var ol=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function pl(){this.l=160}
H(pl,L);n=pl.prototype;n.sa=function(a,b){this.m=a;a.Hc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.N=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.mc;this.A=a.ke;this.D=a.qc;this.H=a.me;this.F=a.ug};
n.mb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=M("img"),this.g.src=this.A+"/tia.png",this.i=M("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=E(this.cf,this);this.g.setAttribute("tia_field_name",this.m.Qc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.P=function(a){a.Sc&&(this.o=!!a.mc);this.g.setAttribute("tia_property",a.le)};
n.isEnabled=function(){return this.o};
n.Sd=function(){return{tooltip:this.F}};
n.Bd=function(a){if(!this.B){a=document;var b="SCRIPT";a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());a=a.createElement(b);b=Me(ol,this.H,this.D);rb(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.cf=function(){var a=this.u;Mi(a.D);kj(a)};
var ql=Og++;var rl=ha(["#"]);function sl(){this.l=173;this.m={}}
y(sl,L);n=sl.prototype;
n.sa=function(a,b){this.o=a;a.Hc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(ki()+":"+li(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",ki()+":"+li(.8)+";"),b.addRule(".gsst_a:active .gsst_e",ki()+":"+
li(1)+";"))};
n.N=function(a){this.u=a.get(118);this.i=oh(a,160)};
n.ga=function(a){this.A=a.Sc;this.i.sort(tl)};
n.mb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=N("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Ob)this.g.style.lineHeight=a+"px";ul(this)}vl(this)};
n.P=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[ql];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);ul(this);vl(this);break}}};
function tl(){return 0}
function ul(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=M("a","gsst_a");wl(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function vl(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=ql,e=c.i.parentNode;e.onclick=E(c.Bd,c);a.m[d]=e;c.Sd&&(c=c.Sd(),c.Yh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function wl(a,b,c){lb(b,eb(rl));b.addEventListener("click",function(){return!1});
Mh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Bd(d),Bi(a.u),gi(d)}}
Og++;function xl(){this.o=33;this.l=N();this.l.className="gspr_a"}
H(xl,wh);xl.prototype.g=function(){return this.l};function yl(){xh.call(this,33)}
y(yl,xh);yl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
yl.prototype.Hb=function(){return new xl};
yl.prototype.Ab=function(a,b){pb(b.l,He(Le,a.m.g.b||""))};
yl.prototype.zb=function(a,b,c){Di(c,b.g,1)};function zl(a,b){this.o=0;this.u=a;this.D=b;this.m=N();this.l=N("sbqs_a");this.m.appendChild(this.l);this.B=N("sbqs_c");this.m.appendChild(this.B)}
y(zl,wh);zl.prototype.g=function(){return this.m};
function Al(a,b,c,d){pb(a.B,zg(b));a.A=c;d&&!a.i&&(a.i=hi(a.l),a.i.onclick=E(function(e){Vk(this.u.m);pj(this.u,this.A);Di(this.D,this.A,9);return gi(e)},a));
d?(pb(a.i,zg(d+" &raquo;")),a.l.style.display="",Vh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function Bl(){xh.call(this,0)}
H(Bl,xh);n=Bl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.N=function(a){this.g=a.get(118)};
n.P=function(a){this.i=a.Ld?a.Md:""};
n.Hb=function(a){return new zl(this.g,a)};
n.Ab=function(a,b){Al(b,a.getHtml(),a.g,this.i)};
n.zb=function(a,b,c){Di(c,b.g,1)};function Cl(a){el.call(this);kh(this,149,new ph);this.set(347,new fl);this.set(133,new il);kh(this,151,new hl);this.set(570,new nl);this.set(134,new Gi);this.set(189,new Ji);kh(this,156,new Ni);a.ENABLE_DELETE_ICON?kh(this,152,new Ci):kh(this,152,new Fi);kh(this,152,new yl);kh(this,152,new Bl);this.set(173,new sl);kh(this,160,new pl);this.set(157,new Pi);kh(this,156,new Qi);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&kh(this,156,new Oi(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(kh(this,153,new uh),kh(this,152,new ri(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Ri(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),kh(this,156,new Wi))}
y(Cl,el);function Dl(){return{uf:function(){return{clientName:"hp",requestIdentifier:"hp",ec:"google.com",Fe:"",Wc:"en",Jc:"",kd:"",videoId:"",vd:"",authuser:0,ng:"",xi:"",Ce:null,td:"",Jd:!1,nd:"",xc:"",connectionType:0,transport:null,Je:!1,ki:!1,Wf:!1,enableCaching:!0,mf:10,Qh:10,gf:!0,Hd:!0,Mh:!1,rf:!1,hg:!1,ig:!1,bi:!1,Sf:!0,df:!1,Tf:500,Sc:!1,Lf:!0,Vh:!0,oi:!1,mc:!1,qc:"",ke:"//www.google.com/textinputassistant",le:"",me:7,Sh:!1,Th:!1,Pf:!1,Of:!0,Qf:!1,Wd:!1,Na:!1,Fg:!1,Eg:!1,Ac:1,ge:!0,jc:!1,Ld:!1,Id:!1,
xg:10,Rc:!1,Bg:!0,Ia:document.body,Rf:!0,Ge:null,kf:{},Ph:{},ji:0,sf:!1,Xf:!0,kb:!1,qf:!1,Jg:!1,si:null,hf:!1,mg:null,Lg:null,Mc:!1,Uf:!0,pd:!1,Ye:!1,ui:1,ie:!1,Gg:"Search",Md:"I'm  Feeling Lucky",Hg:"",lg:"Learn more",md:"Remove",ld:"This search was removed from your Web History",Wh:"",Lh:"Did you mean:",ug:"",mi:"",Ai:"Search by voice",zi:'Listening for "Ok Google"',yi:'Say "Ok Google"',Kh:"Clear Search",Ob:0,eg:0,Vc:"",zc:"",ai:!1,Lb:"absolute",Mf:!1,Vd:!1,se:null,Nf:!0,hc:[0,0,0],ef:null,Og:null,
Cd:[0],rd:!0,Ie:"",Pg:"",Mg:"",Mb:null,Oc:"",Nc:"",Jh:1,Wg:!1,Od:!1,di:0,Kg:!1,bf:!1,Nh:!1,yg:!0}}}}
;function El(a,b,c,d,e){var f=Lh?"-moz-":yh?"-ms-":Mh?"-o-":Nh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),l=[];return{addRule:function(k,m){if(b){if(c){k=k.split(",");for(var p=[],r=0,q;q=k[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);k=p.join(",")}l.push(k,"{",m,"}")}},
Ue:function(){if(b&&l.length){b=!1;var k=M("style");k.setAttribute("type","text/css");(a||Mg).appendChild(k);var m=l.join("");l=null;k.styleSheet?k.styleSheet.cssText=m:k.appendChild(document.createTextNode(m))}},
prefix:function(k,m){var p=k+(m||"");f&&(p+=m?k+f+m:f+k);return p}}}
;function Fl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=Fl.prototype;n.install=function(a){if(!this.D){a=Gl(a);this.l<0&&(this.l=Hl(a));var b=ci(this.i),c=Il(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Ie&&f.push(a.Ie);f=El(a.Ge,a.Rf,a.hf,this.l,f);this.A=a.kb;this.g=new lh(this.F,this.H,{Hc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Pd:function(g){return b.getElementById(g)},
Qd:function(){return e.I},
kc:function(){return c},
getId:function(g){return g+e.l},
Qc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.O=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=ji(this.i);this.s=ii(a);this.B=E(this.Dg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function Jl(a,b){function c(d){Di(a.X,a.J.g,12);return fi(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.kb=function(){return this.A||!!this.u&&this.u.kb()};
n.qd=function(a){this.W.qd(a)};
function Hl(a){a=ji(a.Ge||Mg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Il(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Gl(a){a=ch(a);var b=a.qc;b?a.qc=b.toLowerCase():a.mc=!1;a.jc&&!a.Ld&&(a.jc=!1);Oh||(a.ig=!1);return a}
n.Dg=function(){var a=ii(ji(this.i));if(a.Ke!=this.s.Ke||a.Yd!=this.s.Yd)this.s=a,fj(this.m,8)};function Kl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
G("ytvoicesearchloggingparams",E(this.wf,this))}
y(Kl,ih);n=Kl.prototype;n.wf=function(){this.g.O.add(6);return Zj(this.g.o,15)};
n.yd=function(a){Vk(this.g.Y);this.u(Zj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.xd(a))};
n.xd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=Zj(this.g.o);var d=this.g;c||(c=Zj(d.o));d=Sg(c);return a+b+d};
n.he=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=Dl().uf();f.clientName="youtube";f.requestIdentifier="youtube";f.Jc="yt";f.Wc=d.REQUEST_LANGUAGE;f.Fe=d.REQUEST_DOMAIN;f.Lf=!1;f.Ac=0;f.ge=!1;f.jc=!1;f.ie=!1;f.Rc=!0;f.Vc=this.D;f.zc=this.i;f.Oc=this.B;f.Nc=this.A;f.Zh=!0;f.mc=d.HAS_ON_SCREEN_KEYBOARD;f.qc=d.REQUEST_LANGUAGE;f.ke="//www.gstatic.com/inputtools/images";f.le="youtube";f.me=14;f.Mc=!0;f.Lb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=
d.SEARCHBOX_TAP_TARGET_EXPERIMENT;this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.nd="suggestqueries-clients6.youtube.com";d.PQ&&(f.kd=d.PQ);f.vd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.ld=e.SUGGESTION_DISMISSED_LABEL;f.md=e.SUGGESTION_DISMISS_LABEL;f.rd=!d.HIDE_REMOVE_LINK;f.ti=Pg([0,33,35]);this.o?(f.Mb="search-container",f.Ob=24):this.m?(f.Mb="masthead-search",f.Ob=24):(f.Mb="masthead-search-terms",f.Ob=30);Tb()||(f.Vd=!0);f.se=f.Mb;e=this.l.offsetHeight;f.hc=[e+(56-e)/2-
40+4,0,0];e=[0];Ub()&&Zb()=="8.0"&&(e[0]=-1);f.Cd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Id=!0);if(e=d.SUGG_EXP_ID)f.td=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=ji(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);nh(a.g);b=Gl(b);a.A=b.kb;a=a.g;nh(a);for(c=0;d=a.g[c++];)d.P(b);a.l=!0}else d=
new Cl(d),this.g=new Fl(b,a,this,d),this.g.install(f),c&&(Jl(this.g,c),c.onclick=null)};function Ll(){this.data=[];this.g=-1}
Ll.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Ll.prototype.get=function(a){return!!this.data[a]};
function Ml(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Nl(){this.blockSize=-1}
;function Ol(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
H(Ol,Nl);Ol.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function Pl(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else e<60?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
Ol.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)Pl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Pl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Pl(this,e);f=0;break}}this.l=f;this.m+=b}};
Ol.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;Pl(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Ql(){}
Ql.prototype.next=function(){return Rl};
var Rl={done:!0,value:void 0};Ql.prototype.jb=function(){return this};function Sl(a){if(a instanceof Tl||a instanceof Ul||a instanceof Vl)return a;if(typeof a.next=="function")return new Tl(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Tl(function(){return a[Symbol.iterator]()});
if(typeof a.jb=="function")return new Tl(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function Tl(a){this.g=a}
Tl.prototype.jb=function(){return new Ul(this.g())};
Tl.prototype[Symbol.iterator]=function(){return new Vl(this.g())};
Tl.prototype.l=function(){return new Vl(this.g())};
function Ul(a){this.g=a}
y(Ul,Ql);Ul.prototype.next=function(){return this.g.next()};
Ul.prototype[Symbol.iterator]=function(){return new Vl(this.g)};
Ul.prototype.l=function(){return new Vl(this.g)};
function Vl(a){Tl.call(this,function(){return a});
this.i=a}
y(Vl,Tl);Vl.prototype.next=function(){return this.i.next()};function Wl(a){var b=[];Xl(new Yl,a,b);return b.join("")}
function Yl(){}
function Xl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Xl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Zl(d,c),c.push(":"),Xl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Zl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var $l={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},am=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Zl(a,b){b.push('"',a.replace(am,function(c){var d=$l[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),$l[c]=d);return d}),'"')}
;function bm(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Q(a){jf.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
H(Q,jf);n=Q.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Cc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&vb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.qe=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];cm(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ab;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Cc(c)}}return e!=0}return!1};
function cm(a,b,c){ag(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Cc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){Q.Fa.Ba.call(this);this.clear();this.i.length=0};function dm(a){this.g=a}
dm.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Wl(b))};
dm.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
dm.prototype.remove=function(a){this.g.remove(a)};function em(a){this.g=a}
H(em,dm);function fm(a){this.data=a}
function gm(a){return a===void 0||a instanceof fm?a:new fm(a)}
em.prototype.set=function(a,b){em.Fa.set.call(this,a,gm(b))};
em.prototype.l=function(a){a=em.Fa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
em.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hm(a){this.g=a}
H(hm,em);hm.prototype.set=function(a,b,c){if(b=gm(b)){if(c){if(c<F()){hm.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}hm.Fa.set.call(this,a,b)};
hm.prototype.l=function(a){var b=hm.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())hm.prototype.remove.call(this,a);else return b}};function im(){}
;function jm(){}
H(jm,im);jm.prototype[Symbol.iterator]=function(){return Sl(this.jb(!0)).l()};
jm.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function km(a){this.g=a;this.l=null}
H(km,jm);n=km.prototype;n.set=function(a,b){lm(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){lm(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){lm(this);this.g.removeItem(a)};
n.jb=function(a){lm(this);var b=0,c=this.g,d=new Ql;d.next=function(){if(b>=c.length)return Rl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){lm(this);this.g.clear()};
n.key=function(a){lm(this);return this.g.key(a)};
function lm(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=mm(a.g))||Kb(Error("Storage mechanism: Storage unavailable"))}
function mm(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function nm(){var a=null;try{a=C.localStorage||null}catch(b){}km.call(this,a)}
H(nm,km);function om(a,b){this.l=a;this.g=b+"::"}
H(om,jm);om.prototype.set=function(a,b){this.l.set(this.g+a,b)};
om.prototype.get=function(a){return this.l.get(this.g+a)};
om.prototype.remove=function(a){this.l.remove(this.g+a)};
om.prototype.jb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Ql;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var R={},pm=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";R.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
R.sd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var qm={lb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},rm={lb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Nd:function(a){return[].concat.apply([],a)}};
R.Ig=function(){pm?(R.ib=Uint8Array,R.Ka=Uint16Array,R.Ne=Int32Array,R.assign(R,qm)):(R.ib=Array,R.Ka=Array,R.Ne=Array,R.assign(R,rm))};
R.Ig();var sm=!0;try{new Uint8Array(1)}catch(a){sm=!1}
function tm(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new R.ib(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var um={};um=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var vm={},wm,xm=[],ym=0;ym<256;ym++){wm=ym;for(var zm=0;zm<8;zm++)wm=wm&1?3988292384^wm>>>1:wm>>>1;xm[ym]=wm}vm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^xm[(a^b[d])&255];return a^-1};var Am={};Am={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Bm(a){for(var b=a.length;--b>=0;)a[b]=0}
var Cm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Dm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Em=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Gm=Array(576);Bm(Gm);var Hm=Array(60);Bm(Hm);var Im=Array(512);Bm(Im);var Jm=Array(256);Bm(Jm);var Km=Array(29);Bm(Km);var Lm=Array(30);Bm(Lm);function Mm(a,b,c,d,e){this.Ee=a;this.pf=b;this.nf=c;this.ff=d;this.rg=e;this.Xd=a&&a.length}
var Nm,Om,Pm;function Qm(a,b){this.Gd=a;this.vb=0;this.Ua=b}
function Rm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Sm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,Rm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Tm(a,b,c){Sm(a,c[b*2],c[b*2+1])}
function Um(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Vm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Um(d[e]++,e))}
function Wm(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.bb[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Ra=a.yb=0;a.za=a.matches=0}
function Xm(a){a.ha>8?Rm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Ym(a,b,c){Xm(a);Rm(a,c);Rm(a,~c);R.lb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Zm(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function $m(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Qa;){e<a.Qa&&Zm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Zm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function an(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Ib+d*2]<<8|a.ba[a.Ib+d*2+1];var f=a.ba[a.Yc+d];d++;if(e===0)Tm(a,f,b);else{var g=Jm[f];Tm(a,g+256+1,b);var h=Cm[g];h!==0&&(f-=Km[g],Sm(a,f,h));e--;g=e<256?Im[e]:Im[256+(e>>>7)];Tm(a,g,c);h=Dm[g];h!==0&&(e-=Lm[g],Sm(a,e,h))}}while(d<a.za)}Tm(a,256,b)}
function bn(a,b){var c=b.Gd,d=b.Ua.Ee,e=b.Ua.Xd,f=b.Ua.ff,g,h=-1;a.Qa=0;a.rb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Qa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Qa<2;){var l=a.da[++a.Qa]=h<2?++h:0;c[l*2]=1;a.depth[l]=0;a.Ra--;e&&(a.yb-=d[l*2+1])}b.vb=h;for(g=a.Qa>>1;g>=1;g--)$m(a,c,g);l=f;do g=a.da[1],a.da[1]=a.da[a.Qa--],$m(a,c,1),d=a.da[1],a.da[--a.rb]=g,a.da[--a.rb]=d,c[l*2]=c[g*2]+c[d*2],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=l,a.da[1]=l++,$m(a,c,1);while(a.Qa>=
2);a.da[--a.rb]=a.da[1];g=b.Gd;l=b.vb;d=b.Ua.Ee;e=b.Ua.Xd;f=b.Ua.pf;var k=b.Ua.nf,m=b.Ua.rg,p,r=0;for(p=0;p<=15;p++)a.Ma[p]=0;g[a.da[a.rb]*2+1]=0;for(b=a.rb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>l)){a.Ma[p]++;var t=0;q>=k&&(t=f[q-k]);var u=g[q*2];a.Ra+=u*(p+t);e&&(a.yb+=u*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.Ma[p]===0;)p--;a.Ma[p]--;a.Ma[p+1]+=2;a.Ma[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.Ma[p];q!==0;)d=a.da[--b],d>l||(g[d*2+1]!==p&&(a.Ra+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}Vm(c,h,a.Ma)}
function cn(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];++g<h&&k===f||(g<l?a.ka[k*2]+=g:k!==0?(k!==e&&a.ka[k*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=k,f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function dn(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];if(!(++g<h&&k===f)){if(g<l){do Tm(a,k,a.ka);while(--g!==0)}else k!==0?(k!==e&&(Tm(a,k,a.ka),g--),Tm(a,16,a.ka),Sm(a,g-3,2)):g<=10?(Tm(a,17,a.ka),Sm(a,g-3,3)):(Tm(a,18,a.ka),Sm(a,g-11,7));g=0;e=k;f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function en(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var fn=!1;function gn(a,b,c){a.ba[a.Ib+a.za*2]=b>>>8&255;a.ba[a.Ib+a.za*2+1]=b&255;a.ba[a.Yc+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Jm[c]+256+1)*2]++,a.bb[(b<256?Im[b]:Im[256+(b>>>7)])*2]++);return a.za===a.Qb-1}
;function hn(a,b){a.msg=Am[b];return b}
function jn(a){for(var b=a.length;--b>=0;)a[b]=0}
function kn(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);c!==0&&(R.lb(a.output,b.ba,b.Rb,c,a.wb),a.wb+=c,b.Rb+=c,a.ud+=c,a.U-=c,b.pending-=c,b.pending===0&&(b.Rb=0))}
function ln(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.R.Kc===2&&(a.R.Kc=en(a));bn(a,a.pc);bn(a,a.fc);cn(a,a.ta,a.pc.vb);cn(a,a.bb,a.fc.vb);bn(a,a.Dd);for(e=18;e>=3&&a.ka[Fm[e]*2+1]===0;e--);a.Ra+=3*(e+1)+5+5+4;var f=a.Ra+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Sm(a,b?1:0,3),Ym(a,c,d);else if(a.strategy===4||g===f)Sm(a,2+(b?1:0),3),an(a,Gm,Hm);else{Sm(a,4+(b?1:0),3);c=a.pc.vb+1;d=a.fc.vb+1;e+=1;Sm(a,c-257,5);Sm(a,d-1,5);Sm(a,e-4,4);for(f=0;f<e;f++)Sm(a,
a.ka[Fm[f]*2+1],3);dn(a,a.ta,c-1);dn(a,a.bb,d-1);an(a,a.ta,a.bb)}Wm(a);b&&Xm(a);a.va=a.C;kn(a.R)}
function S(a,b){a.ba[a.pending++]=b}
function mn(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function nn(a,b){var c=a.fe,d=a.C,e=a.wa,f=a.je,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,l=a.Wa,k=a.Ja,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Ud&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.ub=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=k[b&l])>g&&--c!==0);return e<=
a.G?e:a.G}
function on(a){var b=a.ma,c;do{var d=a.Le-a.G-a.C;if(a.C>=b+(b-262)){R.lb(a.window,a.window,b,b,0);a.ub-=b;a.C-=b;a.va-=b;var e=c=a.nc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.oa===0)break;e=a.R;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,R.lb(c,e.input,e.gb,g,f),e.state.wrap===1?e.L=um(e.L,c,g,f):e.state.wrap===2&&(e.L=vm(e.L,c,g,f)),e.gb+=g,e.hb+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.S=a.window[d],
a.S=(a.S<<a.Pa^a.window[d+1])&a.Oa;a.la&&!(a.S=(a.S<<a.Pa^a.window[d+3-1])&a.Oa,a.Ja[d&a.Wa]=a.head[a.S],a.head[a.S]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.R.oa!==0)}
function pn(a,b){for(var c;;){if(a.G<262){on(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.S],a.head[a.S]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=nn(a,c));if(a.V>=3)if(c=gn(a,a.C-a.ub,a.V-3),a.G-=a.V,a.V<=a.bd&&a.G>=3){a.V--;do a.C++,a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.S],a.head[a.S]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.S=a.window[a.C],a.S=(a.S<<a.Pa^a.window[a.C+1])&a.Oa;else c=gn(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(ln(a,!1),a.R.U===0))return 1}a.la=a.C<2?a.C:2;return b===4?(ln(a,!0),a.R.U===0?3:4):a.za&&(ln(a,!1),a.R.U===0)?1:2}
function qn(a,b){for(var c,d;;){if(a.G<262){on(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.S],a.head[a.S]=a.C);a.wa=a.V;a.oe=a.ub;a.V=2;c!==0&&a.wa<a.bd&&a.C-c<=a.ma-262&&(a.V=nn(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.ub>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=gn(a,a.C-1-a.oe,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.S],a.head[a.S]=a.C);
while(--a.wa!==0);a.eb=0;a.V=2;a.C++;if(c&&(ln(a,!1),a.R.U===0))return 1}else if(a.eb){if((c=gn(a,0,a.window[a.C-1]))&&ln(a,!1),a.C++,a.G--,a.R.U===0)return 1}else a.eb=1,a.C++,a.G--}a.eb&&(gn(a,0,a.window[a.C-1]),a.eb=0);a.la=a.C<2?a.C:2;return b===4?(ln(a,!0),a.R.U===0?3:4):a.za&&(ln(a,!1),a.R.U===0)?1:2}
function rn(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){on(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=gn(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=gn(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(ln(a,!1),a.R.U===0))return 1}a.la=0;return b===4?(ln(a,!0),a.R.U===0?3:4):
a.za&&(ln(a,!1),a.R.U===0)?1:2}
function sn(a,b){for(var c;;){if(a.G===0&&(on(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=gn(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(ln(a,!1),a.R.U===0))return 1}a.la=0;return b===4?(ln(a,!0),a.R.U===0?3:4):a.za&&(ln(a,!1),a.R.U===0)?1:2}
function tn(a,b,c,d,e){this.yf=a;this.qg=b;this.tg=c;this.pg=d;this.tf=e}
var un;un=[new tn(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){on(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,ln(a,!1),a.R.U===0)return 1;if(a.C-a.va>=a.ma-262&&(ln(a,!1),a.R.U===0))return 1}a.la=0;if(b===4)return ln(a,!0),a.R.U===0?3:4;a.C>a.va&&ln(a,!1);return 1}),
new tn(4,4,8,4,pn),new tn(4,5,16,8,pn),new tn(4,6,32,32,pn),new tn(4,4,16,16,qn),new tn(8,16,32,32,qn),new tn(8,16,128,128,qn),new tn(8,32,128,256,qn),new tn(32,128,258,1024,qn),new tn(32,258,258,4096,qn)];
function vn(){this.R=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Rb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.sb=-1;this.Wa=this.wd=this.ma=0;this.window=null;this.Le=0;this.head=this.Ja=null;this.je=this.Ud=this.strategy=this.level=this.bd=this.fe=this.wa=this.G=this.ub=this.C=this.eb=this.oe=this.V=this.va=this.Pa=this.Oa=this.Tc=this.nc=this.S=0;this.ta=new R.Ka(1146);this.bb=new R.Ka(122);this.ka=new R.Ka(78);jn(this.ta);jn(this.bb);jn(this.ka);this.Dd=this.fc=this.pc=
null;this.Ma=new R.Ka(16);this.da=new R.Ka(573);jn(this.da);this.rb=this.Qa=0;this.depth=new R.Ka(573);jn(this.depth);this.ha=this.pa=this.la=this.matches=this.yb=this.Ra=this.Ib=this.za=this.Qb=this.Yc=0}
function wn(a,b){if(!a||!a.state||b>5||b<0)return a?hn(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return hn(a,a.U===0?-5:-2);c.R=a;var d=c.sb;c.sb=b;if(c.status===42)if(c.wrap===2)a.L=0,S(c,31),S(c,139),S(c,8),c.K?(S(c,(c.K.text?1:0)+(c.K.Sa?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),S(c,c.K.time&255),S(c,c.K.time>>8&255),S(c,c.K.time>>16&255),S(c,c.K.time>>24&255),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,c.K.gi&255),c.K.extra&&c.K.extra.length&&
(S(c,c.K.extra.length&255),S(c,c.K.extra.length>>8&255)),c.K.Sa&&(a.L=vm(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,3),c.status=113);else{var e=8+(c.wd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;mn(c,e+(31-e%31));c.C!==0&&(mn(c,a.L>>>16),mn(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Sa&&c.pending>e&&(a.L=vm(a.L,c.ba,c.pending-e,e)),kn(a),e=c.pending,c.pending!==c.Aa));)S(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Sa&&c.pending>e&&(a.L=vm(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=vm(a.L,c.ba,c.pending-e,e)),kn(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;S(c,f)}while(f!==0);c.K.Sa&&c.pending>
e&&(a.L=vm(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=vm(a.L,c.ba,c.pending-e,e)),kn(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;S(c,f)}while(f!==0);c.K.Sa&&c.pending>e&&(a.L=vm(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Sa?(c.pending+2>c.Aa&&kn(a),c.pending+2<=c.Aa&&(S(c,
a.L&255),S(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(kn(a),a.U===0)return c.sb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return hn(a,-5);if(c.status===666&&a.oa!==0)return hn(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?sn(c,b):c.strategy===3?rn(c,b):un[c.level].tf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.U===0&&(c.sb=-1),0;if(d===2&&(b===1?(Sm(c,2,3),Tm(c,256,Gm),c.ha===16?(Rm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(Sm(c,0,3),Ym(c,0,0),b===3&&(jn(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),kn(a),a.U===0))return c.sb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(S(c,a.L&255),S(c,a.L>>8&255),S(c,a.L>>16&255),S(c,a.L>>24&255),S(c,a.hb&255),S(c,a.hb>>8&255),S(c,a.hb>>16&255),S(c,a.hb>>24&255)):(mn(c,a.L>>>16),mn(c,a.L&65535));kn(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var xn={};xn=function(){this.input=null;this.hb=this.oa=this.gb=0;this.output=null;this.ud=this.U=this.wb=0;this.msg="";this.state=null;this.Kc=2;this.L=0};var yn=Object.prototype.toString;
function zn(a){if(!(this instanceof zn))return new zn(a);a=this.options=R.assign({level:-1,method:8,chunkSize:16384,Xa:15,sg:8,strategy:0,Va:""},a||{});a.raw&&a.Xa>0?a.Xa=-a.Xa:a.zf&&a.Xa>0&&a.Xa<16&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new xn;this.R.U=0;var b=this.R;var c=a.level,d=a.method,e=a.Xa,f=a.sg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=hn(b,-2);else{e===8&&(e=9);var l=new vn;
b.state=l;l.R=b;l.wrap=h;l.K=null;l.wd=e;l.ma=1<<l.wd;l.Wa=l.ma-1;l.Tc=f+7;l.nc=1<<l.Tc;l.Oa=l.nc-1;l.Pa=~~((l.Tc+3-1)/3);l.window=new R.ib(l.ma*2);l.head=new R.Ka(l.nc);l.Ja=new R.Ka(l.ma);l.Qb=1<<f+6;l.Aa=l.Qb*4;l.ba=new R.ib(l.Aa);l.Ib=1*l.Qb;l.Yc=3*l.Qb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.hb=b.ud=0;b.Kc=2;c=b.state;c.pending=0;c.Rb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.sb=0;if(!fn){d=Array(16);for(f=g=0;f<28;f++)for(Km[f]=g,e=0;e<1<<Cm[f];e++)Jm[g++]=
f;Jm[g-1]=f;for(f=g=0;f<16;f++)for(Lm[f]=g,e=0;e<1<<Dm[f];e++)Im[g++]=f;for(g>>=7;f<30;f++)for(Lm[f]=g<<7,e=0;e<1<<Dm[f]-7;e++)Im[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Gm[e*2+1]=8,e++,d[8]++;for(;e<=255;)Gm[e*2+1]=9,e++,d[9]++;for(;e<=279;)Gm[e*2+1]=7,e++,d[7]++;for(;e<=287;)Gm[e*2+1]=8,e++,d[8]++;Vm(Gm,287,d);for(e=0;e<30;e++)Hm[e*2+1]=5,Hm[e*2]=Um(e,5);Nm=new Mm(Gm,Cm,257,286,15);Om=new Mm(Hm,Dm,0,30,15);Pm=new Mm([],Em,0,19,7);fn=!0}c.pc=new Qm(c.ta,Nm);c.fc=new Qm(c.bb,Om);c.Dd=
new Qm(c.ka,Pm);c.pa=0;c.ha=0;Wm(c);c=0}else c=hn(b,-2);c===0&&(b=b.state,b.Le=2*b.ma,jn(b.head),b.bd=un[b.level].qg,b.Ud=un[b.level].yf,b.je=un[b.level].tg,b.fe=un[b.level].pg,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.eb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(Am[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Jb){var k;typeof a.Jb==="string"?k=tm(a.Jb):yn.call(a.Jb)==="[object ArrayBuffer]"?k=new Uint8Array(a.Jb):k=a.Jb;a=this.R;f=k;g=f.length;if(a&&a.state)if(k=
a.state,b=k.wrap,b===2||b===1&&k.status!==42||k.G)b=-2;else{b===1&&(a.L=um(a.L,f,g,0));k.wrap=0;g>=k.ma&&(b===0&&(jn(k.head),k.C=0,k.va=0,k.la=0),c=new R.ib(k.ma),R.lb(c,f,g-k.ma,k.ma,0),f=c,g=k.ma);c=a.oa;d=a.gb;e=a.input;a.oa=g;a.gb=0;a.input=f;for(on(k);k.G>=3;){f=k.C;g=k.G-2;do k.S=(k.S<<k.Pa^k.window[f+3-1])&k.Oa,k.Ja[f&k.Wa]=k.head[k.S],k.head[k.S]=f,f++;while(--g);k.C=f;k.G=2;on(k)}k.C+=k.G;k.va=k.C;k.la=k.G;k.G=0;k.V=k.wa=2;k.eb=0;a.gb=d;a.input=e;a.oa=c;k.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Am[b]);
this.Eh=!0}}
zn.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=tm(a):yn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.oa=c.input.length;do{c.U===0&&(c.output=new R.ib(d),c.wb=0,c.U=d);a=wn(c,e);if(a!==1&&a!==0)return An(this,a),this.ended=!0,!1;if(c.U===0||c.oa===0&&(e===4||e===2))if(this.options.Va==="string"){var f=R.sd(c.output,c.wb);b=f;f=f.length;if(f<65537&&(b.subarray&&sm||!b.subarray))b=
String.fromCharCode.apply(null,R.sd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=R.sd(c.output,c.wb),this.chunks.push(b)}while((c.oa>0||c.U===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=hn(c,-2):(c.state=null,a=d===113?hn(c,-3):0)):a=-2,An(this,a),this.ended=!0,a===0;e===2&&(An(this,0),c.U=0);return!0};
function An(a,b){b===0&&(a.result=a.options.Va==="string"?a.chunks.join(""):R.Nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
;function Bn(a){this.name=a}
;var Cn=new Bn("rawColdConfigGroup");var Dn=new Bn("rawHotConfigGroup");function En(a){this.T=Kd(a)}
y(En,me);En.prototype.g=function(a){J(this,5,a)};function Fn(a){this.T=Kd(a)}
y(Fn,me);function Gn(a){this.T=Kd(a)}
y(Gn,me);function Hn(a){this.T=Kd(a)}
y(Hn,me);Hn.prototype.pb=function(){return he(this,61)};
Hn.prototype.getPlayerType=function(){return he(this,36)};
Hn.prototype.setHomeGroupInfo=function(a){return de(this,Gn,81,a)};function In(a){this.T=Kd(a)}
y(In,me);var Jn=[2,3,4,5,6];function Kn(a){this.T=Kd(a)}
y(Kn,me);function Ln(a){this.T=Kd(a)}
y(Ln,me);function Mn(a){this.T=Kd(a)}
y(Mn,me);function Nn(a){this.T=Kd(a)}
y(Nn,me);Nn.prototype.setSafetyMode=function(a){return ke(this,5,a)};function On(a){this.T=Kd(a)}
y(On,me);var Pn={Dh:"WEB_DISPLAY_MODE_UNKNOWN",zh:"WEB_DISPLAY_MODE_BROWSER",Bh:"WEB_DISPLAY_MODE_MINIMAL_UI",Ch:"WEB_DISPLAY_MODE_STANDALONE",Ah:"WEB_DISPLAY_MODE_FULLSCREEN"};function Qn(a){this.T=Kd(a,500)}
y(Qn,me);function Rn(a){this.T=Kd(a)}
y(Rn,me);function Sn(a){this.T=Kd(a)}
y(Sn,me);Sn.prototype.getPlaylistId=function(){return ie(this,2)};
var je=[1,2];function Tn(a){this.T=Kd(a)}
y(Tn,me);var Un=C.window,Vn,Wn,Xn=(Un==null?void 0:(Vn=Un.yt)==null?void 0:Vn.config_)||(Un==null?void 0:(Wn=Un.ytcfg)==null?void 0:Wn.data_)||{};G("yt.config_",Xn);function Yn(){var a=arguments;a.length>1?Xn[a[0]]=a[1]:a.length===1&&Object.assign(Xn,a[0])}
function T(a,b){return a in Xn?Xn[a]:b}
;var Zn={};function $n(){return Zn.clicktracking||(Zn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function U(a){a=ao(a);return typeof a==="string"&&a==="false"?!1:!!a}
function V(a,b){a=ao(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function ao(a){return T("EXPERIMENT_FLAGS",{})[a]}
function bo(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function co(a,b,c,d){df.set(""+a,b,{ad:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var eo=[];function fo(a){eo.forEach(function(b){return b(a)})}
function go(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ho(b)}}:a}
function ho(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Yn("ERRORS",b));fo(a)}
function io(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Yn("ERRORS",f))}
;var jo=/^[\w.]*$/,ko={q:!0,search_query:!0};function lo(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=mo(f[0]||""),h=mo(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?wb(l,h):c[g]=[l,h]}else c[g]=h}catch(r){var k=r,m=f[0],p=String(lo);k.args=[{key:m,value:f[1],query:a,method:no===p?"unchanged":p}];ko.hasOwnProperty(m)||io(k)}}return c}
var no=String(lo);function oo(a){var b=[];re(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];tb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function po(a){a.charAt(0)==="?"&&(a=a.substring(1));return lo(a,"&")}
function qo(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=po(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Gb(a,e)+d}
function ro(a){if(!b)var b=window.location.href;var c=a.match(zb)[1]||null,d=Bb(a);c&&d?(a=a.match(zb),b=b.match(zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Bb(b)===d&&(Number(b.match(zb)[4]||null)||null)===(Number(a.match(zb)[4]||null)||null):!0;return a}
function mo(a){return a&&a.match(jo)?a:yb(a)}
;var so=ec||fc;function to(a){var b=Ob();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var uo=Date.now().toString();function vo(a){var b=wo;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=We;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?oe:g;try{var h=g.history.length}catch(fb){h=0}e.u_his=h;var l;e.u_h=(l=oe.screen)==null?void 0:l.height;var k;e.u_w=(k=oe.screen)==null?void 0:k.width;var m;e.u_ah=(m=oe.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=oe.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=oe.screen)==null?void 0:r.colorDepth}catch(fb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(fb){}try{var u=h.outerWidth;var z=h.outerHeight}catch(fb){}try{var K=h.innerWidth;var P=h.innerHeight}catch(fb){}try{var X=h.screenLeft;var O=h.screenTop}catch(fb){}try{K=h.innerWidth,P=h.innerHeight}catch(fb){}try{var da=h.screen.availWidth;var Va=h.screen.availTop}catch(fb){}q=[X,O,q,t,da,Va,u,z,K,P];t=b.g.top;try{var gb=(t||window).document,ra=
gb.compatMode=="CSS1Compat"?gb.documentElement:gb.body;var Ea=(new qe(ra.clientWidth,ra.clientHeight)).round()}catch(fb){Ea=new qe(-12245933,-12245933)}gb=Ea;Ea={};var La=La===void 0?C:La;ra=new Ll;"SVGElement"in La&&"createElementNS"in La.document&&ra.set(0);t=Te();t["allow-top-navigation-by-user-activation"]&&ra.set(1);t["allow-popups-to-escape-sandbox"]&&ra.set(2);La.crypto&&La.crypto.subtle&&ra.set(3);"TextDecoder"in La&&"TextEncoder"in La&&ra.set(4);La=Ml(ra);Ea.bc=La;Ea.bih=gb.height;Ea.biw=
gb.width;Ea.brdim=q.join();b=b.l;b=(Ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ea.wgl=!!oe.WebGLRenderingContext,Ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var wo=new function(){var a=window.document;this.g=window;this.l=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return oo(vo(a))});F();var xo="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function yo(){if(!xo)return null;var a=xo();return"open"in a?a:null}
;function zo(a,b){typeof a==="function"&&(a=go(a));return window.setTimeout(a,b)}
;var Ao="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Ao);var Bo={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Co="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Ao)),Do=!1;function Eo(a,b,c,d,e,f,g,h){function l(){(k&&"readyState"in k?k.readyState:0)===4&&b&&go(b)(k)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var k=yo();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;U("debug_forward_web_query_parameters")&&(a=Fo(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Go(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(p){io(p)}}k.send(d);return k}
function Go(a,b){b=b===void 0?{}:b;var c=ro(a),d=T("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in Bo){var g=T(Bo[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=T("VISITOR_DATA"));var l;if(!(l=!g)){if(!(l=c||(Bb(a)?!1:!0))){l=a;var k;if(k=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))k=Bb(l),k=k!==null?k.split(".").reverse():null,k=k===null?
!1:k[1]==="google"?!0:k[2]==="google"?k[0]==="au"&&k[1]==="com"?!0:k[0]==="uk"&&k[1]==="co"?!0:!1:!1;k&&(l=Ab(l.match(zb)[5]||null)||"",l=l.split("/"),l="/"+(l.length>1?l[1]:""),k=l==="/pagead");l=k?!0:!1}l=!l}l||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Bb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Bb(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Bb(a)||(b["X-YouTube-Ad-Signals"]=oo(vo()));return b}
function Ho(a,b){b.method="POST";b.postParams||(b.postParams={});return Io(a,b)}
function Io(a,b){var c=b.format||"JSON";a=Jo(a,b);var d=Ko(a,b),e=!1,f=Lo(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,p=400<=l.status&&l.status<500,r=500<=l.status&&l.status<600;if(k||p||r)m=Mo(a,c,l,b.convertToSafeHtml);k&&(k=No(c,l,m));m=m||{};p=b.context||C;k?b.onSuccess&&b.onSuccess.call(p,l,m):b.onError&&b.onError.call(p,l,m);b.onFinish&&
b.onFinish.call(p,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=zo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Jo(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=qo(a,b||{},!0);return a}
function Ko(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Bb(a)&&!b.withCredentials&&Bb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=po(e),ue(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Fb(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!Do&&a&&b.method!=="POST"&&(Do=!0,ho(Error("AJAX request with postData should use POST")));return e}
function Mo(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,io(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Oo(a):null)e={},tb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Po(g)})}d&&Qo(e);
return e}
function Qo(a){if(Ja(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=nb(a[b]);a[c]=d}else Qo(a[b])}}
function No(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Oo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Po(a){var b="";tb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Fo(a){var b=window.location.search,c=Bb(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ro(a)&&(c=document.location.hostname);var d=Ab(a.match(zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=po(b),f={};tb(Co,function(g){e[g]&&(f[g]=e[g])});
return qo(a,f||{},!1)}
var Lo=Eo;function Ro(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function So(){}
;function To(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;G("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Uo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Vo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Wo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Xo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Yo(){var a=C.navigator;return a?a.connection:void 0}
;function Zo(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Zo,Error);function $o(){try{return ap(),!0}catch(a){return!1}}
function ap(){if(T("DATASYNC_ID")!==void 0)return T("DATASYNC_ID");throw new Zo("Datasync ID not set","unknown");}
;function bp(){}
function cp(a,b){return Pf.Za(a,0,b)}
bp.prototype.Ha=function(a,b){return this.Za(a,1,b)};
bp.prototype.Fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var dp=V("web_emulated_idle_callback_delay",300),ep=1E3/60-3,fp=[8,5,4,3,2,1,0];
function gp(a){a=a===void 0?{}:a;jf.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(fp),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=ep;this.u=0;this.O=this.vg.bind(this);this.ea=this.Sg.bind(this);this.X=this.Te.bind(this);this.Y=this.Vf.bind(this);this.ca=this.Ag.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.O)}
y(gp,jf);n=gp.prototype;n.Fb=function(a){var b=F();hp(a);a=F()-b;this.s||(this.A-=a)};
n.Za=function(a,b,c){++this.I;if(b===10)return this.Fb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&ip(this)!==this.u&&jp(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function kp(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};jp(a)}
function ip(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function lp(a){var b=D("yt.logging.errors.log");b&&b(a)}
function hp(a){try{a()}catch(b){lp(b)}}
function mp(a){for(var b=w(fp),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Vf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;np(this,b);this.J=!1};
n.Sg=function(){np(this)};
n.Te=function(){op(this)};
n.Ag=function(a){this.D=!0;var b=ip(this);b===4&&b!==this.u&&(jp(this),this.start());np(this,void 0,a);this.D=!1};
n.vg=function(){document.hidden||op(this);this.g&&(jp(this),this.start())};
function op(a){jp(a);a.s=!0;for(var b=F(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&hp(e)}pp(a);a.s=!1;mp(a)&&a.start();b=F()-b;a.A-=b}
function pp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function np(a,b,c){a.D&&a.u===4&&a.g||jp(a);a.s=!0;b=F()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){lp(k)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&hp(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(F()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&hp(c)}while(c&&F()<b)}a.s=!1;pp(a);a.A=ep;mp(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=ip(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,dp);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function jp(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){kp(this);jp(this);this.F&&document.removeEventListener("visibilitychange",this.O);jf.prototype.Ba.call(this)};var qp=D("yt.scheduler.instance.timerIdMap_")||{},rp=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),sp=0,tp=0;function up(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.ab)a=new gp(T("scheduler")||{}),G("ytglobal.schedulerInstanceInstance_",a);return a}
function vp(){wp();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),G("ytglobal.schedulerInstanceInstance_",null))}
function wp(){kp(up());for(var a in qp)qp.hasOwnProperty(a)&&delete qp[Number(a)]}
function xp(a,b,c){if(!c)return c=c===void 0,-up().Za(a,b,c);var d=window.setTimeout(function(){var e=up().Za(a,b);qp[d]=e},c);
return d}
function yp(a){up().Fb(a)}
function zp(a){var b=up();if(a<0)b.xa(-a);else{var c=qp[a];c?(b.xa(c),delete qp[a]):window.clearTimeout(a)}}
function Ap(){Bp()}
function Bp(){window.clearTimeout(sp);up().start()}
function Cp(){var a=up();jp(a);a.H=!0;window.clearTimeout(sp);sp=window.setTimeout(Ap,rp)}
function Dp(){window.clearTimeout(tp);tp=window.setTimeout(function(){Ep(0)},rp)}
function Ep(a){Dp();var b=up();b.o=a;b.start()}
function Fp(a){Dp();var b=up();b.o>a&&(b.o=a,b.start())}
function Gp(){window.clearTimeout(tp);var a=up();a.o=0;a.start()}
;function Hp(){bp.apply(this,arguments)}
y(Hp,bp);function Ip(){Hp.g||(Hp.g=new Hp);return Hp.g}
Hp.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):zo(a,c||0)};
Hp.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Hp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var Pf=Ip();
U("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(G("yt.scheduler.instance.dispose",vp),G("yt.scheduler.instance.addJob",xp),G("yt.scheduler.instance.addImmediateJob",yp),G("yt.scheduler.instance.cancelJob",zp),G("yt.scheduler.instance.cancelAllJobs",wp),G("yt.scheduler.instance.start",Bp),G("yt.scheduler.instance.pause",Cp),G("yt.scheduler.instance.setPriorityThreshold",Ep),G("yt.scheduler.instance.enablePriorityThreshold",Fp),G("yt.scheduler.instance.clearPriorityThreshold",Gp),G("yt.scheduler.initialized",
!0));function Jp(a){var b=new nm;this.g=(a=(b.l=mm(b.g))?a?new om(b,a):b:null)?new hm(a):null;this.l=document.domain||window.location.hostname}
Jp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Wl(b))}catch(f){return}else e=escape(b);co(a,e,c,this.l)};
Jp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=df.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Jp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;df.remove(""+a,"/",b===void 0?"youtube.com":b)};var Kp=function(){var a;return function(){a||(a=new Jp("ytidb"));return a}}();
function Lp(){var a;return(a=Kp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Mp=[],Np=!1;function Op(a){Np||(Mp.push({type:"ERROR",payload:a}),Mp.length>10&&Mp.shift())}
function Pp(a,b){Np||(Mp.push({type:"EVENT",eventType:a,payload:b}),Mp.length>10&&Mp.shift())}
;function Qp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Rp(a){return a.substr(0,a.indexOf(":"))||a}
;var Sp={},Tp=(Sp.AUTH_INVALID="No user identifier specified.",Sp.EXPLICIT_ABORT="Transaction was explicitly aborted.",Sp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Sp.MISSING_INDEX="Index not created.",Sp.MISSING_OBJECT_STORES="Object stores not created.",Sp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Sp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Sp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Sp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Sp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Sp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Sp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Sp),Up={},Vp=(Up.AUTH_INVALID="ERROR",Up.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Up.EXPLICIT_ABORT="IGNORED",Up.IDB_NOT_SUPPORTED="ERROR",Up.MISSING_INDEX=
"WARNING",Up.MISSING_OBJECT_STORES="ERROR",Up.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Up.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Up.QUOTA_EXCEEDED="WARNING",Up.QUOTA_MAYBE_EXCEEDED="WARNING",Up.UNKNOWN_ABORT="WARNING",Up.INCOMPATIBLE_DB_VERSION="WARNING",Up),Wp={},Xp=(Wp.AUTH_INVALID=!1,Wp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Wp.EXPLICIT_ABORT=!1,Wp.IDB_NOT_SUPPORTED=!1,Wp.MISSING_INDEX=!1,Wp.MISSING_OBJECT_STORES=!1,Wp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Wp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Wp.QUOTA_EXCEEDED=!1,Wp.QUOTA_MAYBE_EXCEEDED=!0,Wp.UNKNOWN_ABORT=!0,Wp.INCOMPATIBLE_DB_VERSION=!1,Wp);function W(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Tp[a]:c;d=d===void 0?Vp[a]:d;e=e===void 0?Xp[a]:e;Zo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
y(W,Zo);function Yp(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Tp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Yp.prototype)}
y(Yp,W);function Zp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Zp.prototype)}
y(Zp,Error);var $p=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function aq(a,b,c,d){b=Rp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new W("QUOTA_EXCEEDED",a);if(gc&&e.name==="UnknownError")return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Zp)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&$p.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",fi:e.name})];e.level="WARNING";return e}
function bq(a,b,c){var d=Lp();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function cq(a){if(!a)throw Error();throw a;}
function dq(a){return a}
function eq(a){this.g=a}
function fq(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
fq.resolve=function(a){return new fq(new eq(function(b,c){a instanceof fq?a.then(b,c):b(a)}))};
fq.reject=function(a){return new fq(new eq(function(b,c){c(a)}))};
fq.prototype.then=function(a,b){var c=this,d=a!=null?a:dq,e=b!=null?b:cq;return new fq(new eq(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){gq(c,c,d,f,g)}),c.l.push(function(){hq(c,c,e,f,g)})):c.state.status==="FULFILLED"?gq(c,c,d,f,g):c.state.status==="REJECTED"&&hq(c,c,e,f,g)}))};
function iq(a,b){a.then(void 0,b)}
function gq(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof fq?jq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hq(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof fq?jq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function jq(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof fq?jq(a,b,f,d,e):d(f)},function(f){e(f)})}
;function kq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function lq(a){return new Promise(function(b,c){kq(a,b,c)})}
function mq(a){return new fq(new eq(function(b,c){kq(a,b,c)}))}
;function nq(a,b){return new fq(new eq(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var oq=window,Y=oq.ytcsi&&oq.ytcsi.now?oq.ytcsi.now:oq.performance&&oq.performance.timing&&oq.performance.now&&oq.performance.timing.navigationStart?function(){return oq.performance.timing.navigationStart+oq.performance.now()}:function(){return(new Date).getTime()};function pq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=pq.prototype;n.add=function(a,b,c){return qq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return qq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function rq(a,b,c){a=a.g.createObjectStore(b,c);return new sq(a)}
n.delete=function(a,b){return qq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return qq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function tq(a,b,c){return qq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return mq(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function qq(a,b,c,d){var e,f,g,h,l,k,m,p,r,q,t,u;return B(function(z){switch(z.g){case 1:var K={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){z.M(4);break}g++;l=Math.round(Y());va(z,5);k=a.g.transaction(b,e.mode);K=new uq(k);K=vq(K,d);return A(z,K,7);case 7:return m=z.l,p=Math.round(Y()),wq(a,l,p,g,void 0,b.join(),e),z.return(m);case 5:r=wa(z);q=Math.round(Y());t=aq(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof W&&!t.g)||g>=f)wq(a,l,q,g,t,b.join(),e),h=t;z.M(2);break;case 4:return z.return(Promise.reject(h))}})}
function wq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Pp("QUOTA_EXCEEDED",{dbName:Rp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=2147483648&&(c=0),Pp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),xq(a,!1,d,f,b,g.tag),Op(e)):xq(a,!0,d,f,b,g.tag)}
function xq(a,b,c,d,e,f){Pp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function sq(a){this.g=a}
n=sq.prototype;n.add=function(a,b){return mq(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return mq(this.g.clear()).then(function(){})};
function yq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function zq(a,b){return Aq(a,{query:b},function(c){return c.delete().then(function(){return Bq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?zq(this,a):mq(this.g.delete(a))};
n.get=function(a){return mq(this.g.get(a))};
n.index=function(a){try{return new Cq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Zp(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function Aq(a,b,c){a=a.g.openCursor(b.query,b.direction);return Dq(a).then(function(d){return nq(d,c)})}
function uq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(l===null)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function vq(a,b){var c=new Promise(function(d,e){try{iq(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
uq.prototype.abort=function(){this.g.abort();this.l=!0;throw new W("EXPLICIT_ABORT");};
uq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new sq(a),this.i.set(a,b));return b};
function Cq(a){this.g=a}
Cq.prototype.delete=function(a){return Eq(this,{query:a},function(b){return b.delete().then(function(){return Bq(b)})})};
Cq.prototype.get=function(a){return mq(this.g.get(a))};
Cq.prototype.keyPath=function(){return this.g.keyPath};
Cq.prototype.unique=function(){return this.g.unique};
function Eq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Dq(a).then(function(d){return nq(d,c)})}
function Fq(a,b){this.request=a;this.cursor=b}
function Dq(a){return mq(a).then(function(b){return b?new Fq(a,b):null})}
function Bq(a){a.cursor.continue(void 0);return Dq(a.request)}
Fq.prototype.delete=function(){return mq(this.cursor.delete()).then(function(){})};
Fq.prototype.update=function(a){return mq(this.cursor.update(a))};function Gq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new pq(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.We,l=c.Xe,k=c.Qg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&Pp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Rp(a)});var t=f(),u=new uq(g.transaction);m&&
m(t,function(z){return q.oldVersion<z&&q.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var q=g.result;l&&q.addEventListener("versionchange",function(){l(f())});
q.addEventListener("close",function(){Pp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Rp(a),dbVersion:q.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Hq(a,b,c){c=c===void 0?{}:c;return Gq(a,b,c)}
function Iq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.We)&&c.addEventListener("blocked",function(){e()}),A(g,lq(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=wa(g),aq(f,a,"",-1);})}
;function Jq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
Jq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return Hq(a,b,c)};
Jq.prototype.delete=function(a){a=a===void 0?{}:a;return Iq(this.name,a)};
function Kq(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Lq(a,b){if(!b)throw bq("openWithToken",Rp(a.name));return Mq(a)}
function Mq(a){function b(){var f,g,h,l,k,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=(f=Error().stack)!=null?f:"",va(u,2),A(u,a.l(a.name,a.options.version,d),4);case 4:for(var z=h=u.l,K=a.options,P=[],X=w(Object.keys(K.xb)),O=X.next();!O.done;O=X.next()){O=O.value;var da=K.xb[O],Va=da.Cg===void 0?Number.MAX_VALUE:da.Cg;!(z.g.version>=da.Gb)||z.g.version>=Va||z.g.objectStoreNames.contains(O)||P.push(O)}l=P;if(l.length===0){u.M(5);break}k=Object.keys(a.options.xb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),Op(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.m<V("ytidb_remake_db_retries",1))){u.M(6);break}a.m++;return A(u,a.delete(),7);case 7:return Op(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Yp(m,k);case 5:return u.return(h);case 2:p=wa(u);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){u.M(8);break}return A(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,Kq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),aq(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Kq(a);if(a.g)return a.g;var d={Xe:function(f){f.close()},
closed:c,Qg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Nq=new Jq("YtIdbMeta",{xb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&rq(a,"databases",{keyPath:"actualName"})}});
function Oq(a,b){var c;return B(function(d){if(d.g==1)return A(d,Lq(Nq,b),2);c=d.l;return d.return(qq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return mq(f.g.put(a,void 0)).then(function(){})})}))})}
function Pq(a,b){var c;return B(function(d){if(d.g==1)return a?A(d,Lq(Nq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Qq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],A(e,Lq(Nq,b),2)):e.g!=3?(d=e.l,A(e,qq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return Aq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return Bq(g)})}),3)):e.return(c)})}
function Rq(a){return Qq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var Sq,Tq=new function(){}(new function(){});
function Uq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Lp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=so)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&parseInt(f[1],10)>=602));if(f||cc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Oq(d,Tq),4);case 4:return A(e,Pq("yt-idb-test-do-not-use",Tq),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Vq(){if(Sq!==void 0)return Sq;Np=!0;return Sq=Uq().then(function(a){Np=!1;var b;if((b=Kp())!=null&&b.g){var c;b={hasSucceededOnce:((c=Lp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Kp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Wq(){return D("ytglobal.idbToken_")||void 0}
function Xq(){var a=Wq();return a?Promise.resolve(a):Vq().then(function(b){(b=b?Tq:void 0)&&G("ytglobal.idbToken_",b);return b})}
;new bm;function Yq(a){if(!$o())throw a=new W("AUTH_INVALID",{dbName:a}),Op(a),a;var b=ap();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Zq(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",A(m,Xq(),2);case 2:g=m.l;if(!g)throw h=bq("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Op(h),h;Qp(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Yq(a);va(m,3);return A(m,Oq(l,g),5);case 5:return A(m,Hq(l.actualName,b,d),6);case 6:return m.return(m.l);case 3:return k=wa(m),va(m,7),A(m,Pq(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw k;}})}
function $q(a,b,c){c=c===void 0?{}:c;return Zq(a,b,!1,c)}
function ar(a,b,c){c=c===void 0?{}:c;return Zq(a,b,!0,c)}
function br(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return A(e,Xq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();Qp(a);d=Yq(a);return A(e,Iq(d.actualName,b),3)}return A(e,Pq(d.actualName,c),0)})}
function cr(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?A(e,Iq(d.actualName,b),2):A(e,Pq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function dr(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return A(d,Xq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();Qp("LogsDatabaseV2");return A(d,Rq(b),3)}c=d.l;return A(d,cr(c,a,b),0)})}
function er(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return A(d,Xq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();Qp(a);return A(d,Iq(a,b),3)}return A(d,Pq(a,c),0)})}
;function fr(a,b){Jq.call(this,a,b);this.options=b;Qp(a)}
y(fr,Jq);function gr(a,b){var c;return function(){c||(c=new fr(a,b));return c}}
fr.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?ar:$q)(a,b,Object.assign({},c))};
fr.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?er:br)(this.name,a)};
function hr(a,b){return gr(a,b)}
;var ir={},jr=hr("ytGcfConfig",{xb:(ir.coldConfigStore={Gb:1},ir.hotConfigStore={Gb:1},ir),shared:!1,upgrade:function(a,b){b(1)&&(yq(rq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),yq(rq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function kr(a){return Lq(jr(),a)}
function lr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,kr(c),2);case 2:return e=g.l,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,tq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function mr(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,kr(d),2);case 2:return f=h.l,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,tq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function nr(a){var b,c;return B(function(d){return d.g==1?A(d,kr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,qq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return Eq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function or(a){var b,c;return B(function(d){return d.g==1?A(d,kr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,qq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return Eq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function pr(){jf.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],G("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(pr,jf);pr.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;jf.prototype.Ba.call(this)};function qr(){this.l=0;this.i=new pr}
function rr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.M(0);break}c&&(a.m=c,G("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Wq();if(!d){g.M(3);break}if(c){g.M(4);break}return A(g,or(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return A(g,lr(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function sr(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!U("start_client_gcf"))return h.M(0);a.coldHashData=b;G("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Wq())?c?h.M(4):A(h,nr(d),5):h.M(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.M(0);g=c.configData;return A(h,mr(c,b,g,d),0)})}
qr.prototype.g=function(a){this.hotHashData=a;G("yt.gcf.config.hotHashData",this.hotHashData||null)};function tr(){return"INNERTUBE_API_KEY"in Xn&&"INNERTUBE_API_VERSION"in Xn}
function ur(){return{Yf:T("INNERTUBE_API_KEY"),Zf:T("INNERTUBE_API_VERSION"),Uc:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ae:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ag:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),be:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),de:T("INNERTUBE_CONTEXT_HL"),ce:T("INNERTUBE_CONTEXT_GL"),bg:T("INNERTUBE_HOST_OVERRIDE")||"",dg:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),cg:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function vr(a){var b={client:{hl:a.de,gl:a.ce,clientName:a.ae,clientVersion:a.be,configInfo:a.Uc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=bo();c.length>0&&(b.request={internalExperimentFlags:c});wr(a,void 0,b);xr(void 0,b);yr(void 0,b);zr(a,void 0,b);Ar(void 0,b);U("start_client_gcf")&&Br(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=T("INNERTUBE_CONTEXT");var d;if(U("enable_persistent_device_token")&&(a==null?0:(d=a.client)==null?0:d.rolloutToken)){var e;b.client.rolloutToken=a==null?void 0:(e=a.client)==null?void 0:e.rolloutToken}d=Object;e=d.assign;a=b.client;c={};for(var f=w(Object.entries(po(T("DEVICE",
"")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?c.deviceMake=h:g==="cmodel"?c.deviceModel=h:g==="cbr"?c.browserName=h:g==="cbrver"?c.browserVersion=h:g==="cos"?c.osName=h:g==="cosver"?c.osVersion=h:g==="cplatform"&&(c.platform=h)}b.client=e.call(d,a,c);return b}
function wr(a,b,c){a=a.ae;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=ce(b,Fn,96)||new Fn;var d=Ro();d=Object.keys(Pn).indexOf(d);d=d===-1?null:d;d!==null&&ke(c,3,d);de(b,Fn,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=Ro())}
function xr(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=ce(a,Ln,7)||new Ln,J(b,4,c),de(a,Ln,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function yr(a,b){var c;if(U("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?Yd(a,95,ld(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function zr(a,b,c){if(a.appInstallData)if(b){var d;c=(d=ce(b,En,62))!=null?d:new En;J(c,6,a.appInstallData);de(b,En,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ar(a,b){a:{var c=Yo();if(c){var d=Uo[c.type||"unknown"]||"CONN_UNKNOWN";c=Uo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?ke(a,61,Vo[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Yo(),d=d!=null&&d.effectiveType?Xo.hasOwnProperty(d.effectiveType)?Xo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?ke(a,94,Wo[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Cr(a,b,c){c=c===void 0?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Gh||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Fh;else{So.g||(So.g=new So);a={};c=[];var e=U("enable_first_party_auth_v2");"USER_SESSION_ID"in Xn&&e&&c.push({key:"u",value:T("USER_SESSION_ID")});if(c=hf(c))a.Authorization=c,c=void 0,c===void 0&&
(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Xn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Xn&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Br(a,b){if(!qr.g){var c=new qr;qr.g=c}c=qr.g;var d=Y()-c.l;if(c.l!==0&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=ce(a,En,62))!=null?g:new En;g=J(b,1,d);J(g,3,c).g(e);de(a,En,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var Dr=typeof TextEncoder!=="undefined"?new TextEncoder:null,Er=Dr?function(a){return Dr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Fr=D("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.Cc;Q.prototype.publish=Q.prototype.qe;Q.prototype.clear=Q.prototype.clear;G("ytPubsub2Pubsub2Instance",Fr);G("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);function Gr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={wi:a,vi:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Hr=void 0,Ir=void 0;function Jr(){if(!Ir){var a=T("WORKER_SERIALIZATION_URL");Ir=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Ya(a):null:null}return Ir||void 0}
function Kr(){var a=Jr();Hr||a===void 0||(Hr=new Worker(Za(a),void 0));return Hr}
;var Lr=V("max_body_size_to_compress",5E5),Mr=V("min_body_size_to_compress",500),Nr=!0,Or=0,Pr=0,Qr=V("compression_performance_threshold_lr",250),Rr=V("slow_compressions_before_abandon_count",4),Sr=!1,Tr=new Map,Ur=1,Vr=!0;function Wr(){if(typeof Worker==="function"&&Jr()&&!Sr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Tr.get(c.key);d&&(Xr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Tr.delete(c.key))}},b=Kr();
b&&(b.addEventListener("message",a),b.onerror=function(){Tr.clear()},Sr=!0)}}
function Yr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Nr)try{try{var g=(new Blob(b.split(""))).size}catch(m){io(m),g=null}if(g!=null&&(g>Lr||g<Mr))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!Vr||!U("initial_gzip_use_main_thread"))){Sr||Wr();var h=Kr();if(h&&!e){Tr.set(Ur,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Ur});Ur++;return}}var l=Er(b);b=(b=void 0,{});b.zf=!0;var k=new zn(b);
k.push(l,!0);if(k.err)throw k.msg||Am[k.err];Xr(k.result,f,a,c,d)}}catch(m){io(m),d(a,c)}else d(a,c)}
function Xr(a,b,c,d,e){Vr=!1;var f=Y();b.ticks.gelc=f;Pr++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Qr&&(Or++,U("abandon_compression_after_N_slow_zips")?Pr===V("compression_disable_point")&&Or>Rr&&(Nr=!1):Nr=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Gr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Zr(a){a=Object.assign({},a);delete a.Authorization;var b=hf();if(b){var c=new Ol;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=jc(c.digest(),3)}return a}
;var $r;function as(){$r||($r=new Jp("yt.innertube"));return $r}
function bs(a,b,c,d){if(d)return null;d=as().get("nextId",!0)||1;var e=as().get("requests",!0)||{};e[d]={method:a,request:b,authState:Zr(c),requestTime:Math.round(Y())};as().set("nextId",d+1,86400,!0);as().set("requests",e,86400,!0);return d}
function cs(a){var b=as().get("requests",!0)||{};delete b[a];as().set("requests",b,86400,!0)}
function ds(a){var b=as().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=Zr(Cr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),es(a,d.method,e,{}));delete b[c]}}as().set("requests",b,86400,!0)}}
;function fs(a){this.Yb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.qb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.He=(b=a.He)!=null?b:100;var c;this.ye=(c=a.ye)!=null?c:1;var d;this.ue=(d=a.ue)!=null?d:2592E6;var e;this.re=(e=a.re)!=null?e:12E4;var f;this.xe=(f=a.xe)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.ic=!!a.ic;var h;this.dc=(h=a.dc)!=null?h:.1;var l;this.uc=(l=a.uc)!=null?l:10;a.handleError&&(this.handleError=a.handleError);a.qb&&(this.qb=a.qb);a.Kb&&(this.Kb=a.Kb);a.Yb&&(this.Yb=a.Yb);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.hd=a.hd;this.ed=a.ed;gs(this)&&(!this.aa||this.aa("networkless_logging"))&&hs(this)}
function hs(a){gs(a)&&!a.Kb&&(a.g=!0,a.ic&&Math.random()<=a.dc&&a.fa.Ze(a.Z),is(a),a.ia.ya()&&a.Ub(),a.ia.ra(a.hd,a.Ub.bind(a)),a.ia.ra(a.ed,a.Ed.bind(a)))}
n=fs.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(gs(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&js(c,d)}).catch(function(e){js(c,d);
ks(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(gs(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(l.g==1)return A(l,d.fa.set(e,d.Z).catch(function(k){ks(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
ks(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(gs(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.nb(d.id,c.Z):e=!0;c.ia.fb&&c.aa&&c.aa("vss_network_hint")&&c.ia.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.nb(d.id,c.Z)}).catch(function(g){ks(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Ub=function(){var a=this;if(!gs(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return A(c,a.fa.Rd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?A(c,js(a,b),3):(a.Ed(),c.return());a.l&&(a.l=0,a.Ub());c.g=0})},this.He))};
n.Ed=function(){this.Ea.xa(this.l);this.l=0};
function js(a,b){var c;return B(function(d){switch(d.g){case 1:if(!gs(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.M(2);break}return A(d,a.fa.og(b.id,a.Z),3);case 3:(c=d.l)||a.qb(Error("The request cannot be found in the database."));case 2:if(ls(a,b,a.ue)){d.M(4);break}a.qb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.M(5);break}return A(d,a.fa.nb(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=ms(a,b));if(!b){d.M(0);
break}if(!b.skipRetry||b.id===void 0){d.M(8);break}return A(d,a.fa.nb(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function ms(a,b){if(!gs(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=ns(f);(h=os(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.uc)){m.M(2);break}if(!a.ia.yc){m.M(3);break}return A(m,a.ia.yc(),3);case 3:if(a.ia.ya()){m.M(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((l=b)==null?void 0:l.id)===
void 0){m.M(6);break}return A(m,a.fa.od(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.uc)return m.return();a.potentialEsfErrorCounter++;if(((k=b)==null?void 0:k.id)===void 0){m.M(8);break}return b.sendCount<a.ye?A(m,a.fa.od(b.id,a.Z,!0,h?!1:void 0),12):A(m,a.fa.nb(b.id,a.Z),8);case 12:a.Ea.Ha(function(){a.ia.ya()&&a.Ub()},a.xe);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.M(2):A(h,a.fa.nb(b.id,a.Z),2);a.ia.fb&&a.aa&&a.aa("vss_network_hint")&&a.ia.fb(!0);d(e,f);h.g=0})};
return b}
function ls(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function is(a){if(!gs(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Rd("QUEUED",a.Z).then(function(b){b&&!ls(a,b,a.re)?a.Ea.Ha(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.M(2):A(c,a.fa.od(b.id,a.Z),2);is(a);c.g=0})}):a.ia.ya()&&a.Ub()})}
function ks(a,b){a.Me&&!a.ia.ya()?a.Me(b):a.handleError(b)}
function gs(a){return!!a.Z||a.Yb}
function ns(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function os(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var ps;
function qs(){if(ps)return ps();var a={};ps=hr("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Gb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&rq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),yq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return ps()}
;function rs(a){return Lq(qs(),a)}
function ss(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,rs(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,tq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();ts(c);return g.return(f)})}
function us(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,rs(b),2);if(m.g!=3)return d=m.l,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),l="prev",U("use_fifo_for_networkless")&&(l="next"),k=void 0,A(m,qq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return Eq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(r){r.cursor.value&&
(k=r.cursor.value,a==="NEW"&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=Y();ts(c);return m.return(k)})}
function vs(a,b){var c;return B(function(d){if(d.g==1)return A(d,rs(b),2);c=d.l;return d.return(qq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",mq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function ws(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return A(f,rs(b),2);e=f.l;return f.return(qq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),d!==void 0&&(l.options.compress=d),mq(h.g.put(l,void 0)).then(function(){return l})):fq.resolve(void 0)})}))})}
function xs(a,b){var c;return B(function(d){if(d.g==1)return A(d,rs(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function ys(a){var b,c;return B(function(d){if(d.g==1)return A(d,rs(a),2);b=d.l;c=Y()-2592E6;return A(d,qq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return Aq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return Bq(f)})})}),0)})}
function zs(){B(function(a){return A(a,dr(),0)})}
function ts(a){U("nwl_csi_killswitch")||Gr("networkless_performance",a,{sampleRate:1})}
;var As={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506};var Bs={},Cs=hr("ServiceWorkerLogsDatabase",{xb:(Bs.SWHealthLog={Gb:1},Bs),shared:!0,upgrade:function(a,b){b(1)&&yq(rq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Ds(a){return Lq(Cs(),a)}
function Es(a){var b,c;B(function(d){if(d.g==1)return A(d,Ds(a),2);b=d.l;c=Y()-2592E6;return A(d,qq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return Aq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return Bq(f)})})}),0)})}
function Fs(a){var b;return B(function(c){if(c.g==1)return A(c,Ds(a),2);b=c.l;return A(c,b.clear("SWHealthLog"),0)})}
;var Gs={},Hs=0;function Is(a){var b=new Image,c=""+Hs++;Gs[c]=b;b.onload=b.onerror=function(){delete Gs[c]};
b.src=a}
;var Js;function Ks(){Js||(Js=new Jp("yt.offline"));return Js}
function Ls(a){if(U("offline_error_handling")){var b=Ks().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ks().set("errors",b,2592E3,!0)}}
;function Ms(){this.g=new Map;this.l=!1}
function Ns(){if(!Ms.g){var a=D("yt.networkRequestMonitor.instance")||new Ms;G("yt.networkRequestMonitor.instance",a);Ms.g=a}return Ms.g}
Ms.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Ms.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
Ms.prototype.removeParams=function(a){return a.split("?")[0]};
Ms.prototype.removeParams=Ms.prototype.removeParams;Ms.prototype.isEndpointCFR=Ms.prototype.isEndpointCFR;Ms.prototype.requestComplete=Ms.prototype.requestComplete;Ms.getInstance=Ns;function Z(){If.call(this);var a=this;this.i=!1;this.l=Of();this.l.ra("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=Ks().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Zo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ho(d)}Ks().set("errors",{},2592E3,!0)}}})}
y(Z,If);function Os(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;G("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.fb=function(a){this.l.l=a};
n.xf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.jf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.yc=function(a){a=Mf(this.l,a);a.then(function(b){U("use_cfr_monitor")&&Ns().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.yc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.jf;Z.prototype.getWindowStatus=Z.prototype.xf;Z.prototype.networkStatusHint=Z.prototype.fb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Os;function Ps(a){a=a===void 0?{}:a;If.call(this);var b=this;this.l=this.s=0;this.i=Os();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.wc?(this.wc=a.wc,c("networkstatus-online",function(){Qs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Jf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Jf(b,"publicytnetworkstatus-offline")})))}
y(Ps,If);Ps.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Ps.prototype.fb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Ps.prototype.yc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&Ns().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Qs(a,b){a.wc?a.l?(Pf.xa(a.s),a.s=Pf.Ha(function(){a.o!==b&&(Jf(a,b),a.o=b,a.l=Y())},a.wc-(Y()-a.l))):(Jf(a,b),a.o=b,a.l=Y()):Jf(a,b)}
;var Rs;function Ss(){var a=fs.call;Rs||(Rs=new Ps({ci:!0,Oh:!0}));a.call(fs,this,{fa:{Ze:ys,nb:xs,Rd:us,og:vs,od:ws,set:ss},ia:Rs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;io(new Zo(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else ho(b)},
qb:io,sendFn:Ts,now:Y,Me:Ls,Ea:Ip(),hd:"publicytnetworkstatus-online",ed:"publicytnetworkstatus-offline",ic:!0,dc:.1,uc:V("potential_esf_error_limit",10),aa:U,Kb:!($o()&&Bb(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new bm;U("networkless_immediately_drop_all_requests")&&zs();er("LogsDatabaseV2")}
y(Ss,fs);function Us(){var a=D("yt.networklessRequestController.instance");a||(a=new Ss,G("yt.networklessRequestController.instance",a),U("networkless_logging")&&Xq().then(function(b){a.Z=b;hs(a);a.i.resolve();a.ic&&Math.random()<=a.dc&&a.Z&&Es(a.Z);U("networkless_immediately_drop_sw_health_store")&&Vs(a)}));
return a}
Ss.prototype.writeThenSend=function(a,b){b||(b={});b=Ws(a,b);$o()||(this.g=!1);fs.prototype.writeThenSend.call(this,a,b)};
Ss.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Ws(a,b);$o()||(this.g=!1);fs.prototype.sendThenWrite.call(this,a,b,c)};
Ss.prototype.sendAndWrite=function(a,b){b||(b={});b=Ws(a,b);$o()||(this.g=!1);fs.prototype.sendAndWrite.call(this,a,b)};
Ss.prototype.awaitInitialization=function(){return this.i.promise};
function Vs(a){var b;B(function(c){if(!a.Z)throw b=bq("clearSWHealthLogsDb"),b;return c.return(Fs(a.Z).catch(function(d){a.handleError(d)}))})}
function Ts(a,b,c,d){d=d===void 0?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Xs(a,b);if(U("use_request_time_ms_header"))b.headers&&ro(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Eo(a,void 0,"POST",f,void 0);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Eo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new Oa({url:a});if(l.i&&l.l||l.m){var k=Ab(a.match(zb)[5]||null),m;if(!(m=!k||!k.endsWith("/aclk"))){var p=a.search(Ib),r=Hb(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=yb(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var u=!m;break b}}catch(K){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(K){}z=!1}c=z?!0:!1}else c=!1;c||Is(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Yr(a,b.postBody,b,Io,d)):Yr(a,JSON.stringify(b.postParams),b,Ho,d):Io(a,b)}
function Ws(a,b){U("use_event_time_ms_header")&&ro(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Xs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ns().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ns().requestComplete(a,!0);d(e,f)}}
;var Ys=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};G("ytNetworklessLoggingInitializationOptions",Ys);function Zs(a){var b=this;this.config_=null;a?this.config_=a:tr()&&(this.config_=ur());cp(function(){ds(b)},5E3)}
Zs.prototype.isReady=function(){!this.config_&&tr()&&(this.config_=ur());return!!this.config_};
function es(a,b,c,d){function e(t){t=t===void 0?!1:t;var u;if(d.retry&&h!="www.youtube-nocookie.com"&&(t||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(u=bs(b,c,k,l)),u)){var z=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(O,da){cs(u);z(O,da)};
c.onFetchSuccess=function(O,da){cs(u);K(O,da)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Us().writeThenSend(q,g):Us().sendAndWrite(q,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var X=g.postBody;typeof X!=="string"&&(X=JSON.stringify(g.postBody));Yr(q,X,g,Io,P)}else Yr(q,JSON.stringify(g.postParams),g,Ho,P)}else U("web_all_payloads_via_jspb")?Io(q,g):Ho(q,g)}catch(O){if(O.name==="InvalidAccessError")u&&(cs(u),u=0),io(Error("An extension is blocking network request."));else throw O;}u&&cp(function(){ds(a)},5E3)}
!T("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&io(new Zo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Zo("innertube xhrclient not ready",b,c,d);ho(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.bg)&&(h=f);var l=a.config_.dg||!1,k=Cr(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Zf+"/"+b,p={alt:"json"},r=!(!a.config_.cg||!f);r=r&&f.startsWith("Bearer");U("web_yt_net_omit_api_key")&&(r=!0);r||(p.key=a.config_.Yf);var q=qo(""+h+m,p||{},!0);
D("ytNetworklessLoggingInitializationOptions")&&Ys.isNwlInitialized?Vq().then(function(t){e(t)}):e(!1)}
;var $s=0;G("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++$s});G("ytEventsEventsListeners",C.ytEventsEventsListeners||{});G("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});var at=C.ytPubsubPubsubInstance||new Q,bt=C.ytPubsubPubsubSubscribedKeys||{},ct=C.ytPubsubPubsubTopicToKeys||{},dt=C.ytPubsubPubsubIsSynchronous||{};Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.Cc;Q.prototype.publish=Q.prototype.qe;Q.prototype.clear=Q.prototype.clear;G("ytPubsubPubsubInstance",at);G("ytPubsubPubsubTopicToKeys",ct);G("ytPubsubPubsubIsSynchronous",dt);G("ytPubsubPubsubSubscribedKeys",bt);var et=Symbol("injectionDeps");function ft(){this.key=qr}
function gt(){this.l=new Map;this.g=new Map}
gt.prototype.resolve=function(a){return a instanceof ft?ht(this,a.key,[],!0):ht(this,a,[])};
function ht(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.Vg!==void 0)var e=d.Vg;else if(d.Ug)e=d[et]?it(a,d[et],c):[],e=d.Ug.apply(d,x(e));else if(d.Tg){e=d.Tg;var f=e[et]?it(a,e[et],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ri||a.g.set(b,e);return e}
function it(a,b,c){return b?b.map(function(d){return d instanceof ft?ht(a,d.key,c,!0):ht(a,d,c)}):[]}
;var jt;function kt(){jt||(jt=new gt);return jt}
;var lt=window;function mt(){var a,b;return"h5vcc"in lt&&((a=lt.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=lt.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in lt&&lt.performance.mark&&lt.performance.measure?2:0}
function nt(a){var b=mt();switch(b){case 1:lt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:lt.performance.mark(a+"-start");break;case 0:break;default:qb(b,"unknown trace type")}}
function ot(a){var b=mt();switch(b){case 1:lt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";lt.performance.mark(c);lt.performance.measure(a,b,c);break;case 0:break;default:qb(b,"unknown trace type")}}
;var pt=U("web_enable_lifecycle_monitoring")&&mt()!==0,qt=U("web_enable_lifecycle_monitoring");function rt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Ip():d;this.m=c;this.l=d;this.i=new bm;this.g=a;for(a={cb:0};a.cb<this.g.length;a={sc:void 0,cb:a.cb},a.cb++)a.sc=this.g[a.cb],c=function(e){return function(){e.sc.Xc();b.g[e.cb].vc=!0;b.g.every(function(f){return f.vc===!0})&&b.i.resolve()}}(a),d=this.l.Za(c,st(this,a.sc)),this.g[a.cb]=Object.assign({},a.sc,{Xc:c,
jobId:d})}
function tt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return st(a,a.g[e])-st(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.vc||(a.l.xa(c.jobId),a.l.Za(c.Xc,10))}
rt.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.vc||this.l.xa(b.jobId),b.vc=!0;this.i.resolve()};
function st(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function ut(a){this.state=a;this.i=[];this.o=void 0;this.u={};pt&&nt(this.state)}
ut.prototype.install=function(a){this.i.push(a);return this};
function vt(a){pt&&ot(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Va==="none"}):d.from===a.state&&d.Va==="none"});
if(b){a.l&&(tt(a.l),a.l=void 0);qt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";pt&&nt(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(wt(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function wt(a,b){var c=b.filter(function(e){return xt(a,e)===10}),d=b.filter(function(e){return xt(a,e)!==10});
return a.u.ni?function(){var e=Fa.apply(0,arguments);return B(function(f){if(f.g==1)return A(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
ut.prototype.F=function(a){for(var b=Fa.apply(1,arguments),c=Ip(),d=w(a),e=d.next(),f={};!e.done;f={Pb:void 0},e=d.next())f.Pb=e.value,c.Fb(function(g){return function(){zt(g.Pb.name);g.Pb.Ic.apply(g.Pb,x(b));At(g.Pb.name)}}(f))};
ut.prototype.D=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=Ip(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.M(0);f.tb=e.value;f.Wb=void 0;g=function(l){return function(){zt(l.tb.name);var k=l.tb.Ic.apply(l.tb,x(b));typeof(k==null?void 0:k.then)==="function"?l.Wb=k.then(function(){At(l.tb.name)}):At(l.tb.name)}}(f);
c.Fb(g);return f.Wb?A(h,f.Wb,3):h.M(3)}f={tb:void 0,Wb:void 0};e=d.next();return h.M(2)})};
ut.prototype.s=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Xc:function(){zt(e.name);e.Ic.apply(e,x(b));At(e.name)},
priority:xt(c,e)}});
d.length&&(this.l=new rt(d))};
function xt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function zt(a){pt&&a&&nt(a)}
function At(a){pt&&a&&ot(a)}
ea.Object.defineProperties(ut.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Bt(a){ut.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Va:"application_navigating",action:this.A},{from:"application_navigating",Va:"none",action:this.B},{from:"application_navigating",Va:"application_navigating",action:function(){}},
{from:"none",Va:"none",action:function(){}}]}
var Ct;y(Bt,ut);Bt.prototype.A=function(a,b){var c=this;this.g=cp(function(){c.m==="application_navigating"&&vt(c)},5E3);
a(b==null?void 0:b.event)};
Bt.prototype.B=function(a,b){this.g&&(Pf.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function Dt(){Ct||(Ct=new Bt);return Ct}
;var Et=[];G("yt.logging.transport.getScrapedGelPayloads",function(){return Et});function Ft(){this.store={};this.g={}}
Ft.prototype.storePayload=function(a,b){a=Gt(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);U("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
Ft.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ht(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Ft.prototype.extractMatchingEntries=function(a){a=Ht(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Ft.prototype.getSequenceCount=function(a){a=Ht(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ht(a,b){var c=Gt(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Gt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(It(b.auth,g[0])){var h=b.isJspb;It(h===void 0?"undefined":h?"true":"false",g[1])&&It(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),It(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function It(a,b){return a===void 0||a==="undefined"?!0:a===b}
Ft.prototype.getSequenceCount=Ft.prototype.getSequenceCount;Ft.prototype.extractMatchingEntries=Ft.prototype.extractMatchingEntries;Ft.prototype.smartExtractMatchingEntries=Ft.prototype.smartExtractMatchingEntries;Ft.prototype.storePayload=Ft.prototype.storePayload;function Gt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var Jt=V("initial_gel_batch_timeout",2E3),Kt=V("gel_queue_timeout_max_ms",6E4),Lt=V("gel_min_batch_size",5),Mt=void 0;function Nt(){this.m=this.g=this.l=0;this.i=!1}
var Ot=new Nt,Pt=new Nt,Qt=new Nt,Rt=new Nt,St,Tt=!0,Ut=1,Vt=new Map,Wt=C.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",Wt);var Xt=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};G("ytLoggingTransportTokensToJspbCttTargetIds_",Xt);var Yt={};function Zt(){var a=D("yt.logging.ims");a||(a=new Ft,G("yt.logging.ims",a));return a}
function $t(a,b){if(a.endpoint==="log_event"){au(a);var c=bu(a),d=cu(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=As[d||""];var f,g;if(kt().resolve(new ft)==null)var h=void 0;else{var l;h=(l=D("yt.gcf.config.hotConfigGroup"))!=null?l:T("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;
f=du(e.tier);if(f===400){eu(a,b);return}}Yt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Zt().storePayload(e,a.payload);fu(b,c,e,d==="gelDebuggingEvent")}}
function fu(a,b,c,d){function e(){gu(U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Mt=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("tvhtml5_logging_max_batch")||V("web_logging_max_batch")||100;var g=Y(),h=hu(f,c.tier),l=h.m;d&&(h.i=!0);d=0;c&&(d=Zt().getSequenceCount(c));d>=1E3?e():d>=a?St||(St=iu(function(){e();St=void 0},0)):g-l>=10&&(ju(f,c.tier),h.m=g)}
function eu(a,b){if(a.endpoint==="log_event"){U("more_accurate_gel_parser")&&Zt().storePayload({isJspb:!1},a.payload);au(a);var c=bu(a),d=new Map;d.set(c,[a.payload]);var e=cu(a.payload)||"";b&&(Mt=new b);return new dg(function(f,g){Mt&&Mt.isReady()?ku(d,Mt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function bu(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Wt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function gu(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new dg(function(e,f){var g=hu(b,c),h=g.i;g.i=!1;lu(g.l);lu(g.g);g.g=0;Mt&&Mt.isReady()?c===void 0&&U("enable_web_tiered_gel")?mu(e,f,d,a,b,300,h):mu(e,f,d,a,b,c,h):(ju(b,c),e())})}
function mu(a,b,c,d,e,f,g){var h=Mt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=U("enable_web_tiered_gel")?Zt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Zt().extractMatchingEntries(p),l.set(d,b),nu(l,h,a,c,g)):(l=U("enable_web_tiered_gel")?Zt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Zt().extractMatchingEntries(p),k.set(d,l),ku(k,h,a,b,
c,!1,g));else if(e){b=w(Object.keys(Yt));for(k=b.next();!k.done;k=b.next())k=k.value,f=U("enable_web_tiered_gel")?Zt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Zt().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),f.length>0&&l.set(k,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Yt[k];nu(l,h,a,c,g)}else{l=w(Object.keys(Yt));for(m=l.next();!m.done;m=l.next())m=m.value,p=U("enable_web_tiered_gel")?Zt().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Zt().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&k.set(m,p),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Yt[m];ku(k,h,a,b,c,!1,g)}}
function ju(a,b){function c(){gu(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=hu(a,b),e=d===Rt||d===Qt?5E3:Kt;U("web_gel_timeout_cap")&&!d.g&&(e=iu(function(){c()},e),d.g=e);
lu(d.l);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Tt&&(e=Jt);e=iu(function(){V("gel_min_batch_size")>0?Zt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Lt&&c():c()},e);
d.l=e}
function ku(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),l=a.size,k=ou(g);a=w(a);var m=a.next();for(g={};!m.done;g={dd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,gd:void 0,fd:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=se({context:vr(b.config_||ur())});if(!Ia(p)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Wt[m])&&pu(g.batchRequest,m,p);delete Wt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";qu(g.batchRequest,h,g.dangerousLogToVisitorSession);ru(e);g.gd=function(r){U("start_client_gcf")&&Pf.Ha(function(){return B(function(q){return A(q,su(r),0)})});
l--;l||c()};
g.dd=0;g.fd=function(r){return function(){r.dd++;if(e.bypassNetworkless&&r.dd===1)try{es(b,k,r.batchRequest,tu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.gd,r.fd,f)),Tt=!1}catch(q){ho(q),d()}l--;l||c()}}(g);
try{es(b,k,g.batchRequest,tu(e,g.dangerousLogToVisitorSession,g.gd,g.fd,f)),Tt=!1}catch(r){ho(r),d()}}}
function nu(a,b,c,d,e){d=d===void 0?{}:d;var f=Math.round(Y()),g={value:a.size},h=new Map([].concat(x(a))),l=w(h);for(h=l.next();!h.done;h=l.next()){var k=w(h.value).next().value,m=a.get(k);h=new Tn;var p=b.config_||ur(),r=new On,q=new Hn;J(q,1,p.de);J(q,2,p.ce);ke(q,16,p.ag);J(q,17,p.be);if(p.Uc){var t=p.Uc,u=new En;t.coldConfigData&&J(u,1,t.coldConfigData);t.appInstallData&&J(u,6,t.appInstallData);t.coldHashData&&J(u,3,t.coldHashData);t.hotHashData&&u.g(t.hotHashData);de(q,En,62,u)}if((t=C.devicePixelRatio)&&
t!=1){if(t!=null&&typeof t!=="number")throw Error("Value of float/double field must be a number, found "+typeof t+": "+t);Yd(q,65,t)}t=T("EXPERIMENTS_TOKEN","");t!==""&&J(q,54,t);t=bo();if(t.length>0){u=new Kn;for(var z=0;z<t.length;z++){var K=new In;J(K,1,t[z].key);a:{var P=K,X=nd(t[z].value),O=Jn;P=P.T;var da=yc(P);Jc(da);if(X==null){var Va=ae(P);if(be(Va,P,da,O)===2)Va.set(O,0);else break a}else{Va=P;O.includes(2);var gb=ae(Va),ra=be(gb,Va,da,O);ra!==2&&(ra&&(da=Zd(Va,da,ra)),gb.set(O,2))}Zd(P,
da,2,X)}ge(u,15,In,K)}de(r,Kn,5,u)}wr(p,q);xr(r);yr(q);zr(p,q);Ar(q);U("start_client_gcf")&&Br(q);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(p=new Nn,J(p,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&(t=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=ce(r,Nn,3)||new Nn,p=r,t=J(u,18,t),de(p,Nn,3,t));p=q;t=w(Object.entries(po(T("DEVICE",""))));for(u=t.next();!u.done;u=t.next())z=w(u.value),u=z.next().value,z=z.next().value,u==="cbrand"?J(p,12,z):
u==="cmodel"?J(p,13,z):u==="cbr"?J(p,87,z):u==="cbrver"?J(p,88,z):u==="cos"?J(p,18,z):u==="cosver"?J(p,19,z):u==="cplatform"&&ke(p,42,To(z));de(r,Hn,1,q);de(h,On,1,r);if(q=Xt[k])a:{if(ie(q,1))r=1;else if(q.getPlaylistId())r=2;else break a;de(h,Sn,4,q);q=ce(h,On,1)||new On;p=ce(q,Nn,3)||new Nn;t=new Mn;J(t,2,k);ke(t,1,r);ge(p,12,Mn,t);de(q,Nn,3,p)}delete Xt[k];k=k==="visitorOnlyApprovedKey";uu()||Yd(h,2,ld(f));!k&&(r=T("EVENT_ID"))&&(q=vu(),p=new Rn,J(p,1,r),Yd(p,2,ld(q)),de(h,Rn,5,p));ru(d);if(U("jspb_serialize_with_worker")&&
(r=Kr())&&d.writeThenSend){Vt.set(Ut,{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=r;b=a.postMessage;c=ne(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:m,key:Ut});Ut++;break}if(m){r=[];for(q=0;q<m.length;q++)try{r.push(new Qn(m[q]))}catch(La){ho(new Zo("Transport failed to deserialize "+String(m[q])))}m=r}else m=[];m=w(m);for(r=m.next();!r.done;r=m.next())ge(h,3,Qn,r.value);m={startTime:Y(),ticks:{},
infos:{}};try{le=!0;var Ea=JSON.stringify(ne(h),Ld)}finally{le=!1}m.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&Gr("gel_jspb_serialize",m,{sampleRate:.1});wu(Ea,b,c,d,e,k,g)}}
function wu(a,b,c,d,e,f,g){d=d===void 0?{}:d;g=g===void 0?{value:0}:g;e=ou(e);d=tu(d,f,function(h){U("start_client_gcf")&&Pf.Ha(function(){return B(function(l){return A(l,su(h),0)})});
g.value--;g.value||c()},function(){g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;es(b,e,"",d);Tt=!1}
function ru(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function tu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ih:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};uu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function qu(a,b,c){uu()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=vu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function vu(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*65535/2));a++;a>65535&&(a=1);Yn("BATCH_CLIENT_COUNTER",a);return a}
function pu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function au(a){if(!D("yt.logging.transport.enableScrapingForTest")){var b=ao("il_payload_scraping");if((b!==void 0?String(b):"")==="enable_il_payload_scraping")Et=[],G("yt.logging.transport.enableScrapingForTest",!0),G("yt.logging.transport.scrapedPayloadsForTesting",Et),G("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
G("yt.logging.transport.scrapeClientEvent",!0);else return}b=D("yt.logging.transport.scrapedPayloadsForTesting");var c=D("yt.logging.transport.payloadToScrape"),d=D("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}G("yt.logging.transport.scrapedPayloadsForTesting",b)}
function uu(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function iu(a,b){return U("transport_use_scheduler")===!1?zo(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?cp(function(){if(Dt().m==="none")a();else{var c={};Dt().install((c.none={Ic:a},c))}},b):cp(a,b)}
function lu(a){U("transport_use_scheduler")?Pf.xa(a):window.clearTimeout(a)}
function su(a){var b,c,d,e,f,g,h,l,k,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[Dn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[Cn.name]:void 0;h=r;k=(l=d)==null?void 0:l.coldHashData;return(m=kt().resolve(new ft))?g?e?A(p,rr(m,g,e),2):A(p,rr(m,g),2):p.M(2):p.return()}return k?h?A(p,sr(m,k,h),0):A(p,sr(m,k),0):p.M(0)})}
function hu(a,b){b=b===void 0?200:b;return a?b===300?Rt:Pt:b===300?Qt:Ot}
function cu(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,As[b])return b}
function du(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function ou(a){return(a===void 0?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var xu=C.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",xu);var yu,zu=C.ytLoggingDocDocumentNonce_;
if(!zu){var Au;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Bu=Array(16),Cu=new Uint8Array(16);window.crypto.getRandomValues(Cu);for(var Du=0;Du<Bu.length;Du++)Bu[Du]=Cu[Du];Au=Bu;break a}catch(a){}for(var Eu=Array(16),Fu=0;Fu<16;Fu++){for(var Gu=Date.now(),Hu=0;Hu<Gu%23;Hu++)Eu[Fu]=Math.random();Eu[Fu]=Math.floor(Math.random()*256)}if(uo)for(var Iu=1,Ju=0;Ju<uo.length;Ju++)Eu[Iu%16]=Eu[Iu%16]^Eu[(Iu-1)%16]/4^uo.charCodeAt(Ju),Iu++;Au=Eu}for(var Ku=Au,Lu=[],Mu=0;Mu<Ku.length;Mu++)Lu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Ku[Mu]&
63));zu=Lu.join("");G("ytLoggingDocDocumentNonce_",zu)}yu=zu;function Nu(a){return T("client-screen-nonce-store",{})[a===void 0?0:a]}
function Ou(a,b){b=b===void 0?0:b;var c=T("client-screen-nonce-store");c||(c={},Yn("client-screen-nonce-store",c));c[b]=a}
function Pu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
G("yt_logging_screen.getRootVeType",function(a){return T(Pu(a===void 0?0:a))});
function Qu(){var a=T("csn-to-ctt-auth-info");a||(a={},Yn("csn-to-ctt-auth-info",a));return a}
function Ru(a){a=Nu(a===void 0?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
G("yt_logging_screen.getCurrentCsn",Ru);function Su(a,b,c){var d=Qu();(c=Ru(c))&&delete d[c];b&&(d[a]=b)}
G("yt_logging_screen.getCttAuthInfo",function(a){return Qu()[a]});
G("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Nu(c)||b!==T(Pu(c)))if(Su(a,d,c),Ou(a,c),Yn(Pu(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:yu,clientScreenNonce:a};var f=f===void 0?{}:f;var g=Zs;T("ytLoggingEventsDefaultDisabled",!1)&&Zs===Zs&&(g=null);f=f===void 0?{}:f;var h={},l=Math.round(f.timestamp||Y());h.eventTimeMs=l<Number.MAX_SAFE_INTEGER?l:0;h.foregroundHeartbeatScreenAssociated=e;e=D("_lact",window);e=e==null?-1:Math.max(Date.now()-
e,0);h.context={lastActivityMs:String(f.timestamp||!isFinite(e)?-1:e)};f.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(e=h.context,l=f.sequenceGroup,xu[l]=l in xu?xu[l]+1:0,e.sequence={index:xu[l],groupKey:l},f.endOfSequence&&delete xu[f.sequenceGroup]);(f.sendIsolatedPayload?eu:$t)({endpoint:"log_event",payload:h,cttAuthInfo:f.cttAuthInfo,dangerousLogToVisitorSession:f.dangerousLogToVisitorSession},g)}},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Tu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Uu(a,b){var c=c===void 0?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Bb(window.location.href);e&&d.push(e);e=Bb(a);if(sb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),lb(d,a),a=d.href)if(a=Cb(a),a=Db(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ru()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Vu(a,b,f)}else Vu(a,b)}
function Vu(a,b,c){a=Wu(a);b=b?Fb(b):"";c=c||5;(ff()||(ec||fc)&&to("applewebkit")&&!to("version")&&(!to("safari")||to("gsa/"))||dc&&to("version/")||!T("EOM_VISITOR_DATA"))&&co(a,b,c)}
function Wu(a){var b=a;a=w(Tu);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Ib),f=0,g=[];(c=Hb(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Jb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new Q;function Xu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(T("INNERTUBE_CLIENT_NAME")==="WEB"||T("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function Yu(a,b){b=b?{feature:b}:{};var c=T("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[$n()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,Uu(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Gb(a,d);T("LOGGED_IN",!0)&&Xu()&&(d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Bb(window.location.href))&&d.push(b),b=Bb(a),sb(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Cb(a),(d=Db(d))?
(d=Wu(d),d=(d=df.get(""+d,void 0)||null)?po(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,Xu()?(c||(c=T("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&Uu(a,d));e=a+e;var g=g===void 0?db:g;a:if(g=g===void 0?db:g,e instanceof $a)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof bb&&d.jg(e)){g=new $a(e);break a}g=void 0}f=f.location;g=kb(g||ab);g!==void 0&&(f.href=g)}}
;G("searchbox.yt.install",function(a,b,c,d,e,f,g){th||(th=new Kl);th.install(a,b,c,d,e,f,g)});
G("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=Pf.Ha;if(a&&e){var f=T("SBOX_SETTINGS"),g=T("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,Yu,d))&&e(a,100)}});}).call(this);