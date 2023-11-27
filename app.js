const express = require("express");
const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favorite movie list");
};

app.get("/", welcome);

const moviesList = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", moviesList);

const getMovies = (req, res) => {
  const movieId = parseInt(req.params.id);
  let theMovie = null;

  for (i = 0; i < movies.length; i++) {
    if (movies[i].id === movieId) {
      theMovie = movies[i];
    }
  }

  if (theMovie) {
    res.status(200).json(theMovie);
  } else {
    res.status(404).json("Error");
  }
};

app.get("/api/movies/:id", getMovies);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

// const welcomeName = (req, res) => {
//   res.send(`Wemcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);
// npm init -y das le dossier créé
//npm install express

//pour recharger redémarrer le server automatiquement
// npm install nodemon --save-dev
