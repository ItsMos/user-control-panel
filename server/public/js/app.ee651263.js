(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d21d0f3":"394c373a","chunk-3229cdbf":"f8c423de","chunk-3f8ad6bb":"c27fec50","chunk-47e565f7":"9baa2617","chunk-7d3a1d82":"ed521ded"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-3229cdbf":1,"chunk-3f8ad6bb":1,"chunk-47e565f7":1,"chunk-7d3a1d82":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d21d0f3":"31d6cfe0","chunk-3229cdbf":"44e2d621","chunk-3f8ad6bb":"e83e39d4","chunk-47e565f7":"bd39e7b8","chunk-7d3a1d82":"6fc2dbe1"}[t]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],d.parentNode.removeChild(d),a(i)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,a[1](f)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034b":function(t,e,a){},"27ab":function(t,e,a){t.exports=a.p+"img/slideshow-1.96e9ca43.jpg"},3540:function(t,e,a){},"3bde":function(t,e,a){"use strict";var r=a("9d3d"),n=a.n(r);n.a},"3ee1":function(t,e,a){"use strict";var r=a("585f"),n=a.n(r);n.a},"520f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("96cf");var r=a("1da1"),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],o=a("2877"),c={},l=Object(o["a"])(c,s,i,!1,null,null,null),u=l.exports,f=(a("45fc"),a("b0c0"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("notifications"),a("navbar"),"Home"===t.$route.name?a("slideshow"):t._e(),a("div",{staticClass:"container shadow",staticStyle:{background:"#fff"}},[a("div",{staticClass:"row"},[a("main",{staticClass:"col-lg-9 order-2 order-lg-1"},[a("router-view")],1),a("aside",{staticClass:"col order-1 order-lg-2"},[a("sidebar")],1)])]),t._m(0)],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"13PX",color:"#fff","margin-top":"0px"}},[a("br"),t._v("Copyright © 2020 Pacific Roleplay - designed by Filip Grzegorz Jurewicz and Developed by Mos. All rights reserved."),a("br"),a("br")])])}],m=(a("dec9"),a("e009"),a("3540"),a("034b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"d-md-flex d-xl-flex justify-content-md-center"},[r("nav",{staticClass:"navbar navbar-light navbar-expand-md d-md-flex justify-content-md-center"},[r("div",{staticClass:"container"},[r("img",{attrs:{src:a("93b0"),height:"30"}}),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navcol-1"}},[r("ul",{staticClass:"nav navbar-nav"},[r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("router-link",{staticClass:"nav-link text-uppercase",class:"/"==t.$route.path?"active":"",attrs:{to:"/"}},[t._v(" Home ")])],1),t._m(1),t._m(2),t._m(3)])])])])])}),h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",staticStyle:{"background-color":"#fff"},attrs:{"data-toggle":"collapse","data-target":"#navcol-1"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link text-uppercase",attrs:{href:"http://forum.p-rp.mp/"}},[t._v("FORUMS")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link text-uppercase",attrs:{href:"#"}},[t._v("Donations")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link text-uppercase",attrs:{href:"#"}},[t._v("SERVER INFORMATION")])])}],v=(a("3ee1"),{}),g=Object(o["a"])(v,m,h,!1,null,"7396312a",null),b=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slideshow container shadow"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"margin-top":"14px"}},[a("div",{staticStyle:{height:"232px","max-width":"1200px"}},[t._l(3,(function(e){return a("img",{key:e,staticClass:"mySlides",class:{active:e==t.activeSlide},staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl(e)}})})),a("div",{staticClass:"w3-container",staticStyle:{width:"100%"}},[a("div",{staticClass:"left",on:{click:t.left}},[t._v("❮")]),a("div",{staticClass:"right",on:{click:t.right}},[t._v("❯")]),t._l(3,(function(e){return a("span",{key:e,staticClass:"bullet",class:{active:t.activeSlide==e},on:{click:function(a){return t.slide(e)}}})}))],2)],2)])]),t._m(0)])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",[a("div",{staticStyle:{"background-color":"#042e59"}},[a("h1",{staticClass:"text-uppercase text-center",staticStyle:{"font-size":"13px",color:"#ffffff","margin-top":"-2px"}},[t._v(" NOW PLAYING 0/0 PLAYERS ")])]),a("hr",{staticClass:"solid"})])])])}],_={data:function(){return{activeSlide:1}},methods:{getImgUrl:function(t){return a("b7ac")("./slideshow-".concat(t,".jpg"))},slide:function(t){this.activeSlide=t},left:function(){this.activeSlide--,this.activeSlide<1&&(this.activeSlide=3)},right:function(){this.activeSlide++,this.activeSlide>3&&(this.activeSlide=1)}}},C=_,k=(a("3bde"),Object(o["a"])(C,y,x,!1,null,"1cf121cc",null)),w=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[t.logged?a("div",{staticClass:"userview border rounded-0 shadow"},[a("div",{staticClass:"header"},[a("h1",{staticClass:"text-center"},[t._v("WELCOME BACK, "+t._s(t.user.username))])]),a("h3",[a("i",{staticClass:"fa fa-clock-o"}),t._v("Hours Played: "+t._s(t.user.stats.totalPlayTime||0)+" "),a("br")]),t._m(0),a("h3",[a("i",{staticClass:"fa fa-calendar"}),t._v("Member Since: "+t._s(t._f("dateStr")(t.user.created))+" "),a("br")]),a("hr"),"/"==this.$route.path?a("a",{staticClass:"btn btn-dark btn-sm d-block border",attrs:{href:"/ucp"}},[t._v("UCP")]):t._e(),a("a",{staticClass:"btn btn-dark btn-sm d-block border",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])]):t._e(),t.logged?t._e():a("div",{staticClass:"border rounded-0 shadow",staticStyle:{"margin-bottom":"15px"}},[t._m(1),a("form",{staticStyle:{"margin-top":"10px"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group"},[t._m(2),a("div",{staticClass:"input-group input-group-sm",staticStyle:{"padding-right":"10px","padding-left":"10px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"border rounded-0 form-control",staticStyle:{"margin-top":"-5px"},attrs:{type:"text",name:"username",required:"",placeholder:"enter your username "},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._m(3),a("div",{staticClass:"form-group",staticStyle:{"margin-top":"-5px"}},[a("div",{staticClass:"input-group input-group-sm",staticStyle:{"padding-left":"10px","padding-right":"10px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"border rounded-0 form-control",attrs:{type:"password",name:"password",required:"",placeholder:"enter your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._m(4),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-dark btn-block btn-sm border rounded-0 border-light",attrs:{disabled:t.disable,type:"submit"}},[t._v("Login")])])]),a("hr",{staticStyle:{"margin-top":"-10px","margin-bottom":"0px"}}),t._m(5),a("router-link",{staticStyle:{color:"rgb(0,0,0)","font-size":"12px","margin-left":"15px"},attrs:{to:"register"}},[t._v(" » I don't have an account, register now "),a("br")])],1),t._m(6)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("i",{staticClass:"fa fa-dollar"}),t._v("Pacific Points: N/A "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h1",{staticClass:"text-center text-uppercase"},[t._v("Please login OR REGISTER")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticStyle:{"font-size":"13px","padding-left":"15px"}},[a("i",{staticClass:"fa fa-user"}),a("strong",[t._v("Username")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticStyle:{"font-size":"13px","padding-left":"15px","margin-top":"-7px"}},[a("i",{staticClass:"fa fa-lock"}),a("strong",[t._v("Password")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"text-center",staticStyle:{display:"block","font-size":"13PX"}},[a("input",{attrs:{type:"checkbox"}}),t._v(" Log me on automatically each visit "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{color:"rgb(0,0,0)","font-size":"12px","margin-left":"15px"},attrs:{href:"#"}},[t._v(" » Forgot your password? "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border rounded-0 shadow"},[a("div",{staticClass:"header text-uppercase"},[a("h1",{staticClass:"text-center",staticStyle:{"font-size":"15px"}},[t._v("SOCIAL MEDIA")])]),a("div",{staticClass:"d-flex justify-content-center",staticStyle:{"background-color":"#ffffff"}},[a("i",{staticClass:"fa fa-facebook-official",staticStyle:{"font-size":"27px","margin-right":"10px",color:"rgb(0,0,0)","padding-top":"5px","padding-bottom":"5px"}}),a("i",{staticClass:"fa fa-instagram",staticStyle:{"font-size":"27px",color:"rgb(0,0,0)","padding-top":"5px","margin-right":"10px","padding-bottom":"5px"}}),a("i",{staticClass:"fa fa-youtube-play",staticStyle:{"font-size":"27px",color:"rgb(0,0,0)","padding-top":"5px","padding-bottom":"5px"}})])])}],$=(a("4160"),a("b64b"),a("498a"),a("159b"),a("48ac")),j=a.n($),O={created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.user=t.$user,t.user&&(t.logged=!0);case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{user:null,username:"",password:"",disable:!1,logged:!1}},watch:{username:function(){this.username=this.username.trim()}},methods:{login:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.username&&!(t.username.length<3)){e.next=2;break}return e.abrupt("return",t.$notify({text:"Invalid username",color:"danger"}));case 2:if(t.password&&!(t.password.length<4)){e.next=4;break}return e.abrupt("return",t.$notify({text:"Invalid password",color:"danger"}));case 4:return t.disable=!0,e.next=7,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password})});case 7:return a=e.sent,e.next=10,a.json();case 10:if(a=e.sent,t.disable=!1,!a.errors){e.next=16;break}Object.keys(a.errors).forEach((function(e){t.$notify({text:a.errors[e],color:"danger"})})),e.next=28;break;case 16:if(!a.token){e.next=28;break}return t.$notify({text:"Successfully logged in",color:"primary"}),localStorage.token=a.token,e.next=21,j.a.decode(a.token);case 21:return t.$user=e.sent,e.next=24,ajax("/stats");case 24:t.$user.stats=e.sent,t.logged=!0,t.user=t.$user,t.$route.meta&&t.$route.meta.guest&&t.$router.go();case 28:case"end":return e.stop()}}),e)})))()},logout:function(){delete localStorage.token,this.$router.go()}},filters:{dateStr:function(t){return new Date(t).toDateString()}}},P=O,A=(a("aeca"),Object(o["a"])(P,S,E,!1,null,"f9a1ee4a",null)),z=A.exports,R={components:{navbar:b,slideshow:w,sidebar:z}},T=R,N=Object(o["a"])(T,d,p,!1,null,null,null),M=N.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(3,(function(e){return r("div",{staticClass:"shadow solidnews topnews",staticStyle:{"margin-bottom":"15px"}},[t._m(0,!0),t._m(1,!0),r("hr"),t._m(2,!0),r("img",{staticClass:"text-center img-thumbnail img-fluid",staticStyle:{height:"300px"},attrs:{src:a("aae4")}}),t._m(3,!0),r("hr"),t._m(4,!0)])})),t._m(5)],2)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"30px","margin-left":"5px"}},[a("strong",[t._v("Article Title")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"15px","margin-left":"5px","margin-top":"-10px","margin-bottom":"-8px"}},[t._v(" 25th, January, 2020 "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"10px","margin-top":"-20px"}},[t._v(" Written by Nomesurname "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"13"}},[a("p",{staticClass:"text-left",staticStyle:{"font-family":"Abel, sans-serif","padding-right":"50px","padding-left":"25px","font-size":"15px"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis tortor. Proin porta turpis at ipsum accumsan rutrum. Aliquam erat volutpat. Praesent quam massa, faucibus in lacus sit amet, porttitor vulputate enim. Proin a magna vitae libero posuere imperdiet. Mauris vel dolor ac leo imperdiet aliquam nec dictum ex. Etiam pharetra est consectetur semper maximus. Maecenas id quam aliquam, elementum arcu quis, tempor nunc. Proin sit amet placerat ipsum. Phasellus porta risus metus, eget pretium ligula tempus vel. "),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-right",staticStyle:{"font-family":"Abel, sans-serif","font-size":"13px","padding-right":"15px"}},[t._v(" 5 comments "),a("br"),a("button",{staticClass:"btn btn-dark btn-sm",staticStyle:{"font-size":"13","background-color":"rgb(4,46,89)","margin-top":"5px"},attrs:{type:"button"}},[t._v("Read More")]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-xl-flex justify-content-xl-center pagination",staticStyle:{"margin-bottom":"15px"}},[a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v(" « "),a("br")]),a("a",{staticClass:"active",staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("1")]),a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("2")]),a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("3")]),a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("4")]),a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("5")]),a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("6")]),a("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v(" » "),a("br")])])}],q=(a("ffae"),{}),D=Object(o["a"])(q,L,I,!1,null,"d988810a",null),U=D.exports;n["a"].use(f["a"]);var J=[{path:"/",component:M,children:[{path:"/",name:"Home",component:U},{path:"register",name:"Register",component:function(){return a.e("chunk-3229cdbf").then(a.bind(null,"7803"))},meta:{guest:!0}},{path:"ucp",component:function(){return a.e("chunk-3f8ad6bb").then(a.bind(null,"7f79"))},children:[{path:"",name:"UCP",component:function(){return a.e("chunk-2d21d0f3").then(a.bind(null,"d04e"))},meta:{private:!0}},{path:"characters",name:"Characters",component:function(){return a.e("chunk-47e565f7").then(a.bind(null,"a812"))},meta:{private:!0}},{path:"quiz",name:"Quiz",component:function(){return a.e("chunk-7d3a1d82").then(a.bind(null,"a2ee"))},meta:{private:!0}}]}]}],F=new f["a"]({mode:"history",routes:J});F.beforeEach((function(t,e,a){if(document.title="Pacific Roleplay",document.title+=t.name?" - "+t.name:"",t.meta.guest)n["a"].prototype.$user?a("/"):a();else if(t.meta.private)if(n["a"].prototype.$user){var r=n["a"].prototype.$user.role;!t.meta.roles||t.meta.roles.some((function(t){return t==r}))?a():a("/ucp")}else a("/");else a()}));var H=F,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notifications"},[a("transition-group",{attrs:{name:"list"}},t._l(t.list,(function(e,r){return a("div",{key:r,staticClass:"notify",class:e.color?"bg-"+e.color:null},[a("p",[a("i",{staticClass:"far fa-bell"}),t._v(" "+t._s(e.text))])])})),0)],1)},G=[],W=(a("c975"),a("a434"),{list:[]}),K={data:function(){return W},methods:{notify:function(t){W.list.push(t),setTimeout((function(){var e=W.list.indexOf(t);W.list.splice(e,1)}),t.timeout||4e3)}}},X=K,Y=(a("c25a"),Object(o["a"])(X,B,G,!1,null,"141d7bf2",null)),Q=Y.exports,V={install:function(t){Object.defineProperty(t.prototype,"$notify",{get:function(){return Q.methods.notify}}),t.component("notifications",Q)}};function Z(){return localStorage.token&&null!=localStorage.token&&"null"!==localStorage.token}function tt(){return new Promise(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Z()){t.next=2;break}return t.abrupt("return",a("no token"));case 2:return t.next=4,fetch("/validateToken",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:localStorage.token})});case 4:if(r=t.sent,200==r.status){t.next=8;break}return delete localStorage.token,t.abrupt("return",a("invalid token"));case 8:return t.next=10,r.json();case 10:r=t.sent,r.token&&(n=j.a.decode(r.token),localStorage.token=r.token,e(n));case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())}function et(){return at.apply(this,arguments)}function at(){return at=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,tt();case 3:if(e=t.sent,!e){t.next=8;break}return t.next=7,ajax("/stats");case 7:e.stats=t.sent;case 8:n["a"].prototype.$user=e,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),n["a"].prototype.$user=null;case 14:new n["a"]({router:H,render:function(t){return t(u)}}).$mount("#app");case 15:case"end":return t.stop()}}),t,null,[[0,11]])}))),at.apply(this,arguments)}n["a"].config.productionTip=!1,n["a"].use(V),window.ajax=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,a){var r,n,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:"GET",t.next=3,fetch(e,{method:r.toUpperCase(),headers:{"Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify(a)});case 3:if(n=t.sent,!n.redirected){t.next=7;break}return window.location=n.url,t.abrupt("return");case 7:if(200!=n.status){t.next=12;break}return t.next=10,n.json();case 10:return n=t.sent,t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),et()},"585f":function(t,e,a){},"5ee2":function(t,e,a){},"76f3":function(t,e,a){},"8f2f":function(t,e,a){t.exports=a.p+"img/slideshow-3.96e9ca43.jpg"},"93b0":function(t,e,a){t.exports=a.p+"img/header-iphone.f30fe8cd.png"},"9d3d":function(t,e,a){},aae4:function(t,e,a){t.exports=a.p+"img/post-image-01.94c8842e.jpg"},aeca:function(t,e,a){"use strict";var r=a("520f"),n=a.n(r);n.a},b0c9:function(t,e,a){t.exports=a.p+"img/slideshow-2.96e9ca43.jpg"},b7ac:function(t,e,a){var r={"./slideshow-1.jpg":"27ab","./slideshow-2.jpg":"b0c9","./slideshow-3.jpg":"8f2f"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="b7ac"},c25a:function(t,e,a){"use strict";var r=a("76f3"),n=a.n(r);n.a},dec9:function(t,e,a){},e009:function(t,e,a){},ffae:function(t,e,a){"use strict";var r=a("5ee2"),n=a.n(r);n.a}});
//# sourceMappingURL=app.ee651263.js.map