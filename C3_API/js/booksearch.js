
 
/*


 $('button').click(function () {
   
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<div>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<div id="search-results">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</div>';
      $("#search-results" ).html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click



$('button').click(function() {
   
    var unsplashAPI = "https://source.unsplash.com/category/nature/1600x900";
    var searchResult = $(this).value();
  
    
  function displayPhotos(data) {
     
    var photo = new UnsplashPhoto();

    photo.all()
     .fromCategory("nature")
     .of(["trees", "water"])
     .size(1000, 1200)
     .fetch(); // => "https://source.unsplash.com/category/nature/1000x1200?trees,water"
    }

    $.getJSON(unsplashAPI, displayPhotos);

  }); // end click





$('#search-button').click(function() {
$.get("https://source.unsplash.com/category/nature/1600x900"), function( data ) {
  
  $( "#search-results" ).html( data );
  alert( "Load was performed." );
};


}); //end click-function



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