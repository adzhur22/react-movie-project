import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";



const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getGenres();

            return data
        }catch (e){
            console.log(e);
        }
    }
)

const initialState = {
    genres:{}
}


const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getGenres.fulfilled,(state, action) => {
            state.genres = action.payload
        })

})

const {reducer: genreReducer}= genreSlice;

const genreActions = {
    getGenres
};



export {genreReducer, genreActions}
