$(document).ready(function(){
  $('button').on('click', function(){
    $('#first').slideDown();
  })
  $('#first').on('click', function(){
    $('#second').slideDown();
  });
   $('#second').on('click', function(){
     $('#third').slideDown();
   });
   $('#third').on('click', function(){
     $('img').slideToggle();
     $('#audio').play();
   });
});
