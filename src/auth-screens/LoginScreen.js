import React from "react";
import Heading from "./common/Heading";
import FormTitle from "./common/FormTitle";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import LoginForm from "./forms/LoginForm";
import { useDispatch } from "react-redux";
import userActions from "../../store/slices/userSlice";

export default function LoginScreen() {
    const dispatch = useDispatch();

    const formSubmitHandler = (formData) => {
        dispatch(userActions.login(formData));
        console.log(formData);
    };
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Log In Your NFT’s Market"
                    subtitle={"Use your oasis account"}
                />
                <FormTitle title={"Log in"} />
                <LoginForm onFormSubmit={formSubmitHandler} />
            </Screen>
        </KeyBoardView>
    );
}
