import { Avatar, HStack, Stack, Text, VStack } from "native-base";
import React from "react";
export default function MainHeader({ user, mobile, email, avatar }) {
    const HeaderImg = () => {
        return (
            <Avatar
                source={{
                    uri: avatar,
                }}
                size={20}
            />
        );
    };

    const HeaderBody = () => {
        return (
            <VStack>
                <Text
                    fontSize={18}
                    fontFamily={"body"}
                    fontWeight={600}
                    color={"#fff"}
                >
                    {user}
                </Text>
                {mobile && (
                    <Text
                        fontSize={16}
                        fontFamily={"body"}
                        fontWeight={400}
                        color={"#fff"}
                    >
                        {mobile}
                    </Text>
                )}
                {email && (
                    <Text
                        fontSize={16}
                        fontFamily={"body"}
                        fontWeight={400}
                        color={"#fff"}
                    >
                        {email}
                    </Text>
                )}
            </VStack>
        );
    };
    return (
        <Stack bg={"#52B69A"}>
            <HStack p={4} space={4}>
                {avatar && <HeaderImg avatar={avatar} />}
                <HeaderBody />
            </HStack>
        </Stack>
    );
}
