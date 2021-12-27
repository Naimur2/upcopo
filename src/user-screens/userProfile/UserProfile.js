import { Avatar, Box, Center, Image } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const source = "../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

const panda_05 = require(source + "/panda_05.png");
const panda_05Uri = RnImage.resolveAssetSource(panda_05).uri;

export default function UserProfile({ route, navigation }) {
    //const { userId } = route.params;
    // changes
    return (
        <Center>
            <Box  w={'full'} h={windowHeight/4} position={'relative'}>
                <Image
                    alt={'userId'}
                    source={{ uri: image52Uri }}
                    h={"100%"}
                    w={"100%"}
                />
            </Box>
                <Avatar
                size={'xl'}
                source={{uri:panda_05Uri}}
                position={'absolute'}
                bottom={-50}
                />
        </Center>
    );
}
