(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff12fe16"],{2532:function(t,e,a){"use strict";var s=a("23e7"),r=a("5a34"),n=a("1d80"),i=a("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(n(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,a){var s=a("861d"),r=a("c6b6"),n=a("b622"),i=n("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},"5a34":function(t,e,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),n=a("e8b5"),i=a("861d"),c=a("7b0b"),o=a("50c4"),d=a("8418"),u=a("65f0"),l=a("1dde"),p=a("b622"),v=a("2d00"),f=p("isConcatSpreadable"),h=9007199254740991,w="Maximum allowed index exceeded",_=v>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=l("concat"),g=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:n(t)},x=!_||!m;s({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,s,r,n,i=c(this),l=u(i,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(n=-1===e?i:arguments[e],g(n)){if(r=o(n.length),p+r>h)throw TypeError(w);for(a=0;a<r;a++,p++)a in n&&d(l,p,n[a])}else{if(p>=h)throw TypeError(w);d(l,p++,n)}return l.length=p,l}})},ab13:function(t,e,a){var s=a("b622"),r=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(s){}}return!1}},c22a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("appStats"),a("h2",{staticClass:"text-center"},[t._v(t._s(t.view)+" applications")]),a("table",{staticClass:"table text-center"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Username")]),"Pending"==t.view?[a("th",{attrs:{scope:"col"}},[t._v("Time Applied")]),a("th",{attrs:{scope:"col"}})]:t._e(),"Pending"!=t.view?a("th",[t._v(t._s(t.view)+" By")]):t._e()],2)]),a("tbody",[0==t.apps.length?a("tr",[a("td",[t._v(" No applications ")])]):t._e(),t._l(t.apps,(function(e,s){return a("tr",{key:s,attrs:{scope:"row"}},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.username))]),"Pending"==t.view?[a("td",[t._v(t._s(new Date(e.submittedAt).toLocaleString()))]),a("td",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"app/"+e._id}},[t._v("Review")])],1)]:t._e(),"Pending"!=t.view?a("td",[t._v(" "+t._s(e.reviewedBy)+" ")]):t._e()],2)})),t.noMore?t._e():a("tr",[a("td",{attrs:{colspan:"10"}},[a("button",{staticClass:"btn btn-info",on:{click:t.loadMore}},[t._v("Load More")])])])],2)])],1)},r=[],n=(a("99af"),a("4160"),a("caad"),a("2532"),a("159b"),a("96cf"),a("1da1")),i=a("d50e"),c={components:{appStats:i["a"]},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.query.v,a&&t.views.includes(a)&&(t.view=a),e.next=4,ajax("/admin?apps=".concat(t.view));case 4:s=e.sent,r=s.apps,t.apps=r;case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{views:["Pending","Accepted","Denied"],view:"Pending",apps:[],noMore:!1}},methods:{loadMore:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ajax("/admin?apps=".concat(t.view,"&skip=").concat(t.apps.length));case 2:a=e.sent,s=a.apps,s.forEach((function(e){t.apps.push(e)})),0==s.length&&(t.noMore=!0);case 6:case"end":return e.stop()}}),e)})))()}},watch:{"$route.query":function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.noMore=!1,e=this.$route.query.v,e&&this.views.includes(e)&&(this.view=e),t.next=5,ajax("/admin?apps=".concat(this.view));case 5:a=t.sent,s=a.apps,this.apps=s;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},o=c,d=a("2877"),u=Object(d["a"])(o,s,r,!1,null,null,null);e["default"]=u.exports},caad:function(t,e,a){"use strict";var s=a("23e7"),r=a("4d64").includes,n=a("44d2"),i=a("ae40"),c=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!c},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d50e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[null!=t.stats.users?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("router-link",{staticClass:"card text-light",attrs:{to:"/ucp/admin"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Registered Players")]),a("h1",{staticClass:"card-text"},[t._v(t._s(t.stats.users)+" "),a("i",{staticClass:"icon fa fa-users"})])])])],1),a("div",{staticClass:"col-sm-3"},[a("router-link",{staticClass:"card text-light blue",attrs:{to:"/ucp/admin/apps?v=Pending"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Pending Applications")]),a("h1",{staticClass:"card-text"},[t._v(t._s(t.stats.apps)+" "),a("i",{staticClass:"icon fa fa-clock"})])])])],1),a("div",{staticClass:"col-sm-3"},[a("router-link",{staticClass:"card text-light green",attrs:{to:"/ucp/admin/apps?v=Accepted"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Accepted Applications")]),a("h1",{staticClass:"card-text"},[t._v(t._s(t.stats.acceptedApps)+" "),a("i",{staticClass:"icon fa fa-check"})])])])],1),a("div",{staticClass:"col-sm-3"},[a("router-link",{staticClass:"card text-light red",attrs:{to:"/ucp/admin/apps?v=Denied"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Denied Applications")]),a("h1",{staticClass:"card-text"},[t._v(t._s(t.stats.deniedApps)+" "),a("i",{staticClass:"icon fa fa-times"})])])])],1)]):t._e()])},r=[],n=(a("96cf"),a("1da1")),i={created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ajax("/admin?stats=1");case 2:a=e.sent,t.stats=a.stats;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{stats:{}}}},c=i,o=(a("ff8d"),a("2877")),d=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=d.exports},d724:function(t,e,a){},ff8d:function(t,e,a){"use strict";var s=a("d724"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-ff12fe16.153d56c9.js.map