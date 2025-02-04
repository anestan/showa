(function($) {

  // Animation
  // -------------------------------------------------------------------------
  ScrollReveal().reveal('.animateTop', { 
    delay: 500,
    duration: 600,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    interval: 100
  });

  ScrollReveal().reveal('.animateDown', { 
    delay: 500,
    duration: 600,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    interval: 100
  });

  
  // Scroll Top
  // -------------------------------------------------------------------------
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      $('.site-header').addClass('stick-header');
    } else {
      $('.site-header').removeClass('stick-header');
    }
  });


  // Maskedinput
  // -------------------------------------------------------------------------
  if ($('input[type="tel"]').length > 0) {
    $('input[type="tel"]').mask('(99) 9999-9999?9').focusout(function(event) {
      var target, phone, element;

      target  = (event.currentTarget) ? event.currentTarget : event.srcElement;
      phone   = target.value.replace(/\D/g, '');
      element = $(target);
      element.unmask();

      if( phone.length > 10) {
        element.mask("(99) 99999-999?9");
      } else {
        element.mask("(99) 9999-9999?9");
      }
    });
  }

})(jQuery);

document.body.addEventListener('touchstart', function () {}, false);
