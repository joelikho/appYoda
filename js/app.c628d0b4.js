(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],p=0,h=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"1a73":function(t,e,n){"use strict";var r=n("c27c"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"YodaBot logo",src:n("df7c")}}),r("YodaBot")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yoda"},[n("h1",[t._v("Welcome to YodaBot")]),n("input",{attrs:{type:"button",id:"history",value:"History"},on:{click:function(e){t.show=!t.show}}}),t.show?n("div",{attrs:{id:"history_chat"}},[0!=t.history_chat.length?n("div",{staticClass:"chat"},[n("ul",t._l(t.history_chat,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1)]):n("div",[n("label",[t._v("No history chat")])])]):t._e(),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3"},[n("div",{staticClass:"container-chat"},[n("div",{staticClass:"divForm"},[n("div",[t.messages.length>0?n("ul",t._l(t.messages,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()},input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{on:{click:function(e){return t.search()}}},[t._v("Send")]),n("div",[t._v(" "+t._s(t.writting)+" ")])])])])])])])])},o=[],u=(n("4160"),n("498a"),n("159b"),n("bc3a")),c=n.n(u),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" "+t._s(t.msg.who)+":"+t._s(t.msg.text)+" ")])},p=[],h={props:{msg:{type:Object,required:!0}}},f=h,d=n("2877"),y=Object(d["a"])(f,l,p,!1,null,null,null),v=y.exports,g="You",m="Yoda",_={components:{ListMessages:v},data:function(){return{query:"",writting:"",apiKey:"",show:!1,messages:[{who:m,text:"Ask me anything"}],history_chat:[]}},methods:{search:function(){var t=this;this.writting="writting...";var e=this.query.trim();""!=e&&(this.addMessage(g,e),c.a.get("functions/ajaxGetPeticion.php",{params:{query:this.query,method:"search",auth:this.apiKey}}).then((function(e){return e.data.answers.forEach((function(e){t.addMessage(m,e.message)}))}))),this.writting="",this.query=""},addMessage:function(t,e){this.messages.push({who:t,text:e})},getAuth:function(){var t=this;c.a.post("functions/ajaxGetAuth.php",{params:{auth:this.apiKey}}).then((function(e){return t.apiKey=e.data}))},getHistory:function(){var t=this;c.a.post("functions/ajaxGetHistory.php",{params:{auth:this.apiKey}}).then((function(e){""!=e.data&&e.data.forEach((function(e){t.history_chat.push({who:e.user,text:e.message})}))})).then(this.getAuth)}},mounted:function(){this.getHistory()}},b=_,w=(n("1a73"),Object(d["a"])(b,i,o,!1,null,"f88409a6",null)),x=w.exports,j={name:"App",components:{YodaBot:x}},O=j,k=(n("034f"),Object(d["a"])(O,s,a,!1,null,null,null)),q=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,n){},c27c:function(t,e,n){},df7c:function(t,e,n){t.exports=n.p+"img/minyoda.17989081.png"}});
//# sourceMappingURL=app.c628d0b4.js.map