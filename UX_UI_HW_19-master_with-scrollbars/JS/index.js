function fade() {
    $(".preloader").fadeOut("slow");
    }
    setTimeout(fade, 1500); 

    $("flexContainer").ready(function(){
        $("container");
    })

// Hides class 'accessibility' when page loads
$(document).ready(function() {
    $(".accessibility").hide();
    $(".collaboration").hide();
});

// Fades div with class '.accessibility' in when user has scrolled down more 550 pixels
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 350) {
    $(".accessibility").fadeIn();
    $(".collaboration").fadeIn();
    // $(".collaboration").fadeIn();
  } else {
    // $(".accessibility").fadeOut();
    // $(".collaboration").fadeOut();
  }
});