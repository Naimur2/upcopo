import React from "react";
import {  Text, Image, HStack } from "native-base";
import { Image as RnImage } from "react-native";

const imageSrcFlash = require("../../../../assets/images/flash.png");
const imageSrcFire = require("../../../../assets/images/fire.png");

const flashUri = RnImage.resolveAssetSource(imageSrcFlash).uri;
const fireUri = RnImage.resolveAssetSource(imageSrcFire).uri;


export default function SectionHeader({title,imageType}) {

    const imgUri= imageType ==='fire' ? fireUri : flashUri;

    return (
        <HStack
            mx={4}
            mb={2}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <HStack alignItems={"center"}>
                <Image w={6} h={6} source={{uri:imgUri}} alt="flash" />
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
        </HStack>
    );
}
