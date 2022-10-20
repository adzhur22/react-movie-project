import css from './GenreBadge.module.css'

export function GenreBadge({ganreBadge}){
        return(
    <div className={css.GenreBadge}>
        <div className={css.text}>
            {ganreBadge}
        </div>


    </div>

        );
}