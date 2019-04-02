!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var i={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,i);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: \'\';\n  content: none; }\n\nq:before, q:after {\n  content: \'\';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/**\r\n * Set up a decent box model on the root element\r\n */\nhtml {\n  box-sizing: border-box; }\n\n/**\r\n * Make all elements from the DOM inherit from the parent box-sizing\r\n * Since `*` has a specificity of 0, it does not override the `html` value\r\n * making all elements inheriting from the root box-sizing value\r\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\r\n */\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n/**\r\n * Basic styles for links\r\n */\na {\n  color: #e50050;\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    color: #222222;\n    text-decoration: underline; }\n\n/**\r\n * Basic typography style for copy text\r\n */\nbody {\n  color: #222222;\n  font: normal 125%/1.4 "Open Sans", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", sans-serif; }\n\n/**\r\n * Clear inner floats\r\n */\n.clearfix::after {\n  clear: both;\n  content: \'\';\n  display: table; }\n\n/**\r\n * Main content containers\r\n * 1. Make the container full-width with a maximum width\r\n * 2. Center it in the viewport\r\n * 3. Leave some space on the edges, especially valuable on small screens\r\n */\n.container {\n  max-width: 1180px;\n  /* 1 */\n  margin-left: auto;\n  /* 2 */\n  margin-right: auto;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  padding-right: 20px;\n  /* 3 */\n  width: 100%;\n  /* 1 */ }\n\n/**\r\n * Hide text while making it readable for screen readers\r\n * 1. Needed in WebKit-based browsers because of an implementation bug;\r\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\r\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0;\n  /* 1 */\n  text-indent: 101%;\n  white-space: nowrap; }\n\n/**\r\n * Hide element while making it readable for screen readers\r\n * Shamelessly borrowed from HTML5Boilerplate:\r\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\r\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.nav {\n  max-width: calc(100vw - 2em);\n  margin: 2em;\n  padding: 15px; }\n  .nav-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: baseline; }\n    @media (min-width: 992px) {\n      .nav-list {\n        flex-direction: row;\n        margin: 2em auto;\n        max-width: 1000px; } }\n    .nav-list__item a {\n      display: inline-block;\n      color: #a7c1bd; }\n    .nav-list__item--activ a {\n      color: #314058;\n      text-decoration: underline; }\n\n.images {\n  max-width: calc(100vw - 2em);\n  margin: 2em;\n  padding: 15px; }\n  @media (min-width: 576px) {\n    .images {\n      padding: 0 20px; } }\n  @media (min-width: 992px) {\n    .images {\n      margin: 2em auto;\n      max-width: 1000px; } }\n  .images__item {\n    float: left;\n    padding: 10px;\n    width: 100%;\n    margin-right: 2%;\n    margin-bottom: 2%; }\n    .images__item:nth-child(1n) {\n      margin-right: 0;\n      margin-bottom: 0; }\n    @media (min-width: 576px) {\n      .images__item {\n        width: 100%;\n        margin-right: 2%;\n        margin-bottom: 2%; }\n        .images__item:nth-child(1n) {\n          margin-right: 0;\n          margin-bottom: 0; } }\n    @media (min-width: 768px) {\n      .images__item {\n        width: 49%;\n        margin-right: 2%;\n        margin-bottom: 2%; }\n        .images__item:nth-child(2n) {\n          margin-right: 0;\n          margin-bottom: 0; } }\n    @media (min-width: 992px) {\n      .images__item {\n        width: 32%;\n        margin-right: 2%;\n        margin-bottom: 2%; }\n        .images__item:nth-child(3n) {\n          margin-right: 0;\n          margin-bottom: 0; } }\n\n.image {\n  position: relative;\n  box-shadow: 0px 0px 20px 8px #ccc; }\n  .image__background {\n    max-width: 100%; \n margin-bottom: -8px; }\n  .image__title {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100%;\n    text-align: center;\n    color: #fff;\n    font-size: 2em; }\n\nbody {\n  background-color: #edf7f5; }\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([i]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),l=null,c=0,d=[],u=t(4);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return b(e,n.attrs),m(n,e),e}function b(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,r,i,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var a=c++;t=l||(l=g(e)),r=w.bind(null,t,a,!1),i=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(e,n.attrs),m(n,e),e}(e),r=function(n,e,t){var r=t.css,i=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return f(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}n&&f(p(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var y,x=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){"use strict";t.r(e);t(0);let r=function(n){var e=document.createElement("nav");e.classList.add("nav"),n.appendChild(e);var t=document.createElement("ul");t.classList.add("nav-list"),e.appendChild(t);for(var r of["Beer","Coffe / Tea","Cocktail","Cocoa","Milk / Float / Shake","Shot","Punch / Party Drink","Homemade Liqueur"]){var i=document.createElement("li");i.classList.add("nav-list__item"),t.appendChild(i);var o=document.createElement("a");o.innerHTML=r,o.href="#",i.appendChild(o)}t.querySelector(":first-child").classList.add("nav-list__item--activ")},i=function(n){var e=`\n<ul class="images">\n    ${[{title:"Bijou",src:"bijou.jpg"},{title:"Negroni",src:"negroni.jpg"},{title:"Mojito",src:"mojito.jpg"},{title:"Texas Rattlesnake",src:"rattlesnake.jpg"},{title:"Egg Nogg",src:"eggnogg.jpg"},{title:"Zinger",src:"zinger.jpg"}].map(n=>`<li class="images__item">\n            <div class="image">\n                <img class="image__background" src="./assets/images/${n.src}">\n                <h4 class="image__title">${n.title}</h4>\n            </div>\n        </li>`).join(" ")}\n</ul>\n`,t=document.createElement("div");t.innerHTML=e,n.appendChild(t)};new function(){const{body:n}=document,e=document.createElement("div");e.classList.add("container"),n.appendChild(e),r(e),i(e)}}]);
