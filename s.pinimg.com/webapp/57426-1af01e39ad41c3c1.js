"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[57426],{293926:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(658379),a=r(249444),i=r(389282);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e){var t=e.color,r=void 0===t?"red":t,u=e.duration,l=e.finalProgress,c=e.shape,s=void 0===c?"pill":c,d=o((0,n.useState)(!1),2),f=d[0],h=d[1];(0,n.useEffect)((function(){var e=setTimeout((function(){h(!0)}),0);return function(){clearTimeout(e)}}),[]);var _="pill"===s;return(0,i.jsx)(a.xu,{color:r,height:_?8:6,rounding:_?"pill":2,width:"".concat(l,"%"),dangerouslySetInlineStyle:{__style:{transform:_?"translateX(".concat(f?"-5px":"-100%",")"):"scaleX(".concat(f?1:0,")"),transformOrigin:"left",transitionDuration:"".concat(u,"ms"),transitionTimingFunction:"ease-in"}}})}},560544:function(e,t){t.Z=function(e){return Math.floor(new Date(e).getTime()/1e3)}},950073:function(e,t){t.Z=function(e){var t=new Date(e);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}},949433:function(e,t,r){r.d(t,{Z:function(){return a},z:function(){return i}});var n=r(811359);function a(e){var t=e&&-1!==e.indexOf("@")?e.split("@"):[];if(2===t.length){var r=t[1],a=r&&-1!==r.indexOf(".")?r.split("."):[];if(a.length>=2&&"gmail"===a[0]&&"com"!==a.slice(1).join("."))return!0;var i=(0,n.Z)(r,"gmail.com");if("g"===r.charAt(0)&&(1===i||2===i))return!0}return!1}function i(e,t){var r=e&&-1!==e.indexOf("@")?e.split("@"):[];if(2!==r.length)return!1;var a=r[1],i=a&&-1!==a.indexOf(".")?a.split("."):[],o=i[0];if(o===t&&i.length>3)return!0;if(i.length>=2){var u=(0,n.Z)(o,t);return o.charAt(0)===t.charAt(0)&&(1===u||2===u)}return(2!==i.length||o!==t||2!==i[1].length&&"com"!==i[1])&&(i.length,!1)}},447390:function(e,t,r){function n(e){e&&e.focus()}r.d(t,{Z:function(){return n}})},991937:function(e,t,r){r.d(t,{Z:function(){return a}});var n=function(e){return e.split("").sort((function(){return.5-Math.random()})).join("")};function a(e,t){var r=e.split("@")[0],a="";return a=(a=r.includes(".")?r.replace("."," "):r.includes("_")?r.replace("_"," "):r).replace(/[0-9]/g,""),"GB"===t?"User_"+n(a):a=a.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}},811359:function(e,t,r){function n(e,t){if(0===e.length)return t.length;if(0===t.length)return e.length;var r,n,a=[];for(r=0;r<=t.length;r+=1)a[r]=[r];for(n=0;n<=e.length;n+=1)a[0][n]=n;for(r=1;r<=t.length;r+=1)for(n=1;n<=e.length;n+=1)t.charAt(r-1)===e.charAt(n-1)?a[r][n]=a[r-1][n-1]:a[r][n]=Math.min(a[r-1][n-1]+1,Math.min(a[r][n-1]+1,a[r-1][n]+1));return a[t.length][e.length]}r.d(t,{Z:function(){return n}})},450667:function(e,t,r){r.d(t,{GH:function(){return c},JF:function(){return v},Jb:function(){return _},MI:function(){return y},_V:function(){return s},sl:function(){return f},we:function(){return h}});var n=r(560544),a=r(970588),i=r(307052),o=r(710197),u=r(98736);function l(e,t,r,n,a,i,o){try{var u=e[i](o),l=u.value}catch(c){return void r(c)}u.done?t(l):Promise.resolve(l).then(n,a)}var c="274266067164",s=function(e){var t=["public_profile","email","user_friends"];return e?t:[].concat(t,["user_birthday"])},d=["picture.type(large)","id","first_name","last_name","email","gender"],f=function(e){e&&(0,u.dy)({event:"load_script_success",provider:"facebook"}),"undefined"!=typeof window&&window.FB?(e&&(0,u.dy)({event:"initialize_library",provider:"facebook"}),window.FB.init({appId:c,status:!0,xfbml:!0,version:"v2.7"})):e?(0,u.dy)({event:"global_object_not_found",provider:"facebook"}):(0,u.My)("pcons.non_autologin.fb.global_object_not_found")},h=function(e,t){return t&&(0,u.dy)({event:"load_script_start",provider:"facebook"}),(0,i.Z)((0,o.Z)(e),"FACEBOOK").then((function(){return f(t)}))},_=function(){return new Promise((function(e){"undefined"!=typeof window&&window.FB&&window.FB.getLoginStatus(e)}))},p=function(e){var t=e.userID,r=e.accessToken,a=e.data,i=a.birthday,o=a.email,u=a.first_name,l=a.gender,c=a.last_name,s=a.picture;return{type:"facebook",facebook_id:t,facebook_token:r,birthday:i?(0,n.Z)(i):void 0,email:o,first_name:u,gender:l,image_url:s&&!s.data.is_silhouette?s.data.url:void 0,last_name:c}};function y(e,t){return g.apply(this,arguments)}function g(){var e;return e=regeneratorRuntime.mark((function e(t,r){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.Z)({url:"/v3/facebook/profile_data/",method:"POST",data:{access_token:t,pii_safe_birthday:!0,fields:r?d:[].concat(d,["birthday"])}});case 2:return n=e.sent,i=n.resource_response.data||{},(0,u.My)(i?"pcons.facebook_user.non_empty_user_data_returned":"pcons.facebook_user.empty_user_data_returned"),e.abrupt("return",{access_token:t,birthday:i.birthday,email:i.email,first_name:i.first_name,gender:i.gender,id:i.id,last_name:i.last_name,picture:i.picture});case 6:case"end":return e.stop()}}),e)})),g=function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){l(i,n,a,o,u,"next",e)}function u(e){l(i,n,a,o,u,"throw",e)}o(void 0)}))},g.apply(this,arguments)}var v=function(e){return new Promise((function(t){window.FB.login(t,{scope:s(e).join(",")})})).then((function(t){return function(e,t,r){return new Promise((function(n,a){if("connected"===e.status){var i=e.authResponse,o=i.userID,u=i.accessToken;y(u,t).then((function(e){n({creds:{facebook_id:o,facebook_token:u,facebook_autologin:(null==r?void 0:r.autologin)||!1},signupOptions:p({userID:o,accessToken:u,data:e})})}),a)}else a({status:e.status||"unknown"})}))}(t,e)}))}},710197:function(e,t){t.Z=function(e){return"//connect.facebook.net/".concat(function(e){var t=e.replace(/-/g,"_");if(t.startsWith("es"))return"es_LA";if(t.startsWith("ar"))return"ar_AR";switch(t){case"de":return"de_DE";case"fr":return"fr_FR";case"it":return"it_IT";case"ja":return"ja_JP";case"nl":return"nl_NL";case"tr":return"tr_TR";case"en_AU":return"en_US";default:return t}}(e),"/sdk.js")}},780365:function(e,t,r){r.d(t,{Z:function(){return w},a:function(){return m}});var n=r(658379),a=r(73419),i=r(881079),o=r(249444),u=r(682126),l=r(536042),c=r(282802),s=r(549201),d=r(392881),f=r(813586),h=r(272939),_=r(389282);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e,t,r,n){var o=(0,a.Z)(e,"yyyy-MM-dd",new Date);if(!(0,i.Z)(o))return r((0,u.Tv)(t,!0,!0,!0)),void n("date error");if(!(0,u.Cd)(e,f.kx)){var l=(0,u.Uy)(t);return r(l),void n(l)}var c=(0,d.a3)(e,[(0,d.C9)({date:new Date((new Date).getFullYear(),0,1),message:t._('Invalid date', 'signup.emailpasswordstep.birthday.validator_message', 'Error message shown when user input a birthday date later than allowed')})]);r(c),n(c)};function w(e){var t=e.disabled,r=e.handleChangeBirthday,i=e.setValidState,d=e.birthdayErrorMessage,f=e.birthday,p=e.onChange,b=e.setBirthday,w=e.hideFieldLabel,D=(0,l.ZP)(),A=(0,s.HG)(),M=f?(0,a.Z)(f,"yyyy-MM-dd",new Date):void 0,S=v((0,n.useState)({day:M?M.getDate():void 0,month:M?M.getMonth()+1:void 0,year:M?M.getFullYear():void 0}),2),j=S[0],O=S[1],P=v((0,n.useState)(!1),2),x=P[0],Z=P[1],Y=v((0,n.useState)(!1),2),k=Y[0],T=Y[1],C=v((0,n.useState)(!1),2),z=C[0],F=C[1],B=v((0,n.useState)(""),2),E=B[0],I=B[1],L=(0,c.B)().locale,U=(0,n.useCallback)((function(e){var t=e.day,n=e.month,a=e.year;if(void 0!==a&&(a<u.nN||a>u.cO)?F(!0):F(!1),void 0!==n&&(n>u.Xf||n<u.Oh)?T(!0):T(!1),void 0!==t&&(t<u.p9||t>u.G)?Z(!0):Z(!1),x||k||z){var o=(0,u.Tv)(D,x,k,z);b(""),r(f),I(o),i("error birthday fields")}else void 0!==n&&void 0!==a&&void 0!==t?(b(a.toString()+"-"+n.toString().padStart(2,"0")+"-"+t.toString().padStart(2,"0")),r(f),m(f,D,I,i)):(b(""),r(f),I(""))}),[x,k,z,D,i,b,r,f]);(0,n.useEffect)((function(){U(j)}),[j,U]);var K=function(e,t){O(y(y({},j),{},g({},e.target.name,t))),null==p||p()},R=(0,_.jsx)(o.xu,{"data-test-id":"birthday-fields",children:(0,_.jsx)(o.Ki,{disabled:t,name:"day",id:"birthday-day",label:w?"":D._('Day', 'signup.birthdate.day', 'Signup birthdate textfield day label'),onBlur:function(){return U(j)},onChange:function(e){var t=e.event,r=e.value;K(t,r)},placeholder:D._('DD', 'signup.birthdate.placeholder.day', 'Signup birthdate textfield day placeholder'),value:j.day})}),G=(0,_.jsx)(o.xu,{"data-test-id":"birthday-fields",children:(0,_.jsx)(o.Ki,{disabled:t,name:"month",id:"birthday-month",label:w?"":D._('Month', 'signup.birthdate.month', 'Signup birthdate textfield month label'),onBlur:function(){return U(j)},onChange:function(e){var t=e.event,r=e.value;K(t,r)},placeholder:D._('MM', 'signup.birthdate.placeholder.month', 'Signup birthdate textfield month placeholder'),value:j.month})}),H=(0,_.jsx)(o.xu,{"data-test-id":"birthday-fields",children:(0,_.jsx)(o.Ki,{disabled:t,name:"year",id:"birthday-year",label:w?"":D._('Year', 'signup.birthdate.year', 'Signup birthdate textfield year label'),onBlur:function(){return U(j)},onChange:function(e){var t=e.event,r=e.value;K(t,r)},placeholder:D._('YYYY', 'signup.birthdate.placeholder.year', 'Signup birthdate textfield year placeholder'),value:j.year})}),N=(0,h.Z)(L),W="YYMMDD"===N?H:"MMDDYY"===N?G:R,J="YYMMDD"===N?G:"MMDDYY"===N?R:G,X="YYMMDD"===N?R:H;return(0,_.jsx)(o.xu,{display:"flex",paddingY:2,marginStart:A?2:3,marginEnd:A?-1:3,children:(0,_.jsx)(o.pg,{id:"birthday-input-fields",legend:D._('birthday input fields', 'birthday legend', 'Label to birthday legend'),legendDisplay:"hidden",errorMessage:d||E,children:(0,_.jsxs)(o.kC,{gap:4,children:[W,J,X]})})})}},272939:function(e,t,r){function n(e){var t=new Intl.DateTimeFormat(e).formatToParts(new Date).map((function(e){switch(e.type){case"day":return"DD";case"month":return"MM";case"year":return"YY";default:return""}})).join("");return t.startsWith("Y")?"YYMMDD":t.startsWith("M")?"MMDDYY":"DDMMYY"}r.d(t,{Z:function(){return n}})},139223:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(193413),a=r(459211);function i(e,t){(0,a.Z)(2,arguments);var r=(0,n.Z)(e),i=(0,n.Z)(t),o=r.getTime()-i.getTime();return o<0?-1:o>0?1:o}},137707:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(193413),a=r(459211);var i=r(139223);function o(e,t){(0,a.Z)(2,arguments);var r=(0,n.Z)(e),o=(0,n.Z)(t),u=(0,i.Z)(r,o),l=Math.abs(function(e,t){(0,a.Z)(2,arguments);var r=(0,n.Z)(e),i=(0,n.Z)(t);return r.getFullYear()-i.getFullYear()}(r,o));r.setFullYear("1584"),o.setFullYear("1584");var c=u*(l-((0,i.Z)(r,o)===-u));return 0===c?0:c}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/57426-1af01e39ad41c3c1.js.map