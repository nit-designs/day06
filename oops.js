//a.Write a constructor for the class Movie

class Movie
{
   constructor (title,studio,rating)
    {
        this.title =title;
        this.studio = studio;
        this.rating = rating;
    }
}
var movie = new Movie ("Avenger","FOX Studios","PG13");
console.log(movie);

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie
{
   constructor (title,studio,rating = "PG")
    {
        this.title =title;
        this.studio = studio;
        this.rating = rating;

    }
        
}


/*c.Write a method getPG, which takes an array of base type Movie as its argument,
 and returns a new array of only those movies in the input array with a rating of "PG". 
 You may assume the input array is full of Movie instances. The returned array need not be full.*/
 class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

     getPG(movies) 
     {
     movies.filter(movie => movie.rating === "PG");
    }
 }

let movie1 = new Movie("movie1", "studio1", "PG");
let movie2 = new Movie("movie2", "studio2", "PG13");
let movie3 = new Movie("movie3", "studio3", "PG14");
let movies = [movie1, movie2, movie3];
let result = getPG(movies);
console.log(result);
//output:Movie {title: 'movie1', studio: 'studio1', rating: 'PG'}

//d.Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var movie = new Movie("Casino Royale","Eon Production","PG13")
console.log(movie);
//output:title: 'Casino Royale', studio: 'Eon Production', rating: 'PG13'}