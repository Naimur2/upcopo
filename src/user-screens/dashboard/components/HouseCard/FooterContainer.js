import { HStack, Text, VStack } from "native-base";
import React from "react";
import UtilityBtn from "../../../../utility/UtilityBtn";

export default function FooterContainer({ currentBid,onPlaceBid }) {

    return (
        <HStack  pt={2} alignItems={"center"} justifyContent={"space-between"}>
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
                onPress={onPlaceBid}
                px="3"
                py={1}
                borderRadius={5}
                titleStyle={{ fontSize: 16 }}
                title="Place a Bid"
                
            />
            
        </HStack>
    );
}
