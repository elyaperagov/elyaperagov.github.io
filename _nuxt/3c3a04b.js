(window.webpackJsonp=window.webpackJsonp||[]).push([[29,4,6,7,11],{263:function(t,e,n){"use strict";n.r(e);var o={name:"Breadcrumbs",data:function(){return{}},props:{breadcrumbs:Object}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.breadcrumbs?n("section",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumbs__inner"},[n("div",{staticClass:"breadcrumbs__list"},t._l(t.breadcrumbs.breadcrumbs,(function(e,b){return n("div",{key:b,staticClass:"breadcrumbs__item"},[n("nuxt-link",{attrs:{to:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),n("span",{staticClass:"breadcrumbs__divider"},[t._v("/")])],1)})),0),t._v(" "),n("h1",{domProps:{innerHTML:t._s(t.breadcrumbs.title)}})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var o,r=n(31),c=(o={name:"Controls",data:function(){return{}},props:{},components:{},methods:{toggleShowFilters:function(){this.$store.commit("toggleShowFilters")},chooseAttribute:function(t){this.$store.commit("chooseAttribute",t)}},mounted:function(){}},Object(r.a)(o,"components",{}),Object(r.a)(o,"computed",{data:function(){return this.$store.state.data.filters},isMobile:function(){if(void 0!==this.$app)return this.$app.isMobile}}),o),l=n(13),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"controls"},[t.isMobile?t._e():[n("div",{staticClass:"controls__tabs-wrapper"},t._l(t.data.filters,(function(filter,i){return n("div",{key:"A-"+i},t._l(filter.items,(function(e,i){return n("div",{key:"A-"+i,staticClass:"controls__tabs",on:{click:function(n){return n.preventDefault(),t.chooseAttribute(e)}}},[e.checked?n("div",{staticClass:"controls__tab"},[n("p",[t._v(t._s(e.text))])]):t._e()])})),0)})),0)],t._v(" "),t.isMobile?t._e():t._l(t.data.filters,(function(filter,i){return n("div",{key:i,staticClass:"controls__body"},[n("h3",[t._v(t._s(filter.categoriesTitle))]),t._v(" "),n("div",{staticClass:"controls__list"},t._l(filter.items,(function(e,o){return n("div",{key:o,staticClass:"controls__item",on:{click:function(n){return n.preventDefault(),t.chooseAttribute(e)}}},[n("input",{staticClass:"controls__checkbox visually-hidden",attrs:{type:"checkbox",id:e.checkboxId,name:"checkbox",required:""}}),t._v(" "),n("label",{staticClass:"controls__label",class:{checked:e.checked},attrs:{for:e.checkboxId}},[n("p",[t._v(t._s(e.text))])])])})),0)])})),t._v(" "),t.isMobile?[n("button",{staticClass:"button button--controls",on:{click:function(e){return t.toggleShowFilters()}}},[t._v("\n      "+t._s(t.data.title)+"\n      "),n("svg",{staticClass:"icon",attrs:{width:"24",height:"24","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.data.icon}})])]),t._v(" "),n("slide-up-down",{attrs:{active:t.data.showOptions}},[t.isMobile?t._l(t.data.filters,(function(filter,i){return n("div",{key:"A-"+i,staticClass:"controls__tabs-wrapper"},t._l(filter.items,(function(e,i){return n("div",{key:"A-"+i,staticClass:"controls__tabs"},[e.checked?n("div",{staticClass:"controls__tab"},[n("p",[t._v(t._s(e.text))])]):t._e()])})),0)})):t._e(),t._v(" "),t._l(t.data.filters,(function(filter,i){return n("div",{key:i,staticClass:"controls__body"},[n("h3",[t._v(t._s(filter.categoriesTitle))]),t._v(" "),n("div",{staticClass:"controls__list"},t._l(filter.items,(function(e,o){return n("div",{key:o,staticClass:"controls__item",on:{click:function(n){return n.preventDefault(),t.chooseAttribute(e)}}},[n("input",{staticClass:"controls__checkbox visually-hidden",attrs:{type:"checkbox",id:e.checkboxId,name:"checkbox",required:""}}),t._v(" "),n("label",{staticClass:"controls__label",class:{checked:e.checked},attrs:{for:e.checkboxId}},[n("p",[t._v(t._s(e.text))])])])})),0)])}))],2)]:t._e()],2):t._e()}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var o={name:"BlogPages",computed:{data:function(){return this.$store.state.data.posts}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"blog__posts"},t._l(t.data,(function(e,i){return n("div",{key:i,staticClass:"blog__post"},[n("nuxt-link",{attrs:{to:e.link}},[n("div",{staticClass:"blog__image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],attrs:{alt:e.title}})]),t._v(" "),n("div",{staticClass:"blog__texts"},[n("div",{staticClass:"blog__content"},[n("h4",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("p",{staticClass:"blog__text",domProps:{innerHTML:t._s(e.text)}})]),t._v(" "),n("div",{staticClass:"blog__details"},[n("span",{staticClass:"blog__author",domProps:{innerHTML:t._s(e.author)}}),t._v(" "),n("span",{staticClass:"blog__date",domProps:{innerHTML:t._s(e.date)}})])])])],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var o,r=n(31),c=(o={name:"Blog",components:{Controls:n(264).default},data:function(){return{}},props:{}},Object(r.a)(o,"components",{}),Object(r.a)(o,"methods",{}),Object(r.a)(o,"mounted",(function(){})),Object(r.a)(o,"components",{}),o),l=n(13),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog"},[n("div",{staticClass:"container"},[n("div",{staticClass:"blog__inner"},[n("client-only",[n("Controls")],1),t._v(" "),n("BlogPages")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Controls:n(264).default,BlogPages:n(265).default})},283:function(t,e,n){"use strict";n.r(e);var o={name:"blog",computed:{blog_breadcrumbs:function(){return this.$store.state.data.breadcrumbs.blog}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Breadcrumbs",{attrs:{breadcrumbs:t.blog_breadcrumbs}}),t._v(" "),n("Blog")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:n(263).default,Blog:n(269).default})}}]);