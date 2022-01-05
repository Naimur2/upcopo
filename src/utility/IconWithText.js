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
    containerStyle,
}) {
    return (
        <HStack space={1.5} alignItems={"center"} {...containerStyle}>
            <Icon
                name={iconName}
                size={20}
                color={iconColor || "#889096"}
                {...iconStyle}
            />
            <Text
                color={textColor || "#687076"}
                fontFamily={"body"}
                fontSize={16}
                {...textStyle}
            >
                {text}
            </Text>
        </HStack>
    );
}
