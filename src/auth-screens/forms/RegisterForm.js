import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "native-base";
import UtilityBtn from "../../utility/UtilityBtn";
import FormCheckBox from "../common/FormCheckBox";
import FormFooter from "../common/FormFooter";
import FormInput from "../../utility/FormInput";

export default function RegisterForm() {

    // will use formik for validation

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const [isPassword, setIsPassword] = useState(true);

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
                required
                value={username}
                onChangeText={(text) => nameChangeHandler(text)}
                placeHolder={"Name"}
                leftIcon={"profile"}
            />
            <FormInput
                required
                value={username}
                onChangeText={(text) => nameChangeHandler(text)}
                placeHolder={"Enter your email"}
                leftIcon={"envelope"}
            />
            <FormInput
                required
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
                extraText={
                    "By logging in or registering. You agree to our Terms of Service and Privacy Policy."
                }
            />
            <UtilityBtn mt="8%" title={"Create Account"} />
            <FormFooter
                bottomText={"Already an account?"}
                linkText={"Log in"}
                onLinkPress={() => navigation.navigate("Login")}
            />
        </Stack>
    );
}
