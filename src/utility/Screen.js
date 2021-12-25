import React from "react";
import { VStack } from "native-base";

export default function Screen({ children, ...rest }) {
    return (
        <VStack h="full" mx={4} {...rest}>
            {children}
        </VStack>
    );
}
