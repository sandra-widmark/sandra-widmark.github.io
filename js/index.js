var overlay = $('#overlay');
var contactOverlay = $('#contact-overlay');
var popup = $(".popup");
var bookPopup = $(".book-popup");
var zenPopup = $(".zen-popup");
var todoPopup = $(".todo-popup");
var infographPopup = $(".infograph-popup");
var mapPopup = $(".map-popup");
var gamePopup = $(".game-popup");
var contactPopup = $(".contact-popup");

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

$("#contact").click(function(event){
    contactOverlay.show();
    contactPopup.show();
});

overlay.click(function(){
    overlay.hide();
    popup.hide();
});

contactOverlay.click(function(){
    contactOverlay.hide();
    contactPopup.hide();
});