(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"YodaBot logo",src:n("df7c")}}),r("YodaBot")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yoda"},[n("h1",[t._v("Welcome to YodaBot")]),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3"},[n("div",{staticClass:"container-chat"},[n("div",{staticClass:"divForm"},[n("div",[t.messages.length?n("ul",t._l(t.messages,(function(t){return n("ListMessages",{key:t.id,attrs:{msg:t}})})),1):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{on:{click:function(e){return t.search()}}},[t._v("Send")]),n("div",[t._v(" "+t._s(t.writting)+" ")])])])])])])])])},i=[],u=(n("498a"),n("bc3a")),c=n.n(u),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" "+t._s(t.msg.who)+":"+t._s(t.msg.text)+" ")])},p=[],d={props:{msg:{type:Object,required:!0}}},f=d,h=n("2877"),v=Object(h["a"])(f,l,p,!1,null,null,null),g=v.exports,m="You",y="Yoda",b={components:{ListMessages:g},data:function(){return{query:"",writting:"",apiKey:"",messages:[{who:y,text:"Ask me anything"}]}},methods:{search:function(){var t=this;this.writting="writting...";var e=this.query.trim();""!=e&&(this.addMessage(m,e),c.a.get("functions/ajax.php",{params:{query:this.query,method:"search",auth:this.apiKey}}).then((function(e){return t.addMessage(y,e.data)}))),this.writting="",this.query=""},addMessage:function(t,e){this.messages.push({who:t,text:e})},getAuth:function(){var t=this;c.a.post("functions/ajaxGetAuth.php",{params:{query:this.query}}).then((function(e){return t.apiKey=e.data}))}},mounted:function(){this.getAuth()}},w=b,_=(n("64de"),Object(h["a"])(w,s,i,!1,null,"a9f2a89c",null)),x=_.exports,j={name:"App",components:{YodaBot:x}},O=j,q=(n("034f"),Object(h["a"])(O,a,o,!1,null,null,null)),M=q.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},"64de":function(t,e,n){"use strict";var r=n("e77a"),a=n.n(r);a.a},"85ec":function(t,e,n){},df7c:function(t,e,n){t.exports=n.p+"img/minyoda.17989081.png"},e77a:function(t,e,n){}});
//# sourceMappingURL=app.34c08c6a.js.map