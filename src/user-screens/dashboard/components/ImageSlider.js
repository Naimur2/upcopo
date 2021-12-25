import { Image, Stack, Text } from "native-base";
import React from "react";
import { Image as RnImage, TouchableHighlight } from "react-native";
const imageSrc = require("../../../../assets/images/countryside.jpg");

const imgUri = RnImage.resolveAssetSource(imageSrc).uri;

export default function ImageSlider() {
    return (
        <Stack
            mb={6}
            mx={4}
            overflow={"hidden"}
            borderRadius={20}
            alignItems={'center'}
            height={145}
        >
            <Stack
                position={"relative"}
                h="full"
                w="full"
                space="3"
                px={4}
                py={3}
                bg={{
                    linearGradient: {
                        colors: ["#76C893", "transparent"],
                        start: [0.2, 0],
                        end: [1, 0],
                    },
                }}
            >
                <Text
                    w="250"
                    fontWeight={600}
                    fontSize={20}
                    fontFamily={"body"}
                >
                    Find a lender who can offer competitive
                </Text>
                <TouchableHighlight
                    style={{
                        backgroundColor: "#fff",
                        width: 120,
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        borderRadius: 10,
                    }}
                >
                    <Text
                        textAlign={"center"}
                        fontFamily={"body"}
                        color="#52B69A"
                        fontWeight={600}
                        fontSize={18}
                    >
                        Buy Now
                    </Text>
                </TouchableHighlight>
            </Stack>
            <Image
                position={"absolute"}
                zIndex={-1}
                source={{ uri: imgUri }}
                h="100%"
                w="100%"
                alt="cover image"
            />
        </Stack>
    );
}

/* <Stack
                    h="full"
                    w="full"
                    space="3"
                    bg={{
                        linearGradient: {
                            colors: ["#76C893", "transparent"],
                            start: [0.2, 0],
                            end: [1, 0],
                        },
                    }}
                >
                    <Text
                        w="250"
                        fontWeight={600}
                        fontSize={21}
                        fontFamily={"body"}
                    >
                        Find a lender who can offer competitive
                    </Text>
                    <TouchableHighlight
                        style={{
                            backgroundColor: "#fff",
                            width: 120,
                            paddingHorizontal:10,
                            paddingVertical:6,
                            borderRadius:10
            
                        }}
                    >
                        <Text textAlign={'center'} fontFamily={'body'} color="#52B69A" fontWeight={600} fontSize={18}>
                            Buy Now
                        </Text>
                    </TouchableHighlight>
                </Stack> */
