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
};

class TvSerie extends Movie { 
    constructor(title, year, rating, type, season) {
        super(title, year, genre, rating, type);
        this.season = season;
    }
}

