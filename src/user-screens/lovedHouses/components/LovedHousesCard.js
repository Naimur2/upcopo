import { HStack, VStack } from "native-base";
import React from "react";
import LovedHousesCardBody from "./LovedHousesCardBody";
import LovedHousesCardFooter from "./LovedHousesCardFooter";
import LovedHousesCardHeader from "./LovedHousesCardHeader";
import LovedHousesCardImage from "./LovedHousesCardImage";
import usePlaceBid from "../../../hooks/usePlaceBid";
import PlaceBidAction from "../../common/PlaceBidAction";

export default function LovedHousesCard({
   imageUrl,
    address,
    numOfBed,
    numOfBath,
    price,
    houseId,
    minimumBid
}) {

    const [bidHistory,showActions,showActionHandler,closeActionHandler] = usePlaceBid(houseId)



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
                borderBottomWidth={1.5}
                py={4}
            >
                {/* define maximum character */}
                <LovedHousesCardHeader address={address} />

                <LovedHousesCardBody
                    numOfBath={numOfBath}
                    numOfBed={numOfBed}
                />
                <LovedHousesCardFooter onPlaceBid={showActionHandler} price={price} />
                <PlaceBidAction
                    isOpen={showActions}
                    bidHistoryState={bidHistory}
                    onClose={closeActionHandler}
                    houseId={houseId}
                    minimumBid={minimumBid}
                />
            </VStack>
        </HStack>
    );
}
