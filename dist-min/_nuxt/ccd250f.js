(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{238:function(e){e.exports=JSON.parse('[{"id":1,"name":"Imagem1","image":"https://picsum.photos/200/300?random=45","link":""},{"id":2,"name":"Imagem1","image":"https://picsum.photos/200/300?random=51","link":""},{"id":3,"name":"Imagem1","image":"https://picsum.photos/200/300?random=14","link":""},{"id":4,"name":"Imagem1","image":"https://picsum.photos/200/300?random=15","link":""},{"id":5,"name":"Imagem1","image":"https://picsum.photos/200/300?random=21","link":""},{"id":6,"name":"Imagem1","image":"https://picsum.photos/200/300?random=1","link":""},{"id":7,"name":"Imagem1","image":"https://picsum.photos/200/300?random=64","link":""}]')},245:function(e,t,n){"use strict";n.r(t);var m=n(230),r=(n(231),n(238)),o={components:{Swiper:m.Swiper,SwiperSlide:m.SwiperSlide},directives:{swiper:m.directive},data:function(){return{itens:r,swiperOption:{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{1440:{slidesPerView:6,spaceBetween:30},1200:{slidesPerView:4,spaceBetween:30},768:{slidesPerView:3,spaceBetween:20},576:{slidesPerView:2},320:{slidesPerView:1}}}}}},l=n(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" circleBanner"},[n("swiper",{ref:"mySwiper",attrs:{options:e.swiperOption}},e._l(e.itens,(function(e){return n("swiper-slide",{key:e.id},[n("div",{staticClass:"item"},[n("img",{staticClass:"item-img",attrs:{src:e.image,alt:e.name}})])])})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);