
             
//Termometer

//jquery - animate indicator
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

//jquery - animate sun-arrow
function sunArrow() {
    $('.sun-arrow').animate({'top': '80'}, {
        duration: 1500, 
        complete: function() {
            $('.sun-arrow').animate({top: '30'}, {
                duration: 1500, 
                complete: sunArrow()});
        }});
}
sunArrow();


//jquery - animate heat-arrow1
function heatArrow1() {
    $('.heat-arrow1').animate({'top': '30'}, {
        duration: 1500, 
        complete: function() {
            $('.heat-arrow1').animate({top: '50'}, {
                duration: 1500, 
                complete: heatArrow1()});
        }});
}
heatArrow1();



//jquery - animate heat-arrow2
function heatArrow2() {
    $('.heat-arrow2').animate({'top': '90'}, {
        duration: 1500, 
        complete: function() {
            $('.heat-arrow2').animate({top: '110'}, {
                duration: 1500, 
                complete: heatArrow2()});
        }});
}
heatArrow2();





// javascript - Show information when clicking on icons


//home
function toggle1(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/home.png" class="home circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/home-clicked.png" class="home circle-icon">';
        }
}








//industrial5
function toggle3(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/industrial5.png" class="industritorn circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/industrial5-clicked.png" class="industritorn circle-icon">';
        }
}







//tractor6
function toggle5(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/tractor6.png" class="tractor6 circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/tractor6-clicked.png" class="tractor6 circle-icon">';
        }
}




//industries
function toggle6(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/industries.png" class="industries circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/industries-clicked.png" class="industries circle-icon">';
        }
}



//truck
function toggle7(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/truck.png" class="truck circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/truck-clicked.png" class="truck circle-icon">';
        }
}


//industrial26
function toggle8(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/industrial26.png" class="industrial26 circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/industrial26-clicked.png" class="industrial26 circle-icon">';
        }
}



//jquery - show information when clicking on button "visa mig"



$('.showme').click(function (e) {
    e.preventDefault();
    $('.showme').hide();
    $('.third-section-facts, .globe-container').show();
    $(window).scrollTop($('.third-section-facts').offset().top);
});
