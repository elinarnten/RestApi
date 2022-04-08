const express = require("express");
const app = express();

const port = 8080;

const getRandomIdNumber = () => {
  let idNumber = (Math.random() + 1).toString(36).substring(7);
  return idNumber;
};

const movies = [
  {
    title: "Frozen",
    premiere: 2014,
    genre: "kids",
    id: getRandomIdNumber(),
  },
  {
    title: "Dr Dolittle",
    premiere: 2020,
    genre: "adventure",
    id: getRandomIdNumber(),
  },
  {
    title: "Love Actually",
    premiere: 2003,
    genre: "romance",
    id: getRandomIdNumber(),
  },
  {
    title: "Spotlight",
    premiere: 2015,
    genre: "drama",
    id: getRandomIdNumber(),
  },
];

app.use(express.json());

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.post("/movies", (req, res) => {
  const movie = req.body;
  res.status(201);
  movies.push({ ...movie, id: getRandomIdNumber() });
  res.send("Created");
});

app.put("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  movies = movies.map(function (movies) {
    if (movieId === movies.id) {
      console.log("you edietd me");
    }
  });

  // console.log(req.body);
  res.send("Movie is edited");
});

app.delete("/movies/:id", (req, res) => {
  movies.pop(req.body);

  res.send("Movie is deleted");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
