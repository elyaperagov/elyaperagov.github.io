(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{271:function(t,e,r){"use strict";r.r(e);var c={name:"Price",computed:{data:function(){return this.$store.state.data.price}}},n=r(13),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("section",{staticClass:"price"},[r("div",{staticClass:"container"},[r("div",{staticClass:"price__inner"},t._l(t.data.price_items,(function(e,i){return r("div",{key:i,staticClass:"price__item"},[r("div",{staticClass:"price__image"},[r("img",{directives:[{name:"img",rawName:"v-img"}],attrs:{src:e.img,alt:e.text}})]),t._v(" "),r("h4",{domProps:{innerHTML:t._s(e.text)}})])})),0)]),t._v(" "),r("div",{staticClass:"price__table-content"},[r("div",{staticClass:"container"},[r("h3",{domProps:{innerHTML:t._s(t.data.table.title)}}),t._v(" "),r("h4",{domProps:{innerHTML:t._s(t.data.table.subtitle)}}),t._v(" "),r("div",{staticClass:"price__table-container"},[r("table",{staticClass:"price__table-body"},[r("tr",{staticClass:"price__header"},t._l(t.data.table.cells,(function(e,c){return r("th",{key:c,domProps:{innerHTML:t._s(e.title)}})})),0),t._v(" "),t._l(t.data.table.rows,(function(e,c){return r("tr",{key:c,staticClass:"price__row"},[r("td",{staticClass:"price__cell price__cell--service",domProps:{innerHTML:t._s(e.service)}}),t._v(" "),r("td",{staticClass:"price__cell price__cell--measure",domProps:{innerHTML:t._s(e.measure)}}),t._v(" "),r("td",{staticClass:"price__cell price__cell--price",domProps:{innerHTML:t._s(e.price)}})])}))],2)])])]),t._v(" "),r("div",{staticClass:"price__bottom-texts"},[r("div",{staticClass:"container"},t._l(t.data.table.bottom_texts,(function(e,c){return r("p",{key:c,domProps:{innerHTML:t._s(e.text)}})})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);