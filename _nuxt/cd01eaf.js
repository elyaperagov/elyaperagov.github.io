(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,11],{264:function(t,e,o){"use strict";o.r(e);var n,c=o(31),l=(n={name:"Controls",data:function(){return{}},props:{},components:{},methods:{toggleShowFilters:function(){this.$store.commit("toggleShowFilters")},chooseAttribute:function(t){this.$store.commit("chooseAttribute",t)}},mounted:function(){}},Object(c.a)(n,"components",{}),Object(c.a)(n,"computed",{data:function(){return this.$store.state.data.filters},isMobile:function(){if(void 0!==this.$app)return this.$app.isMobile}}),n),r=o(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.data?o("section",{staticClass:"controls"},[t.isMobile?t._e():[o("div",{staticClass:"controls__tabs-wrapper"},t._l(t.data.filters,(function(filter,i){return o("div",{key:"A-"+i},t._l(filter.items,(function(e,i){return o("div",{key:"A-"+i,staticClass:"controls__tabs",on:{click:function(o){return o.preventDefault(),t.chooseAttribute(e)}}},[e.checked?o("div",{staticClass:"controls__tab"},[o("p",[t._v(t._s(e.text))])]):t._e()])})),0)})),0)],t._v(" "),t.isMobile?t._e():t._l(t.data.filters,(function(filter,i){return o("div",{key:i,staticClass:"controls__body"},[o("h3",[t._v(t._s(filter.categoriesTitle))]),t._v(" "),o("div",{staticClass:"controls__list"},t._l(filter.items,(function(e,n){return o("div",{key:n,staticClass:"controls__item",on:{click:function(o){return o.preventDefault(),t.chooseAttribute(e)}}},[o("input",{staticClass:"controls__checkbox visually-hidden",attrs:{type:"checkbox",id:e.checkboxId,name:"checkbox",required:""}}),t._v(" "),o("label",{staticClass:"controls__label",class:{checked:e.checked},attrs:{for:e.checkboxId}},[o("p",[t._v(t._s(e.text))])])])})),0)])})),t._v(" "),t.isMobile?[o("button",{staticClass:"button button--controls",on:{click:function(e){return t.toggleShowFilters()}}},[t._v("\n      "+t._s(t.data.title)+"\n      "),o("svg",{staticClass:"icon",attrs:{width:"24",height:"24","aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":t.data.icon}})])]),t._v(" "),o("slide-up-down",{attrs:{active:t.data.showOptions}},[t.isMobile?t._l(t.data.filters,(function(filter,i){return o("div",{key:"A-"+i,staticClass:"controls__tabs-wrapper"},t._l(filter.items,(function(e,i){return o("div",{key:"A-"+i,staticClass:"controls__tabs"},[e.checked?o("div",{staticClass:"controls__tab"},[o("p",[t._v(t._s(e.text))])]):t._e()])})),0)})):t._e(),t._v(" "),t._l(t.data.filters,(function(filter,i){return o("div",{key:i,staticClass:"controls__body"},[o("h3",[t._v(t._s(filter.categoriesTitle))]),t._v(" "),o("div",{staticClass:"controls__list"},t._l(filter.items,(function(e,n){return o("div",{key:n,staticClass:"controls__item",on:{click:function(o){return o.preventDefault(),t.chooseAttribute(e)}}},[o("input",{staticClass:"controls__checkbox visually-hidden",attrs:{type:"checkbox",id:e.checkboxId,name:"checkbox",required:""}}),t._v(" "),o("label",{staticClass:"controls__label",class:{checked:e.checked},attrs:{for:e.checkboxId}},[o("p",[t._v(t._s(e.text))])])])})),0)])}))],2)]:t._e()],2):t._e()}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,o){"use strict";o.r(e);var n={name:"BlogPages",computed:{data:function(){return this.$store.state.data.posts}}},c=o(13),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.data?o("section",{staticClass:"blog__posts"},t._l(t.data,(function(e,i){return o("div",{key:i,staticClass:"blog__post"},[o("nuxt-link",{attrs:{to:e.link}},[o("div",{staticClass:"blog__image"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],attrs:{alt:e.title}})]),t._v(" "),o("div",{staticClass:"blog__texts"},[o("div",{staticClass:"blog__content"},[o("h4",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("p",{staticClass:"blog__text",domProps:{innerHTML:t._s(e.text)}})]),t._v(" "),o("div",{staticClass:"blog__details"},[o("span",{staticClass:"blog__author",domProps:{innerHTML:t._s(e.author)}}),t._v(" "),o("span",{staticClass:"blog__date",domProps:{innerHTML:t._s(e.date)}})])])])],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,o){"use strict";o.r(e);var n,c=o(31),l=(n={name:"Blog",components:{Controls:o(264).default},data:function(){return{}},props:{}},Object(c.a)(n,"components",{}),Object(c.a)(n,"methods",{}),Object(c.a)(n,"mounted",(function(){})),Object(c.a)(n,"components",{}),n),r=o(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"blog"},[o("div",{staticClass:"container"},[o("div",{staticClass:"blog__inner"},[o("client-only",[o("Controls")],1),t._v(" "),o("BlogPages")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Controls:o(264).default,BlogPages:o(265).default})}}]);