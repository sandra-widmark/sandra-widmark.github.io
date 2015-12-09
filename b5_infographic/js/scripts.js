
             
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
        imageEle.innerHTML = '<img src="img/home.svg" class="home circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/home-click.svg" class="home circle-icon">';
        }
}








//industrial5
function toggle3(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/industrial5.svg" class="industritorn circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/industrial5-click.svg" class="industritorn circle-icon">';
        }
}







//tractor6
function toggle5(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/tractor6.svg" class="tractor6 circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/tractor6-click.svg" class="tractor6 circle-icon">';
        }
}




//industries
function toggle6(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/industries.svg" class="industries circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/industries-click.svg" class="industries circle-icon">';
        }
}



//truck
function toggle7(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/truck.svg" class="truck circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/truck-click.svg" class="truck circle-icon">';
        }
}


//industrial26
function toggle8(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
        imageEle.innerHTML = '<img src="img/industrial26.svg" class="industrial26 circle-icon">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="img/industrial26-click.svg" class="industrial26 circle-icon">';
        }
}








