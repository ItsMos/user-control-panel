(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d21d0f3":"4578bbd2","chunk-2d21f0e9":"8b5b3bd0","chunk-3229cdbf":"f8c423de","chunk-47e565f7":"9baa2617","chunk-73e8d76f":"0ef5ea27","chunk-7d3a1d82":"ed521ded","chunk-95e4a0f0":"4df91195","chunk-ff12fe16":"153d56c9"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3229cdbf":1,"chunk-47e565f7":1,"chunk-73e8d76f":1,"chunk-7d3a1d82":1,"chunk-95e4a0f0":1,"chunk-ff12fe16":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d21d0f3":"31d6cfe0","chunk-2d21f0e9":"31d6cfe0","chunk-3229cdbf":"44e2d621","chunk-47e565f7":"bd39e7b8","chunk-73e8d76f":"d848a205","chunk-7d3a1d82":"6fc2dbe1","chunk-95e4a0f0":"5b3eab73","chunk-ff12fe16":"21752382"}[t]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034b":function(t,e,n){},"27ab":function(t,e,n){t.exports=n.p+"img/slideshow-1.96e9ca43.jpg"},3540:function(t,e,n){},"3bde":function(t,e,n){"use strict";var a=n("9d3d"),r=n.n(a);r.a},"3f36":function(t,e,n){},"520f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("96cf");var a=n("1da1"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},i=[],o=n("2877"),c={},l=Object(o["a"])(c,s,i,!1,null,null,null),u=l.exports,f=(n("45fc"),n("b0c0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("notifications"),n("navbar"),"Home"===t.$route.name?n("slideshow"):t._e(),n("div",{staticClass:"container shadow",staticStyle:{background:"#fff"}},[n("div",{staticClass:"row"},[n("main",{staticClass:"col-lg-9 order-2 order-lg-1"},[n("router-view")],1),n("aside",{staticClass:"col order-1 order-lg-2"},[n("sidebar")],1)])]),t._m(0)],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"13PX",color:"#fff","margin-top":"0px"}},[n("br"),t._v("Copyright © 2020 Pacific Roleplay - designed by Filip Grzegorz Jurewicz and Developed by Mos. All rights reserved."),n("br"),n("br")])])}],m=(n("dec9"),n("e009"),n("3540"),n("034b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"d-md-flex d-xl-flex justify-content-md-center"},[a("nav",{staticClass:"navbar navbar-light navbar-expand-md d-md-flex justify-content-md-center"},[a("div",{staticClass:"container"},[a("img",{attrs:{src:n("93b0"),height:"30"}}),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navcol-1"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("router-link",{staticClass:"nav-link text-uppercase",class:"/"==t.$route.path?"active":"",attrs:{to:"/"}},[t._v(" Home ")])],1),t._m(1),t._m(2),t._m(3)])])])])])}),h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",staticStyle:{"background-color":"#fff"},attrs:{"data-toggle":"collapse","data-target":"#navcol-1"}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[n("a",{staticClass:"nav-link text-uppercase",attrs:{href:"http://forum.p-rp.mp/"}},[t._v("FORUMS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[n("a",{staticClass:"nav-link text-uppercase"},[t._v("Donations")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[n("a",{staticClass:"nav-link text-uppercase"},[t._v("SERVER INFORMATION")])])}],v=(n("baaf"),{}),g=Object(o["a"])(v,m,h,!1,null,"e215dc6a",null),b=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideshow container shadow"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col",staticStyle:{"margin-top":"14px"}},[n("div",{staticStyle:{height:"232px","max-width":"1200px"}},[t._l(3,(function(e){return n("img",{key:e,staticClass:"mySlides",class:{active:e==t.activeSlide},staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl(e)}})})),n("div",{staticClass:"w3-container",staticStyle:{width:"100%"}},[n("div",{staticClass:"left",on:{click:t.left}},[t._v("❮")]),n("div",{staticClass:"right",on:{click:t.right}},[t._v("❯")]),t._l(3,(function(e){return n("span",{key:e,staticClass:"bullet",class:{active:t.activeSlide==e},on:{click:function(n){return t.slide(e)}}})}))],2)],2)])]),t._m(0)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",[n("div",{staticStyle:{"background-color":"#042e59"}},[n("h1",{staticClass:"text-uppercase text-center",staticStyle:{"font-size":"13px",color:"#ffffff","margin-top":"-2px"}},[t._v(" NOW PLAYING 0/0 PLAYERS ")])]),n("hr",{staticClass:"solid"})])])])}],_={data:function(){return{activeSlide:1}},methods:{getImgUrl:function(t){return n("b7ac")("./slideshow-".concat(t,".jpg"))},slide:function(t){this.activeSlide=t},left:function(){this.activeSlide--,this.activeSlide<1&&(this.activeSlide=3)},right:function(){this.activeSlide++,this.activeSlide>3&&(this.activeSlide=1)}}},k=_,C=(n("3bde"),Object(o["a"])(k,y,x,!1,null,"1cf121cc",null)),w=C.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t.logged?n("div",{staticClass:"userview border rounded-0 shadow"},[n("div",{staticClass:"header"},[n("h1",{staticClass:"text-center"},[t._v("WELCOME BACK, "+t._s(t.user.username))])]),n("h3",[n("i",{staticClass:"fa fa-clock-o"}),t._v("Hours Played: "+t._s(t.user.stats.totalPlayTime||0)+" "),n("br")]),t._m(0),n("h3",[n("i",{staticClass:"fa fa-calendar"}),t._v("Member Since: "+t._s(t._f("dateStr")(t.user.created))+" "),n("br")]),n("hr"),"/"==this.$route.path?n("a",{staticClass:"btn btn-dark btn-sm d-block border",attrs:{href:"/ucp"}},[t._v("UCP")]):t._e(),n("a",{staticClass:"btn btn-dark btn-sm d-block border",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])]):t._e(),t.logged?t._e():n("div",{staticClass:"border rounded-0 shadow",staticStyle:{"margin-bottom":"15px"}},[t._m(1),n("form",{staticStyle:{"margin-top":"10px"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"form-group"},[t._m(2),n("div",{staticClass:"input-group input-group-sm",staticStyle:{"padding-right":"10px","padding-left":"10px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"border rounded-0 form-control",staticStyle:{"margin-top":"-5px"},attrs:{type:"text",name:"username",required:"",placeholder:"enter your username "},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._m(3),n("div",{staticClass:"form-group",staticStyle:{"margin-top":"-5px"}},[n("div",{staticClass:"input-group input-group-sm",staticStyle:{"padding-left":"10px","padding-right":"10px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"border rounded-0 form-control",attrs:{type:"password",name:"password",required:"",placeholder:"enter your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._m(4),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-dark btn-block btn-sm border rounded-0 border-light",attrs:{disabled:t.disable,type:"submit"}},[t._v("Login")])])]),n("hr",{staticStyle:{"margin-top":"-10px","margin-bottom":"0px"}}),t._m(5),n("router-link",{staticStyle:{color:"rgb(0,0,0)","font-size":"12px","margin-left":"15px"},attrs:{to:"register"}},[t._v(" » I don't have an account, register now "),n("br")])],1),t._m(6)])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("i",{staticClass:"fa fa-dollar"}),t._v("Pacific Points: N/A "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",{staticClass:"text-center text-uppercase"},[t._v("Please login OR REGISTER")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticStyle:{"font-size":"13px","padding-left":"15px"}},[n("i",{staticClass:"fa fa-user"}),n("strong",[t._v("Username")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticStyle:{"font-size":"13px","padding-left":"15px","margin-top":"-7px"}},[n("i",{staticClass:"fa fa-lock"}),n("strong",[t._v("Password")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-center",staticStyle:{display:"block","font-size":"13PX"}},[n("input",{attrs:{type:"checkbox"}}),t._v(" Log me on automatically each visit "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticStyle:{color:"rgb(0,0,0)","font-size":"12px","margin-left":"15px"},attrs:{href:"#"}},[t._v(" » Forgot your password? "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border rounded-0 shadow"},[n("div",{staticClass:"header text-uppercase"},[n("h1",{staticClass:"text-center",staticStyle:{"font-size":"15px"}},[t._v("SOCIAL MEDIA")])]),n("div",{staticClass:"d-flex justify-content-center",staticStyle:{"background-color":"#ffffff"}},[n("i",{staticClass:"fa fa-facebook-official",staticStyle:{"font-size":"27px","margin-right":"10px",color:"rgb(0,0,0)","padding-top":"5px","padding-bottom":"5px"}}),n("i",{staticClass:"fa fa-instagram",staticStyle:{"font-size":"27px",color:"rgb(0,0,0)","padding-top":"5px","margin-right":"10px","padding-bottom":"5px"}}),n("i",{staticClass:"fa fa-youtube-play",staticStyle:{"font-size":"27px",color:"rgb(0,0,0)","padding-top":"5px","padding-bottom":"5px"}})])])}],$=(n("4160"),n("b64b"),n("498a"),n("159b"),n("48ac")),j=n.n($),O={created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.user=t.$user,t.user&&(t.logged=!0);case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{user:null,username:"",password:"",disable:!1,logged:!1}},watch:{username:function(){this.username=this.username.trim()}},methods:{login:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.username&&!(t.username.length<3)){e.next=2;break}return e.abrupt("return",t.$notify({text:"Invalid username",color:"danger"}));case 2:if(t.password&&!(t.password.length<4)){e.next=4;break}return e.abrupt("return",t.$notify({text:"Invalid password",color:"danger"}));case 4:return t.disable=!0,e.next=7,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password})});case 7:return n=e.sent,e.next=10,n.json();case 10:if(n=e.sent,t.disable=!1,!n.errors){e.next=16;break}Object.keys(n.errors).forEach((function(e){t.$notify({text:n.errors[e],color:"danger"})})),e.next=28;break;case 16:if(!n.token){e.next=28;break}return t.$notify({text:"Successfully logged in",color:"primary"}),localStorage.token=n.token,e.next=21,j.a.decode(n.token);case 21:return t.$user=e.sent,e.next=24,ajax("/stats");case 24:t.$user.stats=e.sent,t.logged=!0,t.user=t.$user,t.$route.meta&&t.$route.meta.guest&&t.$router.go();case 28:case"end":return e.stop()}}),e)})))()},logout:function(){delete localStorage.token,this.$router.go()}},filters:{dateStr:function(t){return new Date(t).toDateString()}}},P=O,A=(n("aeca"),Object(o["a"])(P,S,E,!1,null,"f9a1ee4a",null)),z=A.exports,R={components:{navbar:b,slideshow:w,sidebar:z}},T=R,N=Object(o["a"])(T,d,p,!1,null,null,null),M=N.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(3,(function(e){return a("div",{staticClass:"shadow solidnews topnews",staticStyle:{"margin-bottom":"15px"}},[t._m(0,!0),t._m(1,!0),a("hr"),t._m(2,!0),a("img",{staticClass:"text-center img-thumbnail img-fluid",staticStyle:{height:"300px"},attrs:{src:n("aae4")}}),t._m(3,!0),a("hr"),t._m(4,!0)])})),t._m(5)],2)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"30px","margin-left":"5px"}},[n("strong",[t._v("Article Title")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"15px","margin-left":"5px","margin-top":"-10px","margin-bottom":"-8px"}},[t._v(" 25th, January, 2020 "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-center",staticStyle:{"font-family":"Abel, sans-serif","font-size":"10px","margin-top":"-20px"}},[t._v(" Written by Nomesurname "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"13"}},[n("p",{staticClass:"text-left",staticStyle:{"font-family":"Abel, sans-serif","padding-right":"50px","padding-left":"25px","font-size":"15px"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis tortor. Proin porta turpis at ipsum accumsan rutrum. Aliquam erat volutpat. Praesent quam massa, faucibus in lacus sit amet, porttitor vulputate enim. Proin a magna vitae libero posuere imperdiet. Mauris vel dolor ac leo imperdiet aliquam nec dictum ex. Etiam pharetra est consectetur semper maximus. Maecenas id quam aliquam, elementum arcu quis, tempor nunc. Proin sit amet placerat ipsum. Phasellus porta risus metus, eget pretium ligula tempus vel. "),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-right",staticStyle:{"font-family":"Abel, sans-serif","font-size":"13px","padding-right":"15px"}},[t._v(" 5 comments "),n("br"),n("button",{staticClass:"btn btn-dark btn-sm",staticStyle:{"font-size":"13","background-color":"rgb(4,46,89)","margin-top":"5px"},attrs:{type:"button"}},[t._v("Read More")]),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-xl-flex justify-content-xl-center pagination",staticStyle:{"margin-bottom":"15px"}},[n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v(" « "),n("br")]),n("a",{staticClass:"active",staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("1")]),n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("2")]),n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("3")]),n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("4")]),n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("5")]),n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v("6")]),n("a",{staticStyle:{"font-family":"Abel, sans-serif"},attrs:{href:"#"}},[t._v(" » "),n("br")])])}],q=(n("ffae"),{}),D=Object(o["a"])(q,L,I,!1,null,"d988810a",null),U=D.exports;r["a"].use(f["a"]);var J=[{path:"/",component:M,children:[{path:"/",name:"Home",component:U},{path:"register",name:"Register",component:function(){return n.e("chunk-3229cdbf").then(n.bind(null,"7803"))},meta:{guest:!0}},{path:"ucp",name:"UCP",component:function(){return n.e("chunk-73e8d76f").then(n.bind(null,"7f79"))},children:[{path:"",component:function(){return n.e("chunk-2d21d0f3").then(n.bind(null,"d04e"))},meta:{private:!0}},{path:"characters",name:"Characters",component:function(){return n.e("chunk-47e565f7").then(n.bind(null,"a812"))},meta:{private:!0}},{path:"quiz",name:"Quiz",component:function(){return n.e("chunk-7d3a1d82").then(n.bind(null,"a2ee"))},meta:{private:!0}},{path:"admin",name:"Admin",meta:{private:!0,roles:["admin","tester"]},component:function(){return n.e("chunk-2d21f0e9").then(n.bind(null,"d7cc"))},children:[{path:"",component:function(){return n.e("chunk-95e4a0f0").then(n.bind(null,"5a4f"))}},{path:"apps",name:"Applications",component:function(){return n.e("chunk-ff12fe16").then(n.bind(null,"c22a"))}}]}]}]}],F=new f["a"]({mode:"history",routes:J});F.beforeEach((function(t,e,n){if(document.title="Pacific Roleplay",t.name?document.title+=" - "+t.name:t.matched&&t.matched[t.matched.length-2]&&(document.title+=" - "+t.matched[t.matched.length-2].name),t.meta.guest)r["a"].prototype.$user?n("/"):n();else if(t.meta.private)if(r["a"].prototype.$user){var a=r["a"].prototype.$user.role;!t.meta.roles||t.meta.roles.some((function(t){return t==a}))?n():n("/ucp")}else n("/");else n()}));var H=F,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notifications"},[n("transition-group",{attrs:{name:"list"}},t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"notify",class:e.color?"bg-"+e.color:null},[n("p",[n("i",{staticClass:"far fa-bell"}),t._v(" "+t._s(e.text))])])})),0)],1)},G=[],W=(n("c975"),n("a434"),{list:[]}),K={data:function(){return W},methods:{notify:function(t){W.list.push(t),setTimeout((function(){var e=W.list.indexOf(t);W.list.splice(e,1)}),t.timeout||4e3)}}},X=K,Y=(n("c25a"),Object(o["a"])(X,B,G,!1,null,"141d7bf2",null)),Q=Y.exports,V={install:function(t){Object.defineProperty(t.prototype,"$notify",{get:function(){return Q.methods.notify}}),t.component("notifications",Q)}};function Z(){return localStorage.token&&null!=localStorage.token&&"null"!==localStorage.token}function tt(){return new Promise(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Z()){t.next=2;break}return t.abrupt("return",n("no token"));case 2:return t.next=4,fetch("/validateToken",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:localStorage.token})});case 4:if(a=t.sent,200==a.status){t.next=8;break}return delete localStorage.token,t.abrupt("return",n("invalid token"));case 8:return t.next=10,a.json();case 10:a=t.sent,a.token&&(r=j.a.decode(a.token),localStorage.token=a.token,e(r));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}function et(){return nt.apply(this,arguments)}function nt(){return nt=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,tt();case 3:if(e=t.sent,!e){t.next=8;break}return t.next=7,ajax("/stats");case 7:e.stats=t.sent;case 8:r["a"].prototype.$user=e,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),r["a"].prototype.$user=null;case 14:new r["a"]({router:H,render:function(t){return t(u)}}).$mount("#app");case 15:case"end":return t.stop()}}),t,null,[[0,11]])}))),nt.apply(this,arguments)}r["a"].config.productionTip=!1,r["a"].use(V),window.ajax=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var a,r,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:"GET",t.next=3,fetch(e,{method:a.toUpperCase(),headers:{"Content-Type":"application/json",Authorization:localStorage.token},body:JSON.stringify(n)});case 3:if(r=t.sent,!r.redirected){t.next=7;break}return window.location=r.url,t.abrupt("return");case 7:if(200!=r.status){t.next=12;break}return t.next=10,r.json();case 10:return r=t.sent,t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),et()},"5ee2":function(t,e,n){},"76f3":function(t,e,n){},"8f2f":function(t,e,n){t.exports=n.p+"img/slideshow-3.96e9ca43.jpg"},"93b0":function(t,e,n){t.exports=n.p+"img/header-iphone.f30fe8cd.png"},"9d3d":function(t,e,n){},aae4:function(t,e,n){t.exports=n.p+"img/post-image-01.94c8842e.jpg"},aeca:function(t,e,n){"use strict";var a=n("520f"),r=n.n(a);r.a},b0c9:function(t,e,n){t.exports=n.p+"img/slideshow-2.96e9ca43.jpg"},b7ac:function(t,e,n){var a={"./slideshow-1.jpg":"27ab","./slideshow-2.jpg":"b0c9","./slideshow-3.jpg":"8f2f"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="b7ac"},baaf:function(t,e,n){"use strict";var a=n("3f36"),r=n.n(a);r.a},c25a:function(t,e,n){"use strict";var a=n("76f3"),r=n.n(a);r.a},dec9:function(t,e,n){},e009:function(t,e,n){},ffae:function(t,e,n){"use strict";var a=n("5ee2"),r=n.n(a);r.a}});
//# sourceMappingURL=app.4072d556.js.map