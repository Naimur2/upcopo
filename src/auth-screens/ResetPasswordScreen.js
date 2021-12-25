import React from "react";
import Heading from "./common/Heading";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import ResetPasswordForm from "./forms/ResetPasswordForm";

export default function ResetPasswordScreen() {
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Reset Password"
                    subtitle={"Enter your new password Now"}
                    maxHW={250}
                />
                <ResetPasswordForm />
            </Screen>
        </KeyBoardView>
    );
}
