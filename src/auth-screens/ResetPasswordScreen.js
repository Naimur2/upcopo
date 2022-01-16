import React from "react";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import Heading from "./common/Heading";
import ResetPasswordForm from "./forms/ResetPasswordForm";

export default function ResetPasswordScreen() {
    const formSubmitHandler = (data) => {
        console.log(data);
    };
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Reset Password"
                    subtitle={"Enter your new password Now"}
                    maxHW={250}
                />
                <ResetPasswordForm onFormSubmit={formSubmitHandler} />
            </Screen>
        </KeyBoardView>
    );
}
