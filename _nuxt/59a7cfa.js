(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{258:function(t,e,r){"use strict";r.r(e);var n=r(251),o=(r(252),{name:"Projects",data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-projects-next",prevEl:".swiper-projects-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}},pagination:{el:".swiper-projects-pagination",clickable:!0}}}},components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},directives:{swiper:n.directive},computed:{data:function(){return this.$store.state.data.projects}}}),c=r(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("section",{staticClass:"projects"},[r("div",{staticClass:"container"},[r("h2",{domProps:{innerHTML:t._s(t.data.title)}}),t._v(" "),r("swiper",{staticClass:"projects__items",attrs:{options:t.swiperOptions}},[t._l(t.data.projects,(function(e,i){return r("swiper-slide",{key:i,staticClass:"projects__slide"},[r("div",{staticClass:"projects__item"},[r("div",{staticClass:"projects__item-image"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"project.img"}],attrs:{alt:e.alt}})]),t._v(" "),r("div",{staticClass:"projects__content"},[r("div",{staticClass:"projects__counter"},[r("b",{domProps:{innerHTML:t._s("0"+(i+1))}}),t._v("/\n              "),r("b",{domProps:{innerHTML:t._s("0"+t.data.projects.length)}})]),t._v(" "),r("h4",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("p",{staticClass:"projects__text",domProps:{innerHTML:t._s(e.text)}})])])])})),t._v(" "),r("div",{staticClass:"swiper-pagination swiper-projects-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),r("button",{staticClass:"button button--swiper swiper-button-next swiper-projects-next",attrs:{slot:"button-next"},slot:"button-next"},[r("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),r("button",{staticClass:"button button--swiper swiper-button-prev swiper-projects-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#chevron"}})])])],2)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);