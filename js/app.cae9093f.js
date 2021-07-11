(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/basic-quiz-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"48d1":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",{staticClass:"title"},[t._v("Math Quiz App test ")]),t.operator?r("OperatorQuiz",{attrs:{operator:t.operator},on:{onBack:t.clearOperator}}):r("OperatorSelector",{on:{changeOperator:t.changeOperator}})],1)},a=[],i=r("1da1"),s=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"operators"},[r("div",{staticClass:"box",on:{click:function(e){return t.$emit("changeOperator","+")}}},[r("p",[t._v("Addition")]),r("p",[t._v("+")])]),r("div",{staticClass:"box",on:{click:function(e){return t.$emit("changeOperator","-")}}},[r("p",[t._v("Subtraction")]),r("p",[t._v("-")])]),r("div",{staticClass:"box",on:{click:function(e){return t.$emit("changeOperator","/")}}},[r("p",[t._v("Division")]),r("p",[t._v("/")])]),r("div",{staticClass:"box",on:{click:function(e){return t.$emit("changeOperator","*")}}},[r("p",[t._v("Multiplication")]),r("p",[t._v("*")])])])}),c=[],u={},p=u,l=r("2877"),f=Object(l["a"])(p,s,c,!1,null,"3ec4f882",null),h=f.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"operator-questions"},[t.isQuizStarted?r("div",{staticClass:"answers"},[r("h2",{staticClass:"question"},[t._v(" "+t._s(t.operandLeft)+t._s(t.operator)+t._s(t.operandRight)+" ")]),t._l(t.answers,(function(e,n){return r("div",{key:n,staticClass:"box",on:{click:function(r){return t.selectAnswer(e)}}},[r("p",[t._v(t._s(e.toFixed(3)))])])})),r("div",{staticClass:"box next",on:{click:t.startQuiz}},[r("p",[t._v("Next")])])],2):r("div",[r("div",{staticClass:"box",on:{click:t.startQuiz}},[r("p",[t._v("Start")])])]),r("div",{staticClass:"box",on:{click:function(e){return t.$emit("onBack")}}},[r("p",[t._v("Back")])])])},v=[],b={props:["operator"],data:function(){return{operandLeft:null,operandRight:null,isQuizStarted:!1,expectedAnswer:null,answers:[]}},methods:{startQuiz:function(){this.isQuizStarted=!0,this.operandLeft=parseInt(13*Math.random()),this.operandRight=parseInt(13*Math.random());var t={"+":function(t,e){return t+e},"-":function(t,e){return t-e},"/":function(t,e){return t/e},"*":function(t,e){return t*e}},e=t[this.operator];this.answers=[],this.answers.push(e(this.operandLeft,this.operandRight+-1)),this.answers.push(e(this.operandLeft,this.operandRight+1)),this.answers.push(e(this.operandLeft,this.operandRight+5)),this.answers.push(e(this.operandLeft,this.operandRight-2));var r=e(this.operandLeft,this.operandRight);this.answers[parseInt(Math.random()*this.answers.length)]=r,this.expectedAnswer=r},selectAnswer:function(t){t!==this.expectedAnswer?alert("Wrong Answer!!!"):this.startQuiz()}}},g=b,_=(r("bc57"),Object(l["a"])(g,d,v,!1,null,null,null)),w=_.exports,O=r("bc3a"),m=r.n(O),x={name:"App",data:function(){return{operator:null}},components:{OperatorSelector:h,OperatorQuiz:w},methods:{changeOperator:function(t){this.operator=t,console.log(this.operator)},clearOperator:function(){this.operator=null}},created:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("object"),t.next=3,m.a.get("http://142.93.102.123:81");case 3:e=t.sent,console.log(e);case 5:case"end":return t.stop()}}),t)})))()}},y=x,k=(r("034f"),Object(l["a"])(y,o,a,!1,null,null,null)),j=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,r){},bc57:function(t,e,r){"use strict";r("48d1")}});
//# sourceMappingURL=app.cae9093f.js.map