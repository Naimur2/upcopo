import { BlurView } from "expo-blur";
import { Text, VStack } from "native-base";
import React from "react";
import { Image } from "react-native";
import ImageView  from "../../utility/ImageView";

const image = require("../../../assets/images/mapbg.png");

const imgUri = Image.resolveAssetSource(image);

export default function ARview() {
    return (
        <ImageView imageUrl={imgUri} bg="blue.800" flex={1}>
            <Text
                fontWeight={700}
                fontFamily={"body"}
                fontSize={20}
                color={"dark.100"}
            >
                ARview
            </Text>
        </ImageView>
    );
}
