let movies = [
  {
    id: 0,
    name: "ki",
    score: 1,
  },
  {
    id: 1,
    name: "na",
    score: 8,
  },
  {
    id: 2,
    name: "log",
    score: 99,
  },
  {
    id: 3,
    name: "wow",
    score: 12,
  },
  {
    id: 4,
    name: "hey",
    score: 3,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
