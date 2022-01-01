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
    price,
}) {

    return (
<<<<<<< HEAD
        <HStack
            mb={1}
            justifyContent={"space-between"}
            px={4}
            alignItems={"center"}
        >
=======
        <HStack mb={1} justifyContent={"space-between"} px={4} alignItems={"center"}>
>>>>>>> 2bea5060fc9fedfc2810959850fd812f1cf9e04f
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
<<<<<<< HEAD
                <LovedHousesCardBody
                    numOfBath={numOfBath}
                    numOfBed={numOfBed}
                />
                <LovedHousesCardFooter onPlaceBid={onPlaceBid} price={price} />
=======
                <LovedHousesCardBody numOfBath={numOfBath} numOfBed={numOfBed} />
                <LovedHousesCardFooter onPlaceBid={onPlaceBid} price={price} />

>>>>>>> 2bea5060fc9fedfc2810959850fd812f1cf9e04f
            </VStack>
        </HStack>
    );
}
