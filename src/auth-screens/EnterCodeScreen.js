import React from "react";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import Heading from "./common/Heading";
import EnterCodeForm from "./forms/EnterCodeForm";

export default function EnterCodeScreen() {
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Enter Code"
                    subtitle={
                        'An 4 digit code has been sent to "adam00@gmail.com"'
                    }
                />
                <EnterCodeForm />
            </Screen>
        </KeyBoardView>
    );
}
