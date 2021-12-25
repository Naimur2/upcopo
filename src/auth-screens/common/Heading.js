import { Text, Box } from "native-base";
import React from "react";
import AppIcon from "./AppIcon";

export default function Heading({ title, subtitle, maxHW, ...rest }) {
    return (
        <>
            <AppIcon />
            <Box mb={"15%"} {...rest}>
                <Text
                    fontFamily={"body"}
                    lineHeight={40}
                    fontSize={"34"}
                    maxW={maxHW || 270}
                    color={"#52B69A"}
                    fontWeight={600}
                >
                    {title}
                </Text>
                <Text
                    fontFamily={"body"}
                    mt={2}
                    fontSize={"18"}
                    maxW={300}
                    color={"#687076"}
                    fontWeight={500}
                    lineHeight={24}
                >
                    {subtitle}
                </Text>
            </Box>
        </>
    );
}
