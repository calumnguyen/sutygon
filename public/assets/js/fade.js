$(document).ready(function() {
   $(".light-logo").hide();
   
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 120) {
        $(".light-logo").show();
      } else {
        $(".light-logo").hide();
      }
    
    });

    $("#fp-nav ul").attr("class","navdot");

   $('.navdot li:eq(1)').click(function(){
    $('.light-logo').show();
    alert("hello");
   });

  })

