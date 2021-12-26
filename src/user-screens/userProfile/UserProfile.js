import React from "react";
import { Box, Center, Text, Image } from "native-base";
import { Image as RnImage, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const source = "../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

export default function UserProfile({ route, navigation }) {
    const { userId } = route.params;
    // changes
    return (
        <Box>
            <Image
                w={windowWidth}
                alt={userId}
                source={{ uri: image52Uri }}
                h={"30%"}
            />
        </Box>
    );
}
