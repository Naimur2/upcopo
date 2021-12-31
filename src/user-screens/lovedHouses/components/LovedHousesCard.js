import { HStack, VStack } from "native-base";
import React from "react";
import LovedHousesCardBody from "./LovedHousesCardBody";
import LovedHousesCardFooter from "./LovedHousesCardFooter";
import LovedHousesCardHeader from "./LovedHousesCardHeader";
import LovedHousesCardImage from "./LoveHouseCardImage";




export default function LovedHousesCard({
    onPlaceBid,
    imageUrl,
    address,
    numOfBed,
    numOfBath,
    isSaved,
    price,
}) {
    const icons = [
        {
            _id: "1",
            text: `${numOfBed} bed`,
            icon: "bed-filled",
            iconColor: "#889096",
        },
        {
            _id: "2",
            text: `${numOfBath} bath`,
            icon: "bath-filled",
            iconColor: "#889096",
            iconStyle: { size: 15 },
        },
        {
            _id: "3",
            text: "Saved",
            icon: "heart-dark",
            iconColor: "#000",
            iconStyle: { size: 15 },
        },
    ];

    return (
        <HStack mb={1} justifyContent={"space-between"} px={4} alignItems={"center"}>
            <LovedHousesCardImage imageUrl={imageUrl} />
            <VStack
                w="70%"
                space="3"
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={1}
                py={4}
            >
                {/* define maximum character */}
                <LovedHousesCardHeader address={address} />
                <LovedHousesCardBody numOfBath={numOfBath} numOfBed={numOfBed} />
                <LovedHousesCardFooter onPlaceBid={onPlaceBid} price={price} />

            </VStack>
        </HStack>
    );
}
