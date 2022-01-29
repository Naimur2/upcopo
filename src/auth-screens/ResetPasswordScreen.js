import React from "react";
import KeyBoardView from "../utility/KeyBoardView";
import Screen from "../utility/Screen";
import Heading from "./common/Heading";
import ResetPasswordForm from "./forms/ResetPasswordForm";
import { useNavigation } from "@react-navigation/native";
import { useToast } from 'native-base';


export default function ResetPasswordScreen() {
    const navigation = useNavigation();
    const toast = useToast();
    const formSubmitHandler = (data) => {
        toast.show({
            description: "Your password has been reset successfully, please login with your new password",
          })
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
