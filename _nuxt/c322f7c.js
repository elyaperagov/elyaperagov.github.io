(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{260:function(t,e,r){"use strict";r.r(e);var n=r(251),o=(r(252),{name:"Process",components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-process-next",prevEl:".swiper-process-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}},pagination:{el:".swiper-process-pagination",clickable:!0}}}},props:{process:Object},computed:{isTablet:function(){if(void 0!==this.$app)return this.$app.isTablet}}}),c=r(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.process?r("section",{staticClass:"process"},[r("div",{staticClass:"container"},[r("div",{staticClass:"process__inner"},[r("div",{staticClass:"process__image"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.process.image,expression:"process.image"}],attrs:{alt:t.process.title}})]),t._v(" "),r("div",{staticClass:"process__texts"},[r("h2",{domProps:{innerHTML:t._s(t.process.title)}}),t._v(" "),t._l(t.process.texts,(function(e,n){return r("div",{key:n,staticClass:"process__text"},[e.title?r("b",{domProps:{innerHTML:t._s(e.title)}}):t._e(),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.text)}})])}))],2)]),t._v(" "),t.isTablet?r("swiper",{staticClass:"process__items",attrs:{options:t.swiperOptions}},[t._l(t.process.items,(function(e,i){return r("swiper-slide",{key:i,staticClass:"process__item"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),r("div",{staticClass:"process__item-texts"},[r("h4",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.text)}})])])})),t._v(" "),r("div",{staticClass:"swiper-pagination swiper-process-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),r("button",{staticClass:"button button--swiper swiper-button-next swiper-process-next",attrs:{slot:"button-next"},slot:"button-next"},[r("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),r("button",{staticClass:"button button--swiper swiper-button-prev swiper-process-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#chevron"}})])])],2):r("div",{staticClass:"process__items"},t._l(t.process.items,(function(e,i){return r("div",{key:i,staticClass:"process__item"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),r("div",{staticClass:"process__item-texts"},[r("h4",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.text)}})])])})),0)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);