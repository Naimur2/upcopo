import { createSlice } from "@reduxjs/toolkit";

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



const authSlice = createSlice({
    name: "user",
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
        otpValidation:(state,action)=>{
            console.log(action.payload)
            state.isOtpValidated=action.payload;
        }
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

export const validateOTP = (data,navigation) => {
    return (dispatch,getState) => {
        if(data.type==='reset'){
            let k='1111'
            dispatch(authSlice.actions.otpValidation(data.otp===k))
            // navigation.navigate('ResetPassword')
        }
        // if type is register then update isAuthenticated to true which will redirect user to dashboard
        // if type is reset then update isOtpValidated to true which will redirect user to reset password
        // else call erros from uiSlice set type to otp and add an error message
        // like {type:'otp',message:'Your Message'}
    };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
