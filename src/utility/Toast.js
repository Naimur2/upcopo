import { Box, Text } from "native-base";
import React from "react";

export default function Toast({ text, textStyle, ...rest }) {
    return (
        <Box
            bg={{
                linearGradient: {
                    colors: ["#ffffff", "#f4f4f4"],
                    start: [0.2, 0],
                    end: [1, 0],
                },
            }}
            px={4}
            py={3}
            rounded="md"
            mb={5}
            {...rest}
        >
            <Text
                fontFamily={"body"}
                fontWeight="500"
                color="#11181C"
                {...textStyle}
            >
                {text}
            </Text>
        </Box>
    );
}
