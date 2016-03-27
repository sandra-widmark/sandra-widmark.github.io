
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

