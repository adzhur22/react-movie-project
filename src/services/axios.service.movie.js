import axios from "axios";
import {baseURL} from "../configs/urls";
import {token} from "../configs/token.api";


const axiosServiceMovie = axios.create({
   baseURL,
   headers:{
        Authorization: `Bearer ${token}`,
       'Content-Type': 'application/json;charset=utf-8'
    }
});

export {axiosServiceMovie}