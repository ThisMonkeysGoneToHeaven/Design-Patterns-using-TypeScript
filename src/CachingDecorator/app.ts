import express from 'express'
import InMemoryCache from './InMemoryCache';
import MyCache from './MyCache';

// app config
const app = express();
const PORT = 3000;

// mockAPI config
const mockAPIURL = `https://665f0f6a1e9017dc16f2a4e8.mockapi.io/api/v1/data`;
const TIMEOUT = 30; // in seconds

const cache: MyCache = new InMemoryCache(TIMEOUT);

// exposing the /mockAPI endpoint
app.get("/mockAPI/:userId", (req, res) => {
  const userId = req.params.userId;

  // if the data is in cache
  if (cache.contains(userId)) {
    // if the data is not expired
    if (!cache.isExpired(userId)) {
      console.log("sending out cached data!");
      return res.send(cache.getData(userId));
    } else cache.delete(userId);
  }

  // fetch new data
  fetch(mockAPIURL)
    .then((response) => response.json())
    .then((data) => {
      // cache the newly fetched data
      cache.add(userId, data);
      console.log("sending out newly fetched data!");
      res.send(data);
    });
});

// making app listen
app.listen(PORT, () => {
  console.log(`Listening on localhost port ${PORT}!`);
});