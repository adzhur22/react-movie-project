import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices/movie.slice";
import {MovieCard} from "../movieCard/MovieCard";
import css from './Movies.module.css'
import {useSearchParams} from "react-router-dom";
import {genreActions} from "../../redux/slices/genres.slice";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMasksTheater, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Star2} from "../star/Star2";



export function Movies(){


    const {movies:{results, page:queryPage}, searchMovieStatus, searchMovie, discoverMovieParams} = useSelector(store => store.movieReducer);
    const {genres:{genres}} = useSelector(store => store.genreReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    },[])

    let [searchParams, setSearchParams] = useSearchParams({page:'1'});


    const {register,handleSubmit,reset} = useForm();

    let [selected,setSelected] = useState();


    console.log(discoverMovieParams);



    const nextPage = () => {
        if(searchMovieStatus){
            dispatch(movieActions.searchMovie({page: +searchParams.get('page') + 1 , query:searchMovie}));
            setSearchParams({page:+searchParams.get('page') + 1})
            window.scrollTo(0, 0)
        }

        else {
                dispatch(movieActions.addPageParams(+searchParams.get('page') + 1))
                setSearchParams({page:(+searchParams.get('page') + 1).toString()})
                window.scrollTo(0, 0)
            }
    }

    const prevPage = () => {
        if(searchMovieStatus){
            dispatch(movieActions.searchMovie({page: searchParams.get('page') - 1 , query:searchMovie}));
            setSearchParams({page:+searchParams.get('page') - 1})
            window.scrollTo(0, 0)
        }

        else {
            dispatch(movieActions.addPageParams(searchParams.get('page') - 1))
            setSearchParams({page:(+searchParams.get('page') - 1).toString()})
            window.scrollTo(0, 0)
        }
    }


    const submit = ({query:data}) => {
        console.log(data)
        if(data.length >= 1){
            dispatch(movieActions.searchMovie({page:1, query:data}));
            dispatch(movieActions.addSearch(data))
            setSearchParams({page:'1'})
        }
        else {
            dispatch(movieActions.getMovies(1))
        }
    }


    const handleChange = event => {
        dispatch(movieActions.addGenreParams(event.target.value));
        setSelected(event.target.value);
    };




useEffect(() => {
        dispatch(movieActions.getMovies(discoverMovieParams))

},[discoverMovieParams])

let [classGenre, setclassGenre] = useState(css.genreClick);

let [classSearch, setClassSearch] = useState(css.searchClick);


    return(
    <div className={css.Movies}>

        <div className={css.searchBox}>

            <div className={classGenre}>
                <div className={css.text}>Search by genre</div>
                <div className={css.awesome} onClick={()=>{
                    if(classGenre === css.genreClick){
                        setclassGenre(css.genre);
                        reset();
                        if(classSearch === css.search){
                            setClassSearch(css.searchClick)
                        }
                    }else {
                        setclassGenre(css.genreClick)
                    }}}>
                    <FontAwesomeIcon icon={faMasksTheater}></FontAwesomeIcon>
                </div>
                <div className={css.select}>
                    <select value={selected} onChange={handleChange}>
                        <option value={''}>Please choose a genre</option>
                        {genres && genres.map(option=> <option key={option.id} value={option.id}>{option.name}</option>)}
                    </select>
                </div>
                <div className={css.select}>
                    <div>min rating</div>
                    <Star2/>
                </div>
            </div>

            <div>|</div>

            <div className={classSearch}>
                <div className={css.text}>Search by title</div>
                <div className={css.awesome} onClick={()=>{
                    if(classSearch === css.searchClick){
                        setClassSearch(css.search)
                        if(classGenre === css.genre){
                            setclassGenre(css.genreClick)
                        }
                    }else {
                        setClassSearch(css.searchClick)
                        reset();
                    }}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </div>
                <div className={css.form}>
                    <form onChange={handleSubmit(submit)}>
                        <input type='text' placeholder={'movie'} {...register('query')}/>
                    </form>
                </div>
            </div>

        </div>


        <div className={css.movie}>
            {results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>

        <div className={css.button}>
            <button disabled={queryPage===1} onClick={()=> prevPage()}>prev</button>
            <button disabled={queryPage===500} onClick={()=> nextPage()}>next</button>
        </div>


    </div>

        );
}