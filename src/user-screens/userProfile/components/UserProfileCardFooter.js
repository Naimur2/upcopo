import { HStack, Text } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

export default function UserProfileCardFooter({ likes, topBid }) {
    return (
        <HStack justifyContent={"space-between"}>
            <HStack space={2} alignItems={"center"}>
                <Icon name={"heart-dark"} color={'#3D454A'} size={18} />
                <Text
                    fontFamily={"body"}
                    fontSize={16}
                    color={"#000"}
                    fontWeight={400}
                >
                    {likes}
                </Text>
            </HStack>

            <HStack space={2}>
                <Text
                    fontFamily={"body"}
                    fontSize={16}
                    color={"#3D454A"}
                    fontWeight={600}
                >
                    Top Bid
                </Text>
                <HStack space={2} alignItems={"center"}>
                    <Icon color={'#687076'} name={"etherium"} size={20} />
                    <Text
                        fontFamily={"body"}
                        fontSize={16}
                        color={"#000"}
                        fontWeight={500}
                    >
                        {topBid}
                    </Text>
                </HStack>
            </HStack>
        </HStack>
    );
}
