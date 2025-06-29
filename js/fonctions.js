$(document).ready(function(){

$('#boutoninfo').on('click', function(){
  $('#informations').fadeToggle();
});

$('.entree').each(function(){
  var rrr = r(1,4);
  if (rrr==4){
    rrr=1;
  }
  $(this).addClass('grid-item--'+rrr);
})

$('.grid').imagesLoaded(function(){
  $('.grid').masonry({
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    gutter:10,
    percentPosition: true
  });
});

$window = $(window);

$window.scroll(function() {
  var scroll = $window.scrollTop();
  if (scroll >= 200) {
    $('#introduction').addClass('opa');
    }else{
      $('#introduction').removeClass('opa');
  }
});

function r(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

});


