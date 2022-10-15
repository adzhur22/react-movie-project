import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_,{rejectWithValue})=>{
        try {
          const {data} = await movieService.getMovie();
          return data
        }catch (e){
            console.log(e);
        }
    }
)



const initialState = {
  movies:{},
  movie:{}
}


const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getMovies.fulfilled,(state, action) => {
            state.movies = action.payload;
        })

})

const movieActions = {
    getMovies
};

const {reducer:movieReducer} = movieSlice;

export {movieReducer, movieActions}
