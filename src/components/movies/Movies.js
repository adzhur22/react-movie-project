import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices/movie.slice";
import {MovieCard} from "../movieCard/MovieCard";
import css from './Movies.module.css'

export function Movies(){

    const {movies:{results}} = useSelector(store => store.movieReducer);

    const dispatch = useDispatch();


useEffect(() => {
dispatch(movieActions.getMovies())
},[])

        return(
    <div className={css.Movies}>
        {results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </div>

        );
}