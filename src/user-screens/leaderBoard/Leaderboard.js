import { Box, HStack, Image, ScrollView, Text } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../utility/Card";

const source = "../../../assets/images/";

const varified = require(source + "varified.png");
const panda1 = require(source + "panda1.png");
const panda2 = require(source + "panda2.png");
const panda3 = require(source + "panda3.png");
const panda4 = require(source + "panda4.png");
const panda5 = require(source + "panda5.png");

const getUri = (src) => {
    return RnImage.resolveAssetSource(src).uri;
};

const LEADERS = [
    {
        _id: "1",
        name: "Joel Norris",
        varified: false,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda1),
        priceUpPercentage: 46.03,
        active: false,
    },
    {
        _id: "2",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: false,
        avatar: getUri(panda2),
        priceUpPercentage: 10.03,
        active: false,
    },
    {
        _id: "3",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda5),
        priceUpPercentage: 46.03,
        active: false,
    },
    {
        _id: "4",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda3),
        priceUpPercentage: 46.03,
        active: false,
    },
    {
        _id: "5",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda4),
        priceUpPercentage: 46.03,
        active: false,
    },
];

export default function Leaderboard() {
    return (
        <ScrollView bg="#f9f9" p={4}>
            {LEADERS.map((leader, index) => (
                <Card px={4} mb={2} key={leader._id}>
                    <HStack alignItems={"center"} space={3}>
                        <Text
                            fontSize={17}
                            fontFamily={"body"}
                            fontWeight={500}
                            color={"#7E868C"}
                        >
                            {index + 1}
                        </Text>
                        <Box>
                            <Image
                                borderRadius={50}
                                alt={leader.name}
                                source={{ uri: leader.avatar }}
                                h={16}
                                w={16}
                                position={"relative"}
                            />
                            {leader.varified && (
                                <Image
                                    alt={leader.name}
                                    source={{ uri: getUri(varified) }}
                                    right={0}
                                    bottom={0}
                                    h={6}
                                    w={6}
                                    position={"absolute"}
                                />
                            )}
                        </Box>
                        <Text
                            fontSize={17}
                            fontFamily={"body"}
                            fontWeight={600}
                            color={"#000"}
                        >
                            {leader.name}
                        </Text>
                    </HStack>
                </Card>
            ))}
        </ScrollView>
    );
}
