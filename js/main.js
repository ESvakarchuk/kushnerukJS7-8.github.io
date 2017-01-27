$(function() {

$('#first').click(function() {
  $('#second-box').hide();
  $('#third-box').hide();
  $('#first-box').show();
});

$('#second').click(function() {
  $('#first-box').hide();
  $('#third-box').hide();
  $('#second-box').show();
});

$('#third').click(function() {
  $('#first-box').hide();
  $('#second-box').hide();
  $('#third-box').show();
});

$('label').eq(0).hover(function(){
  $('#firstname-help').fadeIn('fast');
}, function(){
  $('#firstname-help').fadeOut('slow');
});

$('label').eq(1).hover(function(){
  $('#lastname-help').fadeIn('fast');
}, function(){
  $('#lastname-help').fadeOut('slow');
});

$('label').eq(2).hover(function(){
  $('#address-help').fadeIn('fast');
}, function(){
  $('#address-help').fadeOut('slow');
});

$('#show-help-button').click(function() {
  $('span').fadeToggle('slow');
});

});
