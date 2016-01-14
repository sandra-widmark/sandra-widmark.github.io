
//defining variables

var mainBoard = "#boxes";

var counter = 0;
var cardOpened = "";
var imageOpened = "";
var imgFound = 0;

var flagIcons = [
    "img/canada.png",
    "img/colombia.png",
    "img/croatia.png",
    "img/ethiopia.png",
    "img/iran.png",
    "img/iraq.png",
    "img/kenya.png",
    "img/panama.png",
    "img/southAfrica.png",
    "img/uruguay.png"
]; 



//function to preload images

$(flagIcons).each(function() {
    var image = $('<img />').attr('src', this);
});

//Functions to place the images randomly 

function doRandom(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

// put images in random order
function shuffleImgs() {
    
    var allImgs = $(mainBoard).children();
    var thisImg = $(mainBoard + " div:first-child");
    var imgsArr = new Array();
    
    for (var i = 0; i < allImgs.length; i++) {
        imgsArr[i] = $("#" + thisImg.attr("id") + " img").attr("src");
        thisImg = thisImg.next();
    }
    
    thisImg = $(mainBoard + " div:first-child");
    
    for (var z = 0; z < allImgs.length; z++) {
        var rn = doRandom(0, imgsArr.length - 1);
        
        $("#" + thisImg.attr("id") + " img").attr("src", imgsArr[rn]);
        imgsArr.splice(rn, 1);
        thisImg = thisImg.next();
    }
}

////game elements

// reset
function startAgain() {
    
    shuffleImgs();
    
    $(mainBoard + " div img").hide();
    $(mainBoard + " div").css("visibility", "visible");
    
    $("#success").remove();
    
    counter = 0;
    $("#counter").html("" + counter);
    
    cardOpened = "";
    imageOpened = "";
    imgFound = 0;
    
    return false;
}

// open card - show an image after user's click. 
function openCard() {
    
    var id = $(this).attr("id");
    
    if ($("#" + id + " img").is(":hidden")) {
        $(mainBoard + " div").unbind("click", openCard);
        
        $("#" + id + " img").slideDown('fast');
        
        if (imageOpened == "") {
            cardOpened = id;
            imageOpened = $("#" + id + " img").attr("src");
            setTimeout(function() {
                $(mainBoard + " div").bind("click", openCard)
            }, 400);
        } else {
            current = $("#" + id + " img").attr("src");
            
            if (imageOpened != current) {
                setTimeout(function() {
                    $("#" + id + " img").slideUp('fast');
                    $("#" + cardOpened + " img").slideUp('fast');
                    cardOpened = "";
                    imageOpened = "";
                }, 500);
            } else {
                $("#" + id + " img").parent().css("visibility", "hidden");
                $("#" + cardOpened + " img").parent().css("visibility", "hidden");
                imgFound++;
                
                cardOpened = "";
                imageOpened = "";
            }
            setTimeout(function() {
                $(mainBoard + " div").bind("click", openCard)
            }, 500);
        }
        
        counter++;
        $("#counter").html("" + counter);
        
        // finished!
        if (imgFound == gfxBase.length) {
            $("#counter").prepend('<span id="success">Done! With </span>');
        }
    }
}
