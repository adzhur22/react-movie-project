import css from './movieFullInformation.module.css'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";
import {baseURLImage} from "../../configs";

import {Star} from "../star";
import {GenreBadge} from "../genreBadge";
import reserveBackPage from "../../files/image/reserveBackPage/reserveBackPage.jpg";
import reservePoster from "../../files/image/reservePoster/ReservPoster.png";




export function MovieFullInformation(){


    let [movieList, setMovieList] = useState();
    let {id} = useParams();


    const {movie,watchList:{results}} = useSelector(store => store.movieReducer);

    const dispatch = useDispatch();

console.log(movie)

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



    useEffect(()=>{
        if(movie.backdrop_path){
            setPage(baseURLImage.poster_sizes.w780 + movie.backdrop_path);
        }else {
            setPage(reserveBackPage);
        }
    },[movie])


    let [page, setPage] =useState();
    let [pageReserve, setPageReserve] =useState(css.imageOff);


    const imageError = () =>{
        setPage(css.imageOff);
        setPageReserve(css.imageOn)
    }



        return(
<div className={css.MovieFullInformation}>

     <div className={css.back} style={{backgroundImage:`url('${page}')`}}></div>
        <div className={css.info}>
                <div className={css.details}>

                    <div className={css.image}>
                        <img className={page}  onError={imageError} src={baseURLImage.poster_sizes.w342 + movie.poster_path} alt={movie.title}/>
                        <img className={pageReserve} src={reservePoster} alt={movie.title}/>
                    </div>

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
                    <div className={css.overview}>{movie.overview}</div >


                </div>
            {isLogin ?
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
                </div>
            :
                <div>
                  <h3 className={css.red}>You must login in your account that you can add movies in your "watch list"!</h3>
                </div>}
            </div>

</div>



        );
}