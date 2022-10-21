import {urls} from "../configs";
import {axiosServiceMovie} from "./axios.service.movie";



const authService = {
    getRequestToken:() => axiosServiceMovie.get(urls.authTokenNew),
    authSession:(request_token) => axiosServiceMovie.post(urls.authSession,request_token),
    deleteSession:(id) => axiosServiceMovie.delete(urls.deleteSession,{data:{session_id:id}})
}

export {authService}