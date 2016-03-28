
//API Key

var googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=search+subject:keyes&key=AIzaSyBA4Y9BR0QeG79uVcwT2w1B57m0r-zCqtw"; 



//Function for handling custom search for books. 

$('#search-button').click(function() {
  var content = $("#content"); 
  var result = $('#searchInput').val(); 
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + result;
  content.empty(); 

  //Function for handling the response and append to the page. 
  
  function handleResponse(response) {
    
    var books = $('<ul>');

    //Handle each response as a list item.  
    
    $.each(response.items, function(_, item) {
      var book = $('<li>');

      //Handle published date as paragraph.

    var published = $('<p>', {
        html: 'Publicerad: ' + item.volumeInfo.publishedDate
      });

      //handle identifiers (ISBN) as list. 

      var identifiers = $('<ul>');
      $.each(item.volumeInfo.industryIdentifiers, function(_, identifier) {
        identifiers.append($('<p>', {
          html: identifier.type + ': ' + identifier.identifier
        }));

      //Handle the book title as a link. 

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

  var ajax1 = $.ajax; 

  ajax1({
    url: url,
    method: 'get',
    success: handleResponse,
    error: function() {
      $('#error').html('Ledsen, något gick fel!');
    }
  });
});




//function for handling click on the book genre buttons. 

$('button').click(function() {
  var content = $("#content"); 
  var result = $(this).text(); 
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + result;

  //Function for handling the response and append to the page. 
  
  function handleResponse(response) {
    var books = $('<ul>');

    //Handle each response as a list item.  
    
    $.each(response.items, function(_, item) {
      var book = $('<li>');

      //Handle published-date as paragraph.

      var published = $('<p>', {
        html: 'Publicerad: ' + item.volumeInfo.publishedDate
      });

      //handle identifiers (ISBN) as list. 

      var identifiers = $('<ul>');
      $.each(item.volumeInfo.industryIdentifiers, function(_, identifier) {
        identifiers.append($('<p>', {
          html: identifier.type + ': ' + identifier.identifier
        }));

      //Handle the book title as a link. 

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

  var ajax2 = $.ajax; 

  ajax2({
    url: url,
    method: 'get',
    success: handleResponse,
    error: function() {
      $('#error').html('Ledsen, något gick fel!');
    }
  });
});