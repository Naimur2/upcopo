import { FormControl, Input, Stack } from "native-base";
import React from "react";
import Icon from "./Icon";

// custom input
 const FormInput =React.forwardRef(({
    placeHolder,
    leftIcon,
    rightIcon,
    onChangeText,
    value,
    error,
    errorMessage,
    type,
    onRightIconPress,
    onLeftIconPress,
    rightIconColor,
    leftIconColor,
    isFullWidth,
    leftElement,
    required,
    isInvalid,
    ...rest
},ref)=> {
    const placeHolderText = `${placeHolder} ${required ? "*" : ""}`;

    const iconLeft = leftIcon ? (
        <Icon
            onPress={onLeftIconPress}
            ml={4}
            mr={2}
            color={leftIconColor || "#889096"}
            size={22}
            name={leftIcon}
        />
    ) : null;

    const iconRight = rightIcon ? (
        <Icon
            onPress={onRightIconPress}
            ml={2}
            mr={4}
            color={rightIconColor || "#889096"}
            size={22}
            name={rightIcon}
        />
    ) : null;

    return (
        <FormControl isInvalid={error}>
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
                    InputLeftElement={leftElement || iconLeft}
                    InputRightElement={iconRight}
                    isFullWidth={isFullWidth}
                    _invalid={{ borderColor: "#3D454A" }}
                    ref={ref}
                    {...rest}
                  
                />
                {error && (
                    <FormControl.HelperText
                        fontFamily={"body"}
                        fontWeight={400}
                        mt={0}
                        py={1}
                        color={"#EB5757"}
                        bg="#FAECEC"
                    >
                        {errorMessage}
                    </FormControl.HelperText>
                )}
            </Stack>
        </FormControl>
    );
})


export default FormInput