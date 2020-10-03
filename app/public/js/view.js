// When user hits the search-btn
// $("#search-btn").on("click", function(event) {
//   event.preventDefault();

//   // Save the book they typed into the book-search input
//   var bookSearched = $("#book-search").val().trim();

//   // Make an AJAX get request to our api, including the user's book in the url
//   $.get("/api/" + bookSearched, function(data) {

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });

// });

// // When user hits the author-search-btn
// $("#author-search-btn").on("click", function() {

//   // Save the author they typed into the author-search input
//   var authorSearched = $("#author-search").val().trim();

//   // Make an AJAX get request to our api, including the user's author in the url
//   $.get("/api/author/" + authorSearched, function(data) {

//     // Log the data to the console
//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });

// });

// // When user hits the genre-search-btn
// $("#genre-search-btn").on("click", function() {

//   // Save the book they typed into the genre-search input
//   var genreSearched = $("#genre-search").val().trim();

//   // Make an AJAX get request to our api, including the user's genre in the url
//   $.get("/api/genre/" + genreSearched, function(data) {

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });

// });

function renderBattlers(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].name + "</h2>");
      div.append("<p>:Hit Points " + data[i].hitPoints + "</p>");
      div.append("<p>Attack: " + data[i].attack + "</p>");
      div.append("<p>Defense: " + data[i].defense + "</p>");
      div.append("<p>Damage: " + data[i].damage + "</p>");
      div.append("<p>Speed: " + data[i].speed + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      $.ajax({
        method: "DELETE",
        url: "/api/battler/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function() {
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
