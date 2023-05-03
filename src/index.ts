import express from "express";

const app = express();

app.use(express.json());

// feel free to install any other ORM for this exercise

// get all movies

// post a movie

// get a movie by id

// update a movie by id

// delete a movie by id

// middleware?

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
