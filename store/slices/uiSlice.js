import { createSlice } from "@reduxjs/toolkit";

const uiState={
    isLoading: false,
    error: {},
}

const uiSlice=createSlice({
    name:'ui',
    initialState:uiState,
    reducers:{
        setError:(state,action)=>{
            state.error = action.payload.error;
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload.isLoading;
        }
    }

})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;