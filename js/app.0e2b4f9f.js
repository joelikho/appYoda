(function(t){function e(e){for(var r,o,i=e[0],u=e[1],c=e[2],h=0,d=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},2220:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"YodaBot logo",src:n("df7c")}}),r("YodaBot")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yoda"},[n("h1",[t._v("Welcome to YodaBot")]),n("input",{attrs:{type:"button",id:"history",value:"History"},on:{click:function(e){t.show=!t.show}}}),t.show?n("div",{attrs:{id:"history_chat"}},[0!=t.history_chat.length?n("div",{staticClass:"chat"},[n("ul",t._l(t.history_chat,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1)]):n("div",[n("label",[t._v("No history chat")])])]):t._e(),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3"},[n("div",{staticClass:"container-chat"},[n("div",{staticClass:"divForm"},[n("div",[t.messages.length>0?n("ul",t._l(t.messages,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()},input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{on:{click:function(e){return t.search()}}},[t._v("Send")]),n("div",[t._v(" "+t._s(t.writting)+" ")])])])])])])])])},i=[],u=(n("4160"),n("caad"),n("ac1f"),n("2532"),n("841c"),n("498a"),n("159b"),n("bc3a")),c=n.n(u),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" "+t._s(t.msg.who)+":"+t._s(t.msg.text)+" ")])},h=[],d={props:{msg:{type:Object,required:!0}}},f=d,p=n("2877"),y=Object(p["a"])(f,l,h,!1,null,null,null),g=y.exports,v="You",m="Yoda",b={components:{ListMessages:g},data:function(){return{query:"",writting:"",apiKey:"",countNotFound:0,show:!1,messages:[{who:m,text:"Ask me anything"}],history_chat:[]}},methods:{search:function(){var t=this;this.writting="writting...";var e=this.query.trim(),n="search";""!=e&&(this.addMessage(v,e),e.includes("force")?n="force":e.includes("characters")&&(n="characters"),c.a.get("functions/ajaxGetPeticion.php",{params:{query:this.query,method:n,auth:this.apiKey}}).then((function(e){return e.data.answers.forEach((function(e){e.message.includes("I'm sorry")||e.message.includes("nothing I can find")?t.countNotFound++:t.countNotFound=0,t.addMessage(m,e.message)}))}))),this.countNotFound>=2&&(this.query="characters",this.search()),this.writting="",this.query=""},addMessage:function(t,e){this.messages.push({who:t,text:e})},getAuth:function(){var t=this;c.a.post("functions/ajaxGetAuth.php",{params:{auth:this.apiKey}}).then((function(e){return t.apiKey=e.data}))},getHistory:function(){var t=this;c.a.post("functions/ajaxGetHistory.php",{params:{auth:this.apiKey}}).then((function(e){""!=e.data&&e.data.forEach((function(e){t.history_chat.push({who:e.user,text:e.message})}))})).then(this.getAuth)}},mounted:function(){this.getHistory()}},_=b,w=(n("b09f"),Object(p["a"])(_,o,i,!1,null,"0a479b7f",null)),x=w.exports,j={name:"App",components:{YodaBot:x}},O=j,k=(n("034f"),Object(p["a"])(O,s,a,!1,null,null,null)),q=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,n){},b09f:function(t,e,n){"use strict";var r=n("2220"),s=n.n(r);s.a},df7c:function(t,e,n){t.exports=n.p+"img/minyoda.17989081.png"}});
//# sourceMappingURL=app.0e2b4f9f.js.map