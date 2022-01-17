import {
    Spinner
} from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, extraActions } from "../../store/slices/authSlice";
import { uiActions } from "../../store/slices/uiSlice";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import Heading from "./common/Heading";
import OtpForm from "./forms/OtpForm";

export default function OtpScreen({ navigation, route }) {
    const { data, type } = route.params;
    console.log(route.params);

    const dispatch = useDispatch();
    let clean = true;
    const authState = useSelector((state) => state.auth);
    const uiState = useSelector((state) => state.ui);

    const otpSubmit = async (otp) => {
        console.log(uiState)
        try {
            const result = await dispatch(extraActions.verifyOtp(otp)).unwrap();
            dispatch(uiActions.setLoading(false))

            if (type === "reset") {
                navigation.navigate("ResetPassword");
            } else {
                dispatch(
                    authActions.login({
                        ...data,
                        isAuthenticated: true,
                        remember: true,
                    })
                );
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <KeyBoardView>
             {uiState.isLoading && <Spinner position={'absolute'} top={'50%'} size={'lg'} accessibilityLabel="Loading posts" />}
            <Screen>
                <Heading
                    title="Enter Code"
                    subtitle={`An 4 digit code has been sent to "${data.email}"`}
                />
                <OtpForm onSubmitOtp={otpSubmit} />
            </Screen>
        </KeyBoardView>
    );
}
