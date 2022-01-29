import { useNavigation } from "@react-navigation/native";
import { useToast } from 'native-base';
import React from "react";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import Toast from "../utility/Toast";
import Heading from "./common/Heading";
import ResetPasswordForm from "./forms/ResetPasswordForm";


export default function ResetPasswordScreen() {
    const navigation = useNavigation();
    const toast = useToast();
    const formSubmitHandler = (data) => {
        toast.show({
            placement: "bottom",
            duration: 2000,
            render: () => (
                <Toast
                    text={"Your link has been copied, you can share now"}
                />
            ),
        });
        navigation.navigate("Login");

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
