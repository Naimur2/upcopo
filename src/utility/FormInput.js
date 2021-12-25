import { FormControl, Input, Stack } from "native-base";
import React from "react";
import Icon from "./Icon";

// custom input
export default function FormInput({
    placeHolder,
    leftIcon,
    rightIcon,
    onChangeText,
    value,
    error,
    type,
    onRightIconPress,
    onLeftIconPress,
    rightIconColor,
    leftIconColor,
    required,
    ...rest
}) {
    const placeHolderText = `${placeHolder} ${required ? "*" : ""}`;

    const iconLeft = leftIcon ? (
        <Icon
            onPress={onLeftIconPress}
            ml={4}
            mr={2}
            color={ leftIconColor || "#889096"}
            size={22}
            name={leftIcon}
        />
    ) : null;

    const iconRight = rightIcon ? (
        <Icon
            onPress={onRightIconPress}
            ml={2}
            mr={4}
            color={ rightIconColor || "#889096"}
            size={22}
            name={rightIcon}
        />
    ) : null;

    return (
        <FormControl>
            <Stack>
                <Input
                    value={value}
                    onChangeText={onChangeText}
                    bg="white"
                    borderColor={"#E6E8EB"}
                    type={type || "text"}
                    fontFamily={"body"}
                    fontWeight={400}
                    py={2}
                    fontSize={16}
                    color={"#889096"}
                    placeholderTextColor={"#889096"}
                    placeholder={placeHolder ? placeHolderText : ""}
                    borderRadius={8}
                    cursorColor="#889096"
                    _focus={{ borderColor: "#3D454A" }}
                    InputLeftElement={iconLeft}
                    InputRightElement={iconRight}
                    {...rest}
                />
                {error && (
                    <FormControl.HelperText>{error}</FormControl.HelperText>
                )}
            </Stack>
        </FormControl>
    );
}
