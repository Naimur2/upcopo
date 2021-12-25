import React from "react";
import { Box, Text } from "native-base";

export default function FormTitle({title,...rest}) {
    return (
        <Text
            {...rest}
            fontWeight={600}
            fontFamily={"body"}
            fontSize={"18"}
            color="#192440"
            mb={4}
        >
            {title}
        </Text>
    );
}
