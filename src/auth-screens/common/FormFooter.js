import { Stack, Text } from "native-base";
import React from "react";

export default function FormFooter({ bottomText, linkText, onLinkPress,...rest }) {
    return (
        <Stack
            direction={"row"}
            space="2"
            alignItems={"center"}
            justifyContent={"center"}
            {...rest} 
        >
            <Text fontWeight={500} fontFamily={"body"} color={"#666F85"}>
                {bottomText}
            </Text>
            <Text
                fontSize={"md"}
                fontWeight={700}
                fontFamily={"body"}
                color={"#52B69A"}
                onPress={onLinkPress}
            >
                {linkText}
            </Text>
        </Stack>
    );
}
