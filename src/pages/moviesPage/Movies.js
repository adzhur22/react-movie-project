import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {movieActions} from "../../redux/slices";
import {MovieCard} from "../../components/movieCard";
import css from './Movies.module.css'
import {genreActions} from "../../redux/slices";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMasksTheater, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Star2} from "../../components/star";
import {baseURLImage} from "../../configs";


export function Movies(){

    const {movies:{results, page:queryPage, total_pages}, searchMovieStatus, searchMovie, discoverMovieParams, TrendingMovie} = useSelector(store => store.movieReducer);
    const {genres:{genres}} = useSelector(store => store.genreReducer);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let [searchParams, setSearchParams] = useSearchParams({page:'1'});



    const {register,handleSubmit,reset} = useForm();

    let [selected,setSelected] = useState();
    let [classGenre, setclassGenre] = useState(css.genre);
    let [classSearch, setClassSearch] = useState(css.searchClick);


    useEffect(() => {
        if(!genres){
            dispatch(genreActions.getGenres());
        }
        if(discoverMovieParams.page.length === 0){
            dispatch(movieActions.getMovies({page:searchParams.get('page')}));
        }
        if(discoverMovieParams.page.length !== 0){
           dispatch(movieActions.getMovies(discoverMovieParams));
        }
        dispatch(movieActions.getTrendingMovie('week'))
    },[discoverMovieParams])



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

        if(data.length >= 1){
            dispatch(movieActions.searchMovie({page:1, query:data}));
            dispatch(movieActions.addSearch(data))
            setSearchParams({page:'1'})
        }
        else {
            dispatch(movieActions.getMovies(1));
        }
    }


    const handleChange = event => {
        dispatch(movieActions.addGenreParams(event.target.value));
        setSelected(event.target.value);
    };



    return(
    <div className={css.Movies}>

        <div className={css.searchBox}>

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



        <div className={css.marqueeInfinite}>

            {/*<h3>-.-.Trending Movies.-.-</h3>*/}
            <div className={css.dv}>
               <span>
                   {TrendingMovie.results && TrendingMovie.results.map(value => <div key={value.id} className={css.imgBlock}> <img className={css.img} onClick={()=>navigate(value.id.toString())}  src={baseURLImage.poster_sizes.w154 + value.poster_path} alt={value.title}/> <img className={css.imgIcon} src={'https://www.pngall.com/wp-content/uploads/12/Toppng-PNG.png'}/></div>)}
                </span>
                <span>
                    {TrendingMovie.results && TrendingMovie.results.map(value => <div key={value.id} className={css.imgBlock}> <img className={css.img} onClick={()=>navigate(value.id.toString())}  src={baseURLImage.poster_sizes.w154 + value.poster_path} alt={value.title}/> <img className={css.imgIcon} src={'https://www.pngall.com/wp-content/uploads/12/Toppng-PNG.png'}/></div>)}
                </span>

            </div>

        </div>

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


<div className={css.boxContent}>
    <div className={css.movie}>
        {results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </div>

    <div className={css.button}>
        <button disabled={queryPage===1} onClick={()=> prevPage()}>prev</button>
        <button disabled={queryPage===500 ||queryPage >= total_pages} onClick={()=> nextPage()}>next</button>
    </div>

</div>




    </div>

        );
}