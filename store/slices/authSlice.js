import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const cts = [
    { username: "naimur", password: "123456", email: "hgfhfg@fds.vh" },
];

const authState = {
    _id: "100",
    username: "vondo",
    user: "Md Ahnaf aksar",
    mobile: "(307) 555-0133",
    email: "ahnafa.fgs5@co.li",
    avatar: "https://image.freepik.com/free-vector/cute-panda-gaming-cartoon-icon-illustration-animal-technology-icon-concept-premium-flat-cartoon-style_138676-2685.jpg",
    private: true,
    isAuthenticated: true,
    remember: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        login: (state, action) => {
            const { username, isAuthenticated, remember } = action.payload;
            state.username = username;
            state.isAuthenticated = isAuthenticated;
            state.remember = remember;
        },
        logOut: (state, action) => {
            state.username = "";
            state.isAuthenticated = false;
            state.remember = false;
        },
        togglePrvacy: (state, action) => {
            state.private = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

// these are the thunk
export const registerUser = (formData) => {
    return (dispatch) => {
        console.log(formData);
        // call backend data and dispatch actions to register
    };
};
export const loginUser = (formData) => {
    return (dispatch) => {
        // call backend data and dispatch actions to login
    };
};

// async thunk
// First, create the thunk
export const verifyOtp = createAsyncThunk(
    "auth/verifyOtp ",
    async (otp, thunkAPI) => {
        thunkAPI.dispatch(uiActions.setLoading(true));
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            return await res.json();
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);

export const setUserPrivacy = createAsyncThunk(
    "auth/setUserPrivacy ",
    async (privacy, thunkAPI) => {
        const states = thunkAPI.getState();
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            thunkAPI.dispatch(authActions.togglePrvacy(!states.auth.private));
            return await !states.auth.private;
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);
export const updateUserPrivacy = createAsyncThunk(
    "auth/setUserPrivacy ",
    async (privacy, thunkAPI) => {
        const states = thunkAPI.getState();
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            thunkAPI.dispatch(authActions.togglePrvacy(privacy));
            return await privacy;
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    }
);
