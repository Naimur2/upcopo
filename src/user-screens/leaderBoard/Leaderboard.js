import { HStack, ScrollView, VStack } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import Card from "../../utility/Card";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import CardImage from "./components/CardImage";
import CardTitle from "./components/CardTitle";

const source = "../../../assets/images/";

const panda1 = require(source + "panda1.png");
const panda2 = require(source + "panda2.png");
const panda3 = require(source + "panda3.png");
const panda4 = require(source + "panda4.png");
const panda5 = require(source + "panda5.png");
const Ellipse6 = require(source + "Ellipse6.png");

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
        active: true,
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
    {
        _id: "6",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda3),
        priceUpPercentage: 46.03,
        active: false,
    },
    {
        _id: "7",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda4),
        priceUpPercentage: 46.03,
        active: false,
    },
    {
        _id: "8",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: true,
        avatar: getUri(panda3),
        priceUpPercentage: 46.03,
        active: false,
    },
    {
        _id: "9",
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
        <ScrollView showsHorizontalScrollIndicator={'false'} showsVerticalScrollIndicator={false} bg="#f9f9f9">
            <VStack p={4} space={2}>
                {LEADERS.map((leader, index) => (
                    <Card p={4} key={leader._id}>
                        <HStack alignItems={"center"} space={3}>
                            <CardTitle value={index + 1} />
                            <CardImage
                                varified={leader.varified}
                                name={leader.name}
                                avatar={leader.avatar}
                            />
                            <CardBody name={leader.name} price={leader.price} />
                            <CardFooter
                                priceUp={leader.priceUp}
                                priceUpPercentage={leader.priceUpPercentage}
                            />
                        </HStack>
                    </Card>
                ))}
            </VStack>
        </ScrollView>
    );
}
