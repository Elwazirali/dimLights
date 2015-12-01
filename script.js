
var enlargeCircle = function(){
  
  $('.circle').click(function(){
    $('.window').hide();
    $('.circle').removeClass('circle2')
    $(this).toggleClass('circle2')
    $(this).click(function()
    {
      $(this).removeClass('circle2')
      $('.window').show();
      enlargeCircle();
      
    });
    
    
    
  });
  
};

var changeBackground = function(){
  (function() {
  var burger = document.getElementById('fullBurger'),
    header = document.querySelector('.header'),
    win = document.querySelector('.window'),
    $links = $('a');

  burger.onclick = function() {
    this.classList.toggle('active');
    header.classList.toggle('menuOpen');
    win.classList.toggle('winOpen');
  }

  

  
}());
  
  $('.btn1').click(function(){
    
    $('body').addClass("back").removeClass();
    $('body').removeClass("back2   back3  back4 back5 back6");
    
  });
  
  
  $('.btn2').click(function(){
    
    $('body').addClass("back2",500);
    $('body').removeClass("back   back3  back4 back5 back6");
  });
  
  
   $('.btn3').click(function(){
    
    $('body').addClass("back3",500);
    $('body').removeClass("back2   back  back4 back5 back6");  });
  
  
   $('.btn4').click(function(){
    
    $('body').addClass("back4",500);
    $('body').removeClass("back2   back3  back back5 back6");
  });
  
  
   $('.btn5').click(function(){
    
    $('body').addClass("back5");
    $('body').removeClass("back2   back3  back4 back back6");
  });
  
  
   $('.btn6').click(function(){
    
    $('body').addClass("back6");
    $('body').removeClass("back2   back3  back4 back5 back");
  });
  
    
};

$(document).ready(changeBackground);
$(document).ready(enlargeCircle);

     