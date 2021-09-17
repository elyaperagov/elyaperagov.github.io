(window.webpackJsonp=window.webpackJsonp||[]).push([[31,9],{255:function(t,e,n){"use strict";n.r(e);var c=n(6),o=(n(40),n(36),n(42),{name:"Contacts",data:function(){return{scrollReady:!1,scriptReady:!1,map:{},placemark_collections:{},placemark_list:[]}},computed:{data:function(){return this.$store.state.data.contacts}},methods:{scrollAnimation:function(){var div=document.getElementById("contacts");if(div){var t=div.getBoundingClientRect().top+(window.scrollY-1e3),e=document.querySelector(".contacts__details--active").querySelectorAll(".contacts__detail");window.scrollY>=t&&e.forEach((function(t){var e=document.documentElement.clientHeight-t.offsetHeight;t.getBoundingClientRect().top<e||t.getBoundingClientRect().top<document.documentElement.clientHeight/1.5?t.classList.add("is-active"):t.classList.remove("is-active")}))}},toggle:function(i){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var details;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("toggleCities",i);case 2:details=document.querySelector(".contacts__details--active"),details.querySelectorAll(".contacts__detail").forEach((function(t){t.classList.contains("is-active")&&t.classList.remove("is-active")})),t.scrollAnimation();case 6:case"end":return e.stop()}}),e)})))()},changeCoordinates:function(i){this.toggle(i),this.chooseDealer(i)},chooseDealer:function(i){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map.setBounds(t.placemark_list[i].geometry.getBounds(),{checkZoomRange:!0});case 2:t.map.getZoom()>10&&t.map.setZoom(15),t.placemark_list[i].events.fire("click"),t.scrollTo("map");case 5:case"end":return e.stop()}}),e)})))()},mapInit:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.map=new ymaps.Map("map",{center:[59.878476,30.258199],zoom:15,controls:["zoomControl"],zoomMargin:[20]}),n=new ymaps.GeoObjectCollection,e.next=4,t.$store.state.data.contacts.dealers.forEach((function(e,i,c){var o=new ymaps.Placemark(e.coordinates,{hintContent:e.address},{iconLayout:"default#image",iconImageHref:"/img/maps-icon.svg",iconImageSize:[100,100]});t.placemark_list.push(o),n.add(o)}));case 4:t.placemark_collections=n,t.map.geoObjects.add(n);case 6:case"end":return e.stop()}}),e)})))()},startMap:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,script;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.scrollAnimation(),n=document.getElementById("header").getBoundingClientRect().top+window.scrollY,window.scrollY>=n&&!t.scriptReady&&(t.scriptReady=!0,(script=document.createElement("script")).setAttribute("src","https://api-maps.yandex.ru/2.1/?apikey=af6195c2-2a0a-4de5-b46e-effca647b921&lang=ru_RU"),document.head.appendChild(script)),t.scrollReady||"undefined"==typeof ymaps){e.next=7;break}return t.scrollReady=!0,e.next=7,ymaps.ready(t.mapInit);case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){window.addEventListener("scroll",this.startMap)}}),r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("section",{staticClass:"contacts",attrs:{id:"contacts"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"contacts__inner"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"contacts__info"},[n("div",{staticClass:"contacts__cities"},t._l(t.data.cities,(function(e,i){return n("p",{key:i,staticClass:"contacts__city",class:{"contacts__city--active":e.active},on:{click:function(e){return t.changeCoordinates(i)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0),t._v(" "),t._l(t.data.contacts,(function(e,c){return n("div",{key:c,staticClass:"contacts__details",class:{"contacts__details--active":e.active}},t._l(e.details,(function(e,c){return n("div",{key:c,staticClass:"contacts__detail"},[n("p",{staticClass:"contacts__detail-title"},[t._v(t._s(e.title))]),t._v(" "),"phone"===e.type?[n("a",{staticClass:"contacts__detail-phone",attrs:{href:"tel:"+e.text}},[t._v(t._s(e.text))])]:t._e(),t._v(" "),"email"===e.type?[n("a",{staticClass:"contacts__detail-email",attrs:{href:"mailto:"+e.text}},[t._v(t._s(e.text))])]:t._e(),t._v(" "),"address"===e.type?[n("span",{staticClass:"contacts__detail-address"},[t._v(t._s(e.text))])]:t._e(),t._v(" "),"schedule"===e.type?[n("span",{staticClass:"contacts__detail-schedule"},[t._v(t._s(e.text))])]:t._e()],2)})),0)}))],2)])]),t._v(" "),n("div",{ref:"map",attrs:{id:"map"}})]):t._e()}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var c={name:"contacts",computed:{}},o=n(13),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Contacts")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:n(255).default})}}]);