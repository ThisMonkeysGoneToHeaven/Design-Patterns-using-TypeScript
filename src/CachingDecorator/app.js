const express = require("express");

// app config
const app = express();
const PORT = 3000;

// mockAPI config
const mockAPIURL = `https://665f0f6a1e9017dc16f2a4e8.mockapi.io/api/v1/data`;
const cache = {};
const TIMEOUT = 30; // in seconds

// exposing the /mockAPI endpoint
app.get("/mockAPI/:userId", (req, res) => {
  const userId = req.params.userId;

  // if the data is in cache
  if (userId in cache) {
    const userData = cache[userId];
    // if the data is not expired
    if (userData.expiryTime > Date.now()) {
      console.log("sending out cached data!");
      return res.send(userData.data);
    } else delete cache[userId];
  }

  // fetch new data
  fetch(mockAPIURL)
    .then((response) => response.json())
    .then((data) => {
      // cache the newly fetched data
      cache[userId] = {
        data: data,
        expiryTime: Date.now() + TIMEOUT * 1000,
      };

      console.log("sending out newly fetched data!");
      res.send(cache[userId].data);
    });
});

// making app listen
app.listen(PORT, () => {
  console.log(`Listening on localhost port ${PORT}!`);
});
