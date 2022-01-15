import { createSlice } from "@reduxjs/toolkit";

const users = [{ username: "naimur", password: 123456 }];

const userState = {
    users: [],
    isAuthenticated: false,
    isLoading: false,
    error: "",
    remember: false,
};

const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        login: (state, action) => {
            state.isLoading = true;
            // validate from server
            const validateUser = users.filter(
                (user) =>
                    user.username === action.payload.username &&
                    user.password === action.payload.password
            );
            // after validating setLoading false
            if (validateUser.length > 0) {
                state.isAuthenticated = true;
                state.error=null;
            } else {
                state.isAuthenticated = false;
                state.error='no user found';
            }
            state.isLoading = false;
        },
        deleteuser: (state, action) => {
            state.user = state.users.filter((u) => u._id !== action.payload);
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
