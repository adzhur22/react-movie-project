import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import css from "./movieFullInformation.module.css";
import {baseURLImage} from "../../configs/urls";
import {Star} from "../star/Star";
import {GenreBadge} from "../genreBadge/GenreBadge";

export function MovieFullInformation(){

    const dispatch = useDispatch();
    const {movie} = useSelector(store => store.movieReducer);

    const age = {
        kids: '<18',
        adult: '18+'
    };

    let {id} = useParams();

    useEffect(()=>{
        dispatch(movieActions.getMovie(id))
    },[id])


    console.log(movie);

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
                </div>
            </div>

        </div>




    </div>

        );
}