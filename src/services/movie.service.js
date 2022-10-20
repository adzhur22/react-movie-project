import {urls} from "../configs/urls";
import {axiosServiceMovie} from "./axios.service.movie";



const movieService = {
    getMovies:(page=1, with_genres, vote_average) => axiosServiceMovie.get(urls.getMovies, {params:{'page':page, 'with_genres':with_genres, 'vote_average.gte':vote_average}}),
    getMovie:(id)=> axiosServiceMovie.get(urls.getMovie + '/' + id),
    searchMovie:(page=1,query='')=> axiosServiceMovie.get(urls.searchMovie, {params:{query,page}}),
    getGenres:()=> axiosServiceMovie.get(urls.getGenre)
}

export {movieService}