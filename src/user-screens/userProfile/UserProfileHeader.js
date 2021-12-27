import { Avatar, Box, Center, HStack, Image, Stack, Text } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";
import Card from "../../utility//Card";
import Icon from "../../utility//Icon";
import Varified from "../../utility/Varified";

const windowHeight = Dimensions.get("window").height;

const source = "../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

const panda_05 = require(source + "/panda_05.png");
const panda_05Uri = RnImage.resolveAssetSource(panda_05).uri;

export default function UserProfileHeader({ route, navigation }) {
    return (
        <Stack>
        <Center>
            <Box w={"full"} h={windowHeight / 3.5} position={"relative"}>
                <Image
                    alt={"userId"}
                    source={{ uri: image52Uri }}
                    h={"100%"}
                    w={"100%"}
                />
            </Box>
            <Avatar
                size={"2xl"}
                source={{ uri: panda_05Uri }}
                position={"absolute"}
                bottom={-50}
            />
        </Center>
        <HStack  px={4} mt={4} justifyContent={"flex-end"}>
            <Card>
                <Icon name={"export"} size={20} color={"#687076"} />
            </Card>
        </HStack>
        <HStack
            space={2}
            alignItems={"center"}
            justifyContent={"center"}
            pt={3}
            px={4}
        >
            <Text fontFamily={'body'} fontSize={18} color={"#000"} fontWeight={600}>
                Jhon Doe
            </Text>
            <Varified h={6} w={6} />
        </HStack>
    </Stack>
    );
}
