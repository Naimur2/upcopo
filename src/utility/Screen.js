import { VStack } from "native-base";
import React from "react";

export default function Screen({ children, ...rest }) {
    return (
        <VStack flex="1" mx={4} {...rest}>
            {children}
        </VStack>
    );
}
