(self.webpackChunkncku_study_docs=self.webpackChunkncku_study_docs||[]).push([[338],{2023:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),c=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return c(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(7294)),p=90,f=219,d=222,y=192,h=100,g="undefined"!=typeof window&&"navigator"in window&&/Win/i.test(navigator.platform),v="undefined"!=typeof window&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),b="npm__react-simple-code-editor__textarea",m="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(b,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(b," {\n    color: transparent !important;\n  }\n\n  .").concat(b,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,r=e.selectionStart,o=e.selectionEnd;t._recordChange({value:n,selectionStart:r,selectionEnd:o})}},t._getLines=function(e,t){return e.substring(0,t).split("\n")},t._recordChange=function(e,n){var r,o,a;void 0===n&&(n=!1);var c=t._history,s=c.stack,l=c.offset;if(s.length&&l>-1){t._history.stack=s.slice(0,l+1);var u=t._history.stack.length;if(u>h){var p=u-h;t._history.stack=s.slice(p,u),t._history.offset=Math.max(t._history.offset-p,0)}}var f=Date.now();if(n){var d=t._history.stack[t._history.offset];if(d&&f-d.timestamp<3e3){var y=/[^a-z0-9]([a-z0-9]+)$/i,g=null===(r=t._getLines(d.value,d.selectionStart).pop())||void 0===r?void 0:r.match(y),v=null===(o=t._getLines(e.value,e.selectionStart).pop())||void 0===o?void 0:o.match(y);if((null==g?void 0:g[1])&&(null===(a=null==v?void 0:v[1])||void 0===a?void 0:a.startsWith(g[1])))return void(t._history.stack[t._history.offset]=i(i({},e),{timestamp:f}))}}t._history.stack.push(i(i({},e),{timestamp:f})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,r=t._history.stack[t._history.offset];r&&n&&(t._history.stack[t._history.offset]=i(i({},r),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,r=e.offset,o=n[r-1];o&&(t._updateInput(o),t._history.offset=Math.max(r-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,r=e.offset,o=n[r+1];o&&(t._updateInput(o),t._history.offset=Math.min(r+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,r=n.tabSize,o=n.insertSpaces,i=n.ignoreTabKey,a=n.onKeyDown;if(!a||(a(e),!e.defaultPrevented)){27===e.keyCode&&e.currentTarget.blur();var c=e.currentTarget,s=c.value,l=c.selectionStart,u=c.selectionEnd,h=(o?" ":"\t").repeat(r);if(9===e.keyCode&&!i&&t.state.capture)if(e.preventDefault(),e.shiftKey){var b=(j=t._getLines(s,l)).length-1,m=t._getLines(s,u).length-1,O=s.split("\n").map((function(e,t){return t>=b&&t<=m&&e.startsWith(h)?e.substring(h.length):e})).join("\n");if(s!==O){var _=j[b];t._applyEdits({value:O,selectionStart:(null==_?void 0:_.startsWith(h))?l-h.length:l,selectionEnd:u-(s.length-O.length)})}}else if(l!==u){var j,S=(j=t._getLines(s,l)).length-1,w=t._getLines(s,u).length-1;_=j[S];t._applyEdits({value:s.split("\n").map((function(e,t){return t>=S&&t<=w?h+e:e})).join("\n"),selectionStart:_&&/\S/.test(_)?l+h.length:l,selectionEnd:u+h.length*(w-S+1)})}else{var E=l+h.length;t._applyEdits({value:s.substring(0,l)+h+s.substring(u),selectionStart:E,selectionEnd:E})}else if(8===e.keyCode){var C=l!==u;if(s.substring(0,l).endsWith(h)&&!C){e.preventDefault();E=l-h.length;t._applyEdits({value:s.substring(0,l-h.length)+s.substring(u),selectionStart:E,selectionEnd:E})}}else if(13===e.keyCode){if(l===u){var P=t._getLines(s,l).pop(),k=null==P?void 0:P.match(/^\s+/);if(null==k?void 0:k[0]){e.preventDefault();var x="\n"+k[0];E=l+x.length;t._applyEdits({value:s.substring(0,l)+x+s.substring(u),selectionStart:E,selectionEnd:E})}}}else if(57===e.keyCode||e.keyCode===f||e.keyCode===d||e.keyCode===y){var D=void 0;57===e.keyCode&&e.shiftKey?D=["(",")"]:e.keyCode===f?D=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===d?D=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==y||e.shiftKey||(D=["`","`"]),l!==u&&D&&(e.preventDefault(),t._applyEdits({value:s.substring(0,l)+D[0]+s.substring(l,u)+D[1]+s.substring(u),selectionStart:l,selectionEnd:u+2}))}else!(v?e.metaKey&&e.keyCode===p:e.ctrlKey&&e.keyCode===p)||e.shiftKey||e.altKey?(v?e.metaKey&&e.keyCode===p&&e.shiftKey:g?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===p&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):77!==e.keyCode||!e.ctrlKey||v&&!e.shiftKey||(e.preventDefault(),t.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),t._undoEdit())}},t._handleChange=function(e){var n=e.currentTarget,r=n.value,o=n.selectionStart,i=n.selectionEnd;t._recordChange({value:r,selectionStart:o,selectionEnd:i},!0),t.props.onValueChange(r)},t._history={stack:[],offset:-1},t._input=null,t}return o(t,e),t.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(t.prototype,"session",{get:function(){return{history:this._history}},set:function(e){this._history=e.history},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.style,o=t.padding,a=t.highlight,c=t.textareaId,s=t.textareaClassName,p=t.autoFocus,f=t.disabled,d=t.form,y=t.maxLength,h=t.minLength,g=t.name,v=t.placeholder,O=t.readOnly,j=t.required,S=t.onClick,w=t.onFocus,E=t.onBlur,C=t.onKeyUp,P=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),k=l(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),x={paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o},D=a(n);return u.createElement("div",i({},k,{style:i(i({},_.container),r)}),u.createElement("textarea",{ref:function(t){return e._input=t},style:i(i(i({},_.editor),_.textarea),x),className:b+(s?" ".concat(s):""),id:c,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:S,onKeyUp:C,onFocus:w,onBlur:E,disabled:f,form:d,maxLength:y,minLength:h,name:g,placeholder:v,readOnly:O,required:j,autoFocus:p,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),u.createElement("pre",i({className:P,"aria-hidden":"true",style:i(i(i({},_.editor),_.highlight),x)},"string"==typeof D?{dangerouslySetInnerHTML:{__html:D+"<br />"}}:{children:D})),u.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:m}}))},t.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t}(u.Component);t.default=O;var _={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}},6907:function(e,t,n){var r=n(4977);e.exports=r},9116:function(e,t,n){n(9601);var r=n(857);e.exports=r.Object.assign},7671:function(e,t,n){e.exports=n(7537)},7537:function(e,t,n){var r=n(6907);e.exports=r},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112)("toStringTag"),c=Object,s="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),a))?n:s?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},1574:function(e,t,n){"use strict";var r=n(9781),o=n(1702),i=n(6916),a=n(7293),c=n(1956),s=n(5181),l=n(5296),u=n(7908),p=n(8361),f=Object.assign,d=Object.defineProperty,y=o([].concat);e.exports=!f||a((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||c(f({},t)).join("")!=o}))?function(e,t){for(var n=u(e),o=arguments.length,a=1,f=s.f,d=l.f;o>a;)for(var h,g=p(arguments[a++]),v=f?y(c(g),f(g)):c(g),b=v.length,m=0;b>m;)h=v[m++],r&&!i(d,g,h)||(n[h]=g[h]);return n}:f},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},857:function(e,t,n){var r=n(7854);e.exports=r},365:function(e,t,n){"use strict";var r=n(3111).end,o=n(6091);e.exports=o("trimEnd")?function(){return r(this)}:"".trimEnd},6091:function(e,t,n){var r=n(6530).PROPER,o=n(7293),i=n(1361);e.exports=function(e){return o((function(){return!!i[e]()||"​᠎"!=="​᠎"[e]()||r&&i[e].name!==e}))}},3217:function(e,t,n){"use strict";var r=n(3111).start,o=n(6091);e.exports=o("trimStart")?function(){return r(this)}:"".trimStart},3111:function(e,t,n){var r=n(1702),o=n(4488),i=n(1340),a=n(1361),c=r("".replace),s="["+a+"]",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(e){return function(t){var n=i(o(t));return 1&e&&(n=c(n,l,"")),2&e&&(n=c(n,u,"")),n}};e.exports={start:p(1),end:p(2),trim:p(3)}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9601:function(e,t,n){var r=n(2109),o=n(1574);r({target:"Object",stat:!0,arity:2,forced:Object.assign!==o},{assign:o})},8702:function(e,t,n){n(3462);var r=n(2109),o=n(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==o},{trimEnd:o})},9967:function(e,t,n){var r=n(2109),o=n(3217);r({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==o},{trimLeft:o})},3462:function(e,t,n){var r=n(2109),o=n(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==o},{trimRight:o})},5674:function(e,t,n){n(9967);var r=n(2109),o=n(3217);r({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==o},{trimStart:o})},4977:function(e,t,n){var r=n(9116);e.exports=r},1740:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(7294),o=n(2023),i=n.n(o),a=n(509),c=n(3376),s=n(6675),l=n(7671),u=n.n(l);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var y={plain:{color:"#C5C8C6",backgroundColor:"#1D1F21"},styles:[{types:["prolog","comment","doctype","cdata"],style:{color:"hsl(30, 20%, 50%)"}},{types:["property","tag","boolean","number","constant","symbol"],style:{color:"hsl(350, 40%, 70%)"}},{types:["attr-name","string","char","builtin","insterted"],style:{color:"hsl(75, 70%, 60%)"}},{types:["operator","entity","url","string","variable","language-css"],style:{color:"hsl(40, 90%, 60%)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["regex","important"],style:{color:"#e90"}},{types:["atrule","attr-value","keyword"],style:{color:"hsl(350, 40%, 70%)"}},{types:["punctuation","symbol"],style:{opacity:"0.7"}}]},h=["style","theme","onChange"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=(0,r.useState)({code:e.code||""}),n=t[0],o=t[1];(0,r.useEffect)((function(){n.prevCodeProp&&e.code!==n.prevCodeProp&&o({code:e.code,prevCodeProp:e.code})}),[e.code]);(0,r.useEffect)((function(){e.onChange&&e.onChange(n.code)}),[n.code]);var s=e.style,l=e.theme;e.onChange;var u=d(e,h),f=n.code,g=l&&"object"==typeof l.plain?l.plain:{};return r.createElement(i(),p({value:f,padding:10,highlight:function(t){return r.createElement(a.ZP,{Prism:c.Z,code:t,theme:e.theme||y,language:e.language},(function(e){var t=e.tokens,n=e.getLineProps,o=e.getTokenProps;return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement("div",n({line:e,key:t}),e.map((function(e,t){return r.createElement("span",o({token:e,key:t}))})))})))}))},onValueChange:function(e){o({code:e})},style:v(v({whiteSpace:"pre",fontFamily:"monospace"},g),s)},u))},m=(0,r.createContext)({});function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={assign:u()},S=function(e,t){void 0===t&&(t={});var n=_(_({},t),{},{objectAssign:"_poly.assign",transforms:_({dangerousForOf:!0,dangerousTaggedTemplateString:!0},t.transforms)});return(0,s.v)(e,n).code};function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,w(e,t)}var C=function(e,t){return function(n){function o(){return n.apply(this,arguments)||this}E(o,n);var i=o.prototype;return i.componentDidCatch=function(e){t(e)},i.render=function(){return"function"==typeof e?r.createElement(e,null):r.isValidElement(e)?e:null},o}(r.Component)};function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function k(e,t,n){return k=P()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&w(o,n.prototype),o},k.apply(null,arguments)}var x=function(e,t){var n=Object.keys(t),o=n.map((function(e){return t[e]}));return k(Function,["_poly","React"].concat(n,[e])).apply(void 0,[j,r].concat(o))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=e.children,n=e.code,o=e.language,i=e.theme,a=e.disabled,c=e.scope,s=e.transformCode,l=e.transpileOptions,u=e.noInline,p=void 0!==u&&u,f=(0,r.useState)({error:void 0,element:void 0}),d=f[0],y=f[1];function h(e){var t={code:s?s(e):e,scope:c,transpileOptions:l},n=function(e){return y({error:e.toString(),element:void 0})},r=function(e){return y({error:void 0,element:e})};try{p?(y({error:void 0,element:null}),function(e,t,n){var r=e.code,o=void 0===r?"":r,i=e.scope,a=void 0===i?{}:i,c=e.transpileOptions;if(!/render\s*\(/.test(o))return n(new SyntaxError("No-Inline evaluations must call `render`."));x(S(o,c),K(K({},a),{},{render:function(e){void 0===e?n(new SyntaxError("`render` must be called with valid JSX.")):t(C(e,n))}}))}(t,r,n)):r(function(e,t){var n=e.code,r=void 0===n?"":n,o=e.scope,i=void 0===o?{}:o,a=e.transpileOptions,c=r.trim().replace(/;$/,""),s=S("return ("+c+")",a).trim();return C(x(s,i),t)}(t,n))}catch(o){n(o)}}(0,r.useEffect)((function(){h(n)}),[n,c,p,s,l]);return r.createElement(m.Provider,{value:T(T({},d),{},{code:n,language:o,theme:i,disabled:a,onError:function(e){return y({error:e.toString()})},onChange:function(e){return h(e)}})},t)}function R(e){var t=(0,r.useContext)(m),n=t.code,o=t.language,i=t.theme,a=t.disabled,c=t.onChange;return r.createElement(b,p({theme:i,code:n,language:o,disabled:a,onChange:c},e))}function F(e){var t=(0,r.useContext)(m).error;return t?r.createElement("pre",e,t):null}I.defaultProps={code:"",noInline:!1,language:"jsx",disabled:!1};var z=["Component"];function M(e){var t=e.Component,n=d(e,z),o=(0,r.useContext)(m).element;return r.createElement(t,n,o?r.createElement(o,null):null)}M.defaultProps={Component:"div"};var W=n(3431),B=function(e){var t=e.code;return(0,W.tZ)(I,{code:t},(0,W.tZ)(R,null),(0,W.tZ)(F,null),(0,W.tZ)(M,null))}},1752:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1120);function o(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,r.Z)(e)););return e}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=o(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},i.apply(this,arguments)}}}]);
//# sourceMappingURL=338-6193401682a23e41ac93.js.map