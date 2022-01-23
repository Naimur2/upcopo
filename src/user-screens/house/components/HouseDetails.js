import { HStack, Text, VStack } from "native-base";
import React from "react";

export default function HouseDetails({currentBid,time}) {
    return (
        <HStack justifyContent={"space-between"}>
            <VStack>
                <Text
                    fontSize={16}
                    fontWeight={400}
                    fontFamily={"body"}
                    color={"#7E868C"}
                >
                    Auction Time
                </Text>
                <Text
                    fontSize={18}
                    fontWeight={600}
                    fontFamily={"body"}
                    color={"#52B69A"}
                >
                    {time}
                </Text>
            </VStack>
            <VStack>
                <Text
                    fontSize={16}
                    fontWeight={400}
                    fontFamily={"body"}
                    color={"#7E868C"}
                >
                    Current Bid
                </Text>
                <Text
                    fontSize={18}
                    fontWeight={600}
                    fontFamily={"body"}
                    color={"#52B69A"}
                >
                    {currentBid} ETH
                </Text>
            </VStack>
        </HStack>
    );
}
