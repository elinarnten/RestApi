const express = require("express");
const app = express();

const port = 8080;

const getRandomIdNumber = () => {
  let idNumber = (Math.random() + 1).toString(36).substring(7);
  return idNumber;
};

let movies = [
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

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;
  res.status(201);
  movies.push({ ...movie, id: getRandomIdNumber() });
  res.send("Created new movie");
});

app.put("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  // const movieId = req.params.id;
  const currentMovie = movies.find((movie) => {
    return movie.id == id;
  });
  if (!currentMovie) {
    res.status(404).send("Did not find that movie");
  } else {
    let updateMovies = movies.map((movie) => {
      if (movie.id == id) {
        return req.body;
      } else {
        return movie;
      }
    });
    movies = updateMovies;
    res.send("Movie is edited");
  }
});

app.delete("/api/movies/:id", (req, res) => {
  movies.pop(req.body);

  res.send("Movie is deleted");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
