import { VStack, Text } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

export default function CardFooter({ priceUp, priceUpPercentage, ...rest }) {
    return (
        <VStack w="20%" alignItems={"flex-end"} {...rest}>
            <Icon
                style={
                    !priceUp && {
                        transform: [{ rotateX: "180deg" }],
                    }
                }
                name={"arrow-bold"}
                size={16}
                color={priceUp ? "#25C180" : "#CE1F1F"}
            />

            <Text color={priceUp ? "#25C180" : "#CE1F1F"}>
                {priceUp ? "+" : "-"}

                {priceUpPercentage}%
            </Text>
        </VStack>
    );
}
