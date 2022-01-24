import { Box, HStack, Image } from "native-base";
import React from "react";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default function CollectionsHeader({coverPhoto}) {
    return (
        <HStack justifyContent={"center"}>
            <Box h={Math.round(windowHeight / 2.7)} w={"100%"} position={"relative"}>
                <Image
                    alt={"Dragon breathing fire attacks castle"}
                    source={{
                        uri:coverPhoto,
                    }}
                    h={"full"}
                    w={"full"}
                />
            </Box>
            
        </HStack>
    );
}
