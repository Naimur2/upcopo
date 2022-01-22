import { Text, VStack } from "native-base";
import React from "react";

export default function MessageScreen() {
    return (
        <VStack
            alignItems={"center"}
            justifyContent={"center"}
            bg="dark.200"
            flex="1"
        >
            <Text
                fontWeight={700}
                fontFamily={"body"}
                fontSize={20}
                color={"light.100"}
            >
                MessageScreen
            </Text>
        </VStack>
    );
}
