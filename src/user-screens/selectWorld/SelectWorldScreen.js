import {
    Avatar,
    Box,
    Center,
    HStack,
    Image,
    Pressable,
    Text,
    VStack
} from "native-base";
import React from "react";
import { Dimensions, Image as Img } from "react-native";
import IconWithText from "../../utility/IconWithText";
import ImageView from "../../utility/ImageView";
import UtilityBtn from "../../utility/UtilityBtn";

const image = require("../../../assets/images/map_img.png");
const image2 = require("../../../assets/images/map_avater.png");
const back = require("../../../assets/images/mapped.png");

const imgUri = Img.resolveAssetSource(image).uri;
const imgUri2 = Img.resolveAssetSource(image2).uri;
const backBg = Img.resolveAssetSource(back).uri;

export default function SelectWorldScreen() {
    const [select, setSelect] = React.useState(true);
    const { height } = Dimensions.get("window");
    return (
        <ImageView
            imageStyle={{
                w: "110%",
            }}
            flex={1}
            imageUrl={backBg}
        >
            <VStack px={4}>
                <HStack mt={4} bg={"#EBEDEF"}>
                    <Pressable
                        bg={select ? "#fff" : "transparent"}
                        w="1/2"
                        py={3}
                        onPress={() => setSelect((prev) => !prev)}
                        borderRadius={2}
                    >
                        <Text
                            fontFamily={"body"}
                            fontWeight={500}
                            textAlign={"center"}
                            color={select ? "#11181C" : "#7E868C"}
                        >
                            Earth: Ready to play
                        </Text>
                    </Pressable>
                    <Pressable
                        bg={!select ? "#fff" : "transparent"}
                        w="1/2"
                        py={3}
                        onPress={() => setSelect((prev) => !prev)}
                        borderRadius={2}
                    >
                        <Text
                            fontFamily={"body"}
                            fontWeight={500}
                            textAlign={"center"}
                            color={!select ? "#11181C" : "#7E868C"}
                        >
                            World from scratch
                        </Text>
                    </Pressable>
                </HStack>
            </VStack>
            <ImageView
                justifyContent={"flex-end"}
                mt={"30%"}
                h="35%"
                imageUrl={imgUri}
            >
                <Center p={4}>
                    <Avatar  mb={2} source={{ uri: imgUri2 }} size={16} />
                    <VStack justifyContent={"center"} alignItems={"center"}>
                        <Text
                            color={"#000"}
                            fontFamily={"body"}
                            fontWeight={700}
                            fontSize={14}
                        >
                            4.2K
                        </Text>
                        <Text
                            color={"#000"}
                            fontFamily={"body"}
                            fontWeight={700}
                            fontSize={14}
                        >
                            Assets
                        </Text>
                    </VStack>
                </Center>
            </ImageView>

            <VStack px={4} space={2} >
                <VStack
                    justifyContent={"center"}
                    alignItems={"center"}
                    space={2}
                    pt={20}
                >
                    <IconWithText
                        iconName="plus"
                        text={`Create custom location & quests!`}
                        textStyle={{
                            fontSize: 16,
                            color: "#687076",
                            fontWeight: 400,
                        }}
                    />
                    <IconWithText
                        iconName="gift"
                        text={`New content every month!`}
                        textStyle={{
                            fontSize: 16,
                            color: "#687076",
                            fontWeight: 400,
                        }}
                    />
                </VStack>
                <UtilityBtn
                    title="Select"
                    mt={4}
                />
            </VStack>
        </ImageView>
    );
}
