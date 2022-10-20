import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../redux/slices/auth.slice";
import {useNavigate} from "react-router-dom";

export function LoginPage(){

    const {requestToken} = useSelector(store => store.authReducer);

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const sesID = localStorage.getItem('sessionId');


       useEffect(()=>{
           if(!sesID){
               if(!requestToken){
                   dispatch(authAction.getRequestT())
               }else if(requestToken) {
                   window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/account`;
               }
           }else {
               navigate('/account')
           }
       },[requestToken]);

        return(
    <div>
        login

    </div>

        );
}