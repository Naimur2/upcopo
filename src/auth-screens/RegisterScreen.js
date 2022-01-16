import React from "react";
import Heading from "./common/Heading";
import FormTitle from "./common/FormTitle";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import RegisterForm from "./forms/RegisterForm";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const formSubmitHandler = async (formData) => {
        await dispatch(registerUser(formData));
        navigation.navigate("SendOtp",{
            data:formData,
            type:'register'
        });
    };
    return (
        <KeyBoardView>
            <Screen>
                <Heading
                    title="Create your OASIS Account"
                    subtitle={"Use your oasis account"}
                />
                <FormTitle title={"Create Account"} />
                <RegisterForm onFormSubmit={formSubmitHandler} />
            </Screen>
        </KeyBoardView>
    );
}
