import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const cts = [
    { username: "naimur", password: "123456", email: "hgfhfg@fds.vh" },
];

const authState = {
    users: cts,
    username: "",
    isAuthenticated: false,
    remember: false,
    isOtpValidated: false,
};

// async thunk
// First, create the thunk
const verifyOtp = createAsyncThunk(
    "auth/verifyOtp ",
    async (otp, thunkAPI) => {
        thunkAPI.dispatch(uiActions.setLoading(true))
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
        otpValidation: (state, action) => {
            console.log(action.payload);
            state.isOtpValidated = action.payload;
        },
    },
   
});

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



export const authActions = authSlice.actions;

export const extraActions = { verifyOtp };

export default authSlice.reducer;
