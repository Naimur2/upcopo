import { HStack, Text, VStack } from "native-base";
import React, { useState } from "react";
import UtilityBtn from "../../../utility/UtilityBtn";
import PlaceBidAction from "../../common/PlaceBidAction";

export default function FooterContainer({ currentBid }) {
    const [isOpen,setIsOpen] =useState(false);

    const handleAction=()=>{
        setIsOpen(prev=>!prev)
    }

    return (
        <HStack py={2} alignItems={"center"} justifyContent={"space-between"}>
            <VStack>
                <Text
                    fontSize={14}
                    fontFamily={"body"}
                    color={"#889096"}
                    fontWeight={400}
                >
                    Current Bid
                </Text>
                <Text
                    fontSize={16}
                    fontFamily={"body"}
                    color={"#3D454A"}
                    fontWeight={"500"}
                >
                    {currentBid} ETH
                </Text>
            </VStack>
            <UtilityBtn
                onPress={handleAction}
                px="3"
                py={1}
                borderRadius={5}
                titleStyle={{ fontSize: 16 }}
                title="Place a Bid"
            />
            <PlaceBidAction isOpen={isOpen} onClose={handleAction} />
        </HStack>
    );
}
