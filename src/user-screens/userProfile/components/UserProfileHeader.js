import { Avatar, Box, Center, HStack, Image, Stack, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";
import Varified from "../../../utility/Varified";

const windowHeight = Dimensions.get("window").height;


export default function UserProfileHeader({
    userAvatar,
    userCoverphoto,
    name,
    isVarified
}) {
    return (
        <Stack>
            <Center>
                <Box w={"full"} h={windowHeight / 3.5} position={"relative"}>
                    <Image
                        alt={"userId"}
                        source={{ uri: userCoverphoto }}
                        h={"100%"}
                        w={"100%"}
                    />
                </Box>
                <Avatar
                    size={"2xl"}
                    source={{ uri: userAvatar }}
                    position={"absolute"}
                    bottom={-50}
                />
            </Center>
            <HStack px={4} mt={4} justifyContent={"flex-end"}>
                <Card>
                    <Icon name={"export"} size={20} color={"#687076"} />
                </Card>
            </HStack>
            <HStack
                space={2}
                alignItems={"center"}
                justifyContent={"center"}
                pt={2.5}
                px={4}
            >
                <Text
                    fontFamily={"body"}
                    fontSize={18}
                    color={"#000"}
                    fontWeight={600}
                >
                    {name}
                </Text>
                {isVarified && <Varified h={7} w={7} />}
            </HStack>
        </Stack>
    );
}
