import { Box, HStack, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import Icon from "../../../utility/Icon";


export default function CardBody({ name, price, ...rest }) {
    const {width}=Dimensions.get('window');

    return (
        <Box w="45%" paddingLeft={2} {...rest}>
            <Text
                fontSize={0.045*width}
                fontFamily={"body"}
                fontWeight={600}
                color={"#000"}
                pb={1}
                
            >
                {name}
            </Text>
            <HStack space={1}>
                <Icon name={"etherium"} size={20} color={"#687076"} />
                <Text color={"#687076"}>{price}</Text>
            </HStack>
        </Box>
    );
}
