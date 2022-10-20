import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";


const initialState = {
    movies:{},
    movie:{},
    discoverMovieParams:{page: '', with_genres:'', vote_average:''},
    searchMovieStatus:false,
    searchMovie: {},

}



const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page,with_genres,vote_average},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovies(page, with_genres, vote_average);
            return data
        }catch (e){
            console.log(e);
        }
    }
)


const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async (id,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovie(id);
            return data
        }catch (e){
            console.log(e);
        }
    }
)

const searchMovie = createAsyncThunk(
    'movieSlice/searhMovie',
    async ({page,query},{rejectWithValue})=>{
        try {
            const {data} = await movieService.searchMovie(page,query);
            return data
        }catch (e){
            console.log(e);
        }
    }
)

// const getWatchList = createAsyncThunk(
//     'movieSlice/getWatchList',
//     async ({session_id,page},{rejectWithValue})=>{
//         try {
//             const {data} = await movieService.getWatchList(session_id,page);
//             console.log(data)
//             return data
//         }catch (e){
//             console.log(e);
//         }
//     }
// )





const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers: {
        addSearch: (state, action) => {
            state.searchMovie = action.payload;
        },
        addPageParams: (state, action) => {
            state.discoverMovieParams.page = action.payload;
        },
        addGenreParams: (state, action) => {
            state.discoverMovieParams.with_genres = action.payload;
        },
        addVoteAverageParams: (state, action) => {
            state.discoverMovieParams.vote_average = action.payload;
        }
    },
    extraReducers:builder => builder
        .addCase(getMovies.fulfilled,(state, action) => {
            state.movies = action.payload;
            state.searchMovieStatus = false;
        })
        .addCase(getMovie.fulfilled,(state, action) => {
            state.movie = action.payload;
        })
        .addCase(searchMovie.fulfilled,(state, action) => {
            state.movies = action.payload;
            state.searchMovieStatus = true;
        })



})

const {reducer:movieReducer, actions:{addSearch, addPageParams, addGenreParams, addVoteAverageParams}} = movieSlice;

const movieActions = {
    getMovies,
    getMovie,
    searchMovie,
    addSearch,
    addPageParams,
    addGenreParams,
    addVoteAverageParams
    // getWatchList
};

export {movieReducer, movieActions}
