import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movie.slice";
import {genreReducer} from "./slices/genres.slice";
import {themeModeReducer} from "./slices/theme.mode.slice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeModeReducer
});

const setupStore = () => configureStore({reducer:rootReducer});

export {setupStore}