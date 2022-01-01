import { Box, Image } from "native-base";
import React from "react";

const LovedHousesCardImage = ({ imageUrl }) => (
    <Box w="26%" h="115" overflow="hidden">
    <Image
        borderRadius={14}
        alt="Loved Houses"
        width={"100%"}
        height={"100%"}
        source={{
            uri: imageUrl,
        }}
    />
</Box>

);
export default LovedHousesCardImage;