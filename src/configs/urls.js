const baseURL = 'https://api.themoviedb.org/3/';


const urls = {
    getMovies:'discover/movie',
    getMovie:'/movie',
    searchMovie:'search/movie',
    getGenre:'genre/movie/list'
}



const baseURLImage = {
    backdrop_sizes: {
        w300:'https://image.tmdb.org/t/p/w342',
        w780:'https://image.tmdb.org/t/p/w780',
        w1280:'https://image.tmdb.org/t/p/w1280'
    },
    poster_sizes: {
        w342:'https://image.tmdb.org/t/p/w342',
        w500:'https://image.tmdb.org/t/p/w500',
        w780:'https://image.tmdb.org/t/p/w780'
    }


}

export {urls, baseURL,baseURLImage}