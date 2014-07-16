$('p').hide();

$('.accordion a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('p').hide();
  } else {
    $('a').removeClass('active');
    $('p').hide();
    $(this).addClass('active').siblings('p').show();
  }
});

//This will work with toggle if you call out each individual "a" and "p".
/*$('p').hide();

 $('a').click(function() {
   $('p').toggle("slow");
});*/


//Again, this will work with slideToggle if you call out each individual "a" and "p".

/*$('p').hide();

$( "a" ).click(function() {
  $( "p" ).slideToggle( "slow" );
});*/
