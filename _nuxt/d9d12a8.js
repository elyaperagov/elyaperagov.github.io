(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,18],{263:function(t,e,r){"use strict";r.r(e);var c={name:"Breadcrumbs",data:function(){return{}},props:{breadcrumbs:Object}},n=r(9),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.breadcrumbs?r("section",{staticClass:"breadcrumbs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumbs__inner"},[r("div",{staticClass:"breadcrumbs__list"},t._l(t.breadcrumbs.breadcrumbs,(function(e,b){return r("div",{key:b,staticClass:"breadcrumbs__item"},[r("nuxt-link",{attrs:{to:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),r("span",{staticClass:"breadcrumbs__divider"},[t._v("/")])],1)})),0),t._v(" "),r("h1",{domProps:{innerHTML:t._s(t.breadcrumbs.title)}})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,r){"use strict";r.r(e);var c={name:"Price",computed:{data:function(){return this.$store.state.data.price}}},n=r(9),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("section",{staticClass:"price"},[r("div",{staticClass:"container"},[r("div",{staticClass:"price__inner"},t._l(t.data.price_items,(function(e,i){return r("div",{key:i,staticClass:"price__item"},[r("div",{staticClass:"price__image"},[r("img",{directives:[{name:"img",rawName:"v-img"}],attrs:{src:e.img,alt:e.text}})]),t._v(" "),r("h4",{domProps:{innerHTML:t._s(e.text)}})])})),0)]),t._v(" "),r("div",{staticClass:"price__table-content"},[r("div",{staticClass:"container"},[r("h3",{domProps:{innerHTML:t._s(t.data.table.title)}}),t._v(" "),r("h4",{domProps:{innerHTML:t._s(t.data.table.subtitle)}}),t._v(" "),r("div",{staticClass:"price__table-container"},[r("table",{staticClass:"price__table-body"},[r("tr",{staticClass:"price__header"},t._l(t.data.table.cells,(function(e,c){return r("th",{key:c,domProps:{innerHTML:t._s(e.title)}})})),0),t._v(" "),t._l(t.data.table.rows,(function(e,c){return r("tr",{key:c,staticClass:"price__row"},[r("td",{staticClass:"price__cell price__cell--service",domProps:{innerHTML:t._s(e.service)}}),t._v(" "),r("td",{staticClass:"price__cell price__cell--measure",domProps:{innerHTML:t._s(e.measure)}}),t._v(" "),r("td",{staticClass:"price__cell price__cell--price",domProps:{innerHTML:t._s(e.price)}})])}))],2)])])]),t._v(" "),r("div",{staticClass:"price__bottom-texts"},[r("div",{staticClass:"container"},t._l(t.data.table.bottom_texts,(function(e,c){return r("p",{key:c,domProps:{innerHTML:t._s(e.text)}})})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var c={name:"price",computed:{price_breadcrumbs:function(){return this.$store.state.data.breadcrumbs.price}}},n=r(9),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{breadcrumbs:t.price_breadcrumbs}}),t._v(" "),r("Price")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(263).default,Price:r(273).default})}}]);