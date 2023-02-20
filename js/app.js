$(function () {
   'use strict'
   $('.banner-slider').slick({
      dots:true,
      dotsClass: 'banner_dots',
      prevArrow: '<i class="banner_slider_arrow fas fa-arrow-left"><i/>',
      nextArrow: '<i class="banner_slider_arrow fas fa-arrow-right"><i/>',
      
   });
   $('.gallery-filter-container').filterizr();

   $('#gallery_selector li').on('click',function() {
   $(this).addClass('active');
   $(this).siblings().removeClass('active')
   })
})
AOS.init();