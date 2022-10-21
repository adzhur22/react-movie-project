import {useNavigate} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClapperboard, faStarHalfStroke, faCircleUser, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import dark from './Menu.module.css'
import white from './MenuLight.module.css'
import {useTheme} from "../../hooks";


export function Menu(){

    let navigate = useNavigate();

    let {css, swich} = useTheme(white,dark);

        return(
    <div className={css.menu} >
        <div onClick={()=> navigate('/login')} className={css.icon}>
            <p>My Account</p>
            <div className={css.awesome}>
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </div>

        </div>
        <div onClick={()=> navigate('/movies')} className={css.icon} >
            <p>Movies</p>
            <div className={css.awesome}>
                    <FontAwesomeIcon icon={faClapperboard}></FontAwesomeIcon>
            </div>
        </div>
        <div className={css.icon}>
            <p>Best Rating</p>
            <div className={css.awesome}>
            <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
            </div>
        </div>
        <div onClick={()=> swich()} className={css.icon} >
            <p>Switch Theme</p>
            <div className={css.awesomeLight}>
                <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
            </div>
        </div>

    </div>

        );
}