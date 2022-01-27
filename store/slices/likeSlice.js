import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const likedHouses = [];

const likesState = {
    likes: [],
};

const likeSlice = createSlice({
    name: "likes",
    initialState: likesState,
    reducers: {
        setLikes: (state, action) => {
            state.likes = action.payload;
        },
        likeHandler: (state, action) => {
            const hId = action.payload;
            console.log(hId);
            const iAvailablie =
                state.likes.filter((like) => like.houseId === hId).length > 0;
            if (!iAvailablie) {
                console.log('not')
                state.likes.push({
                    _id: `${Date.now().toString()}-${hId}`,
                    houseId: hId,
                });
            }
            else{
                const newState= state.likes.filter((like) => like.houseId !== hId);
                state.likes=newState;
            }

            // let likes = state.likes;

            // if (iAvailablie) {
            //     state.likes = likes.filter((like) => like.houseId === hId);

            // } else {
            //     const housedetails = { _id: `${Date.now().toString()}-${hId}`, houseId: hId };
            //     state.likes.push(housedetails);
            // }
        },
        removeNewLike: (state, action) => {
            state.likes = action.payload;
        },

        removeLikes: (state, action) => {
            state.likes = [];
        },
    },
});

export const likeAction = likeSlice.actions;
export default likeSlice.reducer;

export const getLikes = () => {
    return (dispatch) => {
        dispatch(likeAction.setLikes(likedHouses));
    };
};

// it will clear state
export const clearLikes = () => {
    return (dispatch) => {
        dispatch(likeAction.removeLikes());
    };
};

// it will remove from server
export const clearDbLikes = () => {
    return (dispatch) => {
        dispatch(likeAction.removeLikes());
    };
};

export const getIsLiked = createAsyncThunk(
    "likes/isLiked ",
    async (houseId, thunkAPI) => {
        try {
            const { likes } = thunkAPI.getState().likesState;

            return likes.filter((like) => like.houseId === houseId).length > 0;
            return isLiked;
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);
