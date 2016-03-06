
var googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=search+subject:keyes&key=AIzaSyBA4Y9BR0QeG79uVcwT2w1B57m0r-zCqtw"; 

var onClick = function() {
  var content = $('#content');
  
  // content.empty();

  var searchUrl = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
  var genreResults = $(this).text();

  function handleSearchResponse(response) {
    var books = $('<ul>');
    
    $.each(response.items, function(_, item) {
      var book = $('<li>');

      var published = $('<p>', {
        html: 'Publicerad: ' + item.volumeInfo.publishedDate
      });
      var identifiers = $('<ul>');
      $.each(item.volumeInfo.industryIdentifiers, function(_, identifier) {
        identifiers.append($('<li>', {
          html: identifier.type + ': ' + identifier.identifier
        }));
      });
      var title = $('<a>', {
        href: item.volumeInfo.canonicalVolumeLink,
        html: item.volumeInfo.title
      });
      var thumbnailImage = $('<img>', {
        src: item.volumeInfo.imageLinks.thumbnail
      });
      var thumbnail = $('<a>', {
        href: item.volumeInfo.canonicalVolumeLink,
        html: thumbnailImage
      });

      book.append(thumbnail, title, identifiers, published);
      books.append(book);
    });
    content.html(books);
  }

  $.ajax({
    url: searchUrl,
    method: 'get',
    success: handleSearchResponse,
    error: function() {
      $('#content').html('Något gick fel kompis');
    }
  });
};

$('button').click(onClick);

/*
 // Process response from Google booksearch
      for (i in isbns) {
        var element = document.getElementById(isbns[i]);
        var bookInfo = _GBSBookInfo[isbns[i]];

        // Linkify the title
        element.innerHTML = '<a href="' + bookInfo.info_url  + '">'
                            + element.innerHTML + '</a>';


/*

  var googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=search+subject:keyes&key=AIzaSyBA4Y9BR0QeG79uVcwT2w1B57m0r-zCqtw"; 

 google.load("books", "0");

  function initialize() {
      var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      viewer.load('ISBN:0738531367');
      }

  google.setOnLoadCallback(initialize);



function handleResponse(response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        document.getElementById("viewerCanvas").innerHTML += '<a href="' + '"></a>';" + item.volumeInfo.title;
      }
    }






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


