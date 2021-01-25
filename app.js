const fetch = require("node-fetch");
fetch("https://api.meetup.com/find/upcoming_events?start_date_range=2018-06-01T00:00:00.000&end_date_range=2020-06-01T00:00:00.000&lat=37.77&lon=-122.41&text=games", {
  headers: {
    'Authorization' : 'Bearer e59b286b6db877e677c6f5ed0fba3f71',
    'Origin' : 'http://localhost:3000/'
  },
  credentials: 'include',
})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data.events);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
