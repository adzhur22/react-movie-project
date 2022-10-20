import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movie.slice";
import {genreReducer} from "./slices/genres.slice";
import {themeModeReducer} from "./slices/theme.mode.slice";
import {authReducer} from "./slices/auth.slice";
import {accountReducer} from "./slices/account.slice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeModeReducer,
    authReducer,
    accountReducer
});

const setupStore = () => configureStore({reducer:rootReducer});

export {setupStore}