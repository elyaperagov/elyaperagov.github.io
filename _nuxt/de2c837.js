(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{278:function(t,e,n){"use strict";n.r(e);var o={name:"TextInfo",methods:{toggleShowMore:function(){this.$store.commit("toggleShowMore")}},computed:{data:function(){return this.$store.state.data.texts},isMobile:function(){if(void 0!==this.$app)return this.$app.isMobile}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"text-info"},[t.isMobile?[n("div",{staticClass:"text-info__wrapper mobile-show"},[n("div",{staticClass:"text-info__showmore",class:{"text-info__showmore--opened":t.data.texts[t.data.texts.length-1].active}},[n("p",{on:{click:function(e){return t.toggleShowMore()}}},[t._v("\n        "+t._s(t.data.showMore)+"\n        "),n("svg",{staticClass:"icon",attrs:{width:"10",height:"7","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#arrow-red"}})])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"text-info__columns"},[n("p",[t._v("\n          "+t._s(t.data.texts[0].text)+"\n        ")]),t._v(" "),n("slide-up-down",{attrs:{active:t.data.texts[t.data.texts.length-1].active}},[n("p",[t._v("\n            "+t._s(t.data.texts[t.data.texts.length-1].text)+"\n          ")])])],1)])])]:[n("div",{staticClass:"text-info__wrapper mobile-hide"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-info__columns"},t._l(t.data.texts,(function(text,i){return n("p",{key:i},[t._v("\n          "+t._s(text.text)+"\n        ")])})),0)])])]],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);