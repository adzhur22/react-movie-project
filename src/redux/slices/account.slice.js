import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {accountService} from "../../services";


const getDetails = createAsyncThunk(
    'accountSlice/getDetails',
    async (session_id,{rejectWithValue})=>{
        try {
            const {data} = await accountService.getDetails(session_id);

            return data
        }catch (e){
            console.log(e);
        }
    }
)


const initialState = {
    accountDetails:null,
}


const accountSlice = createSlice({
    name:'accountSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getDetails.fulfilled,(state, action) => {
            state.accountDetails = action.payload

        })

})

const {reducer: accountReducer}= accountSlice;

const accountAction = {
    getDetails
};


export {accountReducer, accountAction}
