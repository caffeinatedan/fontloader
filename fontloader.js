(function(){'use strict';function g(a){a=a.replace(/^\s+|\s+$/,"").replace(/\s+/g," ").split(" ");for(var b=0;b<a.length;b+=1)if(/^(-?\d|--)/.test(a[b])||!/^([_a-zA-Z0-9-]|[^\0-\237]|(\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?|\\[^\n\r\f0-9a-f]))+$/.test(a[b]))return null;return a.join(" ")}
function k(a){for(var b=1,c="",d={family:[]},e,f=0;e=a.charAt(f);f+=1)if(4!==b||'"'!==e&&"'"!==e)3===b&&","===e?(b=4,c=""):4===b&&","===e?((e=g(c))&&d.family.push(e),c=""):1!==b||" "!==e&&"/"!==e?2===b&&" "===e?(/^(\+|-)?([0-9]*\.)?[0-9]+(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)?$/.test(c)&&(d.lineHeight=c),b=4,c=""):c+=e:(/^((xx|x)-large|(xx|s)-small|small|large|medium)$/.test(c)||/^(larg|small)er$/.test(c)||/^(\+|-)?([0-9]*\.)?[0-9]+(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/.test(c)?
(b="/"===e?2:4,d.size=c):/^(italic|oblique)$/.test(c)?d.style=c:/^small-caps$/.test(c)?d.variant=c:/^(bold(er)?|lighter|[1-9]00)$/.test(c)?d.weight=c:/^((ultra|extra|semi)-)?(condensed|expanded)$/.test(c)&&(d.stretch=c),c="");else{b=f+1;do if(b=a.indexOf(e,b)+1,!b)return null;while("\\"===a.charAt(b-2));d.family.push(a.slice(f+1,b-1));f=b-1;b=3;c=""}if(3===b&&!/^\s*$/.test(c))return null;4===b&&(e=g(c))&&d.family.push(e);return d.size&&d.family.length?d:null};function p(a){for(var b=/\burl\((\'|\"|)([^\'\"]+?)\1\)( format\((\'|\"|)([^\'\"]+?)\4\))?/g,c=null,d=[];c=b.exec(a);)c[2]&&d.push({url:c[2],format:c[5]});return d};function q(a){this.a=u;this.b=void 0;this.c=[];var b=this;try{a(function(a){b.resolve(a)},function(a){b.reject(a)})}catch(c){b.reject(c)}}var u=2;function v(a){return new q(function(b,c){c(a)})}function A(a){return new q(function(b){b(a)})}
q.prototype.resolve=function(a){var b=this;if(b.a===u){if(a===b)throw new TypeError("Promise settled with itself.");var c=!1;try{var d=a&&a.then;if(null!==a&&"object"===typeof a&&"function"===typeof d){d.call(a,function(a){c||b.resolve(a);c=!0},function(a){c||b.reject(a);c=!0});return}}catch(e){c||b.reject(e);return}b.a=0;b.b=a;B(b)}};q.prototype.reject=function(a){if(this.a===u){if(a===this)throw new TypeError("Promise settled with itself.");this.a=1;this.b=a;B(this)}};
function B(a){setTimeout(function(){if(a.a!==u)for(;a.c.length;){var b=a.c.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(f){b(f)}}},0)}q.prototype.catch=function(a){return this.then(void 0,a)};q.prototype.then=function(a,b){var c=this;return new q(function(d,e){c.c.push([a,b,d,e]);B(c)})};
function C(a){return new q(function(b,c){function d(c){return function(d){f[c]=d;e+=1;e===a.length&&b(f)}}var e=0,f=[];0===a.length&&b(f);for(var h=0;h<a.length;h+=1)a[h].then(d(h),c)})}function D(a){return new q(function(b,c){for(var d=0;d<a.length;d+=1)a[d].then(b,c)})}
if(window.Promise){var F=window.Promise;F.prototype.then=window.Promise.prototype.then;F.prototype.catch=window.Promise.prototype["catch"];F.all=window.Promise.all;F.race=window.Promise.race;F.resolve=window.Promise.resolve;F.reject=window.Promise.reject}else F=q,F.prototype.then=q.prototype.then,F.prototype.catch=q.prototype.catch,F.all=C,F.race=D,F.resolve=A,F.reject=v;function G(){this.fonts=[];this.f="loaded";Object.defineProperties(this,{status:{get:function(){return this.f}},size:{get:function(){return this.fonts.length}}})}
G.prototype.add=function(a){if(!this.has(a)){if(!a.a){var b=null;if("loaded"===a.f){for(var b=new Uint8Array(a.c),c="",d=0;d<b.length;d++)c+=String.fromCharCode(b[d]);b="url(data:font/opentype;base64,"+btoa(c)+")"}else b=a.i;b='@font-face {font-family:"'+a.family+'";src:'+b+";font-style:"+a.style+";font-weight:"+a.weight+";unicode-range:"+a.unicodeRange+";}";a.a=document.createElement("style");a.a.textContent=b;document.head.appendChild(a.a)}this.fonts.push(a)}};
G.prototype["delete"]=function(a){var b=this.fonts.indexOf(a);return-1!==b?(a.a&&(a.a.parentNode.removeChild(a.a),a.a=null),this.fonts.splice(b,1),!0):!1};G.prototype.clear=function(){this.fonts=[]};G.prototype.has=function(a){return-1!==this.fonts.indexOf(a)};G.prototype.forEach=function(a){var b=this;this.fonts.forEach(function(c,d){a(c,d,b)})};
function H(a,b){function c(a){return"bold"===a?700:"normal"===a?400:a}var d=k(b);return a.fonts.filter(function(a){for(var b=d.family,h=0;h<b.length;h++)if(a.family===b[h]&&a.style===(d.style||"normal")&&c(a.weight)===c(d.weight||"normal"))return!0;return!1})}
G.prototype.load=function(a,b){var c=this,d=H(this,a);return d.length?(c.f="loading",F.all(d.map(function(a){return I(new J(a.family,{style:a.style,weight:a.weight,stretch:a.stretch,variant:a.variant,featureSettings:a.featureSettings}),b,1E3).then(function(){c.f="loaded";return a},function(){c.f="loaded";return a})}))):F.resolve([])};G.prototype.check=function(a){a=H(this,a);if(0===a.length)return!1;for(var b=0;b<a.length;b++)if("loaded"!==a[b].status)return!1;return!0};function K(a,b){this.status=b.status;this.ok=200<=b.status&&300>b.status;this.statusText=b.statusText;this.body=a}K.prototype.arrayBuffer=function(){return F.resolve(this.body)};function L(a,b){var c=b||{method:"GET",headers:{},body:null};return new F(function(b,e){var f=new XMLHttpRequest;f.onload=function(){b(new K(f.response,{status:f.status,statusText:f.statusText}))};f.onerror=function(){e(new TypeError("Network request failed"))};f.open(c.method,a);f.responseType="arraybuffer";c.headers&&Object.keys(c.headers).forEach(function(a){f.setRequestHeader(a,c.headers[a])});f.send(c.body)})}var M=window.fetch||L;function N(a){function b(){document.body?a():setTimeout(b,0)}b()};function O(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.i=document.createElement("span");this.h=document.createElement("span");this.g=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.h.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.i.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.i);this.c.appendChild(this.h);this.a.appendChild(this.b);this.a.appendChild(this.c)}function P(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}
function Q(a){var b=a.a.offsetWidth,c=b+100;a.h.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function R(a,b){a.b.addEventListener("scroll",function(){Q(a)&&null!==a.a.parentNode&&b(a.g)},!1);a.c.addEventListener("scroll",function(){Q(a)&&null!==a.a.parentNode&&b(a.g)},!1);Q(a)};function J(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.variant=c.variant||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"stretch";this.featureSettings=c.featureSettings||"normal"}var S=null;
function I(a,b,c){b=b||"BESbswy";var d=c||3E3,e="font-style:"+a.style+";font-variant:"+a.variant+";font-weight:"+a.weight+";font-stretch:"+a.stretch+";font-feature-settings:"+a.featureSettings+";-moz-font-feature-settings:"+a.featureSettings+";-webkit-font-feature-settings:"+a.featureSettings+";",f=document.createElement("div"),h=new O(b),r=new O(b),t=new O(b),l=-1,m=-1,n=-1,w=-1,x=-1,y=-1;return new F(function(b,c){function E(){null!==f.parentNode&&f.parentNode.removeChild(f)}function z(){if(-1!==
l&&-1!==m||-1!==l&&-1!==n||-1!==m&&-1!==n)if(l===m||l===n||m===n){if(null===S){var c=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!c&&(536>parseInt(c[1],10)||536===parseInt(c[1],10)&&11>=parseInt(c[2],10))}S?l===w&&m===w&&n===w||l===x&&m===x&&n===x||l===y&&m===y&&n===y||(E(),b(a)):(E(),b(a))}}N(function(){function b(){if(Date.now()-V>=d)E(),c(a);else{var e=document.hidden;if(!0===e||void 0===e)l=h.a.offsetWidth,m=r.a.offsetWidth,n=t.a.offsetWidth,z();setTimeout(b,50)}}
var V=Date.now();P(h,"sans-serif",e);P(r,"serif",e);P(t,"monospace",e);f.appendChild(h.a);f.appendChild(r.a);f.appendChild(t.a);document.body.appendChild(f);w=h.a.offsetWidth;x=r.a.offsetWidth;y=t.a.offsetWidth;b();R(h,function(a){l=a;z()});P(h,a.family+",sans-serif",e);R(r,function(a){m=a;z()});P(r,a.family+",serif",e);R(t,function(a){n=a;z()});P(t,a.family+",monospace",e)})})};var T=null;
function U(){if(!T){var a=document.createElement("style"),b=document.getElementsByTagName("head")[0];a.appendChild(document.createTextNode('@font-face{font-family:"__fff__";src:url(data:font/font-woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAciuMTaGVo8IaqBbcKPeB3CyAAIO4unr9nb72QE3p00iGQQIZcAAcAMEJOztBx7zdWVWn//BAPW1l0BN429cPrCPE75MA637gPs0DjavNxzHtWeXXErKIV3AF9TbHqCTOATL2BgjeIH30lQwSAonU1LabV8Iz12wDvgd/obV5QVxXDKvUhW1QfWNrS6HzEQJaP4tBA==) format("woff2"),url(data:application/font-woff;base64,d09GRgABAAAAAAHgAAoAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABUAAAABcAAABOBIQEIWNtYXAAAAFwAAAAJgAAACwADABzZ2x5ZgAAAaAAAAAUAAAAFAwBPQJoZWFkAAAA9AAAAC0AAAA2CHEB92hoZWEAAAEkAAAAFgAAACQMAQgDaG10eAAAAWgAAAAIAAAACAgAAABsb2NhAAABmAAAAAYAAAAGAAoAAG1heHAAAAE8AAAAEwAAACAABAACbmFtZQAAAbQAAAAeAAAAIAAjCF5wb3N0AAAB1AAAAAwAAAAgAAMAAHgBY2BkYABhb81vuvH8Nl8ZmFgYQOBCWvVrMP3VURxEczBAxBmYQAQAAFIIBgAAAHgBY2BkYGBhAAEOKAkUQQVMAAJKABkAAHgBY2BkYGBgAkIgjQ0AAAC+AAcAeAFjAIEUBkYGcoECgwILmAEiASBRAK4AAAAAAAgAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoQgvsP//xDy/0EwnwEATX4GfAAAAAAAAAAKAAAAAQAAAAAIAAQAAAEAADEBCAAEAHgBY2BgYGKQY2BmYGThZGAEshmgbCYw2wEABjMAigAAeAFjYGbACwAAfQAE) format("woff"),url(data:font/opentype;base64,AAEAAAAKAIAAAwAgT1MvMgSEBCEAAAEoAAAATmNtYXAADABzAAABgAAAACxnbHlmCAE5AgAAAbQAAAAUaGVhZARxAiIAAACsAAAANmhoZWEIAQQDAAAA5AAAACRobXR4BAAAAAAAAXgAAAAIbG9jYQAKAAAAAAGsAAAABm1heHAABAACAAABCAAAACBuYW1lACMIXgAAAcgAAAAgcG9zdAADAAAAAAHoAAAAIAABAAAAAQAAayoF118PPPUAAgQAAAAAANBme+sAAAAA0PVBQgAAAAAEAAQAAAAAAAACAAAAAAAAAAEAAAQAAAAAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAACAAEAAAACAAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAQAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAQADAAEAAAAMAAQAIAAAAAQABAABAAAAQP//AAAAQP///8EAAQAAAAAAAAAAAAoAAAABAAAAAAQABAAAAQAAMQEEAAQAAAAAAgAeAAMAAQQJAAEAAgAAAAMAAQQJAAIAAgAAAEAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("opentype");}'));b.appendChild(a);
T=I(new J("__fff__",{}),"@").then(function(){var c=new O("@"),d=[];P(c,"__fff__","");document.body.appendChild(c.a);var e=c.a.offsetWidth;300===e?d=["woff2","woff","opentype","truetype"]:200===e?d=["woff","opentype","truetype"]:100===e&&(d=["opentype","truetype"]);b.removeChild(a);document.body.removeChild(c.a);return d})}return T};function W(a,b,c){var d=this,e=c||{};this.i=b;this.c=null;this.b=[];this.j=new F(function(a,b){d.h=a;d.g=b});this.f="unloaded";Object.defineProperties(this,{family:{get:function(){return a}},style:{get:function(){return e.style||"normal"}},weight:{get:function(){return e.weight||"normal"}},stretch:{get:function(){return e.stretch||"normal"}},unicodeRange:{get:function(){return e.unicodeRange||"U+0-10FFFF"}},variant:{get:function(){return e.variant||"normal"}},featureSettings:{get:function(){return e.featureSettings||
"normal"}},status:{get:function(){return this.f}},loaded:{get:function(){return this.j}}});"string"===typeof b?this.b=p(b):(this.c=b,this.f="loaded",this.h(d));this.a=null}
W.prototype.l=function(){var a=this;"unloaded"===a.f&&(a.f="loading",U().then(function(b){for(var c=null,d=0;d<b.length;d++)for(var e=0;e<a.b.length;e++)if(b[d]===a.b[e].format){c=a.b[e].url;break}c||0===b.length||(c=a.b[0].url);c?M(c).then(function(a){return a.arrayBuffer()}).then(function(b){a.c=b;a.f="loaded";a.h(a)}).catch(function(){a.f="error";a.g(a)}):(a.f="error",a.g(a))}));return this.j};window.FontFace||(window.FontFace=W,window.FontFace.prototype.load=W.prototype.l,document.fonts=new G);}());
