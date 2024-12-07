// index.js - Lab 15: AJAX
// With a partner, experiment with jQuery and AJAX.
// Author: Stephanie He
// Date: November 25, 2024


URL = "https://yesno.wtf/#api"

// Click function
$('#action').click(function(){
    // $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // The data to send (will be converted to a query string)
        data: { api_key: RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        {
          "answer": "yes",
          "forced": false,
          "image": "https://yesno.wtf/assets/yes/2.gif"
        }
        success: function(data);
          // do stuff
        console.log(data);
        },
        // When the api fails,
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
        }
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // make our JSON data printable
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        // put data in webpage
        $("#output").append("<p>" + JSON.stringify(data));
        $("#output").append("<p>Yes or No?: <b>" + data.activity);
        $("#title").html(data.title)
        $("#output").append("<img src=" + data.url + ">");
        $("#output").append("<p>" + data.explanation);
    })
  });

