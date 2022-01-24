import { createSlice } from "@reduxjs/toolkit";
const likedHouses = [
];


const likesState = {
    likedHouses: [],
};

const likeSlice = createSlice({
    name: "likes",
    initialState: likesState,
    reducers: {
        setLikes: (state, action) => {
            state.notifications = action.payload;
        },
        addToLike: (state, action) => {
            state.notifications = action.payload;
        },
        removeFromLike: (state, action) => {
            state.notifications = action.payload;
        },
        removeLikes: (state, action) => {
            state.notifications = [];
        },
        
    },
});

export const likeAction = likeSlice.actions;
export default likeSlice.reducer;

export const getNotifications = () => {
    return (dispatch) => {
        dispatch(likeAction.setLikes(likedHouses));
    };
};

// it will clear state 
export const clearNotifications = () => {
    return (dispatch) => {
        dispatch(likeAction.removeLikes());
    };
};

// it will remove from server 
export const clearDbNotifications = () => {
    return (dispatch) => {
        dispatch(likeAction.removeLikes());
    };
};
