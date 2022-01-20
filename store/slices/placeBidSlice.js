import { createSlice } from "@reduxjs/toolkit";

const placebidState = {
    isOpen: false,
};

const placebidSlice = createSlice({
    name: "placebid",
    initialState: placebidState,
    reducers: {
        openAction: (state, action) => {
            console.log(state)
            state.isOpen = !state.isOpen;
        },
    },
});

export const placebidActions = placebidSlice.actions;
export default placebidSlice.reducer;
