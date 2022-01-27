import { HStack, VStack } from "native-base";
import React from "react";
import useHouse from "../../../hooks/useHouse";
import usePlaceBid from "../../../hooks/usePlaceBid";
import PlaceBidAction from "../../common/PlaceBidAction";
import LovedHousesCardBody from "./LovedHousesCardBody";
import LovedHousesCardFooter from "./LovedHousesCardFooter";
import LovedHousesCardHeader from "./LovedHousesCardHeader";
import LovedHousesCardImage from "./LovedHousesCardImage";

export default function LovedHousesCard({
    houseId,
}) {
    const [bidHistory, showActions, showActionHandler, closeActionHandler] =
        usePlaceBid(houseId);
    const house = useHouse(houseId);

    return (
        <HStack
            mb={1}
            justifyContent={"space-between"}
            px={4}
            alignItems={"center"}
        >
            <LovedHousesCardImage imageUrl={house.image} />
            <VStack
                w="70%"
                space="3"
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={1.5}
                py={4}
            >
                {/* define maximum character */}
                <LovedHousesCardHeader address={house.address} />

                <LovedHousesCardBody
                    numOfBath={house.bath}
                    numOfBed={house.bed}
                />
                <LovedHousesCardFooter
                    onPlaceBid={showActionHandler}
                    price={house.topBid}
                />
                <PlaceBidAction
                    isOpen={showActions}
                    bidHistoryState={bidHistory}
                    onClose={closeActionHandler}
                    houseId={houseId}
                    minimumBid={house.minimumBid}
                />
            </VStack>
        </HStack>
    );
}
