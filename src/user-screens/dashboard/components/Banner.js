import { Image, Pressable, Stack, Text } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
const imageSrc = require("../../../../assets/images/countryside.jpg");

const imgUri = RnImage.resolveAssetSource(imageSrc).uri;

export default function Banner() {
    return (
        <Stack
            mb={6}
            mx={4}
            overflow={"hidden"}
            borderRadius={20}
            bg={{
                linearGradient: {
                    colors: ["#76C893", "transparent"],
                    start: [0.2, 0],
                    end: [1, 0],
                },
            }}
        >
            <Stack py="3" px={4} space="3">
                <Text
                    w="220"
                    fontWeight={600}
                    fontSize={18}
                    fontFamily={"body"}
                >
                    Find a lender who can offer competitive
                </Text>
                <Pressable alignSelf={'flex-start'} bg="#fff"  px={5} borderRadius={10} py={2}>
                    <Text
                        textAlign={"center"}
                        fontFamily={"body"}
                        color="#52B69A"
                        fontWeight={600}
                        fontSize={16}
                    >
                        Bid Now
                    </Text>
                </Pressable>
            </Stack>
            <Image
                position={"absolute"}
                zIndex={-1}
                source={{ uri: imgUri }}
                h="full"
                w="full"
                alt="cover image"
            />
        </Stack>
    );
}
