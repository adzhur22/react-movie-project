import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../../services";


const getRequestT = createAsyncThunk(
    'authSlice/getRequestT',
    async (_,{rejectWithValue})=>{
        try {
            const {data:{request_token}} = await authService.getRequestToken();
            return request_token
        }catch (e){
            console.log(e);
        }
    }
)

const authSession = createAsyncThunk(
    'authSlice/getSessionId',
    async (request_token,{rejectWithValue})=>{
        try {
            const {data:{session_id}} = await authService.authSession(request_token);
            return session_id
        }catch (e){
            console.log(e);
        }
    }
)

const authDelete = createAsyncThunk(
    'authSlice/logOut',
    async (id,{rejectWithValue})=>{
        try {
            await authService.deleteSession(id)
        }catch (e){
            console.log(e);
        }
    }
)


const initialState = {
    requestToken:null,
    sessionId:null,

}


const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getRequestT.fulfilled,(state, action) => {
            state.requestToken = action.payload

        })
        .addCase(authSession.fulfilled,(state, action) =>{
            state.sessionId = action.payload;
            localStorage.setItem('sessionId', action.payload);
            localStorage.setItem('isLogin','true')
        })
        .addCase(authDelete.fulfilled,state => {
            localStorage.removeItem('isLogin')
            localStorage.removeItem('watchList');
        })
})

const {reducer: authReducer}= authSlice;

const authAction = {
    getRequestT,
    authSession,
    authDelete
};


export {authReducer, authAction}
