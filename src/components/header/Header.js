import css from './Header.module.css'


export function Header(){

        return(
    <div className={css.Header}>


        <div className={css.image}>
            <img src={'https://www.pngmart.com/files/5/Movie-PNG-Image.png'} alt={'movie'}/>
        </div>

    </div>

        );
}