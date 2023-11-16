// filename: complexCode.js

/*
 * This code is a complex implementation of a Movie Rental system.
 * It includes a database of movies, user management functionalities,
 * renting and returning movies, and advanced search features.
 *
 * The code follows object-oriented principles, with classes for movies,
 * users, and a movie rental system. It also uses advanced data structures
 * like maps and sets for efficient data management.
 *
 * Please note that this code is for demonstration purposes only and may
 * require additional work for a fully functional system.
 */

// Class representing a Movie
class Movie {
  constructor(title, director, releaseYear, genre) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genre = genre;
  }

  // Methods for getting and setting movie properties
  getTitle() {
    return this.title;
  }

  setDirector(director) {
    this.director = director;
  }

  getReleaseYear() {
    return this.releaseYear;
  }

  setGenre(genre) {
    this.genre = genre;
  }
}

// Class representing a User
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  // Methods for getting and setting user properties
  getName() {
    return this.name;
  }

  setEmail(email) {
    this.email = email;
  }

  getAge() {
    return this.age;
  }
}

// Class representing a Movie Rental System
class MovieRentalSystem {
  constructor() {
    this.movies = new Map();
    this.users = new Map();
    this.rentedMovies = new Set();
  }

  // Method to add a movie to the system
  addMovie(movie) {
    this.movies.set(movie.getTitle(), movie);
  }

  // Method to remove a movie from the system
  removeMovie(movieTitle) {
    const movie = this.movies.get(movieTitle);
    if (movie) {
      this.movies.delete(movieTitle);
      if (this.rentedMovies.has(movieTitle)) {
        this.rentedMovies.delete(movieTitle);
      }
      return true;
    }
    return false;
  }

  // Method to register a new user
  registerUser(user) {
    this.users.set(user.getName(), user);
  }

  // Method to rent a movie
  rentMovie(user, movieTitle) {
    const movie = this.movies.get(movieTitle);
    if (movie && !this.rentedMovies.has(movieTitle)) {
      this.rentedMovies.add(movieTitle);
      // Additional logic for user's rental history and payment processing
      // ...
      return true;
    }
    return false;
  }

  // Method to return a movie
  returnMovie(user, movieTitle) {
    if (this.rentedMovies.has(movieTitle)) {
      this.rentedMovies.delete(movieTitle);
      // Additional logic for updating user's rental history and payments
      // ...
      return true;
    }
    return false;
  }

  // Method to search for movies by genre
  searchMoviesByGenre(genre) {
    const moviesByGenre = [];
    for (const [_, movie] of this.movies) {
      if (movie.genre === genre) {
        moviesByGenre.push(movie);
      }
    }
    return moviesByGenre;
  }
}

// Example code to showcase the Movie Rental System

// Create a movie rental system
const rentalSystem = new MovieRentalSystem();

// Add movies to the system
const movie1 = new Movie("Inception", "Christopher Nolan", 2010, "Sci-Fi");
const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, "Drama");
const movie3 = new Movie("Pulp Fiction", "Quentin Tarantino", 1994, "Crime");
const movie4 = new Movie("The Dark Knight", "Christopher Nolan", 2008, "Action");
rentalSystem.addMovie(movie1);
rentalSystem.addMovie(movie2);
rentalSystem.addMovie(movie3);
rentalSystem.addMovie(movie4);

// Register new users
const user1 = new User("John Doe", "john.doe@example.com", 25);
const user2 = new User("Jane Smith", "jane.smith@example.com", 28);
rentalSystem.registerUser(user1);
rentalSystem.registerUser(user2);

// Rent a movie
const isMovieRented = rentalSystem.rentMovie(user1, "Inception");
if (isMovieRented) {
  console.log("Movie rented successfully!");
} else {
  console.log("Could not rent the movie.");
}

// Return a movie
const isMovieReturned = rentalSystem.returnMovie(user1, "Inception");
if (isMovieReturned) {
  console.log("Movie returned successfully!");
} else {
  console.log("Could not return the movie.");
}

// Search for movies by genre
const moviesByGenre = rentalSystem.searchMoviesByGenre("Action");
console.log("Movies found:", moviesByGenre);

// Remove a movie from the system
const isMovieRemoved = rentalSystem.removeMovie("Pulp Fiction");
if (isMovieRemoved) {
  console.log("Movie removed successfully!");
} else {
  console.log("Could not remove the movie.");
}

// Additional functionality such as displaying user's rental history,
// managing movie copies, and advanced search options can be added for a
// complete movie rental system implementation.