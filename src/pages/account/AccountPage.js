import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {authAction} from "../../redux/slices";
import {accountAction} from "../../redux/slices";
import {AccountCard} from '../../components/accountCard';
import css from './AccountPage.module.css'
import {movieActions} from "../../redux/slices";
import {MovieCard} from "../../components/movieCard";
import {genreActions} from "../../redux/slices";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';


export function AccountPage(){


    const {sessionId} = useSelector(store => store.authReducer);
    const {watchList} = useSelector(store => store.movieReducer);
    const dispatch = useDispatch();


    let [query, setQuery] = useSearchParams({page:'1'});


    let navigate = useNavigate();

    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    const ses = localStorage.getItem('sessionId');


    useEffect(()=>{
        if(query.get('approved') && !isLogin){
            dispatch(authAction.authSession({request_token:query.get('request_token')}));
        }
        if(query.get('denied')){
            console.log('workinh!')
        }
        if(isLogin) {
            dispatch(accountAction.getDetails(ses));
            dispatch(genreActions.getGenres());
            dispatch(movieActions.getWatchList({page:query.get('page'),session_id:ses}));
        }
    },[sessionId])



    const logOut = () =>{
        dispatch(authAction.authDelete(ses));
        localStorage.removeItem('sessionId');
        navigate('/movies')

    }


    const prevPage = () => {
            dispatch(movieActions.getWatchList({page:+query.get('page') - 1,session_id:ses}));
             setQuery({page:(+query.get('page') - 1).toString()})
            window.scrollTo(0, 0)
        }

    const nextPage = () => {
            dispatch(movieActions.getWatchList({page:+query.get('page') + 1,session_id:ses}));
            setQuery({page:(+query.get('page') + 1).toString()})
            window.scrollTo(0, 0)
    }


    return(
    <div className={css.AccountPage}>
        {isLogin ?
            <div>
                <div className={css.logOut} onClick={logOut}>
                    <h4>Log Out</h4>
                    <FontAwesomeIcon icon={faRightToBracket}/>
                </div>

                    <div className={css.info}>
                        <div className={css.AccountCardBox}>
                            <div className={css.AccountCard}>
                                <AccountCard/>
                            </div>
                            <div className={css.text}>
                                <img src={'https://www.pngplay.com/wp-content/uploads/12/Arrow-Transparent-PNG.png'} alt={'avatar'}/>
                                <h4>You can change your avatar, click on picture and read instruction</h4>

                            </div>
                        </div>
                        <div className={css.watchList}><h2>WATCH LIST</h2></div>
                            {watchList.results && watchList.results.map(value=> <MovieCard key={value.id} movie={value}/> )}


                    </div>
                <div className={css.button}>
                    <button disabled={watchList.page===1} onClick={()=> prevPage()}>prev</button>
                    <button disabled={watchList.page===500 ||watchList.page >= watchList.total_pages} onClick={()=> nextPage()}>next</button>
                </div>
                </div>


            :
            <h2 className={css.denied} >You haven't approved login in your account!</h2>
        }



    </div>

        );
}
