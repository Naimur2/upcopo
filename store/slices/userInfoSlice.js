import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userState = {
    _id: "100",
    username: "vondo",
    user: "Md Ahnaf aksar",
    mobile: "(307) 555-0133",
    email: "ahnafa.fgs5@co.li",
    avatar: "https://image.freepik.com/free-vector/cute-panda-gaming-cartoon-icon-illustration-animal-technology-icon-concept-premium-flat-cartoon-style_138676-2685.jpg",
    private: true,
    password:'123456'
};

const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        togglePrvacy: (state, action) => {
            state.private = action.payload;
        },
        updateProfile: (state, action) => {
            console.log(action.payload)
        },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;



export const setUserPrivacy = createAsyncThunk(
    "user/setUserPrivacy ",
    async (privacy, thunkAPI) => {
        const states = thunkAPI.getState();
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(res)
            thunkAPI.dispatch(userActions.togglePrvacy(!states.user.private));
            return await !states.user.private;
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);

export const updateUserPrivacy = createAsyncThunk(
    "user/setUserPrivacy ",
    async (privacy, thunkAPI) => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            thunkAPI.dispatch(userActions.togglePrvacy(privacy));
            console.log(res)
            return await privacy;
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);

export const updateUserProfile = createAsyncThunk(
    "user/updateProfile ",
    async (details, thunkAPI) => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(res)
            thunkAPI.dispatch(userActions.updateProfile(details));
            return await privacy;
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);
