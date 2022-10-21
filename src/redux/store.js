import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {accountReducer, authReducer, genreReducer, movieReducer, themeModeReducer} from "./slices";


const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeModeReducer,
    authReducer,
    accountReducer
});

const setupStore = () => configureStore({reducer:rootReducer});

export {setupStore}