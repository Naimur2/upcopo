import { Box, Center, HStack, VStack,Text } from "native-base";
import React from "react";
import { Dimensions, Image } from "react-native";
import Card from "../../utility/Card";
import IconWithText from "../../utility/IconWithText";
import ImageView from "../../utility/ImageView";
import UtilityBtn from "../../utility/UtilityBtn";

const image = require("../../../assets/images/blurebg.png");

const imgUri = Image.resolveAssetSource(image).uri;

export default function ARview() {
    const { width } = Dimensions.get("window");
    return (
        <ImageView
            imageUrl={imgUri}
            flex={1}
            imageStyle={{ blurRadius: 5 }}
        >
            <ImageView
                mt={Math.round(width / 4)}
                imageStyle={{ w: "160%" }}
                flex="0.9"
                imageUrl={
                    "http://www2.totalpremiumfinance.com/images/services.jpg"
                }
            >
                <Center mt={"20%"}>
                    <Box
                        borderWidth={10}
                        borderColor={"#C8E5DD"}
                        borderRadius={50}
                        h="10"
                        w="10"
                        bg="#52B69A"
                    ></Box>
                    <Card opacity="0.9">
                        <HStack space="4">
                            <VStack>
                                <Text color="#000">Bed</Text>
                                <IconWithText
                                    iconName="bed-filled"
                                    text="3 Bed"
                                />
                            </VStack>
                            <VStack>
                                <Text color="#000">Bath</Text>
                                <IconWithText
                                    iconName="bath-filled"
                                    text="3 Bath"
                                />
                            </VStack>
                        </HStack>
                    </Card>
                </Center>
            </ImageView>

            <HStack
                w={"100%"}
                space={"4"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={10}
                py={2}
                px="4"
                flexDir={"row"}
            >
                <UtilityBtn
                    w="1/2"
                    varient="white"
                    alignSelf="stretch"
                    title="Map"
                />
                <UtilityBtn w="1/2" title="AR" />
            </HStack>
        </ImageView>
    );
}
