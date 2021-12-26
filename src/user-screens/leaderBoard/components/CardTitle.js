import React from "react";
import {  Text } from "native-base";

export default function CardTitle({value,...rest}) {
    return (
        <Text
            w="4%"
            fontSize={17}
            fontFamily={"body"}
            fontWeight={500}
            color={"#7E868C"}
            {...rest}
        >
            {value}
        </Text>
    );
}
