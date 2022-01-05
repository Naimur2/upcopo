import { HStack, Image, Stack, Text, VStack } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import IconWithText from "../../utility/IconWithText";
import UtilityBtn from "../../utility/UtilityBtn";
import Counter from "../common/Counter";

const map = require("../../../assets/images/map.png");
const mapUri = RnImage.resolveAssetSource(map).uri;

export default function House() {
    return (
        <Stack>
            <VStack p={4} bg={'blue.700'}>
                <HStack justifyContent={'space-between'}>
                    <VStack >
                        <Text>Owned By Luckas </Text>
                        <Text>W.year 1942</Text>
                    </VStack>
                    <Counter deadline={'Jan 10,2022,10:10:10 '} />
                </HStack>
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
                        Simple house with modern architecture and cool interiors
                        located in the city crnter making easier for you to access
                    </Text>
                    <HStack space="10" py={3}>
                        <IconWithText
                            iconStyle={{ bg: "#fff", p: 2.5, borderRadius: 10 }}
                            iconName={"bed"}
                            text={"6 Bedrooms"}
                        />
                        <IconWithText
                            iconStyle={{ bg: "#fff", p: 2.5, borderRadius: 10 }}
                            iconName={"bath"}
                            text={"3 Bath"}
                        />
                    </HStack>
                </Stack>
                <VStack w="full" h={110} borderRadius={10} overflow={'hidden'} >
                    <Image resizeMode="cover" alt={'map'} source={{uri:mapUri}} w={'full'} h="full" />
                </VStack>
                <HStack justifyContent={'space-between'}>
                    <VStack>
                        <Text fontSize={16} fontWeight={400} fontFamily={'body'} color={'#7E868C'}>
                            Auction Time
                        </Text>
                        <Text fontSize={18} fontWeight={600} fontFamily={'body'} color={'#52B69A'}>
                            2h:40m
                        </Text>
                    </VStack>
                    <VStack>
                        <Text fontSize={16} fontWeight={400} fontFamily={'body'} color={'#7E868C'}>
                            Current Bid
                        </Text>
                        <Text fontSize={18} fontWeight={600} fontFamily={'body'} color={'#52B69A'}>
                            3.40 ETH
                        </Text>
                    </VStack>
                </HStack>
                <UtilityBtn title={'Place a Bid'} />
            </VStack>
        </Stack>
    );
}
