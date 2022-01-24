import { HStack, Image, Text, VStack } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";
import Counter from "../../common/Counter";
import Like from "../../common/Like";


export default function HouseHeader({
    owner,
    builtAt,
    expiresAt,
    houseName,
    address,
    sqrfit,
    image,
}) {
    return (
        <VStack>
            <VStack space={140} mt={"7%"} p={6}>
                <HStack justifyContent={"space-between"}>
                    <VStack>
                        <Text maxW={40} fontFamily={"body"}>Owned By {owner} </Text>
                        <Text maxW={40} fontFamily={"body"}>W.year {builtAt}</Text>
                    </VStack>
                    <Counter expiresAt={expiresAt} />
                </HStack>
                <HStack justifyContent={"space-between"}>
                    <VStack space="0.5">
                        <Text
                            fontFamily={"body"}
                            fontSize={22}
                            fontWeight={600}
                        >
                            {houseName}
                        </Text>
                        <IconWithText
                            iconName="map"
                            textStyle={{
                                color: "#D7DBDF",
                                textTransform: "uppercase",
                                fontSize: 16,
                            }}
                            iconStyle={{
                                py: 1,
                                color: "#D7DBDF",
                                size: 18,
                            }}
                            containerStyle={{
                                maxW: "75%",
                                alignItems: "flex-start",
                            }}
                            text={address}
                        />
                    </VStack>
                    <VStack space="2" maxW={"25%"}>
                        <Like alignSelf={"flex-end"} />
                        <Text
                            fontFamily={"body"}
                            fontSize={18}
                            fontWeight={500}
                        >
                            {sqrfit}
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
            <Image
                position={"absolute"}
                zIndex={-1}
                height={"full"}
                w={"full"}
                alt={houseName}
                source={{
                    uri: image,
                }}
            />
        </VStack>
    );
}
