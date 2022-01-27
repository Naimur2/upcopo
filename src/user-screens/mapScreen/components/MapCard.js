import { Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import IconWithText from "../../../utility/IconWithText";

export default function MapCard({item,onPress,...rest}) {
  
    return (
        <Card _pressed={{bg:'#fcfcfc'}} ml={4} mt={4} h={32}  onPress={onPress} {...rest} >
            <HStack space={4} py={2}>
                <Box h={24} w={20}>
                    <Image
                        source={{
                            uri: item.image,
                        }}
                        h="full"
                        w="full"
                        borderRadius={10}
                        alt="house11"
                    />
                </Box>
                <VStack space="1">
                    <Text
                        fontFamily={"body"}
                        fontWeight={500}
                        fontSize={14}
                        color={"#333"}
                        maxW={40}
                    >
                    {item.houseName}
                    </Text>
                    <IconWithText
                        iconName={"navigation"}
                        size={20}
                        color={"#7E868C"}
                        text={item.address}

                        textStyle={{
                            fontSize: 10,
                            color: "#687076",
                            fontWeight: "400",
                            maxW:40,
                            numberOfLines:1
                        }}
                    />
                    <HStack space={4}>
                        <IconWithText
                            iconName={"bed-filled"}
                            size={20}
                            color={"#7E868C"}
                            text={`${item.bed} bed`}
                            textStyle={{
                                fontSize: 10,
                                color: "#687076",
                                fontWeight: "400",
                            }}
                        />
                        <IconWithText
                            iconName={"bath-filled"}
                            size={20}
                            color={"#7E868C"}
                            text={`${item.bath} bath`}
                            iconStyle={{
                                size:16
                            }}
                            textStyle={{
                                fontSize: 10,
                                color: "#687076",
                                fontWeight: "400",
                            }}
                        />
                    </HStack>
                    <IconWithText
                        iconName={"etherium"}
                        size={20}
                        color={"#3D454A"}
                        text={item.topBid}
                        textStyle={{
                            fontSize: 14,
                            color: "#3D454A",
                            fontWeight: 500,
                        }}
                    />
                </VStack>
            </HStack>
        </Card>
    );
}
