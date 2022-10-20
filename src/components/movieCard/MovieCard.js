import {baseURLImage} from "../../configs/urls";
import css from './MovieCard.module.css'
import {useSelector} from "react-redux";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {useNavigate} from "react-router-dom";
import {Star} from "../star/Star";

export function MovieCard({movie}){

    const {genres} = useSelector(store => store.genreReducer);


    let navigate = useNavigate();

    const index = [];

    for (let i = 0; i < movie.genre_ids.length; i++) {
        for (let j = 0; j < genres.genres.length; j++) {
            if(movie.genre_ids[i] === genres.genres[j].id){
                index.push(genres.genres[j].name)
            }
        }
    }



    return(

        <div className={css.MovieCardFull}>
            <div className={css.badge}>
                {index.map((value, index1) => <GenreBadge key={index1} ganreBadge={value}/>)}
            </div>
            <div className={css.MovieCard}>

                <div className={css.image}>
                    <img src={baseURLImage.poster_sizes.w342 + movie.poster_path} alt={movie.title}/>
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