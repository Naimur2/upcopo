import { Text, VStack } from "native-base";
import React from "react";

export default function Main({}) {
  
    return (
        <VStack
            alignItems={"center"}
            justifyContent={"center"}
            bg="dark.200"
            h="full"
        >
            <Text
                fontWeight={700}
                fontFamily={"body"}
                fontSize={20}
                color={"light.100"}
            >
                Naimur Rahaman
            </Text>
        </VStack>
    );
}
