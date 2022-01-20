import { HStack, Image, ScrollView, Stack, Text, VStack } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import { useDispatch } from "react-redux";
import { placebidActions } from '../../../store/slices/placeBidSlice';
import IconWithText from "../../utility/IconWithText";
import UtilityBtn from "../../utility/UtilityBtn";
import Counter from "../common/Counter";
import Like from "../common/Like";


const map = require("../../../assets/images/map.png");
const mapUri = RnImage.resolveAssetSource(map).uri;



export default function House() {
    const dispatch =useDispatch();
    return (
        <ScrollView>
            <Stack space={10}>
                <VStack >
                    <VStack space={140} mt={'7%'} p={6}>
                        <HStack justifyContent={"space-between"}>
                            <VStack>
                                <Text>Owned By Luckas </Text>
                                <Text>W.year 1942</Text>
                            </VStack>
                            <Counter deadline={"Jan 10,2022,10:10:10 "} />
                        </HStack>
                        <HStack justifyContent={"space-between"}>
                            <VStack space="0.5">
                                <Text
                                    fontFamily={"body"}
                                    fontSize={22}
                                    fontWeight={600}
                                >
                                    Turn Key House
                                </Text>
                                <IconWithText
                                    iconName="map"
                                    textStyle={{
                                        color: "#D7DBDF",
                                        textTransform: "uppercase",
                                        fontSize: 16,
                                    }}
                                    iconStyle={{ py: 1, color: "#D7DBDF",size:18 }}
                                    containerStyle={{
                                        maxW: "75%",
                                        alignItems: "flex-start",
                                    }}
                                    text="1523 N 106th St, Mesa, AZ 85207"
                                />
                            </VStack>
                            <VStack space="2" maxW={"25%"}>
                                <Like alignSelf={"flex-end"} />
                                <Text
                                    fontFamily={"body"}
                                    fontSize={18}
                                    fontWeight={500}
                                >
                                    3,160sqft
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                    <Image
                        position={"absolute"}
                        zIndex={-1}
                        height={"full"}
                        w={"full"}
                        alt="1523 N 106th St, Mesa, AZ 85207"
                        source={{
                            uri: "https://cdna.artstation.com/p/assets/video_clips/images/035/100/932/smaller_square/ava-antonia-thumb.jpg?1614103270",
                        }}
                    />
                </VStack>
                <VStack px={4} space={4}>
                    <Stack>
                        <Text
                            fontWeight={600}
                            fontFamily={"body"}
                            fontSize={18}
                            color={"#3D454A"}
                        >
                            Description
                        </Text>
                        <Text
                            fontWeight={400}
                            fontFamily={"body"}
                            fontSize={16}
                            color={"#7E868C"}
                        >
                            Simple house with modern architecture and cool
                            interiors located in the city crnter making easier
                            for you to access
                        </Text>
                        <HStack space="10" py={3}>
                            <IconWithText
                                iconStyle={{
                                    bg: "#fff",
                                    p: 2.5,
                                    borderRadius: 10,
                                }}
                                iconName={"bed"}
                                text={"6 Bedrooms"}
                                textStyle={{
                                    fontWeight: 500,
                                    color: "#3D454A",
                                }}
                            />
                            <IconWithText
                                iconStyle={{
                                    bg: "#fff",
                                    p: 2.5,
                                    borderRadius: 10,
                                }}
                                iconName={"bath"}
                                text={"3 Bath"}
                                textStyle={{
                                    fontWeight: 500,
                                    color: "#3D454A",
                                }}
                            />
                        </HStack>
                    </Stack>
                    <VStack
                        w="full"
                        h={110}
                        borderRadius={10}
                        overflow={"hidden"}
                    >
                        <Image
                            resizeMode="cover"
                            alt={"map"}
                            source={{ uri: mapUri }}
                            w={"full"}
                            h="full"
                        />
                    </VStack>
                    <HStack justifyContent={"space-between"}>
                        <VStack>
                            <Text
                                fontSize={16}
                                fontWeight={400}
                                fontFamily={"body"}
                                color={"#7E868C"}
                            >
                                Auction Time
                            </Text>
                            <Text
                                fontSize={18}
                                fontWeight={600}
                                fontFamily={"body"}
                                color={"#52B69A"}
                            >
                                2h:40m
                            </Text>
                        </VStack>
                        <VStack>
                            <Text
                                fontSize={16}
                                fontWeight={400}
                                fontFamily={"body"}
                                color={"#7E868C"}
                            >
                                Current Bid
                            </Text>
                            <Text
                                fontSize={18}
                                fontWeight={600}
                                fontFamily={"body"}
                                color={"#52B69A"}
                            >
                                3.40 ETH
                            </Text>
                        </VStack>
                    </HStack>
                    <UtilityBtn onPress={()=>dispatch(placebidActions.openAction())} title={"Place a Bid"} />
                </VStack>
            </Stack>
        </ScrollView>
    );
}
