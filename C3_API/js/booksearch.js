
console.log('hej'); 
$('#search-button').click(function() {

 $.get('https://api.unsplash.com/photos/?client_id=8463bf7d27392315948591365816d5f2d1e0950007f6ccbad8d758bbb9f80453');
$.get("https://api.unsplash.com/photos/search/?jsoncallback?"), function( data ) {
  
  $( "#search-results" ).html( data );
  alert( "Load was performed." );
};


}); //end klick-function





/*

Exempel från treehouse 

$(document).ready(function () {
  $('button').click(function (){
    $("button").removeClass("selected"); //tar bort selected-class på de knappar som inte klickas på. 
    $(this).addClass("selected"); //this refererar till "button" som klickas på, ingen av de andra knapparna. 
    
    var flickrAPI = "http://api.flickr.com/.....?jsoncallback=?"; //den sista json callback är mkt viktig att lägga till!
    var animal = $(this).text(); //"this" i det här fallet refererar till knappen för det specifika djuret som klickas på. "text" tar all text från inuti html-elementet
    var flickrOptions = {
      tags : animal,
      format : "json"
  }; 
    
    function displayPhotos(data) { //data representerar json-datan som returneras av jquery
      var photoHTML = '<ul>';
      $.each( data.items, function (i, photo) {
        photoHTML += '<li class="grid">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      
      }); 
      photoHTML += '</ul>'; 
      $('#photos').html(photoHTML); 
    
    }
    
    
    $.getJSON(flickrAPI, flickrOptions, displayPhotos); 
 }); //avslut på klick
  
}); //avslut på document-ready funktionen. 

*/