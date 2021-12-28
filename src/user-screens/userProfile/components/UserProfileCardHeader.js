import { Avatar, HStack,Text } from "native-base";
import React from "react";
import Varified from "../../.././utility/Varified";

const UserProfileCardHeader = ({ avatar, userName, daysLeft }) => (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
        <HStack alignItems={"center"} space={2}>
            <Avatar
                size={"10"}
                mr={1}
                source={{
                    uri: avatar,
                }}
            />
            <Text
                fontFamily={"body"}
                fontSize={16}
                color={"#52B69A"}
                fontWeight={700}
            >
                @{userName}
            </Text>
            <Varified h={6} w={6} />
        </HStack>
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
