!function(e,t,n,r,o){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a[r]&&a[r],l=i.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!l[t]){if(!e[t]){var o="function"==typeof a[r]&&a[r];if(!n&&o)return o(t,!0);if(i)return i(t,!0);if(c&&"string"==typeof t)return c(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}f.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},f.cache={};var m=l[t]=new u.Module(t);e[t][0].call(m.exports,f,m,m.exports,this)}return l[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=i,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return a[r]}}),a[r]=u;for(var s=0;s<t.length;s++)u(t[s])}({"34BOs":[function(e,t,n){var r;r=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}:Reflect.construct).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a,i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,u=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return n(e,r(t))});var y=x(Array.prototype.forEach),b=x(Array.prototype.pop),v=x(Array.prototype.push),_=x(String.prototype.toLowerCase),T=x(String.prototype.toString),N=x(String.prototype.match),E=x(String.prototype.replace),A=x(String.prototype.indexOf),S=x(String.prototype.trim),w=x(RegExp.prototype.test),O=(a=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(a,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function C(e,t,n){n=null!==(r=n)&&void 0!==r?r:_,l&&l(e,null);for(var r,o=t.length;o--;){var a=t[o];if("string"==typeof a){var i=n(a);i!==a&&(c(t)||(t[o]=i),a=i)}e[a]=!0}return e}function k(e){var t,n=p(null);for(t in e)!0===h(i,e,[t])&&(n[t]=e[t]);return n}function L(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=u(e)}return function(e){return console.warn("fallback value for",e),null}}var R=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),q=f(/\${[\w\W]*}/gm),Y=f(/^data-[\-\w.\u00B7-\uFFFF]/),$=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=f(/^(?:\w+script|data):/i),X=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),J=f(/^[a-z][.\w]*(-[.\w]+)+$/i),Q=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function t(){var n,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,i=function(e){return t(e)};if(i.version="2.5.2",i.removed=[],!a||!a.document||9!==a.document.nodeType)return i.isSupported=!1,i;var l=a.document,c=a.document,u=a.DocumentFragment,s=a.HTMLTemplateElement,f=a.Node,p=a.Element,d=a.NodeFilter,h=a.NamedNodeMap,g=void 0===h?a.NamedNodeMap||a.MozNamedAttrMap:h,x=a.HTMLFormElement,ee=a.DOMParser,et=a.trustedTypes,en=p.prototype,er=L(en,"cloneNode"),eo=L(en,"nextSibling"),ea=L(en,"childNodes"),ei=L(en,"parentNode");if("function"==typeof s){var el=c.createElement("template");el.content&&el.content.ownerDocument&&(c=el.content.ownerDocument)}var ec=Q(et,l),eu=ec?ec.createHTML(""):"",es=c,em=es.implementation,ef=es.createNodeIterator,ep=es.createDocumentFragment,ed=es.getElementsByTagName,eh=l.importNode,eg={};try{eg=k(c).documentMode?c.documentMode:{}}catch(e){}var ey={};i.isSupported="function"==typeof ei&&em&&void 0!==em.createHTMLDocument&&9!==eg;var eb=K,ev=null,e_=C({},[].concat(r(R),r(D),r(M),r(F),r(H))),eT=null,eN=C({},[].concat(r(z),r(P),r(j),r(B))),eE=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eA=null,eS=null,ew=!0,eO=!0,ex=!1,eC=!0,ek=!1,eL=!0,eR=!1,eD=!1,eM=!1,eI=!1,eF=!1,eU=!1,eH=!0,ez=!1,eP=!0,ej=!1,eB={},eG=null,eW=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eq=null,eY=C({},["audio","video","img","source","image","track"]),e$=null,eK=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eV="http://www.w3.org/1998/Math/MathML",eX="http://www.w3.org/2000/svg",eZ="http://www.w3.org/1999/xhtml",eJ=eZ,eQ=!1,e0=null,e1=C({},[eV,eX,eZ],T),e2=["application/xhtml+xml","text/html"],e3=null,e9=c.createElement("form"),e5=function(e){return e instanceof RegExp||e instanceof Function},e8=function(t){e3&&e3===t||(t&&"object"===e(t)||(t={}),t=k(t),o="application/xhtml+xml"===(n=n=-1===e2.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE)?T:_,ev="ALLOWED_TAGS"in t?C({},t.ALLOWED_TAGS,o):e_,eT="ALLOWED_ATTR"in t?C({},t.ALLOWED_ATTR,o):eN,e0="ALLOWED_NAMESPACES"in t?C({},t.ALLOWED_NAMESPACES,T):e1,e$="ADD_URI_SAFE_ATTR"in t?C(k(eK),t.ADD_URI_SAFE_ATTR,o):eK,eq="ADD_DATA_URI_TAGS"in t?C(k(eY),t.ADD_DATA_URI_TAGS,o):eY,eG="FORBID_CONTENTS"in t?C({},t.FORBID_CONTENTS,o):eW,eA="FORBID_TAGS"in t?C({},t.FORBID_TAGS,o):{},eS="FORBID_ATTR"in t?C({},t.FORBID_ATTR,o):{},eB="USE_PROFILES"in t&&t.USE_PROFILES,ew=!1!==t.ALLOW_ARIA_ATTR,eO=!1!==t.ALLOW_DATA_ATTR,ex=t.ALLOW_UNKNOWN_PROTOCOLS||!1,eC=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ek=t.SAFE_FOR_TEMPLATES||!1,eL=!1!==t.SAFE_FOR_XML,eR=t.WHOLE_DOCUMENT||!1,eI=t.RETURN_DOM||!1,eF=t.RETURN_DOM_FRAGMENT||!1,eU=t.RETURN_TRUSTED_TYPE||!1,eM=t.FORCE_BODY||!1,eH=!1!==t.SANITIZE_DOM,ez=t.SANITIZE_NAMED_PROPS||!1,eP=!1!==t.KEEP_CONTENT,ej=t.IN_PLACE||!1,eb=t.ALLOWED_URI_REGEXP||eb,eJ=t.NAMESPACE||eZ,eE=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&e5(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eE.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&e5(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eE.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eE.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ek&&(eO=!1),eF&&(eI=!0),eB&&(ev=C({},r(H)),eT=[],!0===eB.html&&(C(ev,R),C(eT,z)),!0===eB.svg&&(C(ev,D),C(eT,P),C(eT,B)),!0===eB.svgFilters&&(C(ev,M),C(eT,P),C(eT,B)),!0===eB.mathMl&&(C(ev,F),C(eT,j),C(eT,B))),t.ADD_TAGS&&(ev===e_&&(ev=k(ev)),C(ev,t.ADD_TAGS,o)),t.ADD_ATTR&&(eT===eN&&(eT=k(eT)),C(eT,t.ADD_ATTR,o)),t.ADD_URI_SAFE_ATTR&&C(e$,t.ADD_URI_SAFE_ATTR,o),t.FORBID_CONTENTS&&(eG===eW&&(eG=k(eG)),C(eG,t.FORBID_CONTENTS,o)),eP&&(ev["#text"]=!0),eR&&C(ev,["html","head","body"]),ev.table&&(C(ev,["tbody"]),delete eA.tbody),m&&m(t),e3=t)},e4=C({},["mi","mo","mn","ms","mtext"]),e6=C({},["foreignobject","annotation-xml"]),e7=C({},["title","style","font","a","script"]),te=C({},D);C(te,M),C(te,I);var tt=C({},F);C(tt,U);var tn=function(e){var t=ei(e);t&&t.tagName||(t={namespaceURI:eJ,tagName:"template"});var r=_(e.tagName),o=_(t.tagName);return!!e0[e.namespaceURI]&&(e.namespaceURI===eX?t.namespaceURI===eZ?"svg"===r:t.namespaceURI===eV?"svg"===r&&("annotation-xml"===o||e4[o]):!!te[r]:e.namespaceURI===eV?t.namespaceURI===eZ?"math"===r:t.namespaceURI===eX?"math"===r&&e6[o]:!!tt[r]:e.namespaceURI===eZ?(t.namespaceURI!==eX||!!e6[o])&&(t.namespaceURI!==eV||!!e4[o])&&!tt[r]&&(e7[r]||!te[r]):"application/xhtml+xml"===n&&!!e0[e.namespaceURI])},tr=function(e){v(i.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=eu}catch(t){e.remove()}}},to=function(e,t){try{v(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){v(i.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!eT[e]){if(eI||eF)try{tr(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},ta=function(e){if(eM)e="<remove></remove>"+e;else{var t,r,o=N(e,/^[\r\n\t ]+/);r=o&&o[0]}"application/xhtml+xml"===n&&eJ===eZ&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=ec?ec.createHTML(e):e;if(eJ===eZ)try{t=new ee().parseFromString(a,n)}catch(e){}if(!t||!t.documentElement){t=em.createDocument(eJ,"template",null);try{t.documentElement.innerHTML=eQ?eu:a}catch(e){}}var i=t.body||t.documentElement;return(e&&r&&i.insertBefore(c.createTextNode(r),i.childNodes[0]||null),eJ===eZ)?ed.call(t,eR?"html":"body")[0]:eR?t.documentElement:i},ti=function(e){return ef.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},tl=function(t){return"object"===e(f)?t instanceof f:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},tc=function(e,t,n){ey[e]&&y(ey[e],function(e){e.call(i,t,n,e3)})},tu=function(e){if(tc("beforeSanitizeElements",e,null),e instanceof x&&(void 0!==e.__depth&&"number"!=typeof e.__depth||void 0!==e.__removalCount&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof g)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)||w(/[\u0080-\uFFFF]/,e.nodeName))return tr(e),!0;var t,n=o(e.nodeName);if(tc("uponSanitizeElement",e,{tagName:n,allowedTags:ev}),e.hasChildNodes()&&!tl(e.firstElementChild)&&(!tl(e.content)||!tl(e.content.firstElementChild))&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent)||"select"===n&&w(/<template/i,e.innerHTML)||7===e.nodeType||eL&&8===e.nodeType&&w(/<[/\w]/g,e.data))return tr(e),!0;if(!ev[n]||eA[n]){if(!eA[n]&&tm(n)&&(eE.tagNameCheck instanceof RegExp&&w(eE.tagNameCheck,n)||eE.tagNameCheck instanceof Function&&eE.tagNameCheck(n)))return!1;if(eP&&!eG[n]){var r=ei(e)||e.parentNode,a=ea(e)||e.childNodes;if(a&&r)for(var l=a.length,c=l-1;c>=0;--c){var u=er(a[c],!0);u.__removalCount=(e.__removalCount||0)+1,r.insertBefore(u,eo(e))}}return tr(e),!0}return e instanceof p&&!tn(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&w(/<\/no(script|embed|frames)/i,e.innerHTML)?(tr(e),!0):(ek&&3===e.nodeType&&(t=E(t=e.textContent,G," "),t=E(t,W," "),t=E(t,q," "),e.textContent!==t&&(v(i.removed,{element:e.cloneNode()}),e.textContent=t)),tc("afterSanitizeElements",e,null),!1)},ts=function(e,t,n){if(eH&&("id"===t||"name"===t)&&(n in c||n in e9))return!1;if(eO&&!eS[t]&&w(Y,t));else if(ew&&w($,t));else if(!eT[t]||eS[t]){if(!(tm(e)&&(eE.tagNameCheck instanceof RegExp&&w(eE.tagNameCheck,e)||eE.tagNameCheck instanceof Function&&eE.tagNameCheck(e))&&(eE.attributeNameCheck instanceof RegExp&&w(eE.attributeNameCheck,t)||eE.attributeNameCheck instanceof Function&&eE.attributeNameCheck(t))||"is"===t&&eE.allowCustomizedBuiltInElements&&(eE.tagNameCheck instanceof RegExp&&w(eE.tagNameCheck,n)||eE.tagNameCheck instanceof Function&&eE.tagNameCheck(n))))return!1}else if(e$[t]);else if(w(eb,E(n,X,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===A(n,"data:")&&eq[e]);else if(ex&&!w(V,E(n,X,"")));else if(n)return!1;return!0},tm=function(e){return"annotation-xml"!==e&&N(e,J)},tf=function(t){tc("beforeSanitizeAttributes",t,null);var n,r,a,l,c=t.attributes;if(c){var u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:eT};for(l=c.length;l--;){var s=(n=c[l]).name,m=n.namespaceURI;if(r="value"===s?n.value:S(n.value),a=o(s),u.attrName=a,u.attrValue=r,u.keepAttr=!0,u.forceKeepAttr=void 0,tc("uponSanitizeAttribute",t,u),r=u.attrValue,!u.forceKeepAttr&&(to(s,t),u.keepAttr)){if(!eC&&w(/\/>/i,r)){to(s,t);continue}ek&&(r=E(r,G," "),r=E(r,W," "),r=E(r,q," "));var f=o(t.nodeName);if(ts(f,a,r)){if(ez&&("id"===a||"name"===a)&&(to(s,t),r="user-content-"+r),ec&&"object"===e(et)&&"function"==typeof et.getAttributeType){if(m);else switch(et.getAttributeType(f,a)){case"TrustedHTML":r=ec.createHTML(r);break;case"TrustedScriptURL":r=ec.createScriptURL(r)}}try{m?t.setAttributeNS(m,s,r):t.setAttribute(s,r),b(i.removed)}catch(e){}}}}tc("afterSanitizeAttributes",t,null)}},tp=function e(t){var n,r=ti(t);for(tc("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)if(tc("uponSanitizeShadowNode",n,null),!tu(n)){var o=ei(n);1===n.nodeType&&(o&&o.__depth?n.__depth=(n.__removalCount||0)+o.__depth+1:n.__depth=1),n.__depth>=255&&tr(n),n.content instanceof u&&(n.content.__depth=n.__depth,e(n.content)),tf(n)}tc("afterSanitizeShadowDOM",t,null)};return i.sanitize=function(t){var n,r,c,s,m,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((eQ=!t)&&(t="<!-->"),"string"!=typeof t&&!tl(t)){if("function"==typeof t.toString){if("string"!=typeof(t=t.toString()))throw O("dirty is not a string, aborting")}else throw O("toString is not a function")}if(!i.isSupported){if("object"===e(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof t)return a.toStaticHTML(t);if(tl(t))return a.toStaticHTML(t.outerHTML)}return t}if(eD||e8(p),i.removed=[],"string"==typeof t&&(ej=!1),ej){if(t.nodeName){var d=o(t.nodeName);if(!ev[d]||eA[d])throw O("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof f)1===(r=(n=ta("<!---->")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!eI&&!ek&&!eR&&-1===t.indexOf("<"))return ec&&eU?ec.createHTML(t):t;if(!(n=ta(t)))return eI?null:eU?eu:""}n&&eM&&tr(n.firstChild);for(var h=ti(ej?t:n);c=h.nextNode();)if(!(3===c.nodeType&&c===s||tu(c))){var g=ei(c);1===c.nodeType&&(g&&g.__depth?c.__depth=(c.__removalCount||0)+g.__depth+1:c.__depth=1),c.__depth>=255&&tr(c),c.content instanceof u&&(c.content.__depth=c.__depth,tp(c.content)),tf(c),s=c}if(s=null,ej)return t;if(eI){if(eF)for(m=ep.call(n.ownerDocument);n.firstChild;)m.appendChild(n.firstChild);else m=n;return(eT.shadowroot||eT.shadowrootmod)&&(m=eh.call(l,m,!0)),m}var y=eR?n.outerHTML:n.innerHTML;return eR&&ev["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&w(Z,n.ownerDocument.doctype.name)&&(y="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+y),ek&&(y=E(y,G," "),y=E(y,W," "),y=E(y,q," ")),ec&&eU?ec.createHTML(y):y},i.setConfig=function(e){e8(e),eD=!0},i.clearConfig=function(){e3=null,eD=!1},i.isValidAttribute=function(e,t,n){return e3||e8({}),ts(o(e),o(t),n)},i.addHook=function(e,t){"function"==typeof t&&(ey[e]=ey[e]||[],v(ey[e],t))},i.removeHook=function(e){if(ey[e])return b(ey[e])},i.removeHooks=function(e){ey[e]&&(ey[e]=[])},i.removeAllHooks=function(){ey={}},i}()},t.exports=r()},{}]},[],0,"parcelRequirec571");