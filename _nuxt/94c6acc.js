(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{274:function(t,e,n){"use strict";n.r(e);n(36),n(53);var o=n(251),r=(n(252),{name:"Why",components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-why-next",prevEl:".swiper-why-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}},pagination:{el:".swiper-why-pagination",clickable:!0}}}},methods:{scrollAnimation:function(){var div=document.getElementById("why");if(div){var t=div.getBoundingClientRect().top+(window.scrollY-1e3),e=document.querySelectorAll(".why__item"),title=document.querySelector(".why__title-text");window.scrollY>=t&&e.forEach((function(t){setTimeout((function(){var e=document.documentElement.clientHeight-t.offsetHeight;t.getBoundingClientRect().top<e||t.getBoundingClientRect().top<document.documentElement.clientHeight/1.5?(t.classList.add("is-active"),title.classList.add("is-active")):(t.classList.remove("is-active"),title.classList.remove("is-active"))}))}),500)}}},computed:{data:function(){return this.$store.state.data.why},isTablet:function(){if(void 0!==this.$app)return this.$app.isTablet}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollAnimation()}))}}),l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"why",attrs:{id:"why"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"why__inner"},[n("div",{staticClass:"why__title"},[n("h2",{staticClass:"why__title-text",domProps:{innerHTML:t._s(t.data.title)}})]),t._v(" "),t.isTablet?n("swiper",{staticClass:"why__list tablet-show",attrs:{options:t.swiperOptions}},[t._l(t.data.reasons,(function(e,i){return n("swiper-slide",{key:i,staticClass:"why__item"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.text)}})])})),t._v(" "),n("div",{staticClass:"swiper-pagination swiper-why-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-next swiper-why-next",attrs:{slot:"button-next"},slot:"button-next"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-prev swiper-why-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])])],2):n("ul",{staticClass:"why__list desktop-show"},t._l(t.data.reasons,(function(e,i){return n("li",{key:i,staticClass:"why__item"},[n("svg",{staticClass:"icon",attrs:{width:"40",height:"40","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.text)}})])})),0)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);