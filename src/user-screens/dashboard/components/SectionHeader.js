import { HStack, Image, Pressable, Text } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";

const imageSrcFlash = require("../../../../assets/images/flash.png");
const imageSrcFire = require("../../../../assets/images/fire.png");
const imageArmSrc = require("../../../../assets/images/biceps.png");

const flashUri = RnImage.resolveAssetSource(imageSrcFlash).uri;
const fireUri = RnImage.resolveAssetSource(imageSrcFire).uri;
const armUri = RnImage.resolveAssetSource(imageArmSrc).uri;

export default function SectionHeader({ title, imageType, onSeAllPress }) {
    
    const image={
        arm:armUri,
        flash:flashUri,
        fire:fireUri
    }

    return (
        <Pressable
            onPress={onSeAllPress}
            mx={4}
            mb={2}
            flexDir={'row'}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <HStack alignItems={"center"}>
                <Image w={6} h={6} source={{ uri: image[imageType] }} alt="flash" />
                <Text
                    ml={2}
                    fontSize={21}
                    fontWeight={500}
                    color={"#3D454A"}
                    fontFamily={"body"}
                >
                    {title}
                </Text>
            </HStack>
            <Text
                px={2}
                fontSize={18}
                color={"#52B69A"}
                fontFamily={"body"}
                fontWeight={"500"}
            >
                See all
            </Text>
        </Pressable>
    );
}
