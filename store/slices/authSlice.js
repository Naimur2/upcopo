import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cts = [
    { username: "naimur", password: "123456", email: "hgfhfg@fds.vh" },
];

const authState = {
    _id: "100",
    isAuthenticated: true,
    remember: false,
    password: "1234",
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
        thunkAPI.dispatch(authActions.setLoading(true));
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

