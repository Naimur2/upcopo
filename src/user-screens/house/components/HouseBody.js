import { HStack, Stack, Text } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";

export default function HouseBody(props) {
    return (
        <Stack>
            <Text
                fontWeight={600}
                fontFamily={"body"}
                fontSize={18}
                color={"#3D454A"}
            >
                Description
            </Text>
            <Text
                fontWeight={400}
                fontFamily={"body"}
                fontSize={16}
                color={"#7E868C"}
            >
                {props.description}
            </Text>
            <HStack space="10" py={3}>
                {props.bed && (
                    <IconWithText
                        iconStyle={{
                            bg: "#fff",
                            p: 2.5,
                            borderRadius: 10,
                        }}
                        iconName={"bed"}
                        text={`${props.bed} Bedrooms`}
                        textStyle={{
                            fontWeight: 500,
                            color: "#3D454A",
                        }}
                    />
                )}
                {props.bath && (
                    <IconWithText
                        iconStyle={{
                            bg: "#fff",
                            p: 2.5,
                            borderRadius: 10,
                        }}
                        iconName={"bath"}
                        text={`${props.bath} Bathrooms`}
                        textStyle={{
                            fontWeight: 500,
                            color: "#3D454A",
                        }}
                    />
                )}
            </HStack>
        </Stack>
    );
}
