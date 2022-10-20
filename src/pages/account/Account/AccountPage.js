import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../../redux/slices/auth.slice";
import {accountAction} from "../../../redux/slices/account.slice";
import {AccountCard} from "../../../components/accountCard/AccountCard";

import css from './AccountPage.module.css'


export function AccountPage(){

    const dispatch = useDispatch();
    const {sessionId} = useSelector(store => store.authReducer);


    let [query,] = useSearchParams();

    const ses = localStorage.getItem('sessionId');


   useEffect(()=>{
       if(sessionId){
           localStorage.setItem('sessionId', sessionId)
           dispatch(accountAction.getDetails(sessionId));
       }
   },[sessionId])


    useEffect(()=>{
        if(query.get('request_token')){
            dispatch(authAction.authSession({request_token:query.get('request_token')}))
        }
        else {
            dispatch(accountAction.getDetails(ses));
        }
    },[])





    return(
    <div className={css.AccountPage}>
      <div className={css.AccountCardBox}>
          <div className={css.AccountCard}>
              <AccountCard/>
          </div>
          <div className={css.text}>
              <h3>You can change your avatar, click on picture and read instruction</h3>
              <img src={'https://www.pngplay.com/wp-content/uploads/12/Arrow-Transparent-PNG.png'} alt={'image'}/>

          </div>
      </div>

      <div className={css.info}>

      </div>


    </div>

        );
}
