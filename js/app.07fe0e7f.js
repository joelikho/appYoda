(function(t){function e(e){for(var r,a,i=e[0],u=e[1],c=e[2],d=0,h=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"YodaBot logo",src:n("df7c")}}),r("YodaBot")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yoda"},[n("h1",[t._v("Welcome to YodaBot")]),n("input",{attrs:{type:"button",id:"history",value:"History"},on:{click:function(e){t.show=!t.show}}}),t.show?n("div",{attrs:{id:"history_chat"}},[0!=t.history_chat.length?n("div",{staticClass:"chat"},[n("ul",t._l(t.history_chat,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1)]):n("div",[n("label",[t._v("No history chat")])])]):t._e(),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3"},[n("div",{staticClass:"container-chat"},[n("div",{staticClass:"divForm"},[n("div",[t.messages.length>0?n("ul",t._l(t.messages,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()},input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{on:{click:function(e){return t.search()}}},[t._v("Send")]),n("div",[t._v(" "+t._s(t.writting)+" ")])])])])])])])])},i=[],u=(n("4160"),n("caad"),n("2532"),n("498a"),n("159b"),n("bc3a")),c=n.n(u),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" "+t._s(t.msg.who)+":"+t._s(t.msg.text)+" ")])},d=[],h={props:{msg:{type:Object,required:!0}}},p=h,f=n("2877"),y=Object(f["a"])(p,l,d,!1,null,null,null),g=y.exports,v="You",m="Yoda",b={components:{ListMessages:g},data:function(){return{query:"",writting:"",apiKey:"",countNotFound:0,show:!1,messages:[{who:m,text:"Ask me anything"}],history_chat:[]}},methods:{search:function(){var t=this;this.writting="writting...";var e=this.query.trim(),n="search";""!=e&&(this.countNotFound>=2?(this.countNotFound=0,n="characters"):e.includes("force")&&(n="force"),this.addMessage(v,e),c.a.get("functions/ajaxGetPeticion.php",{params:{query:this.query,method:n,auth:this.apiKey}}).then((function(e){return e.data.answers.forEach((function(e){(e.message.includes("I'm sorry")||e.message.includes("I've had a look")||e.message.includes("Sorry"))&&(t.countNotFound+=1),t.addMessage(m,e.message)}))}))),this.writting="",this.query=""},addMessage:function(t,e){this.messages.push({who:t,text:e})},getAuth:function(){var t=this;c.a.post("functions/ajaxGetAuth.php",{params:{auth:this.apiKey}}).then((function(e){return t.apiKey=e.data}))},getHistory:function(){var t=this;c.a.post("functions/ajaxGetHistory.php",{params:{auth:this.apiKey}}).then((function(e){""!=e.data&&e.data.forEach((function(e){t.history_chat.push({who:e.user,text:e.message})}))})).then(this.getAuth)}},mounted:function(){this.getHistory()}},_=b,w=(n("b5b3"),Object(f["a"])(_,a,i,!1,null,"3c2ffbbc",null)),x=w.exports,j={name:"App",components:{YodaBot:x}},O=j,k=(n("034f"),Object(f["a"])(O,s,o,!1,null,null,null)),q=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,n){},b5b3:function(t,e,n){"use strict";var r=n("ddde"),s=n.n(r);s.a},ddde:function(t,e,n){},df7c:function(t,e,n){t.exports=n.p+"img/minyoda.17989081.png"}});
//# sourceMappingURL=app.07fe0e7f.js.map