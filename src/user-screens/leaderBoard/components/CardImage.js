import { Box, Image } from "native-base";
import React from "react";
import Varified from "../../../utility/Varified";

export default function CardImage({ name, avatar,varified,...rest }) {
    return (
        <Box w="20%" {...rest}>
            <Image
                borderRadius={50}
                alt={name}
                source={{ uri: avatar }}
                h={16}
                w={16}
                position={"relative"}
            />
            {varified && (
                <Varified
                    alt={name}
                    right={0}
                    bottom={0}
                    h={6}
                    w={6}
                    position={"absolute"}
                />
            )}
        </Box>
    );
}
