const movies = [
    {
        "Title": "Avatar",
        "Year": "2009",
        "Genre": "Action, Adventure, Fantasy",
        "Rating": "7.9",
        "Type": "movie",
    },
    {
        "Title": "Game of Thrones",
        "Year": "2011",
        "Genre": "Adventure, Drama, Fantasy",
        "Rating": "9.5",
        "Type": "series",
        "Season": "7",
    },
    {
        "Title": "The Wolf of Wall Street",
        "Year": "2013",
        "Genre": "Biography, Comedy, Crime",
        "Rating": "8.2",
        "Type": "movie",
    },
    {
        "Title": "Gotham",
        "Year": "2014",
        "Genre": "Action, Crime, Drama",
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
    }
};

const movie = new Movie('Batman', '2002', 'mistero', '9.0', 'movie');
const serie = new TvSerie('Narcos', '2015', 'Crime', '9.0', 'series','2');

console.log(movie.toString());
console.log(serie.toString());