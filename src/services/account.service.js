import {urls} from "../configs";
import {axiosServiceMovie} from "./axios.service.movie";



const accountService = {
    getDetails:(session_id) => axiosServiceMovie.get(urls.getDetails,{params:{'session_id':session_id}})

}

export {accountService}