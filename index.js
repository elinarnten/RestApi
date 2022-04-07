const express = require("express");
const app = express();

const port = 8080;

// app.use("/", (req, res, next) => {
//   console.log("api visited");
//   next();
// });

// app.use("/", express.static("public"));

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

app.use(express.json());

app.get("/movies", (req, res, next) => {
  res.json(movies);
});

app.post("/movies", (req, res) => {
  movies.push(req.body);
  res.status(201);
  res.send("Created");
});

app.put("/api/movies/:id", (req, res) => {
  // res.send("Got PUT request at /user");
});

app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;

  movies = movies.filter((i) => {
    if (i.id !== id) {
      return true;
    }
    return false;
  });

  res.send("Movie is deleted");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
