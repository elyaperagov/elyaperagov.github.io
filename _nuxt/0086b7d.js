(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12,13],{252:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(40),r(41),{name:"Form",data:function(){return{form_success:!1,form:{name:{value:"",placeholder:"Ваше имя",type:"text",error:""},phone:{value:"",label:"Телефон",type:"tel",error:"",placeholder:"Номер телефона"}}}},computed:{data:function(){return this.$store.state.data.form}},methods:{showMessage:function(){this.$store.commit("showMessage")},hideMessage:function(){this.$store.commit("hideMessage")},formSend:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$validate(e.form)){t.next=2;break}return t.abrupt("return");case 2:for(r in data=new FormData,e.form)void 0!==e.form[r].value&&data.append(r,e.form[r].value);setTimeout((function(){e.hideMessage()}),3e3),e.showMessage();case 6:case"end":return t.stop()}}),t)})))()}},components:{},created:function(){}}),l=r(9),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.data?r("div",{staticClass:"form"},[r("p",{staticClass:"form__title",domProps:{innerHTML:e._s(e.data.form_title)}}),e._v(" "),r("form",{attrs:{action:"",method:"post"},on:{submit:function(t){return t.preventDefault(),e.formSend()}}},[r("div",{staticClass:"form__inputs"},[r("div",{staticClass:"form__field form__field--name"},["checkbox"===e.form.name.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:e.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(e.form.name.value)?e._i(e.form.name.value,null)>-1:e.form.name.value},on:{change:function(t){var r=e.form.name.value,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.form.name,"value",r.concat([null])):l>-1&&e.$set(e.form.name,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.form.name,"value",o)}}}):"radio"===e.form.name.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:e.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:"radio"},domProps:{checked:e._q(e.form.name.value,null)},on:{change:function(t){return e.$set(e.form.name,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:e.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:e.form.name.type},domProps:{value:e.form.name.value},on:{input:function(t){t.target.composing||e.$set(e.form.name,"value",t.target.value)}}}),e._v(" "),r("label",{staticClass:"form__label form__label--name",attrs:{for:"name"}},[e._v("\n          "+e._s(e.form.name.placeholder))]),e._v(" "),e.form.name.error?[r("p",{staticClass:"form__error"},[e._v(e._s(e.form.name.error))])]:e._e()],2),e._v(" "),r("div",{staticClass:"form__field form__field--phone"},["checkbox"===e.form.phone.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:e.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(e.form.phone.value)?e._i(e.form.phone.value,null)>-1:e.form.phone.value},on:{change:function(t){var r=e.form.phone.value,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.form.phone,"value",r.concat([null])):l>-1&&e.$set(e.form.phone,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.form.phone,"value",o)}}}):"radio"===e.form.phone.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:e.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:"radio"},domProps:{checked:e._q(e.form.phone.value,null)},on:{change:function(t){return e.$set(e.form.phone,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:e.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:e.form.phone.type},domProps:{value:e.form.phone.value},on:{input:function(t){t.target.composing||e.$set(e.form.phone,"value",t.target.value)}}}),e._v(" "),r("label",{staticClass:"form__label form__label--phone",attrs:{for:"phone"}},[e._v("\n          "+e._s(e.form.phone.placeholder)+"\n        ")]),e._v(" "),e.form.phone.error?[r("p",{staticClass:"form__error"},[e._v(e._s(e.form.phone.error))])]:e._e()],2),e._v(" "),r("button",{staticClass:"button button--red",attrs:{type:"submit",name:"submit"},domProps:{innerHTML:e._s(e.data.form_button)},on:{click:function(t){return t.preventDefault(),e.formSend()}}})])])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Form:r(252).default})},255:function(e,t,r){"use strict";r.r(t);var n={name:"InProgress",computed:{data:function(){return this.$store.state.data.progress}}},o=r(9),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.data?r("section",{staticClass:"in-progress"},[r("div",{staticClass:"in-progress__top"},[r("p",[e._v(e._s(e.data.text))])]),e._v(" "),r("div",{staticClass:"in-progress__bottom"},e._l(e.data.items,(function(t,i){return r("div",{key:i,staticClass:"in-progress__bottom-item"},[r("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.icon}})]),e._v(" "),r("p",[e._v(" "+e._s(t.quantity)+" ")]),e._v(" "),r("p",[e._v(" "+e._s(t.abbr)+" ")])])})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},258:function(e,t,r){"use strict";r.r(t);var n=r(253),o=(r(254),r(252)),l=r(255),m={name:"Banner",components:{Form:o.default,InProgress:l.default,Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{swiperOptions:{navigation:{nextEl:".swiper-advantages-next",prevEl:".swiper-advantages-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20}}}}},props:{banner:Object},computed:{isMobile:function(){if(void 0!==this.$app)return this.$app.isMobile}}},c=r(9),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.banner?r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("div",{staticClass:"banner__body"},[r("div",{staticClass:"banner__content"},[r("h1",[e._v(e._s(e.banner.title))]),e._v(" "),e.isMobile||"/"!==e.$nuxt.$route.path?e._e():[r("ul",{staticClass:"banner__advantages mobile-hide"},e._l(e.banner.advantages,(function(t,i){return r("li",{key:i,staticClass:"banner__advantage"},[r("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.icon}})]),e._v(" "),r("p",{staticClass:"banner__advantage-text"},[e._v("\n                  "+e._s(t.text)+"\n                ")])])})),0)],e._v(" "),e.isMobile||"/"===e.$nuxt.$route.path?e._e():[r("ul",{staticClass:"banner__advantages mobile-hide"},e._l(e.banner.advantages,(function(t,i){return r("li",{key:i,staticClass:"banner__advantage"},[r("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.icon}})]),e._v(" "),r("p",{staticClass:"banner__advantage-text"},[e._v("\n                  "+e._s(t.text)+"\n                ")])])})),0)],e._v(" "),e.isMobile&&"/"!==e.$nuxt.$route.path?[r("ul",{staticClass:"banner__advantages mobile-show"},e._l(e.banner.advantages,(function(t,i){return r("li",{key:i,staticClass:"banner__advantage"},[r("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.icon}})]),e._v(" "),r("p",{staticClass:"banner__advantage-text"},[e._v("\n                  "+e._s(t.text)+"\n                ")])])})),0)]:e._e(),e._v(" "),e.isMobile&&"/"===e.$nuxt.$route.path?r("swiper",{staticClass:"banner__advantages mobile-show",attrs:{options:e.swiperOptions}},[e._l(e.banner.advantages,(function(t,i){return r("swiper-slide",{key:i,staticClass:"banner__advantage"},[r("svg",{staticClass:"icon",attrs:{width:"30",height:"30","aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.icon}})]),e._v(" "),r("p",{staticClass:"banner__advantage-text"},[e._v("\n                "+e._s(t.text)+"\n              ")])])})),e._v(" "),r("button",{staticClass:"button button--swiper swiper-button-next swiper-advantages-next",attrs:{slot:"button-next"},slot:"button-next"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#chevron"}})])]),e._v(" "),r("button",{staticClass:"button button--swiper swiper-button-prev swiper-advantages-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#chevron"}})])])],2):e._e(),e._v(" "),"/"===e.$nuxt.$route.path?r("InProgress"):e._e()],2),e._v(" "),r("Form")],1)])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{InProgress:r(255).default,Form:r(252).default})}}]);