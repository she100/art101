// index.js - Lab 16: JSON and APIs
// Working with your partner, experiment with processing JSON from an api.
// Author: Stephanie He
// Date: December 2, 2024


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yourapiendpoint.com/",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        {
            "month": "12",
            "num": 3021,
            "link": "",
            "year": "2024",
            "news": "",
            "safe_title": "Seismologists",
            "transcript": "",
            "alt": "And even when they're not distracted, they usually get kicked out for illegal under-the-net 'subduction spikes'.",
            "img": "https://imgs.xkcd.com/comics/seismologists.png",
            "title": "Seismologists",
            "day": "6"
          }
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

$.getJSON(url, data, function(data) {
    // do stuff if we succeed
    console.log(data);
});