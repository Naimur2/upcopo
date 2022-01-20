import { Avatar, HStack, Pressable, Text } from "native-base";
import React from "react";


const UserProfileCardHeader = ({ avatar, userName, daysLeft,onUserPress }) => (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Pressable flexDirection='row' alignItems={"center"} onPress={onUserPress}>
            <Avatar
                size={"10"}
                mr={2}
                source={{
                    uri: avatar,
                }}
            />
            <Text
                fontFamily={"body"}
                fontSize={16}
                color={"#3D454A"}
                fontWeight={700}
            >
                @{userName}
            </Text>
            {/* <Varified h={6} w={6} ml={1} /> */}
        </Pressable>
        <Text
            fontFamily={"body"}
            fontSize={16}
            color={"#889096"}
            fontWeight={500}
        >
            {daysLeft}
        </Text>
    </HStack>
);
export default UserProfileCardHeader;
