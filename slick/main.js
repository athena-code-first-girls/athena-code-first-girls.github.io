$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.title').offset().top }, 'slow');
     return false;
   });
 });
