import { Avatar, HStack, Text, VStack } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

export default function MessagingBody({
    username,
    avaterUrl,
    lastMessage,
    lastMessageTime,
    unreadMessages,
}) {

    const lastMesage= new Date(lastMessageTime);
    const time= lastMesage.toLocaleTimeString();



    return (
        <HStack
            justifyContent={"space-between"}
            p={4}
            borderBottomColor={"#E6E8EB"}
            borderBottomWidth={1}
        >
            <HStack w={"20%"}>
                <Avatar
                    size={16}
                    source={{
                        uri: avaterUrl,
                    }}
                />
            </HStack>
            <HStack w={"60%"}>
                <VStack>
                    <VStack  space={2}>
                        <Text
                            color={"#3D454A"}
                            fontWeight={"500"}
                            fontFamily={"body"}
                            fontSize={"18"}
                        >
                            {username}
                        </Text>
                        {/* <HStack space={2}>
                            <Icon
                                name={"call-incoming"}
                                color={"#687076"}
                                size={20}
                            />
                            <Text
                                color={"#687076"}
                                fontWeight={"400"}
                                fontFamily={"body"}
                                fontSize={"16"}
                            >
                               {lastMessageText}
                            </Text>
                        </HStack> */}
                    </VStack>
                </VStack>
            </HStack>
            <HStack w={"20%"} mt={2}>
                <Text
                    color={"#687076"}
                    fontWeight={"400"}
                    fontFamily={"body"}
                    fontSize={"16"}
                >
                    {time}
                </Text>
            </HStack>
        </HStack>
    );
}
