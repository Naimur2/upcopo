import { Box, HStack, Text } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";


export default function CardBody({ name, price, ...rest }) {
    return (
        <Box w="45%" paddingLeft={2} {...rest}>
            <Text
                fontSize={20}
                fontFamily={"body"}
                fontWeight={600}
                color={"#000"}
                pb={1}
            >
                {name}
            </Text>
            <HStack>
                <Icon name={"etherium"} size={20} color={"#687076"} />
                <Text color={"#687076"}>{price}</Text>
            </HStack>
        </Box>
    );
}
