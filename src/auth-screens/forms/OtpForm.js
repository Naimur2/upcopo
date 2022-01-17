import { Box, HStack, Stack, Text } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import FormInput from "../../utility/FormInput";
import UtilityBtn from "../../utility/UtilityBtn";
import FormFooter from "../common/FormFooter";


const inputs = Array(4).fill("");
let newInputIndex = 0;

export default function OtpForm({ onSubmitOtp }) {
    const input = useRef();
    const [nextInputIndex, setNextInputIndex] = useState(0);

    const error = useSelector((state) => state.ui.errors);

    const [otp, setOtp] = useState({ 0: "", 1: "", 2: "", 3: "" });

    const values = Object.values(otp).reduce((prev, next) => prev + next);
    const submitOtpHander = async () => {
      await  onSubmitOtp(values);
    };

    const textChangeHandler = (text, index) => {
        // TODO: add only number

        const newOtp = { ...otp };
        newOtp[index] = text;
        setOtp(newOtp);
        const lastInputIndex = inputs.length - 1;
        if (!text) newInputIndex = index === 0 ? 0 : index - 1;
        else
            newInputIndex =
                index === lastInputIndex ? lastInputIndex : index + 1;
        setNextInputIndex(newInputIndex);
    };

    useEffect(() => {
        input.current.focus();
    }, [nextInputIndex]);

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <Stack space="3">
            <HStack justifyContent="center">
                {inputs.map((val, index) => (
                    <Box key={index.toString()}>
                        <FormInput
                            maxLength={1}
                            textAlign="center"
                            value={otp[index]}
                            onChangeText={(text) =>
                                textChangeHandler(text, index)
                            }
                            px="3"
                            mx="2"
                            keyboardType="numeric"
                            ref={nextInputIndex === index ? input : null}
                            type="number"
                        />
                    </Box>
                ))}
            </HStack>
            {error && error.type === "otp" ? (
                <HStack justifyContent={"center"}>
                    <Text
                        fontFamily={"body"}
                        fontWeight={400}
                        color={"red.400"}
                    >
                        {error.message}
                    </Text>
                </HStack>
            ) : null}
            
            <UtilityBtn
                onPress={submitOtpHander}
                mt="40%"
                disabled={values.length < 4}
                varient={values.length < 4 && "disabled"}
                title={"Submit"}
            />
            <FormFooter bottomText={"Didn't you recive any code?"} />
        </Stack>
    );
}
