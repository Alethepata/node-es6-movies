const movies = [
    {
        "Title": "Avatar",
        "Year": "2009",
        "Genre": "Adventure",
        "Rating": "7.9",
        "Type": "movie",
    },
    {
        "Title": "Game of Thrones",
        "Year": "2011",
        "Genre": "Adventure",
        "Rating": "9.5",
        "Type": "series",
        "Season": "7",
    },
    {
        "Title": "The Wolf of Wall Street",
        "Year": "2013",
        "Genre": "Crime",
        "Rating": "8.2",
        "Type": "movie",
    },
    {
        "Title": "Gotham",
        "Year": "2014",
        "Genre": "Crime",
        "Rating": "8.0",
        "Type": "series",
        "Season": "3",
    },
];

class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`
    }

};

class TvSerie extends Movie { 
    constructor(title, year, genre, rating, type, season) {
        super(title, year, genre, rating, type);
        this.season = season;
    }
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.season} stagioni. Ha un voto di ${this.rating}`
    };
};

const arrayMapped = movies.map((movie) => movie.Type == 'movie' ? new Movie({ ...movie }) : new TvSerie({ ...movie }));

const vote = [];
let somma = 0;

const votes = genre => {
    movies.map((movie) => movie.Genre == genre ? vote.push(movie.Rating) : '');
    for (var i = 0; i < vote.length; i++) {
        somma += parseInt(vote[i]);
    }
    let res = somma / vote.length;
    return res

}

const genres = () => {
    let genre = [];
    movies.forEach(element => {
        if (!genre.includes(element.Genre)) {
            genre.push(element.Genre);
        }
    });
    return genre
}

const moviesFilters = genre => {
    const moviefiltered= []
    movies.filter(movie => movie.Genre === genre ? moviefiltered.push(movie.Title) : '')
    return moviefiltered.toString('')
};

// console.log(votes('Crime'));
// console.log(genres());
console.log(moviesFilters('Adventure'));

