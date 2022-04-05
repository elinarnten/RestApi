const express = require("express");
const app = express();

const port = 8080;

const movies = [
  {
    title: "Frozen",
    premiere: 2014,
    genre: "kids",
    id: 1,
  },
  {
    title: "Dr Dolittle",
    premiere: 2020,
    genre: "adventure",
    id: 2,
  },
  {
    title: "Love Actually",
    premiere: 2003,
    genre: "romance",
    id: 3,
  },
  {
    title: "Spotlight",
    premiere: 2015,
    genre: "drama",
    id: 4,
  },
];

app.get("/", (req, res, next) => {
  res.send("Hello World! :)");
  console.log(movies);
  // next();
});

app.post("/", (req, res) => {
  res.send("Got POST request");
});

app.put("/user", (req, res) => {
  res.send("Got PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got DELETE request at /user");
});

app.use(express.static("public"));
app.listen(port, () => console.log(`Listening on port ${port}!`));
