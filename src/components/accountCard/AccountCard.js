import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from "./AccountCard.module.css";
import {baseURLImage} from "../../configs";


export function AccountCard(){
    const {accountDetails} = useSelector(store => store.accountReducer);

    let navigate = useNavigate();

        return(
    <div className={css.AccountCard}>
        <div className={css.image} onClick={()=> navigate('/change-avatar')}>
            {accountDetails?.avatar?.tmdb?.avatar_path
                ?
                <img src={baseURLImage.profile_sizes.w185 + accountDetails.avatar.tmdb.avatar_path} alt={'Avatar'}/>
                :
                <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt={'Avatar'}/>
            }
        </div>
        <h3>Username: {accountDetails?.username}</h3>
    </div>

        );
}