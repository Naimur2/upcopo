import React, { useState } from "react";
import { Stack } from "native-base";
import UtilityBtn from "../../utility/UtilityBtn";
import FormInput from "../../utility/FormInput";

import { useNavigation } from "@react-navigation/native";

export default function ResetPasswordForm() {
    const [password, setPassword] = useState("");
    const [isPassword, setIsPassword] = useState(true);

    const navigation = useNavigation();

    const passwordChangeHandler = (value) => {
        setPassword(value);
    };

    const isPasswordChangeHandler = () => {
        setIsPassword(!isPassword);
    };

    return (
        <Stack space="3">
            <FormInput
                value={password}
                onChangeText={(text) => passwordChangeHandler(text)}
                placeHolder={"New password"}
                leftIcon={"lock"}
                rightIcon={
                    password.length > 0 && (isPassword ? "eye-open" : "eye-off")
                }
                type={isPassword && "password"}
                onRightIconPress={isPasswordChangeHandler}
            />
            <FormInput
                value={password}
                onChangeText={(text) => passwordChangeHandler(text)}
                placeHolder={"Confirm new password"}
                leftIcon={"lock"}
                rightIcon={
                    password.length > 0 && (isPassword ? "eye-open" : "eye-off")
                }
                type={isPassword && "password"}
                onRightIconPress={isPasswordChangeHandler}
            />
            <UtilityBtn mt="12%" varient={"disabled"} title={"Confirm"} />
        </Stack>
    );
}
