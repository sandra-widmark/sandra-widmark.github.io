
//API Key

var googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=search+subject:keyes&key=AIzaSyBA4Y9BR0QeG79uVcwT2w1B57m0r-zCqtw"; 


//function for handling click on the book figure-buttons. 

$('button, #search-button').click(function() {
  var content = $('#content');
  var result = $(this).text();
  var searchResult = $( "input[name*='query']" ).val( "" );
   content.empty(); 
 

  var searchUrl = "https://www.googleapis.com/books/v1/volumes?q=" + result;
  var searchUrlCustom = "https://www.googleapis.com/books/v1/volumes?q=" + searchResult;

  
  //Handle search response as a html list
  
  function handleSearchResponse(response) {
    var books = $('<ul>');

  //Handle each response as a list item. Cycle through the response items. 
    
    $.each(response.items, function(_, item) {
      var book = $('<li>');

      //Show published-date as paragraph

      var published = $('<p>', {
        html: 'Publicerad: ' + item.volumeInfo.publishedDate
      });

      //Show identifiers (ISBN) as list. 

      var identifiers = $('<ul>');
      $.each(item.volumeInfo.industryIdentifiers, function(_, identifier) {
        identifiers.append($('<li>', {
          html: identifier.type + ': ' + identifier.identifier
        }));

      //Show the book title as a link. 

      });
      var title = $('<a>', {
        href: item.volumeInfo.canonicalVolumeLink,
        html: item.volumeInfo.title
      });

      //Show thumbnail image with link to book on google books page.  

      var thumbnailImage = $('<img>', {
        src: item.volumeInfo.imageLinks.thumbnail
      });

      var thumbnail = $('<a>', {
        href: item.volumeInfo.canonicalVolumeLink,
        html: thumbnailImage
      });

      //Append the responses to the page. 

      book.append(thumbnail, title, identifiers, published);
      books.append(book);
    });
    content.html(books);
  }



  //Ajax function, displaying error message when request fails. 

  $.ajax({
    url: searchUrl,
    method: 'get',
    success: handleSearchResponse,
    error: function() {
      $('#content').html('Något gick fel!');
    }
  });



});
















