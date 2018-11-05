/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}function r(){}function i(){var e=function(e,n){for(var r=new w(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===s&&t(a,r)}},t=function r(e,t){Le.has(e)&&e.dispatchEvent(t);for(var n=e.children||te(e),i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,p),e(i.addedNodes,v)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],p)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],v)},!1)}}function o(e){var t=Ie.get(this);return t&&t.template===ie(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=ie(e);var t=qe.get(e)||c.call(this,e),n=ne(this.ownerDocument,t.fragment),r=Ve.create(n,t.paths);Ie.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function c(e){var t=[],n=e.join(b).replace(Je,Ke),r=Y(this,n);Ve.find(r,t,e.slice());var i={fragment:r,paths:t};return qe.set(e,i),i}function f(e){return arguments.length<2?null==e?Xe("html"):"string"==typeof e?f.wire(null,e):"raw"in e?Xe("html")(e):"nodeType"in e?f.bind(e):Ye(e,"html"):("raw"in e?Xe("html"):f.wire).apply(null,arguments)}var l=document.defaultView,s=1,d=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,h="http://www.w3.org/2000/svg",v="connected",p="dis"+v,g=/^(?:style|textarea)$/i,m="_hyper: "+(Math.random()*new Date|0)+";",b="\x3c!--"+m+"--\x3e",w=l.Event;try{new w("Event")}catch(rt){w=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var y=l.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},N=0,x=l.WeakMap||function(){var e=m+N++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},E=l.WeakSet||function(){var e=new x;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},k=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),C=m.trim||function(){return this.replace(/^\s+|\s+$/g,"")},A=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||O(this,n,t.call(this,e))},set:function(e){O(this,n,e)}}},O=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},j={},S={},T=[],L=S.hasOwnProperty,M=0,$={attributes:j,define:function(e,t){e.indexOf("-")<0?(e in S||(M=T.push(e)),S[e]=t):j[e]=t},invoke:function(e,t){for(var n=0;n<M;n++){var r=T[n];if(L.call(e,r))return S[r](e[r],t)}}},_=function(e,t){return D(e).createElement(t)},D=function(e){return e.ownerDocument||e},P=function(e){return D(e).createDocumentFragment()},R=function(e,t){return D(e).createTextNode(t)},H=" \\f\\n\\r\\t",z="[ "+H+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",F="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",B="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",W=new RegExp(F+z+B+"+)([ "+H+"]*/?>)","g"),Z=new RegExp(F+z+B+"*)([ "+H+"]*/>)","g"),V=P(document),G="append"in V,I="content"in _(document,"template");V.appendChild(R(V,"g")),V.appendChild(R(V,""));var q=1===V.cloneNode(!0).childNodes.length,J="importNode"in document,K=G?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},Q=new RegExp("("+z+"=)(['\"]?)"+b+"\\2","gi"),U=function(e,t,n,r){return"<"+t+n.replace(Q,X)+r},X=function(e,t,n){return t+(n||'"')+m+(n||'"')},Y=function(e,t){return("ownerSVGElement"in e?ue:ae)(e,t.replace(W,U))},ee=q?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(ee(n[i]));return t}:function(e){return e.cloneNode(!0)},te=function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)n[i].nodeType===s&&t.push(n[i]);return t},ne=J?function(e,t){return e.importNode(t,!0)}:function(e,t){return ee(t)},re=[].slice,ie=function(e){return oe(e)},oe=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((l.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};oe=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)}}else oe=function(e){return e};return oe(e)},ae=I?function(e,t){var n=_(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=_(e,"template"),r=P(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",K(r,re.call(n.querySelectorAll(i)))}else n.innerHTML=t,K(r,re.call(n.childNodes));return r},ue=I?function(e,t){var n=P(e),r=D(e).createElementNS(h,"svg");return r.innerHTML=t,K(n,re.call(r.childNodes)),n}:function(e,t){var n=P(e),r=_(e,"div");return r.innerHTML='<svg xmlns="'+h+'">'+t+"</svg>",K(n,re.call(r.firstChild.childNodes)),n};n.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=P(this.first)),(t||e)&&K(this._,this.childNodes),this._},n.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=D(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ce=function(e){var t=[],n=void 0;switch(e.nodeType){case s:case 11:n=e;break;case 8:n=e.parentNode,fe(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)fe(t,n,e);return t},fe=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},le={create:function(e,t,n){return{type:e,name:n,node:t,path:ce(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},se=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,de=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),he(r,n)}return he(e.style,n)},he=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],f="number"!=typeof c||se.test(u)?c:c+"px";/^--/.test(u)?a.setProperty(u,f):a[u]=f}n="object",t?e.value=ge(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},ve=/([^A-Z])([A-Z]+)/g,pe=function(e,t,n){return t+"-"+n.toLowerCase()},ge=function(e){var t=[];for(var n in e)t.push(n.replace(ve,pe),":",e[n],";");return t.join("")},me=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},be=function(e,t){return e==t},we=function(e){return e},ye=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,f=i;c<n&&f<o&&a(e[c],r[f]);)c++,f++;if(f===o)return t;t=c+1}return-1},Ne=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},xe=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},Ee=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},ke="undefined"==typeof Map?function(){var e=[],t=[];return{has:function(t){return-1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var r=e.indexOf(n);t[r<0?e.push(n)-1:r]=n}}}:Map,Ce=function(e,t,n,r,i,o,a,u){var c=0,f=r<u?r:u,l=Array(f++),s=Array(f);s[0]=-1;for(var d=1;d<f;d++)s[d]=a;for(var h=new ke,v=o;v<a;v++)h.set(i[v],v);for(var p=t;p<n;p++){var g=h.get(e[p]);null!=g&&-1<(c=je(s,f,g))&&(s[c]=g,l[c]={newi:p,oldi:g,prev:l[c-1]})}for(c=--f,--a;s[c]>a;)--c;f=u+r-c;var m=Array(f),b=l[c];for(--n;b;){for(var w=b,y=w.newi,N=w.oldi;n>y;)m[--f]=1,--n;for(;a>N;)m[--f]=-1,--a;m[--f]=0,--n,--a,b=b.prev}for(;n>=t;)m[--f]=1,--n;for(;a>=o;)m[--f]=-1,--a;return m},Ae=function(e,t,n,r,i,o,a){var u=n+o,c=[],f=void 0,l=void 0,s=void 0,d=void 0,h=void 0,v=void 0,p=void 0;e:for(f=0;f<=u;f++){if(f>50)return null;for(p=f-1,h=f?c[f-1]:[0,0],v=c[f]=[],l=-f;l<=f;l+=2){for(d=l===-f||l!==f&&h[p+l-1]<h[p+l+1]?h[p+l+1]:h[p+l-1]+1,s=d-l;d<o&&s<n&&a(r[i+d],e[t+s]);)d++,s++;if(d===o&&s===n)break e;v[f+l]=d}}var g=Array(f/2+u/2),m=g.length-1;for(f=c.length-1;f>=0;f--){for(;d>0&&s>0&&a(r[i+d-1],e[t+s-1]);)g[m--]=0,d--,s--;if(!f)break;p=f-1,h=f?c[f-1]:[0,0],l=d-s,l===-f||l!==f&&h[p+l-1]<h[p+l+1]?(s--,g[m--]=1):(d--,g[m--]=-1)}return g},Oe=function(e,t,n,r,i,o,a,u,c){for(var f=new ke,l=e.length,s=a,d=0;d<l;)switch(e[d++]){case 0:i++,s++;break;case 1:f.set(r[i],1),me(t,n,r,i++,i,s<u?t(o[s],1):c);break;case-1:s++}for(d=0;d<l;)switch(e[d++]){case 0:a++;break;case-1:f.has(o[a])?a++:Ee(t,n,o,a++,a)}},je=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},Se=function(e,t,n,r,i,o,a,u,c,f,l,s,d){Oe(Ae(n,r,o,a,u,f,s)||Ce(n,r,i,o,a,u,c,f),e,t,n,r,a,u,l,d)},Te=function(e,t,n,r){r||(r={});for(var i=r.compare||be,o=r.node||we,a=null==r.before?null:o(r.before,0),u=t.length,c=u,f=0,l=n.length,s=0;f<c&&s<l&&i(t[f],n[s]);)f++,s++;for(;f<c&&s<l&&i(t[c-1],n[l-1]);)c--,l--;var d=f===c,h=s===l;if(d&&h)return n;if(d&&s<l)return me(o,e,n,s,l,xe(o,t,f,u,a)),n;if(h&&f<c)return Ee(o,e,t,f,c),n;var v=c-f,p=l-s,g=-1;if(v<p){if(-1<(g=ye(n,s,l,t,f,c,i)))return me(o,e,n,s,g,o(t[f],0)),me(o,e,n,g+v,l,xe(o,t,c,u,a)),n}else if(p<v&&-1<(g=ye(t,f,c,n,s,l,i)))return Ee(o,e,t,f,g),Ee(o,e,t,g+p,c),n;return v<2||p<2?(me(o,e,n,s,l,o(t[f],0)),Ee(o,e,t,f,c),n):v===p&&Ne(n,l,t,f,c,i)?(me(o,e,n,s,l,xe(o,t,c,u,a)),n):(Se(o,e,n,s,l,p,t,f,c,v,u,i,a),n)},Le=new E;r.prototype=Object.create(null);var Me=function(e){return{html:e}},$e=function it(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.valueOf(!0):e.first:it(e.render(),t)},_e=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},De=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=le.find(e,o.path);switch(o.type){case"any":n.push(Be(a,[]));break;case"attr":n.push(We(a,o.name,o.node));break;case"text":n.push(Ze(a)),a.textContent=""}}return n},Pe=function ot(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case s:Re(a,t,n),ot(a,t,n);break;case 8:a.textContent===m&&(n.shift(),t.push(g.test(e.nodeName)?le.create("text",e):le.create("any",a)));break;case 3:g.test(e.nodeName)&&C.call(a.textContent)===b&&(n.shift(),t.push(le.create("text",e)))}}},Re=function(e,t,n){for(var i=new r,o=e.attributes,a=re.call(o),u=[],c=a.length,f=0;f<c;f++){var l=a[f];if(l.value===m){var s=l.name;if(!(s in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[s]=o[d]||o[d.toLowerCase()],t.push(le.create("attr",i[s],d))}u.push(l)}}for(var h=u.length,v=0;v<h;v++){var p=u[v];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(u[v])}var g=e.nodeName;if(/^script$/i.test(g)){for(var b=document.createElement(g),w=0;w<o.length;w++)b.setAttributeNode(o[w].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}},He=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Me).then(t):Promise.resolve($.invoke(e,t)).then(t)},ze=function(e){return null!=e&&"then"in e},Fe=/^(?:form|list)$/i,Be=function(e,t){var n={node:$e,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=Te(e.parentNode,t,[R(e,a)],n));break;case"function":o(a(e));break;case"object":case"undefined":if(null==a){r=!1,t=Te(e.parentNode,t,[],n);break}default:if(r=!1,i=a,k(a))if(0===a.length)t.length&&(t=Te(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(k(a[0])&&(a=a.concat.apply([],a)),ze(a[0])){Promise.all(a).then(o);break}default:t=Te(e.parentNode,t,a,n)}else _e(a)?t=Te(e.parentNode,t,11===a.nodeType?re.call(a.childNodes):[a],n):ze(a)?a.then(o):"placeholder"in a?He(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=Te(e.parentNode,t,re.call(Y(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?re.call(a):$.invoke(a,o))}}},We=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return de(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===v||a===p?(Ge&&(Ge=!1,i()),Le.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1))}}if("data"===t||!r&&t in e&&!Fe.test(t))return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in $.attributes)return function(n){o=$.attributes[t](e,n),e.setAttribute(t,null==o?"":o)};var u=!1,c=n.cloneNode(!0);return function(t){o!==t&&(o=t,c.value!==t&&(null==t?(u&&(u=!1,e.removeAttributeNode(c)),c.value=t):(c.value=t,u||(u=!0,e.setAttributeNode(c)))))}},Ze=function(e){var t=void 0;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?ze(r)?r.then(n):"placeholder"in r?He(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?re.call(r).join(""):$.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}}},Ve={create:De,find:Pe},Ge=!0,Ie=new x,qe=function(){try{var e=new x,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new y}}(),Je=Z,Ke=function(e,t,n){return d.test(t)?e:"<"+t+n+"></"+t+">"},Qe=new x,Ue=function(e,t){return null==e?Xe(t||"html"):Ye(e,t||"html")},Xe=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=ie(u);var c=i!==u;return c&&(i=u,r=P(document),n="svg"===e?document.createElementNS(h,"svg"):r,a=o.bind(n)),a.apply(null,arguments),c&&("svg"===e&&K(r,re.call(n.childNodes)),t=et(r)),t}},Ye=function(e,t){var n=t.indexOf(":"),r=Qe.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Qe.set(e,r={}),r[i]||(r[i]=Xe(t))},et=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==s&&0===C.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},tt=function(e){return o.bind(e)},nt=$.define;return f.Component=t,f.bind=tt,f.define=nt,f.diff=Te,f.hyper=f,f.wire=Ue,f._={WeakMap:x,WeakSet:E},function(e){var n=new x,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new x);return c.get(o)||i(c,o,new e(n));default:var f=u.p||(u.p=r(null));return f[o]||(f[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new y;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:A("html",e),svg:A("svg",e),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Xe),f}(window);
export default hyperHTML;
export const {Component, bind, define, diff, hyper, wire} = hyperHTML;
