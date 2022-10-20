import {createSlice} from "@reduxjs/toolkit";

let swich = true;

const initialState = {
    theme:"dark"
}


const themeModeSlice = createSlice({
    name:'themeModeSlice',
    initialState,
    reducers:{
        changeTheme:(state) => {
            if (swich){
                state.theme = 'white';
                swich = false;
            }else {
                state.theme = 'dark';
                swich = true;
            }
        }
    },

})

const {reducer:themeModeReducer, actions:{changeTheme} }= themeModeSlice;

const themeActions = {
    changeTheme
};



export {themeModeReducer, themeActions}