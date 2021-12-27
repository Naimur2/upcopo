import { Avatar, Box, Image } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";

const windowWidth = Dimensions.get("window").width;

const source = "../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

const panda_05 = require(source + "/panda_05.png");
const panda_05Uri = RnImage.resolveAssetSource(panda_05).uri;

export default function UserProfile({ route, navigation }) {
    //const { userId } = route.params;
    // changes
    return (
        <Box bg={"#161616"}>
            <Image
                w={windowWidth}
                alt={'userId'}
                source={{ uri: image52Uri }}
                h={"50%"}
                position={'relative'}
            />
            <Avatar
            size={'xl'}
            source={{uri:panda_05Uri}}
            position={'absolute'}
            bottom={0}

            />
             

        </Box>
    );
}
