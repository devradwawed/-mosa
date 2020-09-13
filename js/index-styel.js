

//  Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    //onScrol
    let onScrollOffset = $("#onScroll").offset().top;
    $(window).scroll(function ( ) {
            let wScroll=  $(window).scrollTop();
            if(wScroll > onScrollOffset ) 
          {
            $("nav").addClass("black")
          }
            else{
            $("nav").removeClass("black")
          }
    })



// Create Hove Function
$('.dropdown-toggle').hover(function() {
  $(this).parent().addClass('show');
  $(this).next(".dropdown-menu").addClass('show')
})
// Create Call Back Function To Mouse Leave function

//Close navbar when click in anywhere in document
$(document).click(function (event) {
  var clickover = $(event.target);
  var is_show = $(".dropdown").hasClass("show");
  if (is_show === true ) {
    $('.dropdown-toggle').click();
  }
});

