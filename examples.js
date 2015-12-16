
//cirkelikoner


$('.circle').scrollLeft(function() {
  $('.circle-icon').animate({
      width: "110px"
    },
    3000);
});



//jquery version
//$('.matare').scrollTop(function(){
   // $('.matare').animate({height: "70px"});
//});





//$(".matare").show().hide("slow");

$('.matare').scrollTop(function() {
  $('.matare').animate({
    height: "80px"

       },
 2000);
});





$(".matare").show().hide("slow");

$('.matare').scrollTop(function() {
  $('.matare').animate({
    height: "80px"

       },
 2000);
});


//jquery version
$('.matare').scrollTop(function(){
$('.matare').animate({height: "70px"});
});




$('.circle').scrollLeft(function() {
  $('.circle-icon').animate({
      width: "110px"
    },
    3000);
});





//en slide-down-effekt för en bild t ex. When you click in the page's body, the next image slides down over 600 milliseconds.
$('body').click(function() {
  $('.slide').slideDown(600).addClass('active-slide');
});
    

//en bild som slidear up. 
var main = function() {
  $(".btn").click(function(event) {
    $(".container").show().slideUp(1100);
  });
};

$(document).ready(main);



//animera ett navigation element.Putting it all together, when the icon-menu element is clicked, the .menu element will animate from its current width to 193px.
$('.icon-menu').click(function() {
  $('.menu').animate({
      width: "193px"
    },
    300);
});




 //loop   
    
function randomNumber(upper) { return Math.flor( Math.random() upper ) + 1; }

var counter = 0;  while ( counter < 10 ){ var randNum = randomNumber(6);  document.write(randNum + " "); counter += 1; }

//gör så att den "slide in" on scroll. category: dimensions, effects. events. Offset.
// javascript var myHeading = document.querySelector('h1'); myHeading.textContent = 'Hello world!'; 




//jquery.animate
function Arrows() {
    $('.sun-arrow').animate({'top': '100'}, {
        duration: 2000, 
        complete: function() {
            $('.sun-arrow').animate({top: '40'}, {
                duration: 2000, 
                complete: Arrows()});
        }});
}
Arrows();
