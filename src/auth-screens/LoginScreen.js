import React from "react";
import Heading from "./common/Heading";
import FormTitle from "./common/FormTitle";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import LoginForm from "./forms/LoginForm";

export default function LoginScreen() {
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Log In Your NFT’s Market"
                    subtitle={"Use your oasis account"}
                />
                <FormTitle title={"Log in"} />
                <LoginForm />
            </Screen>
        </KeyBoardView>
    );
}
