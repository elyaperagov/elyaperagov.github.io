(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,15],{263:function(t,e,r){"use strict";r.r(e);var c={name:"Breadcrumbs",data:function(){return{}},props:{breadcrumbs:Object}},n=r(13),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.breadcrumbs?r("section",{staticClass:"breadcrumbs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumbs__inner"},[r("div",{staticClass:"breadcrumbs__list"},t._l(t.breadcrumbs.breadcrumbs,(function(e,b){return r("div",{key:b,staticClass:"breadcrumbs__item"},[r("nuxt-link",{attrs:{to:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),r("span",{staticClass:"breadcrumbs__divider"},[t._v("/")])],1)})),0),t._v(" "),r("h1",{domProps:{innerHTML:t._s(t.breadcrumbs.title)}})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,r){"use strict";r.r(e);var c={name:"OurProjects",computed:{data:function(){return this.$store.state.data.our_projects}}},n=r(13),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("section",{staticClass:"our-projects"},[r("div",{staticClass:"container"},[r("div",{staticClass:"our-projects__items"},t._l(t.data.items,(function(e,i){return r("div",{key:i,staticClass:"our-projects__item"},[r("div",{staticClass:"our-projects__texts"},[r("span",{domProps:{innerHTML:t._s("0"+(i+1))}}),t._v(" "),r("p",{staticClass:"our-projects__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("p",{staticClass:"our-projects__text",domProps:{innerHTML:t._s(e.text)}})]),t._v(" "),r("div",{staticClass:"our-projects__image"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],attrs:{alt:e.title}})])])})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);var c={name:"project",computed:{project_breadcrumbs:function(){return this.$store.state.data.breadcrumbs.project}}},n=r(13),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{breadcrumbs:t.project_breadcrumbs}}),t._v(" "),r("OurProjects")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(263).default,OurProjects:r(273).default})}}]);