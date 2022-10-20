import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../../redux/slices/auth.slice";
import {accountAction} from "../../../redux/slices/account.slice";
import {AccountCard} from "../../../components/accountCard/AccountCard";

import css from './AccountPage.module.css'
import {movieActions} from "../../../redux/slices/movie.slice";
import {MovieCard} from "../../../components/movieCard/MovieCard";


export function AccountPage(){

    const dispatch = useDispatch();
    const {sessionId} = useSelector(store => store.authReducer);
    const {watchList} = useSelector(store => store.movieReducer);

    let [query,] = useSearchParams();

    const ses = localStorage.getItem('sessionId');


   useEffect(()=>{
       if(sessionId){
           localStorage.setItem('sessionId', sessionId)
           dispatch(accountAction.getDetails(sessionId));
       }

       dispatch(movieActions.getWatchList(ses,1))

   },[sessionId])


    useEffect(()=>{
        if(query.get('request_token')){
            dispatch(authAction.authSession({request_token:query.get('request_token')}))
        }
        else {
            dispatch(accountAction.getDetails(ses));
        }
    },[])



console.log(watchList);

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
          {watchList.results && watchList.results.map(value=> <MovieCard key={value.id} movie={value}/> )}
      </div>


    </div>

        );
}
