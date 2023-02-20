$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    items : 1,
    singleItem : true,
    slideSpeed : 200,
    mouseDrag: false,
    touchDrag: false,
    navigation: false,
    pagination:false,
    //afterAction : syncPosition,
    responsiveRefreshRate : 200,
    transitionStyle : "fade"
  });

  sync2.owlCarousel({
    items : 12,
    mouseDrag: false,
    responsiveRefreshRate : 10,
    responsive: {

      0: {
        items: 6,
        margin: 5
      },
      576: {
        items: 10,
        margin: 20
      },
      1024: {
        items: 12,
        margin: 10
      }

    }
  });

  $('.owl-buttons').append('<div class="clear"></div>');

  var flag = false;
  var slides = sync1.owlCarousel({
    margin: 10,
    items: 1,
    nav:true
  }).on('change.owl.carousel', function(e) {
    if (e.namespace && e.property.name === 'position' && !flag) {
      flag = true;	//thumbs.to(e.relatedTarget.relative(e.property.value), 300, true);
      flag = false;
    }
  }).data('owl.carousel');
  var thumbs = sync2.owlCarousel({
    items:4,
    nav:false
  }).on('click', '.item', function(e) {
    e.preventDefault(); sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
  }).on('change.owl.carousel', function(e) {
    if (e.namespace && e.property.name === 'position' && !flag) {
    }
  }).data('owl.carousel');

  var patientsActiveSlide = $('.slider.patients .here').index();
  var patientSlider = $('.slider.patients');
  patientSlider.owlCarousel({
    items : 6, //10 items above 1000px browser width
    margin: 15,
    nav: true,
    startPosition: patientsActiveSlide - 1,
    dots: true,
    slideBy: 3,
    navText: '',
    responsive: {
      0: {
        items: 2,
        margin: 5
      },
      576: {
        items: 3,
        margin: 20
      },
      1024: {
        items: 4,
        margin: 20
      }
    }
  });

  $('.btn-prev').on('click', function(e){
    e.preventDefault();
    sync1.trigger('prev.owl.carousel', [300]);
    if($('.thumbnails .here').prev().length != 0){
      $('.thumbnails .here').removeClass('here').prev().addClass('here');
    }
  });

  $('.btn-next').on('click', function(e){
    e.preventDefault();
    sync1.trigger('next.owl.carousel', [300]);
    if($('.thumbnails .here').next().length != 0){
      $('.thumbnails .here').removeClass('here').next().addClass('here');
    }
  });

  //add class here to first thumbnail, and then add/remove on clicks
  $('.thumbnails .owl-item').eq(0).addClass('here');

  $('body').on('click', '.thumbnails .owl-item', function(){
    $('.thumbnails .owl-item.here').removeClass('here');
    $(this).addClass('here');
  });

});