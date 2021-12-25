import { Checkbox, Stack, Text } from "native-base";
import React from "react";

export default function FormCheckBox({
    isChecked,
    onChange,
    onForgetPress,
    checkBoxText,
    secondaryText,
    extraText,
}) {
    return (
        <Stack  maxW={"full"} direction={"row"} justifyContent={"space-between"}>
            <Checkbox
                isChecked={isChecked}
                _checked={{ bg: "#52B69A", borderColor: "#52B69A" }}
                _icon={{ color: "white" }}
                bg={"transparent"}
                borderColor={"#666F85"}
                onChange={onChange}
                borderRadius={5}
                accessibilityLabel="check"
            >
                {checkBoxText && (
                    <Text
                        numberOfLines={2}
                        fontFamily={"body"}
                        fontWeight={600}
                        fontSize={13}
                        px={2}
                        textAlign={"left"}
                        color={"#7E868C"}
                    >
                        {checkBoxText}
                    </Text>
                ) }
            </Checkbox>
            {extraText && (
                <Text
                    numberOfLines={2}
                    fontFamily={"body"}
                    fontWeight={400}
                    fontSize={14}
                    w="90%"
                    textAlign={"left"}
                    color={"#666F85"}
                >
                    {extraText}
                </Text>
            ) }
            <Text
                onPress={onForgetPress}
                fontFamily={"body"}
                fontWeight={500}
                color={"#666F85"}
            >
                {secondaryText}
            </Text>
        </Stack>
    );
}
