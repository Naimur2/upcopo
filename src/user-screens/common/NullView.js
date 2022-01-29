import { useNavigation } from "@react-navigation/native";
import { Box, Image, Stack, Text } from "native-base";
import React from "react";
import Card from "../../utility/Card";
import { Image as RnImage } from "react-native";

const noMessageSrc = require("../../../assets/images/no-message.png");
const noMessageUri = RnImage.resolveAssetSource(noMessageSrc).uri;

const noNotificationsSrc = require("../../../assets/images/no-notification.png");
const noNotificationsUri = RnImage.resolveAssetSource(noNotificationsSrc).uri;

const noLovedSrc = require("../../../assets/images/no-loved.png");
const noLovedUri = RnImage.resolveAssetSource(noLovedSrc).uri;

export default function NullView({
    title,
    subtitle,
    message,
    type,
    path = "DashBoard",
}) {
    const navigation = useNavigation();

    const image = {
        notifications: noNotificationsUri,
        message: noMessageUri,
        love: noLovedUri,
    };

    return (
        <Stack bg="#fff" flex={1} px={4}>
            <Stack justifyContent={"center"} alignItems={"center"}>
                <Box h={220} w={175} minW={150} my={20}>
                    <Image
                        source={{ uri: image[type] }}
                        w="full"
                        h="full"
                        alt="NoNewNotifications img"
                        resizeMode="contain"
                    />
                </Box>
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    space={4}
                >
                    <Text
                        fontFamily={"body"}
                        fontSize={24}
                        fontWeight={600}
                        color={"#3D454A"}
                    >
                        {title}
                    </Text>
                    <Text
                        fontFamily={"body"}
                        fontSize={16}
                        fontWeight={500}
                        color={"#687076"}
                        textAlign="center"
                    >
                        {subtitle}
                    </Text>
                </Stack>
                <Stack w={"90%"} py={4}>
                    <Card
                        bg={"#F2F8F6"}
                        h={16}
                        justifyContent={"center"}
                        alignItems="center"
                        onPress={() => navigation.navigate(path)}
                    >
                        <Text
                            fontFamily={"body"}
                            fontSize={16}
                            fontWeight={600}
                            color={"#52B69A"}
                        >
                            Return in home page
                        </Text>
                    </Card>
                </Stack>
            </Stack>
        </Stack>
    );
}
