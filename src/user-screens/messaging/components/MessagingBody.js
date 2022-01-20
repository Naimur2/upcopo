import { Avatar, Box, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";

export default function MessagingBody({
    username,
    avatarUrl,
    numberofUnreadMessage,
    lastMessageTime,
    lastMessage,
    onPress
}) {
    return (
        <Pressable onPress={onPress}>
            <HStack
                py={2}
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={2}
                justifyContent={"space-between"}
                alignItems="center"
            >
                <Box w="18%">
                    <Avatar
                        size={16}
                        source={{
                            uri: avatarUrl,
                        }}
                    />
                </Box>
                <VStack space={1} w={"78%"}>
                    <HStack w="full" justifyContent={"space-between"}>
                        <Text
                            fontSize={16}
                            fontFamily={"body"}
                            numberOfLines={1}
                            maxW={"80%"}
                            fontWeight={
                                numberofUnreadMessage &&
                                numberofUnreadMessage > 0
                                    ? 600
                                    : 500
                            }
                            color={
                                numberofUnreadMessage &&
                                numberofUnreadMessage > 0
                                    ? "#11181C"
                                    : "#3D454A"
                            }
                        >
                            {username}
                        </Text>
                        <Text
                            fontSize={16}
                            fontFamily={"body"}
                            numberOfLines={1}
                            fontWeight={400}
                            color={"#687076"}
                            textTransform="uppercase"
                        >
                            {lastMessageTime}
                        </Text>
                    </HStack>
                    <HStack
                        alignItems={"center"}
                        w="full"
                        justifyContent={"space-between"}
                    >
                        <Text
                            fontSize={16}
                            fontFamily={"body"}
                            numberOfLines={1}
                            maxW={"80%"}
                            fontWeight={
                                numberofUnreadMessage &&
                                numberofUnreadMessage > 0
                                    ? 400
                                    : 500
                            }
                            color={
                                numberofUnreadMessage &&
                                numberofUnreadMessage > 0
                                    ? "#11181C"
                                    : "#687076"
                            }
                        >
                            {lastMessage}
                        </Text>
                        {numberofUnreadMessage && numberofUnreadMessage > 0 ? (
                            <Text
                                fontSize={16}
                                fontFamily={"body"}
                                numberOfLines={1}
                                fontWeight={600}
                                color={"#fff"}
                                bg="#52B69A"
                                px="2.5"
                                py={0.5}
                                borderRadius={16}
                            >
                                {numberofUnreadMessage}
                            </Text>
                        ) : null}
                    </HStack>
                </VStack>
            </HStack>
        </Pressable>
    );
}
