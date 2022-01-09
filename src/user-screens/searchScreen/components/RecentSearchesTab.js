import { Text, Box, Pressable } from "native-base";
import React from "react";

export default function RecentTab({ tabTitle,onPress,textColor,borderColor,...rest }) {
    return (
        <Box borderBottomWidth="3" borderColor={borderColor} flex={1} {...rest}>
            <Pressable p="2" w="full" onPress={onPress}>
                <Text textAlign={"center"} color={textColor}>
                    {tabTitle}
                </Text>
            </Pressable>
        </Box>
    );
}
