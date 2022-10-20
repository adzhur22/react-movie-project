import css from './Header.module.css'


export function Header(){

        return(
    <div className={css.Header}>


        <div className={css.image}>
            <img src={'https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png'} alt={'movie'}/>
        </div>

    </div>

        );
}