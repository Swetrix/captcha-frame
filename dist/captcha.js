!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function i(e,t){void 0===t&&(t={}),window.parent.postMessage(n({event:e,type:r,cid:window.__SWETRIX_CAPTCHA_ID},t),"*")}function u(e){w=e;var t,n=document.querySelector("#status-default"),r=document.querySelector("#status-failure"),c={checkbox:document.querySelector("#checkbox"),failure:document.querySelector("#failure"),completed:document.querySelector("#completed"),loading:document.querySelector("#loading")};null!=(t=c.checkbox)&&t.classList.add("hidden"),null!=(t=c.failure)&&t.classList.add("hidden"),null!=(t=c.completed)&&t.classList.add("hidden"),null!=(t=c.loading)&&t.classList.add("hidden"),"failure"===e?(null!=n&&n.classList.add("hidden"),null!=r&&r.classList.remove("hidden")):(null!=n&&n.classList.remove("hidden"),null!=r&&r.classList.add("hidden")),null!=(t=c[e])&&t.classList.remove("hidden")}function l(){setTimeout(function(){i(d.TOKEN_EXPIRED),u(f.checkbox)},3e5)}function s(){var e=document.querySelector("#manual-challenge"),t=document.querySelector("#svg-captcha");t&&(i(d.MANUAL_FINISHED),t.innerHTML="",null!=e)&&e.classList.add("hidden")}var d,f,e,n=function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},h=function(e,a,i,u){return new(i=i||Promise)(function(n,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function c(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(r,c)}o((u=u.apply(e,a||[])).next())})},p=function(r,c){var o,a,i,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},l={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function e(n){return function(e){var t=[n,e];if(o)throw new TypeError("Generator is already executing.");for(;u=l&&t[l=0]?0:u;)try{if(o=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(i=0<(i=u.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3]))u.label=t[1];else if(6===t[0]&&u.label<i[1])u.label=i[1],i=t;else{if(!(i&&u.label<i[2])){i[2]&&u.ops.pop(),u.trys.pop();continue}u.label=i[2],u.ops.push(t)}}t=c.call(r,u)}catch(e){t=[6,e],a=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},v=window.__SWETRIX_CAPTCHA_DEV||!1?"http://localhost:5005/v1/captcha":"https://api.swetrix.com/v1/captcha",r="swetrix-captcha",y="",m="/verify",S="/generate",E="/verify-manual",w=((e=d=d||{}).SUCCESS="success",e.FAILURE="failure",e.TOKEN_EXPIRED="tokenExpired",e.MANUAL_STARTED="manualStarted",e.MANUAL_FINISHED="manualFinished",(e=f=f||{}).checkbox="checkbox",e.failure="failure",e.completed="completed",e.loading="loading",f.checkbox);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#swetrix-captcha"),t=document.querySelector("#branding"),a=document.querySelector("#svg-captcha-input"),n=document.querySelector("#manual-submit-btn");null!=t&&t.addEventListener("click",function(e){e.stopPropagation()}),null!=n&&n.addEventListener("click",function(o){return h(void 0,void 0,void 0,function(){var t,n,r,c;return p(this,function(e){switch(e.label){case 0:if(o.stopPropagation(),!a)return[2];if(!(t=a.value))return[2];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch("".concat(v).concat(E),{method:"POST",body:JSON.stringify({hash:y,code:t,pid:window.__SWETRIX_PROJECT_ID}),headers:{"Content-Type":"application/json"}})];case 2:return n=e.sent(),[3,4];case 3:return e.sent(),s(),i(d.FAILURE),u(f.failure),a.value="",[2];case 4:return n.ok?[4,n.json()]:(s(),i(d.FAILURE),u(f.failure),a.value="",[2]);case 5:return c=e.sent(),r=c.success,c=c.token,r?(a.value="",i(d.SUCCESS,{token:c}),l(),u(f.completed),s()):(s(),i(d.FAILURE),u(f.failure),a.value=""),[2]}})})}),null!=e&&e.addEventListener("click",function(){return h(void 0,void 0,void 0,function(){var c,o,a;return p(this,function(e){switch(e.label){case 0:if(w===f.loading||w===f.completed)return[2];if(w===f.failure)return u(f.checkbox),[2];u(f.loading),e.label=1;case 1:return e.trys.push([1,3,,5]),[4,h(void 0,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,fetch("".concat(v).concat(m),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pid:window.__SWETRIX_PROJECT_ID})})];case 1:return(t=e.sent()).ok?[4,t.json()]:[2,{}];case 2:return[2,e.sent()];case 3:return e.sent(),i(d.FAILURE),u(f.failure),[2,{}];case 4:return[2]}})})];case 2:if(c=e.sent().token)return i(d.SUCCESS,{token:c}),l(),u(f.completed),[2];throw"";case 3:return e.sent(),[4,h(void 0,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,fetch("".concat(v).concat(S),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:window.__SWETRIX_CAPTCHA_THEME||"light",pid:window.__SWETRIX_PROJECT_ID})})];case 1:if((t=e.sent()).ok)return[4,t.json()];throw"";case 2:return[2,e.sent()];case 3:return e.sent(),i(d.FAILURE),u(f.failure),[2,{}];case 4:return[2]}})})];case 4:return c=e.sent(),o=c.data,a=c.hash,y=a,t=o,n=document.querySelector("#manual-challenge"),(r=document.querySelector("#svg-captcha"))&&(t?r.innerHTML=t:((t=document.createElement("p")).innerText="Error loading captcha",t.style.color="#d6292a",null!=r&&r.appendChild(t)),i(d.MANUAL_STARTED),null!=n)&&n.classList.remove("hidden"),[2];case 5:return[2]}var t,n,r})})})})});
