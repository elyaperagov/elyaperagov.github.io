(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{277:function(t,e,n){"use strict";n.r(e);var c={name:"Services",computed:{data:function(){return this.$store.state.data.services}},methods:{turnOverlayOn:function(t){console.log(t)},turnOverlayOff:function(t){console.log(t)}}},r=n(15),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"services"},[n("div",{staticClass:"container"},[n("div",{staticClass:"services__inner"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"services__list"},t._l(t.data.services,(function(e,i){return n("div",{key:i,staticClass:"services__item"},[n("div",{staticClass:"services__overlay"}),t._v(" "),n("img",{attrs:{src:e.img,alt:e.title}}),t._v(" "),n("div",{staticClass:"services__item-inner"},[n("b",[t._v(" "+t._s("0"+(i+1))+" ")]),t._v(" "),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",[t._v(t._s(e.title))]),t._v(" "),n("span",[t._v(t._s(e.text))])])])})),0)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);