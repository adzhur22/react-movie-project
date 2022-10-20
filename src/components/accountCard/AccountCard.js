import {useSelector} from "react-redux";
import css from "./AccountCard.module.css";
import {baseURLImage} from "../../configs/urls";
import {useNavigate} from "react-router-dom";

export function AccountCard(){
    const {accountDetails} = useSelector(store => store.accountReducer);

    let navigate = useNavigate();

    console.log(accountDetails)
        return(
    <div className={css.AccountCard}>
        <div className={css.image} onClick={()=> navigate('/change-avatar')}>
            {accountDetails?.avatar?.tmdb?.avatar_path ? <img src={baseURLImage.profile_sizes.w185 + accountDetails.avatar.tmdb.avatar_path}/> : <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'}/>}
        </div>
        <h3>Username: {accountDetails?.username}</h3>
    </div>

        );
}