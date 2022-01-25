import { Avatar, Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import { Image as Img } from "react-native";
import IconWithText from "../../utility/IconWithText";
import UtilityBtn from "../../utility/UtilityBtn";
const image = require("../../../assets/images/map_img.png");
const image2 = require("../../../assets/images/map_avater.png");

const imgUri = Img.resolveAssetSource(image).uri;
const imgUri2 = Img.resolveAssetSource(image2).uri;

export default function SelectWorldScreen() {
    return (
        <VStack space={2} mt={20}>
            <HStack
                w={"100%"}
                py={2}
                px="4"
            >
                <UtilityBtn
                    w="1/2"
                    varient="white"
                    alignSelf="stretch"
                    title="Earth: Ready to play"
                    _text={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#11181C'
                    }}
                />
                <UtilityBtn w="1/2" title="World from scratch"
                    varient={'gray'}
                    _text={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#7E868C'
                    }}
                />
            </HStack>

            <VStack position={'relative'} mt={20}>
                <Box h={240} >
                    <Image
                        source={{ uri: imgUri }}
                        h={'full'}
                        w={'full'}
                        alt='map-img'
                    />

                </Box>

                <Avatar
                    source={{ uri: imgUri2 }}
                    size={16}
                    position={'absolute'}
                    top={'65%'}
                    right={'42%'}

                />
            </VStack>
            <VStack justifyContent={'center'} alignItems={'center'}>
                <Text
                    color={'#000'}
                    fontFamily={'body'}
                    fontWeight={700}
                    fontSize={14}
                >
                    4.2K
                </Text>
                <Text
                    color={'#000'}
                    fontFamily={'body'}
                    fontWeight={700}
                    fontSize={14}
                >
                    Assets
                </Text>
            </VStack>
            <VStack justifyContent={'center'} alignItems={'center'} space={4} pt={20}>
                <IconWithText
                    iconName="plus"
                    text={`Create custom location & quests!`}
                    textStyle={{ fontSize: 17, color: '#687076', fontWeight: 400 }}
                />
                <IconWithText
                    iconName="gift"
                    text={`New content every month!`}
                    textStyle={{ fontSize: 17, color: '#687076', fontWeight: 400 }}
                />
            </VStack>
            <UtilityBtn m={4} title="Select"
                _text={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#fff'
                }}
            />





        </VStack>
    );
}
