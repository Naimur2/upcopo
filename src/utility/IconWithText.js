import { HStack, Text } from "native-base";
import React from "react";
import Icon from "./Icon";

export default function IconWithText({
    iconName,
    text,
    iconColor,
    iconStyle,
    textColor,
    textStyle,
    color,
    containerStyle,
}) {
    return (
        <HStack
            space={1.5}
            maxW="95%"
            alignItems="center"
            {...containerStyle}
        >
            <Icon
                name={iconName}
                size={20}
                color={iconColor ||color || "#889096"}
                py={0.5}
                {...iconStyle}
            />
            <Text
                color={textColor || color || "#687076"}
                fontFamily={"body"}
                fontSize={16}
                {...textStyle}
            >
                {text}
            </Text>
        </HStack>
    );
}
