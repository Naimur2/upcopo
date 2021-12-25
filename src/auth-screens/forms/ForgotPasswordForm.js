import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "native-base";
import UtilityBtn  from "../../utility/UtilityBtn";
import FormInput from "../../utility/FormInput";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();
    const emailChangeHandler = (value) => {
        setEmail(value);
    };

    return (
        <Stack space="3">
            <FormInput
                value={email}
                onChangeText={(text) => emailChangeHandler(text)}
                placeHolder={"Email"}
                leftIcon={"envelope"}
            />

            <UtilityBtn
                onPress={() => navigation.navigate("EnterCode")}
                mt="40%"
                varient={"disabled"}
                title={"Submit"}
            />
        </Stack>
    );
}
