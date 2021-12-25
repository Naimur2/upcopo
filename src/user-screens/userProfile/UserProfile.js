import { Box, Center, Text } from "native-base";
import React from "react";
import BackgroundImage from "./SvgComponent";
// import image52 from '../../assets/images/image52.svg';

//const source = "../../../assets/images";
//const image52 = require(source + "/image52.svg");
//const image52Uri = RnImage.resolveAssetSource(image52).uri;

export default function UserProfile({ route, navigation }) {
    const { userId } = route.params;
    // changes

    return (
        <Box height={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Text color="black" fontWeight={"bold"}>
                User Profile {userId}
            </Text>
            <Center py={10}>
                <BackgroundImage />
            </Center>
        </Box>
    );
}
