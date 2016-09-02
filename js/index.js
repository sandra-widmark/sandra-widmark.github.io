var overlay = $('#overlay');
var popup = $(".popup");
var bookPopup = $(".book-popup");
var zenPopup = $(".zen-popup");
var todoPopup = $(".todo-popup");
var infographPopup = $(".infograph-popup");
var mapPopup = $(".map-popup");
var gamePopup = $(".game-popup");

$("#gallery .book-search").click(function(event){
    overlay.show();
    bookPopup.show();
});

$("#gallery .zengarden").click(function(event){
    overlay.show();
    zenPopup.show();
});

$("#gallery .todo").click(function(event){
    overlay.show();
    todoPopup.show();
});

$("#gallery .infograph").click(function(event){
    overlay.show();
    infographPopup.show();
});

$("#gallery .map").click(function(event){
    overlay.show();
    mapPopup.show();
});

$("#gallery .game").click(function(event){
    overlay.show();
    gamePopup.show();
});

overlay.click(function(){
    overlay.hide();
    popup.hide();
});