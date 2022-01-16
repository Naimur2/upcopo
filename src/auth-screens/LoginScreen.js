import React from "react";
import Heading from "./common/Heading";
import FormTitle from "./common/FormTitle";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import LoginForm from "./forms/LoginForm";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";

export default function LoginScreen() {
    const dispatch = useDispatch();

    const formSubmitHandler = async (formData) => {
        await dispatch(loginUser(formData));
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
