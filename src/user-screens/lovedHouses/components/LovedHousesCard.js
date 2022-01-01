import { HStack, VStack } from "native-base";
import React from "react";
import LovedHousesCardBody from "./LovedHousesCardBody";
import LovedHousesCardFooter from "./LovedHousesCardFooter";
import LovedHousesCardHeader from "./LovedHousesCardHeader";
import LovedHousesCardImage from "./LovedHousesCardImage";

export default function LovedHousesCard({
    onPlaceBid,
    imageUrl,
    address,
    numOfBed,
    numOfBath,
    price,
}) {
    return (
        <HStack
            mb={1}
            justifyContent={"space-between"}
            px={4}
            alignItems={"center"}
        >
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

                <LovedHousesCardBody
                    numOfBath={numOfBath}
                    numOfBed={numOfBed}
                />
                <LovedHousesCardFooter onPlaceBid={onPlaceBid} price={price} />
                <LovedHousesCardBody
                    numOfBath={numOfBath}
                    numOfBed={numOfBed}
                />
                <LovedHousesCardFooter onPlaceBid={onPlaceBid} price={price} />
            </VStack>
        </HStack>
    );
}
