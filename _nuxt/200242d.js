(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{250:function(e,r,o){"use strict";o.r(r);var n=o(6),t=(o(40),o(53),{name:"Form",data:function(){return{form_success:!1,form:{name:{value:"",placeholder:"Ваше имя",type:"text",error:""},phone:{value:"",label:"Телефон",type:"tel",error:"",placeholder:"Номер телефона"}}}},computed:{data:function(){return this.$store.state.data.form}},methods:{showMessage:function(){this.$store.commit("showMessage")},hideMessage:function(){this.$store.commit("hideMessage")},formSend:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.$validate(e.form)){r.next=2;break}return r.abrupt("return");case 2:for(o in data=new FormData,e.form)void 0!==e.form[o].value&&data.append(o,e.form[o].value);setTimeout((function(){e.hideMessage()}),3e3),e.showMessage();case 6:case"end":return r.stop()}}),r)})))()}},components:{},created:function(){}}),m=o(9),component=Object(m.a)(t,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return e.data?o("div",{staticClass:"form"},[o("p",{staticClass:"form__title",domProps:{innerHTML:e._s(e.data.form_title)}}),e._v(" "),o("form",{attrs:{action:"#",method:"post"},on:{submit:function(r){return r.preventDefault(),e.formSend()}}},[o("div",{staticClass:"form__inputs"},[o("div",{staticClass:"form__field form__field--name"},["checkbox"===e.form.name.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:e.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(e.form.name.value)?e._i(e.form.name.value,null)>-1:e.form.name.value},on:{change:function(r){var o=e.form.name.value,n=r.target,t=!!n.checked;if(Array.isArray(o)){var m=e._i(o,null);n.checked?m<0&&e.$set(e.form.name,"value",o.concat([null])):m>-1&&e.$set(e.form.name,"value",o.slice(0,m).concat(o.slice(m+1)))}else e.$set(e.form.name,"value",t)}}}):"radio"===e.form.name.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:e.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:"radio"},domProps:{checked:e._q(e.form.name.value,null)},on:{change:function(r){return e.$set(e.form.name,"value",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name.value,expression:"form.name.value"}],staticClass:"form__input",class:{error:e.form.name.error},attrs:{id:"name",name:"email",size:"20",placeholder:" ",type:e.form.name.type},domProps:{value:e.form.name.value},on:{input:function(r){r.target.composing||e.$set(e.form.name,"value",r.target.value)}}}),e._v(" "),o("label",{staticClass:"form__label form__label--name",attrs:{for:"name"}},[e._v("\n          "+e._s(e.form.name.placeholder))]),e._v(" "),e.form.name.error?[o("p",{staticClass:"form__error"},[e._v(e._s(e.form.name.error))])]:e._e()],2),e._v(" "),o("div",{staticClass:"form__field form__field--phone"},["checkbox"===e.form.phone.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:e.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(e.form.phone.value)?e._i(e.form.phone.value,null)>-1:e.form.phone.value},on:{change:function(r){var o=e.form.phone.value,n=r.target,t=!!n.checked;if(Array.isArray(o)){var m=e._i(o,null);n.checked?m<0&&e.$set(e.form.phone,"value",o.concat([null])):m>-1&&e.$set(e.form.phone,"value",o.slice(0,m).concat(o.slice(m+1)))}else e.$set(e.form.phone,"value",t)}}}):"radio"===e.form.phone.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:e.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:"radio"},domProps:{checked:e._q(e.form.phone.value,null)},on:{change:function(r){return e.$set(e.form.phone,"value",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:"+# (###) ###-##-##",expression:"'+# (###) ###-##-##'"}],staticClass:"form__input",class:{error:e.form.phone.error},attrs:{id:"phone",name:"phone",size:"20",placeholder:" ",type:e.form.phone.type},domProps:{value:e.form.phone.value},on:{input:function(r){r.target.composing||e.$set(e.form.phone,"value",r.target.value)}}}),e._v(" "),o("label",{staticClass:"form__label form__label--phone",attrs:{for:"phone"}},[e._v("\n          "+e._s(e.form.phone.placeholder)+"\n        ")]),e._v(" "),e.form.phone.error?[o("p",{staticClass:"form__error"},[e._v(e._s(e.form.phone.error))])]:e._e()],2),e._v(" "),o("button",{staticClass:"button button--red",attrs:{type:"submit",name:"submit"},domProps:{innerHTML:e._s(e.data.form_button)},on:{click:function(r){return r.preventDefault(),e.formSend()}}})])])]):e._e()}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Form:o(250).default})}}]);