import React, { useState } from "react";
import { Stack } from "native-base";
import UtilityBtn from "../../utility/UtilityBtn";
import FormCheckBox from "../common/FormCheckBox";
import FormFooter from "../common/FormFooter";
import FormInput from "../../utility/FormInput";

import { useNavigation } from "@react-navigation/native";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPassword, setIsPassword] = useState(true);

    const navigation = useNavigation();

    const nameChangeHandler = (value) => {
        setUsername(value);
    };

    const passwordChangeHandler = (value) => {
        setPassword(value);
    };

    const isPasswordChangeHandler = () => {
        setIsPassword(!isPassword);
    };

    return (
        <Stack space="3">
            <FormInput
                value={username}
                onChangeText={(text) => nameChangeHandler(text)}
                placeHolder={"Name"}
                leftIcon={"profile"}
            />
            <FormInput
                value={password}
                onChangeText={(text) => passwordChangeHandler(text)}
                placeHolder={"Password"}
                leftIcon={"lock"}
                rightIcon={
                    password.length > 0 && (isPassword ? "eye-open" : "eye-off")
                }
                type={isPassword && "password"}
                onRightIconPress={isPasswordChangeHandler}
            />
            <FormCheckBox
                checkBoxText={"Remember Me"}
                secondaryText={"Forget password ?"}
                onForgetPress={() => navigation.navigate("ForgotPass")}
            />
            <UtilityBtn mt="8%" varient={"disabled"} title={"Log In"} />
            <FormFooter
                bottomText={" Didn’t have an account?"}
                linkText={"Sign Up"}
                onLinkPress={() => navigation.navigate("Register")}
            />
        </Stack>
    );
}
