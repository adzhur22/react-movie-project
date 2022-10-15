import {baseURLImage} from "../../configs/urls";
import css from './MovieCard.module.css'

export function MovieCard({movie}){
    console.log(movie);



    return(
    <div className={css.MovieCard}>
        <div className={css.image}>
            <img src={baseURLImage + movie.poster_path} alt={movie.title}/>
        </div>
        <div className={css.title}>
            <h4>{movie.title}</h4>
        </div>
        <div className={css.overview}>
            <p>{movie.overview}...</p>
        </div>
        <div className={css.button}>
            <button>read more</button>
        </div>

    </div>

        );
}