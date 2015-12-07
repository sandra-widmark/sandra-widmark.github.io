
             
//Termometer

//jquery.animate indicator
function indicator() {
    $('.indicator').animate({'top': '80'}, {
        duration: 2000, 
        complete: function() {
            $('.indicator').animate({top: '30'}, {
                duration: 2000, 
                complete: indicator()});
        }});
}
indicator();


//pilar

//jquery.animate sun-arrow
function sunArrow() {
    $('.sun-arrow').animate({'top': '80'}, {
        duration: 2000, 
        complete: function() {
            $('.sun-arrow').animate({top: '30'}, {
                duration: 2000, 
                complete: sunArrow()});
        }});
}
sunArrow();


//jquery.animate heat-arrow1
function heatArrow1() {
    $('.heat-arrow1').animate({'top': '30'}, {
        duration: 2000, 
        complete: function() {
            $('.heat-arrow1').animate({top: '50'}, {
                duration: 2000, 
                complete: heatArrow1()});
        }});
}
heatArrow1();



//jquery.animate heat-arrow2
function heatArrow2() {
    $('.heat-arrow2').animate({'top': '90'}, {
        duration: 2000, 
        complete: function() {
            $('.heat-arrow2').animate({top: '110'}, {
                duration: 2000, 
                complete: heatArrow2()});
        }});
}
heatArrow2();