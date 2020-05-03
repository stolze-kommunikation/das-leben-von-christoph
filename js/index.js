$(document).ready(function(e) {

////////////////////////// SCROLL ICON ////////////////////////// 

$(document).ready(function(){
  var didScroll = false;
  var icon = $(".loader");
  var $window = $(window);
  var $protagonist = $('#protagonist');

  $(window).scroll(function(){
      if (!didScroll) {
        icon.addClass('is-hidden');
      }
      didScroll = true;
      $protagonist.hide().show(0);
  });
});

////////////////////////// INTRO SCROLL FADE KORREKTUR (https://jsfiddle.net/e5qaD/5751/) //////////////////////////

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);

      }

    });

  });

});

////////////////////////// ACCORDION FEIERTAGE ////////////////////////// 

  var allPanels = $('.accordion > dd').hide();
    
    $('.accordion > dt > a').click(function(e) {
    e.preventDefault();  
    var isHidden = $(this).parent().next().is(":hidden");
    allPanels.slideUp();
    if (isHidden) $(this).parent().next().slideDown();
    });

////////////////////////// GEBOTE & GESCHICHTE ////////////////////////// 

  $('a.action').click(function(e){
    e.preventDefault();
    var $id    = $('#' + $(this).attr('data-id'));
    var $layer = $('#' + $(this).attr('data-layer'));
    $('.active').removeClass('active');
    $(this).addClass('active');
    $layer.fadeOut(function () {
      $layer.html($id.html()).fadeIn();
    });
  });
  
  // display the first element
  $('#story').html($('#story1').html());
  $('#gebot').html($('#gebot1').html());

////////////////////////// PARALLAX HIMMEL ////////////////////////// 

  $(function () { // wait for document ready
    var controller = new ScrollMagic.Controller({vertical: true});
    // build tween
    var tween = new TimelineMax()
      .add([
        TweenMax.to("#biervulkan_container", 1, {top: $('#biervulkan_container').position().top-500+'px', ease: Linear.easeNone}),
        TweenMax.to("#fabrik_container", 1, {top: $('#fabrik_container').position().top-600+'px', ease: Linear.easeNone})
      ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#himmel", duration: $('#himmel').height(), offset: 0})
            .setTween(tween)
            .addTo(controller);
  });

////////////////////////// POP UP1 ////////////////////////// 

$("a[href='#popup']").on("click", function() {
  $("#popup").css({"display": "block", "opacity": 1});
});
$("#popup").on("click", function(e) {
  e.preventDefault();
  $("#popup").css({"display": "none", "opacity": 0});
});

////////////////////////// POP UP2 ////////////////////////// 

$("a[href='#popup2']").on("click", function () {
  $("#popup2").css({"display": "block", "opacity": 1});
});
$("#popup2").on("click", function (e) {
  e.preventDefault();
  $("#popup2").css({"display": "none", "opacity": 0});
});

});
