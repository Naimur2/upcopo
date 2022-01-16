import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateOTP } from "../../store/slices/authSlice";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import Heading from "./common/Heading";
import OtpForm from "./forms/OtpForm";


export default function OtpScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { data, type } = route.params;
    console.log(route.params)

    const dispatch =useDispatch()
    let clean = true;
    const authState = useSelector((state) => state.auth);

    const otpSubmit =  (otp) => {
         dispatch(validateOTP({ otp, type }));
    };

   

    return (
        <KeyBoardView>
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
