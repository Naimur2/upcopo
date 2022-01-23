import { useNavigation } from "@react-navigation/native";
import { HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Card from "../../utility/Card";

export default function SellerCard({
    username,
    avatar,
    varified,
    houseImage,
    houseDescription,
    topBid,
    lastBid,
    onPress,
    ...rest
}) {
    

    return (
        <Card
            onPress={onPress}
            {...rest}
        >
            <VStack space="2">
                <Image
                    borderRadius={12}
                    source={{ uri: houseImage }}
                    alt={'house image'}
                    minH={160}
                    maxH={200}
                    w={"100%"}
                />
                <VStack space={1} mx={2}>
                    <HStack justifyContent={"space-between"}>
                        <Text
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#687076"}
                        >
                            Top bid
                        </Text>
                        <Text
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#3D454A"}
                        >
                            {topBid} ETH
                        </Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Text
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#687076"}
                        >
                            Last bid
                        </Text>
                        <Text
                            fontWeight={500}
                            fontFamily={"body"}
                            color={"#3D454A"}
                        >
                            {lastBid} ETH
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </Card>
    );
}
