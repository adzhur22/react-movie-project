import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieActions} from "../../redux/slices";
import css from "./movieFullInformation.module.css";
import {baseURLImage} from "../../configs";
import {Star} from "../star";
import {GenreBadge} from "../genreBadge";



export function MovieFullInformation(){

    let [movieList, setMovieList] = useState();
    let {id} = useParams();


    const {movie,watchList:{results}} = useSelector(store => store.movieReducer);

    const dispatch = useDispatch();


    const ses = localStorage.getItem('sessionId');
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));


    const age = {
        kids: '<18',
        adult: '18+'
    };


    useEffect(()=>{
        dispatch(movieActions.getMovie(id));
        if(isLogin){
            dispatch(movieActions.getWatchList({page:1,session_id:ses}));
        }

    },[])


    let isMovieInWatchList = results?.findIndex(value => +value.id === +id);

    useEffect(()=>{

            if(isMovieInWatchList === -1){
                setMovieList(false)
            }
            else {
                setMovieList(true)
            }
        },
    [isMovieInWatchList])



    const addFilm = () =>{
         let obj = {
            "media_type": "movie",
            "media_id": id,
            "watchlist": true
        }
        dispatch(movieActions.correctWatchList({session_id:ses,object:obj}))
        setMovieList(true)
    };

    const deleteFilm = () =>{
        let obj = {
            "media_type": "movie",
            "media_id": id,
            "watchlist": false
        }
        dispatch(movieActions.correctWatchList({session_id:ses,object:obj}))
        setMovieList(false)
    };


    return(
    <div className={css.MovieFullInformation}>
            <div className={css.image}>
                <img src={baseURLImage.poster_sizes.w780 + movie.backdrop_path} alt={movie.title}/>
            </div>
        <div className={css.info}>
            <div className={css.body}>
                <div className={css.poster}>
                    <img src={baseURLImage.poster_sizes.w500 + movie.poster_path} alt={movie.title}/>
                </div>
                <div className={css.details}>
                    <div className={css.title}>
                        <h1>{movie.original_title}</h1>
                    </div>
                    <div className={css.stars}>
                        <Star rating={movie.vote_average} numberOfStars={10}/>
                    </div>
                    <div className={css.badge}>
                        {movie.genres && movie.genres.map(({name}, index1) => <GenreBadge key={index1} ganreBadge={name}/>)}
                    </div>

                    {movie.adult ?
                        <div className={css.adult}>
                            <div>
                                {age.adult}
                            </div>

                        </div> :
                        <div className={css.kids}>
                            <div>
                                {age.kids}
                            </div>
                        </div>}
                    {movie.overview}

                    {isLogin &&
                        <div>
                            {movieList ?
                                <div>
                                    <button onClick={deleteFilm}>delete from Watchlist </button>
                                </div>
                                :
                                <div>
                                    <button onClick={addFilm}>add to Watchlist </button>
                                </div>
                            }
                        </div>}


                </div>

            </div>

        </div>




    </div>

        );
}