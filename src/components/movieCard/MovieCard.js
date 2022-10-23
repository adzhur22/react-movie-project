import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {baseURLImage} from "../../configs";
import css from './MovieCard.module.css'
import {GenreBadge} from "../genreBadge";
import {Star} from "../star";
import reservePoster from '../../files/image/reservePoster/ReservPoster.png'
import {genreActions} from "../../redux/slices";


export function MovieCard({movie}){

    const {genres} = useSelector(store => store.genreReducer);

    let navigate = useNavigate();

    const index = [];
    const dispatch = useDispatch();


    useEffect(()=>{
            dispatch(genreActions.getGenres());
    },[])


    if(genres.genres){
        for (let i = 0; i < movie.genre_ids.length; i++) {
            for (let j = 0; j < genres.genres.length; j++) {
                if(movie.genre_ids[i] === genres.genres[j].id){
                    index.push(genres.genres[j].name);
                }
            }
        }
    }


    let [page, setPage] =useState();
    let [pageReserve, setPageReserve] =useState(css.imageOff);


   const imageError = () =>{
       setPage(css.imageOff);
       setPageReserve(css.imageOn)
    }




    return(

        <div className={css.MovieCardFull}>

            <div className={css.badge}>
                {index.map((value, index1) => <GenreBadge key={index1} ganreBadge={value}/>)}
            </div>

            <div className={css.MovieCard}>

                <div className={css.image}>
                    <img className={page}  onError={imageError} src={baseURLImage.poster_sizes.w342 + movie.poster_path} alt={movie.title}/>
                    <img className={pageReserve} src={reservePoster} alt={movie.title}/>
                </div>

                <div className={css.stars}>
                    <Star rating={movie.vote_average} numberOfStars={10}/>
                </div>

                <div className={css.title}>
                    <h4>{movie.title}</h4>
                </div>

                <div className={css.overview}>
                    <p>{movie.overview}...</p>
                </div>

                <div className={css.button}>
                    <button onClick={()=> navigate(movie.id.toString())}>read more</button>
                </div>

            </div>
        </div>


        );
}