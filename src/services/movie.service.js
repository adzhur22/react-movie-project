import {urlsMovie} from "../configs/urls";
import {axiosServiceMovie} from "./axios.service.movie";

const movieService = {
    getMovie:()=> axiosServiceMovie.get(urlsMovie.getMovie)
}

export {movieService}