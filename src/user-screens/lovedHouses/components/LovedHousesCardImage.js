import { Box } from "native-base";
import React from "react";
import { Image } from "react-native";

const LovedHousesCardImage = ({ imageUrl }) => (
    <Box w="26%" h="115" overflow="hidden">
        <Image
            style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
            }}
            source={{
                uri: imageUrl,
            }}
        />
    </Box>
);
export default LovedHousesCardImage;
