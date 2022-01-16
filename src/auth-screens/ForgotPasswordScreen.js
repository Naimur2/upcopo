import { useNavigation } from "@react-navigation/native";
import React from "react";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import FormTitle from "./common/FormTitle";
import Heading from "./common/Heading";
import ForgotPasswordForm from "./forms/ForgotPasswordForm";

export default function ForgotPasswordScreen() {
    const navigation = useNavigation();

    const formSubmitHandler = async (formData) => {
        navigation.push("SendOtp",{
            data:formData,
            type:'reset'
        });
    };

    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Forgot Password?"
                    subtitle={
                        "Please enter the address associated with your account."
                    }
                />
                <FormTitle title={"Email"} />
                <ForgotPasswordForm onFormSubmit={formSubmitHandler}/>
            </Screen>
        </KeyBoardView>
    );
}
