import axios from "axios";

import {baseURL} from "../configs";
import {token} from "../configs";


const axiosServiceMovie = axios.create({
   baseURL,
   headers:{
        Authorization: `Bearer ${token}`,
       'Content-Type': 'application/json;charset=utf-8'
    }
});

export {axiosServiceMovie}