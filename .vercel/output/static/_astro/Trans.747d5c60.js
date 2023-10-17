import{r as A,R as M}from"./index.78e80225.js";import{g as z}from"./_commonjsHelpers.725317a4.js";import{w as J,a as F,I as U}from"./jsx-runtime.8bb9ef32.js";import{g as X,b as V}from"./i18nInstance.3f0a4b3a.js";function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}var Y={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const Z=z(Y);var _=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function S(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(Z[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var a=e.indexOf("-->");return{type:"comment",comment:a!==-1?e.slice(4,a):""}}for(var u=new RegExp(_),s=null;(s=u.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),c=[l,""];l.indexOf("=")>-1&&(c=l.split("=")),t.attrs[c[0]]=c[1],u.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var q=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,G=/^\s*$/,Q=Object.create(null);function B(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var a=[];for(var u in n)a.push(u+'="'+n[u]+'"');return a.length?" "+a.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(B,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var R={parse:function(e,t){t||(t={}),t.components||(t.components=Q);var n,a=[],u=[],s=-1,l=!1;if(e.indexOf("<")!==0){var c=e.indexOf("<");a.push({type:"text",content:c===-1?e:e.substring(0,c)})}return e.replace(q,function(f,y){if(l){if(f!=="</"+n.name+">")return;l=!1}var g,$=f.charAt(1)!=="/",C=f.startsWith("<!--"),b=y+f.length,x=e.charAt(b);if(C){var v=S(f);return s<0?(a.push(v),a):((g=u[s]).children.push(v),a)}if($&&(s++,(n=S(f)).type==="tag"&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!x||x==="<"||n.children.push({type:"text",content:e.slice(b,e.indexOf("<",b))}),s===0&&a.push(n),(g=u[s-1])&&g.children.push(n),u[s]=n),(!$||n.voidElement)&&(s>-1&&(n.voidElement||n.name===f.slice(2,-1))&&(s--,n=s===-1?a:u[s]),!l&&x!=="<"&&x)){g=s===-1?a:u[s].children;var p=e.indexOf("<",b),o=e.slice(b,p===-1?void 0:p);G.test(o)&&(o=" "),(p>-1&&s+g.length>=0||o!==" ")&&g.push({type:"text",content:o})}}),a},stringify:function(e){return e.reduce(function(t,n){return t+B("",n)},"")}};function K(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function D(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?w(t):t}function ee(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>A.isValidElement(t))}function w(e){return Array.isArray(e)?e:[e]}function te(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function I(e,t){if(!e)return"";let n="";const a=w(e),u=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return a.forEach((s,l)=>{if(typeof s=="string")n+=`${s}`;else if(A.isValidElement(s)){const c=Object.keys(s.props).length,f=u.indexOf(s.type)>-1,y=s.props.children;if(!y&&f&&c===0)n+=`<${s.type}/>`;else if(!y&&(!f||c!==0))n+=`<${l}></${l}>`;else if(s.props.i18nIsDynamicList)n+=`<${l}></${l}>`;else if(f&&c===1&&typeof y=="string")n+=`<${s.type}>${y}</${s.type}>`;else{const g=I(y,t);n+=`<${l}>${g}</${l}>`}}else if(s===null)F("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:c,...f}=s,y=Object.keys(f);if(y.length===1){const g=c?`${y[0]}, ${c}`:y[0];n+=`{{${g}}}`}else F("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else F("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function ne(e,t,n,a,u,s){if(t==="")return[];const l=a.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(l.map(p=>`<${p}`).join("|")).test(t);if(!e&&!c&&!s)return[t];const f={};function y(p){w(p).forEach(i=>{typeof i!="string"&&(K(i)?y(D(i)):typeof i=="object"&&!A.isValidElement(i)&&Object.assign(f,i))})}y(e);const g=R.parse(`<0>${t}</0>`),$={...f,...u};function C(p,o,i){const d=D(p),j=x(d,o.children,i);return ee(d)&&j.length===0||p.props&&p.props.i18nIsDynamicList?d:j}function b(p,o,i,d,j){p.dummy?(p.children=o,i.push(A.cloneElement(p,{key:d},j?void 0:o))):i.push(...A.Children.map([p],m=>{const r={...m.props};return delete r.i18nIsDynamicList,M.createElement(m.type,H({},r,{key:d,ref:m.ref},j?{}:{children:o}))}))}function x(p,o,i){const d=w(p);return w(o).reduce((m,r,T)=>{const k=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,$,n.language);if(r.type==="tag"){let O=d[parseInt(r.name,10)];i.length===1&&!O&&(O=i[0][r.name]),O||(O={});const h=Object.keys(r.attrs).length!==0?te({props:r.attrs},O):O,N=A.isValidElement(h),P=N&&K(r,!0)&&!r.voidElement,L=c&&typeof h=="object"&&h.dummy&&!N,W=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,r.name);if(typeof h=="string"){const E=n.services.interpolator.interpolate(h,$,n.language);m.push(E)}else if(K(h)||P){const E=C(h,r,i);b(h,E,m,T)}else if(L){const E=x(d,r.children,i);b(h,E,m,T)}else if(Number.isNaN(parseFloat(r.name)))if(W){const E=C(h,r,i);b(h,E,m,T,r.voidElement)}else if(a.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1)if(r.voidElement)m.push(A.createElement(r.name,{key:`${r.name}-${T}`}));else{const E=x(d,r.children,i);m.push(A.createElement(r.name,{key:`${r.name}-${T}`},E))}else if(r.voidElement)m.push(`<${r.name} />`);else{const E=x(d,r.children,i);m.push(`<${r.name}>${E}</${r.name}>`)}else if(typeof h=="object"&&!N){const E=r.children[0]?k:null;E&&m.push(E)}else b(h,k,m,T,r.children.length!==1||!k)}else if(r.type==="text"){const O=a.transWrapTextNodes,h=s?a.unescape(n.services.interpolator.interpolate(r.content,$,n.language)):n.services.interpolator.interpolate(r.content,$,n.language);O?m.push(A.createElement(O,{key:`${r.name}-${T}`},h)):m.push(h)}return m},[])}const v=x([{dummy:!0,children:e||[]}],g,w(e||[]));return D(v[0])}function se(e){let{children:t,count:n,parent:a,i18nKey:u,context:s,tOptions:l={},values:c,defaults:f,components:y,ns:g,i18n:$,t:C,shouldUnescape:b,...x}=e;const v=$||V();if(!v)return J("You will need to pass in an i18next instance by using i18nextReactModule"),t;const p=C||v.t.bind(v)||(P=>P);s&&(l.context=s);const o={...X(),...v.options&&v.options.react};let i=g||p.ns||v.options&&v.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"];const d=I(t,o),j=f||d||o.transEmptyNodeValue||u,{hashTransKey:m}=o,r=u||(m?m(d||j):d||j),T=c?l.interpolation:{interpolation:{...l.interpolation,prefix:"#$?",suffix:"?$#"}},k={...l,count:n,...c,...T,defaultValue:j,ns:i},O=r?p(r,k):j,h=ne(y||t,O,v,o,k,b),N=a!==void 0?a:o.defaultTransParent;return N?A.createElement(N,x,h):h}function le(e){let{children:t,count:n,parent:a,i18nKey:u,context:s,tOptions:l={},values:c,defaults:f,components:y,ns:g,i18n:$,t:C,shouldUnescape:b,...x}=e;const{i18n:v,defaultNS:p}=A.useContext(U)||{},o=$||v||V(),i=C||o&&o.t.bind(o);return se({children:t,count:n,parent:a,i18nKey:u,context:s,tOptions:l,values:c,defaults:f,components:y,ns:g||i&&i.ns||p||o&&o.options&&o.options.defaultNS,i18n:o,t:C,shouldUnescape:b,...x})}export{le as T};
