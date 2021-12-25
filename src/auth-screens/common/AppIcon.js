import { Center, Image } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
const imageSrc = require("../../../assets/images/OASIS.png");

export default function AppIcon() {
    const imgUri = RnImage.resolveAssetSource(imageSrc).uri;

    return (
        <Center py={10}>
            <Image w="85" h="105" alt="app icon" source={{ uri: imgUri }} />
        </Center>
    );
}
