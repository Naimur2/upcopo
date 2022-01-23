import { useRoute } from "@react-navigation/native";
import { HStack, Image, ScrollView, Stack, Text, VStack } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import { useDispatch } from "react-redux";
import { placebidActions } from "../../../store/slices/placeBidSlice";
import IconWithText from "../../utility/IconWithText";
import UtilityBtn from "../../utility/UtilityBtn";
import Counter from "../common/Counter";
import Like from "../common/Like";

const map = require("../../../assets/images/map.png");
const mapUri = RnImage.resolveAssetSource(map).uri;

export default function House() {
    const dispatch = useDispatch();
    const data = useRoute().params.house;

    return (
        <ScrollView>
            <Stack space={10}>
                <VStack>
                    <VStack space={140} mt={"7%"} p={6}>
                        <HStack justifyContent={"space-between"}>
                            <VStack>
                                <Text>Owned By {data.owner} </Text>
                                <Text>W.year {data.builtAt}</Text>
                            </VStack>
                            <Counter expiresAt={data.expiresAt} />
                        </HStack>
                        <HStack justifyContent={"space-between"}>
                            <VStack space="0.5">
                                <Text
                                    fontFamily={"body"}
                                    fontSize={22}
                                    fontWeight={600}
                                >
                                    {data.houseName}
                                </Text>
                                <IconWithText
                                    iconName="map"
                                    textStyle={{
                                        color: "#D7DBDF",
                                        textTransform: "uppercase",
                                        fontSize: 16,
                                    }}
                                    iconStyle={{
                                        py: 1,
                                        color: "#D7DBDF",
                                        size: 18,
                                    }}
                                    containerStyle={{
                                        maxW: "75%",
                                        alignItems: "flex-start",
                                    }}
                                    text={data.address}
                                />
                            </VStack>
                            <VStack space="2" maxW={"25%"}>
                                <Like alignSelf={"flex-end"} />
                                <Text
                                    fontFamily={"body"}
                                    fontSize={18}
                                    fontWeight={500}
                                >
                                    {data.sqrfit}
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
                            uri: data.image,
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
                            {data.description}
                        </Text>
                        <HStack space="10" py={3}>
                            {data.bed && (
                                <IconWithText
                                    iconStyle={{
                                        bg: "#fff",
                                        p: 2.5,
                                        borderRadius: 10,
                                    }}
                                    iconName={"bed"}
                                    text={`${data.bed} Bedrooms`}
                                    textStyle={{
                                        fontWeight: 500,
                                        color: "#3D454A",
                                    }}
                                />
                            )}
                            {data.bath && (
                                <IconWithText
                                    iconStyle={{
                                        bg: "#fff",
                                        p: 2.5,
                                        borderRadius: 10,
                                    }}
                                    iconName={"bath"}
                                    text={`${data.bath} Bathrooms`}
                                    textStyle={{
                                        fontWeight: 500,
                                        color: "#3D454A",
                                    }}
                                />
                            )}
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
                                {data.currentBid} ETH
                            </Text>
                        </VStack>
                    </HStack>
                    <UtilityBtn
                        onPress={() => dispatch(placebidActions.openAction())}
                        title={"Place a Bid"}
                    />
                </VStack>
            </Stack>
        </ScrollView>
    );
}
