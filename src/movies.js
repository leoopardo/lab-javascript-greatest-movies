const movies = require("./data");


// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allDirectors = movies.map(function(dir){
  return dir.director
})
function getAllDirectors(){
  console.log(allDirectors)
}
getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const steven = movies.filter(function(arr){
  return arr.director === "Steven Spielberg" 
    
});
function stevenFilms(){
  console.log(steven)
}
stevenFilms()

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const allScores = movies.map(function(dir){
  return dir.score
})
function scoresAverage(arr) {
  let avarege = 0
  for (let i = 0; i < arr.length; i++){
    avarege += arr[i]
  }
  return avarege / arr.length
}
console.log(scoresAverage(allScores))

// Iteration 4: Drama movies - Get the average of Drama Movies
const steven = movies.filter(function(arr){
  return arr.director === "Steven Spielberg" 
    
});
function stevenFilms(){
  return steven
}
stevenFilms()


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const newArray = movies.map((arr) =>  arr)
const sortYear = newArray.sort((a, b) => a.year - b.year)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const newArray = movies.map((arr) =>  arr)
const sortTitle = newArray.sort((a, b)=> {
  return a.title.toLowerCase().localeCompare(b.title.toLowerCase().localeCompare)
});

console.log(sortTitle)

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
