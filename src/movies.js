const movies = require('./data.js')
// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  
  let allDirector = movies.map(function (element) {
    

    return element.director;
  });
  return allDirector;
}

console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let result = movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return result.length;
}

console.log(`${howManyMovies(movies)}`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let result = movies.reduce(function (preScore, currScore) {
    return preScore + currScore.score;
  }, 0);
  return result;
}

console.log(`${scoresAverage(movies).toFixed(2)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let result = movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  return result;
}
console.log(` ${scoresAverage(dramaMoviesScore(movies)).toFixed(2)} `);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortYear=(a,b)=> {
    return a.year -b.year;};
    return movies.sort(sortYear);
  }
const sortedMovies= JSON.parse(JSON.stringify(movies)) ;
console.log(orderByYear(sortedMovies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortTitle = (a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  };
  return movies.sort(sortTitle);
}
const SortedTitle = JSON.parse(JSON.stringify(movies));
const Arr = orderAlphabetically(SortedTitle).slice(0, 20);
Arr.forEach((items) => console.log(items.title));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
