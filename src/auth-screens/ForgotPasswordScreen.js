import React from "react";
import Heading from "./common/Heading";
import FormTitle from "./common/FormTitle";
import Screen from "../utility/Screen";
import KeyBoardView from "../utility/KeyBoardView";
import ForgotPasswordForm from "./forms/ForgotPasswordForm";

export default function ForgotPasswordScreen() {
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
                <ForgotPasswordForm />
            </Screen>
        </KeyBoardView>
    );
}
