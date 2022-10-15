import axios from "axios";

import {token} from "../configs/token.api";
import {baseURL} from "../configs/urls";

const axiosServiceMovie = axios.create({
   baseURL,
   headers: {
      Authorization: `Bearer ${token}`
   }
});



export {axiosServiceMovie}