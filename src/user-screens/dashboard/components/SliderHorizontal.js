import { HStack, ScrollView } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import TrendyHouse from "./TrendyHouses/TrendyHouses";


const sourceUri= '../../../../assets/images';

const imageSrc = require(`${sourceUri}/slider1.png`);

const imgUri = RnImage.resolveAssetSource(imageSrc).uri;

const imageSrc2 = require(`${sourceUri}/slider2.png`);

const imgUri2 = RnImage.resolveAssetSource(imageSrc2).uri;

export default function SliderHorizontal() {
    const houses = [
        {
            _id: 1,
            houseName: "Turn Key House",
            timeLeft: "Dec 25, 2021 18:00:30",
            currentBid: "4.33",
            image: imgUri,
        },
        {
            _id: 2,
            houseName: "Turn Key House",
            timeLeft: "Dec 25, 2021 15:37:25",
            currentBid: "4.33",
            image: imgUri2,
        },
        {
            _id: 3,
            houseName: "Turn Key House",
            timeLeft: "Dec 25, 2021 15:37:25",
            currentBid: "4.33",
            image: imgUri,
        },
        {
            _id: 4,
            houseName: "Turn Key House",
            timeLeft: "Dec 25, 2021 15:37:25",
            currentBid: "4.33",
            image: imgUri2,
        },
    ];
    return (
        <ScrollView  mb={4} showsHorizontalScrollIndicator={false} horizontal>
            <HStack mx={4} my={1} space="4">
                {houses.map((house) => (
                    <TrendyHouse
                        key={house._id}
                        timeLeft={house.timeLeft}
                        image={house.image}
                        houseName={house.houseName}
                        currentBid={house.currentBid}
                    />
                ))}
            </HStack>
        </ScrollView>
    );
}
