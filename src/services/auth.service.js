import {urls} from "../configs/urls";
import {axiosServiceMovie} from "./axios.service.movie";



const authService = {
    getRequestToken:() => axiosServiceMovie.get(urls.authTokenNew),
    authSession:(request_token) => axiosServiceMovie.post(urls.authSession,request_token)
}

export {authService}