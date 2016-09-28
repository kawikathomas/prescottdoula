$(document).ready(function(){
  $(".page-scroll").on("click", function(event){
    event.preventDefault();
    div = $(this).attr("href")
    if(div === "#contact"){
      $("#contact").show();
      $('html, body').animate({
        scrollTop: $(div).offset().top
      }, 1000);
    }else{
      $('html, body').animate({
        scrollTop: $(div).offset().top
      }, 1000);
    }
    
  })
})
