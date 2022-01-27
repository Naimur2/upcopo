import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const followings = [];

const followingsState = {
    followings: [],
};

const followingsSlice = createSlice({
    name: "followings",
    initialState: followingsState,
    reducers: {
        setFollowings: (state, action) => {
            state.followings = action.payload;
        },
        followingsHandler: (state, action) => {
            const followersId = action.payload;
            const iAvailablie =
                state.followings.filter(
                    (like) => like.followersId === followersId
                ).length > 0;

            if (!iAvailablie) {
                state.followings.push({
                    _id: `${Date.now().toString()}-${followersId}`,
                    followersId,
                });
            } else {
                const newState = state.followings.filter(
                    (like) => like.followersId !== followersId
                );
                state.followings = newState;
            }
        },

        removefollowings: (state, action) => {
            state.followings = [];
        },
    },
});

export const followingsAction = followingsSlice.actions;
export default followingsSlice.reducer;

export const getFollowings = () => {
    return (dispatch) => {
        dispatch(followingsAction.setFollowings(followings));
    };
};

// it will clear state
export const clearFollowings = () => {
    return (dispatch) => {
        dispatch(followingsAction.removefollowings());
    };
};

// it will remove from server
export const clearDbFollowings = () => {
    return (dispatch) => {
        dispatch(followingsAction.removefollowings());
    };
};
