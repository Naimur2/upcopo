import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { Dimensions, Platform } from "react-native";
import FormInput from "../../utility/FormInput";
import Icon from "../../utility/Icon";

export default function MessageScreen() {
    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
    const { width, height } = Dimensions.get("window");
    return (
        <VStack
            alignItems={"center"}
            justifyContent={"flex-end"}
            w={width}
            bg="#ccc"
            flex="1"
        >
            <ScrollView
                w="full"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: "flex-end",
                    paddingHorizontal:16
                }}
                bg="red.300"
            >
                <Box my={4} alignSelf={'flex-end'} p="4" bg="dark.100">
                    <Text>Hello</Text>
                </Box>
                <Box my={4} alignSelf={'flex-start'} p="4" bg="dark.100">
                    <Text>Hello</Text>
                </Box>
            </ScrollView>
            
            <HStack justifyContent={"space-between"} w={width} p={4} bg="#fff">
                <Box w="78%">
                    <FormInput />
                </Box>
                <Icon
                    justifyContent="center"
                    alignItems="center"
                    bg="#ccc"
                    w="20%"
                    name="envelope"
                    color={"#000"}
                    size={24}
                />
            </HStack>
        </VStack>
    );
}
