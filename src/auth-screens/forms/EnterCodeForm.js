import React, { useState } from "react";
import { Stack, Box } from "native-base";
import UtilityBtn from "../../utility/UtilityBtn";
import FormFooter from "../common/FormFooter";
import FormInput from "../../utility/FormInput";
import { useNavigation } from "@react-navigation/native";

export default function EnterCodeForm() {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const emailChangeHandler = (value) => {
        setEmail(value);
    };

    return (
        <Stack space="3">
            <Stack justifyContent={"center"} direction={"row"} space="5">
                <Box w="50" flexDirection={"row"}>
                    <FormInput
                        maxLength={1}
                        textAlign="center"
                        value={email}
                        onChangeText={(text) => emailChangeHandler(text)}
                    />
                </Box>
                <Box w="50" flexDirection={"row"}>
                    <FormInput
                        textAlign="center"
                        value={email}
                        onChangeText={(text) => emailChangeHandler(text)}
                    />
                </Box>
                <Box w="50" flexDirection={"row"}>
                    <FormInput
                        textAlign="center"
                        value={email}
                        onChangeText={(text) => emailChangeHandler(text)}
                    />
                </Box>
                <Box w="50" flexDirection={"row"}>
                    <FormInput
                        textAlign="center"
                        value={email}
                        onChangeText={(text) => emailChangeHandler(text)}
                    />
                </Box>
            </Stack>

            <UtilityBtn
                onPress={() => navigation.navigate("ResetPassword")}
                mt="40%"
                varient={"disabled"}
                title={"Submit"}
            />
            <FormFooter bottomText={"Didn't you recive any code?"} />
        </Stack>
    );
}
