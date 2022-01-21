import { Avatar, HStack, Stack, Text, VStack } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";

const imageSrc = require("../../../../assets/images/images.png");

const imgUri = RnImage.resolveAssetSource(imageSrc).uri;

export default function MainHeader({ user, mobile, email, avatar }) {
    const HeaderImg = ({avatarSrc}) => {
        return (
            <Avatar
                source={{
                    uri: avatarSrc,
                }}
                size={20}
            />
        );
    };

    const HeaderBody = () => {
        return (
            <VStack justifyContent={'center'}>
                <Text
                    fontSize={18}
                    fontFamily={"body"}
                    fontWeight={600}
                    color={"#fff"}
                >
                    {user }
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
                {<HeaderImg avatarSrc={avatar ? avatar : imgUri} />}
                <HeaderBody />
            </HStack>
        </Stack>
    );
}
