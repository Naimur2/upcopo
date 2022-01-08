import { Avatar, Box, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";
import Varified from "../../../utility/Varified";

export default function PaceBidActionCard({
    avatar,
    varified,
    userName,
    price,
    counter,
    ...rest
}) {
    const Left = () => (
        <Box w={12} h={12}>
            <Avatar
                alt={"pandaimg"}
                h={"full"}
                w={"full"}
                source={{ uri: avatar }}
                position={"relative"}
            />
            {varified && (
                <Varified position={"absolute"} bottom={0} right={0} size={5} />
            )}
        </Box>
    );

    const Middle = () => (
        <VStack>
            <Text
                fontFamily={"body"}
                color={"#11181C"}
                fontWeight={600}
                fontSize={"16"}
            >
                {price}
            </Text>
            <Text
                fontFamily={"body"}
                color={"#7E868C"}
                fontWeight={600}
                fontSize={"13"}
            >
                {userName}
            </Text>
        </VStack>
    );

    const Right = () => (
        <HStack>
            <Box
                bg={"#ECEEF0"}
                borderRadius={50}
                w={10}
                h={10}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    fontFamily={"body"}
                    color={"#3D454A"}
                    fontWeight={600}
                    fontSize={"16"}
                >
                    {counter}
                </Text>
            </Box>
        </HStack>
    );

    return (
        <Pressable>
            <HStack
                space={4}
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={1.5}
                justifyContent={'space-between'}
                alignItems={'center'}
                p={4}
            >
                <HStack space={4}>
                    <Left/>
                    <Middle />
                </HStack>
                <Right />
            </HStack>
        </Pressable>
    );
}
