import React from "react";
import Heading from "./common/Heading";
import FormTitle from "./common/FormTitle";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import RegisterForm from "./forms/RegisterForm";

export default function RegisterScreen() {
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Create your OASIS Account"
                    subtitle={"Use your oasis account"}
                />
                <FormTitle title={"Create Account"} />
                <RegisterForm />
            </Screen>
        </KeyBoardView>
    );
}
