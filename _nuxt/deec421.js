(window.webpackJsonp=window.webpackJsonp||[]).push([[34,3,8,9,12,13,17,20,21,22,26],{251:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(40),n(41),{name:"Form",data:function(){return{form_success:!1,form:{name:{value:"",placeholder:"Ваше имя",type:"text",error:""},phone:{value:"",label:"Телефон",type:"tel",error:"",placeholder:"Номер телефона"}}}},computed:{data:function(){return this.$store.state.data.form}},methods:{showMessage:function(){this.$store.commit("showMessage")},hideMessage:function(){this.$store.commit("hideMessage")},formSend:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$validate(t.form)){e.next=2;break}return e.abrupt("return");case 2:for(n in data=new FormData,t.form)void 0!==t.form[n].value&&data.append(n,t.form[n].value);setTimeout((function(){t.hideMessage()}),3e3),t.showMessage();case 6:case"end":return e.stop()}}),e)})))()}},components:{},created:function(){}}),c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"form"},[n("p",{staticClass:"form__title",domProps:{innerHTML:t._s(t.data.form_title)}}),t._v(" "),n("form",{attrs:{action:"",method:"post"},on:{submit:function(e){return e.preventDefault(),t.formSend()}}},[n("div",{staticClass:"form__inputs"},[n("div",{staticClass:"form__field form__field--name"},["checkbox"===t.form.name.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:t.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(t.form.name.value)?t._i(t.form.name.value,null)>-1:t.form.name.value},on:{change:function(e){var n=t.form.name.value,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&t.$set(t.form.name,"value",n.concat([null])):c>-1&&t.$set(t.form.name,"value",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.form.name,"value",o)}}}):"radio"===t.form.name.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:t.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:"radio"},domProps:{checked:t._q(t.form.name.value,null)},on:{change:function(e){return t.$set(t.form.name,"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:t.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:t.form.name.type},domProps:{value:t.form.name.value},on:{input:function(e){e.target.composing||t.$set(t.form.name,"value",e.target.value)}}}),t._v(" "),n("label",{staticClass:"form__label form__label--name",attrs:{for:"name"}},[t._v("\n          "+t._s(t.form.name.placeholder))]),t._v(" "),t.form.name.error?[n("p",{staticClass:"form__error"},[t._v(t._s(t.form.name.error))])]:t._e()],2),t._v(" "),n("div",{staticClass:"form__field form__field--phone"},["checkbox"===t.form.phone.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:t.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(t.form.phone.value)?t._i(t.form.phone.value,null)>-1:t.form.phone.value},on:{change:function(e){var n=t.form.phone.value,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&t.$set(t.form.phone,"value",n.concat([null])):c>-1&&t.$set(t.form.phone,"value",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.form.phone,"value",o)}}}):"radio"===t.form.phone.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:t.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:"radio"},domProps:{checked:t._q(t.form.phone.value,null)},on:{change:function(e){return t.$set(t.form.phone,"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:t.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:t.form.phone.type},domProps:{value:t.form.phone.value},on:{input:function(e){e.target.composing||t.$set(t.form.phone,"value",e.target.value)}}}),t._v(" "),n("label",{staticClass:"form__label form__label--phone",attrs:{for:"phone"}},[t._v("\n          "+t._s(t.form.phone.placeholder)+"\n        ")]),t._v(" "),t.form.phone.error?[n("p",{staticClass:"form__error"},[t._v(t._s(t.form.phone.error))])]:t._e()],2),t._v(" "),n("button",{staticClass:"button button--red",attrs:{type:"submit",name:"submit"},domProps:{innerHTML:t._s(t.data.form_button)},on:{click:function(e){return e.preventDefault(),t.formSend()}}})])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Form:n(251).default})},254:function(t,e,n){"use strict";n.r(e);var r={name:"InProgress",computed:{data:function(){return this.$store.state.data.progress}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"in-progress"},[n("div",{staticClass:"in-progress__top"},[n("p",[t._v(t._s(t.data.text))])]),t._v(" "),n("div",{staticClass:"in-progress__bottom"},t._l(t.data.items,(function(e,i){return n("div",{key:i,staticClass:"in-progress__bottom-item"},[n("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "),n("p",[t._v(" "+t._s(e.abbr)+" ")])])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(40),n(36),n(42),{name:"Contacts",data:function(){return{scrollReady:!1,scriptReady:!1,map:{},placemark_collections:{},placemark_list:[]}},computed:{data:function(){return this.$store.state.data.contacts}},methods:{scrollAnimation:function(){var div=document.getElementById("contacts");if(div){var t=div.getBoundingClientRect().top+(window.scrollY-1e3),e=document.querySelector(".contacts__details--active").querySelectorAll(".contacts__detail");window.scrollY>=t&&e.forEach((function(t){var e=document.documentElement.clientHeight-t.offsetHeight;t.getBoundingClientRect().top<e||t.getBoundingClientRect().top<document.documentElement.clientHeight/1.5?t.classList.add("is-active"):t.classList.remove("is-active")}))}},toggle:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var details;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("toggleCities",i);case 2:details=document.querySelector(".contacts__details--active"),details.querySelectorAll(".contacts__detail").forEach((function(t){t.classList.contains("is-active")&&t.classList.remove("is-active")})),t.scrollAnimation();case 6:case"end":return e.stop()}}),e)})))()},changeCoordinates:function(i){this.toggle(i),this.chooseDealer(i)},setScriptAdded:function(){this.$store.commit("setScriptAdded")},chooseDealer:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map.setBounds(t.placemark_list[i].geometry.getBounds(),{checkZoomRange:!0});case 2:t.map.getZoom()>10&&t.map.setZoom(15),t.placemark_list[i].events.fire("click");case 4:case"end":return e.stop()}}),e)})))()},mapInit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.map=new ymaps.Map("map",{center:[59.878476,30.258199],zoom:15,controls:["zoomControl"],zoomMargin:[20]}),n=new ymaps.GeoObjectCollection,e.next=4,t.$store.state.data.contacts.dealers.forEach((function(e,i,r){var o=new ymaps.Placemark(e.coordinates,{hintContent:e.address},{iconLayout:"default#image",iconImageHref:"/img/maps-icon.svg",iconImageSize:[100,100]});t.placemark_list.push(o),n.add(o)}));case 4:t.placemark_collections=n,t.map.geoObjects.add(n);case 6:case"end":return e.stop()}}),e)})))()},startMap:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,script;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/contacts"!==$nuxt.$route.path&&t.scrollAnimation(),n=document.getElementById("header").getBoundingClientRect().top+window.scrollY,window.scrollY>=n&&!t.scriptReady&&!t.$store.state.isScriptAdded&&(t.scriptReady=!0,(script=document.createElement("script")).setAttribute("src","https://api-maps.yandex.ru/2.1/?apikey=af6195c2-2a0a-4de5-b46e-effca647b921&lang=ru_RU"),document.head.appendChild(script),t.setScriptAdded()),t.scrollReady||"undefined"==typeof ymaps){e.next=7;break}return t.scrollReady=!0,e.next=7,ymaps.ready(t.mapInit);case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){window.addEventListener("scroll",this.startMap),"/contacts"===$nuxt.$route.path&&this.scrollAnimation()}}),c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"contacts",attrs:{id:"contacts"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"contacts__inner"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"contacts__info"},[n("div",{staticClass:"contacts__cities"},t._l(t.data.cities,(function(e,i){return n("p",{key:i,staticClass:"contacts__city",class:{"contacts__city--active":e.active},on:{click:function(e){return t.changeCoordinates(i)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0),t._v(" "),t._l(t.data.contacts,(function(e,r){return n("div",{key:r,staticClass:"contacts__details",class:{"contacts__details--active":e.active}},t._l(e.details,(function(e,r){return n("div",{key:r,staticClass:"contacts__detail"},[n("p",{staticClass:"contacts__detail-title"},[t._v(t._s(e.title))]),t._v(" "),"phone"===e.type?[n("a",{staticClass:"contacts__detail-phone",attrs:{href:"tel:"+e.text}},[t._v(t._s(e.text))])]:t._e(),t._v(" "),"email"===e.type?[n("a",{staticClass:"contacts__detail-email",attrs:{href:"mailto:"+e.text}},[t._v(t._s(e.text))])]:t._e(),t._v(" "),"address"===e.type?[n("span",{staticClass:"contacts__detail-address"},[t._v(t._s(e.text))])]:t._e(),t._v(" "),"schedule"===e.type?[n("span",{staticClass:"contacts__detail-schedule"},[t._v(t._s(e.text))])]:t._e()],2)})),0)}))],2)])]),t._v(" "),n("div",{ref:"map",attrs:{id:"map"}})]):t._e()}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n.r(e);var r={name:"Consultation",components:{Form:n(251).default},props:{consultation:Object},computed:{}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.consultation?n("section",{staticClass:"consultation"},[n("div",{staticClass:"container"},[n("div",{staticClass:"consultation__content"},[n("div",{staticClass:"consultation__inner"},[n("h2",[t._v(t._s(t.consultation.title))]),t._v(" "),n("p",[t._v(t._s(t.consultation.text))])]),t._v(" "),n("Form",{staticClass:"form--consultation"})],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Form:n(251).default})},257:function(t,e,n){"use strict";n.r(e);var r=n(252),o=(n(253),n(251)),c=n(254),l={name:"Banner",components:{Form:o.default,InProgress:c.default,Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-advantages-next",prevEl:".swiper-advantages-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}}}}},props:{banner:Object},computed:{isMobile:function(){if(void 0!==this.$app)return this.$app.isMobile}}},d=n(13),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.banner?n("div",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("div",{staticClass:"banner__body"},[n("div",{staticClass:"banner__content"},[n("h1",[t._v(t._s(t.banner.title))]),t._v(" "),t.isMobile||"/"!==t.$nuxt.$route.path?t._e():[n("ul",{staticClass:"banner__advantages"},t._l(t.banner.advantages,(function(e,i){return n("li",{key:i,staticClass:"banner__advantage"},[n("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",{staticClass:"banner__advantage-text"},[t._v("\n                  "+t._s(e.text)+"\n                ")])])})),0)],t._v(" "),t.isMobile||"/"===t.$nuxt.$route.path?t._e():[n("ul",{staticClass:"banner__advantages"},t._l(t.banner.advantages,(function(e,i){return n("li",{key:i,staticClass:"banner__advantage"},[n("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",{staticClass:"banner__advantage-text"},[t._v("\n                  "+t._s(e.text)+"\n                ")])])})),0)],t._v(" "),t.isMobile&&"/"!==t.$nuxt.$route.path?[n("ul",{staticClass:"banner__advantages"},t._l(t.banner.advantages,(function(e,i){return n("li",{key:i,staticClass:"banner__advantage"},[n("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",{staticClass:"banner__advantage-text"},[t._v("\n                  "+t._s(e.text)+"\n                ")])])})),0)]:t._e(),t._v(" "),t.isMobile&&"/"===t.$nuxt.$route.path?n("swiper",{staticClass:"banner__advantages",attrs:{options:t.swiperOptions}},[t._l(t.banner.advantages,(function(e,i){return n("swiper-slide",{key:i,staticClass:"banner__advantage"},[n("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",{staticClass:"banner__advantage-text"},[t._v("\n                "+t._s(e.text)+"\n              ")])])})),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-next swiper-advantages-next",attrs:{slot:"button-next"},slot:"button-next"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-prev swiper-advantages-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])])],2):t._e(),t._v(" "),"/"===t.$nuxt.$route.path?n("InProgress"):t._e()],2),t._v(" "),n("Form")],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InProgress:n(254).default,Form:n(251).default})},258:function(t,e,n){"use strict";n.r(e);n(36);var r=n(252),o=(n(253),{name:"Scheme",components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-scheme-next",prevEl:".swiper-scheme-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}},pagination:{el:".swiper-scheme-pagination",clickable:!0}}}},methods:{scrollAnimation:function(){var div=document.getElementById("scheme");if(div){var t=div.getBoundingClientRect().top+(window.scrollY-500),e=document.querySelectorAll(".scheme__point");window.scrollY>=t&&e.forEach((function(t){t.classList.contains("is-active")||t.classList.add("is-active")}))}}},computed:{data:function(){return this.$store.state.data.scheme},isTablet:function(){if(void 0!==this.$app)return this.$app.isTablet}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollAnimation()}))}}),c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"scheme",attrs:{id:"scheme"}},[n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),t.isTablet?n("swiper",{staticClass:"scheme__points tablet-show",attrs:{options:t.swiperOptions}},[t._l(t.data.points,(function(e,i){return n("swiper-slide",{key:i,staticClass:"scheme__point"},[n("p",{staticClass:"scheme__point-number"},[t._v(t._s("0"+(i+1)))]),t._v(" "),n("svg",{staticClass:"icon",attrs:{width:"60",height:"60","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("div",{staticClass:"scheme__texts"},[n("p",{staticClass:"scheme__point-title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"scheme__point-text"},[t._v(" "+t._s(e.text)+" ")])])])})),t._v(" "),n("div",{staticClass:"swiper-pagination swiper-scheme-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-next swiper-scheme-next",attrs:{slot:"button-next"},slot:"button-next"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-prev swiper-scheme-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])])],2):n("div",{staticClass:"scheme__points desktop-show"},t._l(t.data.points,(function(e,i){return n("div",{key:i,staticClass:"scheme__point"},[n("p",{staticClass:"scheme__point-number"},[t._v(t._s("0"+(i+1)))]),t._v(" "),n("svg",{staticClass:"icon",attrs:{width:"60",height:"60","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("div",{staticClass:"scheme__texts"},[n("p",{staticClass:"scheme__point-title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"scheme__point-text"},[t._v(" "+t._s(e.text)+" ")])])])})),0)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r=n(252),o=(n(253),{name:"Projects",data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-projects-next",prevEl:".swiper-projects-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}},pagination:{el:".swiper-projects-pagination",clickable:!0}}}},components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},directives:{swiper:r.directive},computed:{data:function(){return this.$store.state.data.projects}}}),c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"projects"},[n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("swiper",{staticClass:"projects__items",attrs:{options:t.swiperOptions}},[t._l(t.data.projects,(function(e,i){return n("swiper-slide",{key:i,staticClass:"projects__slide"},[n("div",{staticClass:"projects__item"},[n("div",{staticClass:"projects__item-image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"project.img"}],attrs:{alt:e.alt}})]),t._v(" "),n("div",{staticClass:"projects__content"},[n("div",{staticClass:"projects__counter"},[n("b",[t._v(" "+t._s("0"+(i+1))+" ")]),t._v("/\n              "),n("b",[t._v(" "+t._s("0"+t.data.projects.length)+" ")])]),t._v(" "),n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"projects__text"},[t._v(t._s(e.text))])])])])})),t._v(" "),n("div",{staticClass:"swiper-pagination swiper-projects-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-next swiper-projects-next",attrs:{slot:"button-next"},slot:"button-next"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),n("button",{staticClass:"button button--swiper swiper-button-prev swiper-projects-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])])],2)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var r=n(252),o=(n(253),{name:"Reviews",data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-reviews-next",prevEl:".swiper-reviews-prev"},breakpoints:{1024:{slidesPerView:4,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},320:{slidesPerView:2,spaceBetween:20}}}}},components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},methods:{toggleActiveImage:function(i){this.$store.commit("toggleActiveImage",i)},toggleActiveImageReverse:function(i){this.$store.commit("toggleActiveImageReverse",i)}},directives:{swiper:r.directive},computed:{data:function(){return this.$store.state.data.reviews}}}),c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"reviews"},[n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"reviews__container"},[n("swiper",{staticClass:"reviews__items",attrs:{options:t.swiperOptions}},t._l(t.data.reviews,(function(e,i){return n("swiper-slide",{key:i,staticClass:"reviews__slide"},[n("div",{directives:[{name:"img",rawName:"v-img",value:{src:e.img},expression:"{ src: review.img }"}],staticClass:"reviews__overlay"},[n("svg",{staticClass:"icon",attrs:{width:"40",height:"40","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#plus"}})])]),t._v(" "),n("div",{staticClass:"reviews__item-image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"review.img"}],attrs:{alt:e.alt}})])])})),1),t._v(" "),n("div",{staticClass:"reviews__buttons"},[n("button",{staticClass:"button button--swiper swiper-reviews-prev swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])]),t._v(" "),n("button",{staticClass:"button button--swiper swiper-reviews-next swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[n("svg",{staticClass:"icon",attrs:{width:"12",height:"18","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#chevron"}})])])])],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var r={name:"Transportations",computed:{data:function(){return this.$store.state.data.transportation}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"transportation"},[n("div",{staticClass:"container"},[n("h2",[t._v("\n      "+t._s(t.data.title)+"\n    ")]),t._v(" "),n("ul",{staticClass:"transportation__list"},t._l(t.data.items,(function(e,i){return n("li",{key:i,staticClass:"transportation__item"},[n("svg",{staticClass:"icon",attrs:{width:"60",height:"60","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("b",[t._v(t._s(e.title))]),t._v(" "),e.text?n("p",[t._v(t._s(e.text))]):t._e()])})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r={name:"OurServices",computed:{data:function(){return this.$store.state.data.our_services}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"our-services"},[n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("ul",{staticClass:"our-services__list"},t._l(t.data.services,(function(e,i){return n("li",{key:i,staticClass:"our-services__item"},[n("svg",{staticClass:"icon",attrs:{width:"60",height:"60","aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("p",[t._v(t._s(e.text))])])})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r={components:{Transportations:n(265).default},name:"service_one",computed:{custom_service:function(){return this.$store.state.data.banners.custom_service},consultation_container:function(){return this.$store.state.data.consultation.container_service},process_container:function(){return this.$store.state.data.process.container_service}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Banner",{staticClass:"banner--custom-service",attrs:{banner:t.custom_service}}),t._v(" "),n("OurServices"),t._v(" "),n("Scheme",{staticClass:"scheme--custom-service"}),t._v(" "),n("Consultation",{staticClass:"consultation--custom-one",attrs:{consultation:t.consultation_container}}),t._v(" "),n("Projects"),t._v(" "),n("Reviews"),t._v(" "),n("Transportation"),t._v(" "),n("Consultation",{staticClass:"consultation--custom-two",attrs:{consultation:t.consultation_container}}),t._v(" "),n("Contacts")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Banner:n(257).default,OurServices:n(271).default,Scheme:n(258).default,Consultation:n(256).default,Projects:n(259).default,Reviews:n(260).default,Transportation:n(265).default,Contacts:n(255).default})}}]);