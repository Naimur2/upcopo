import { Box, HStack, Image, Stack, Text } from "native-base";
import React from "react";

export default function LovedHouses() {
    return (
        <Stack py={10}>
            <HStack space={'4%'} px={4}>
                {/* image */}
                <Box borderRadius={16} w="30%" h="125" overflow="hidden">
                    <Image
                        alt="Loved Houses"
                        width={"100%"}
                        height={"100%"}
                        source={{
                            uri: "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                        }}
                    />
                </Box>
                <HStack w="66%">
                    {/* define maximum character */}
                    <Text
                        fontFamily={"body"}
                        fontWeight={"500"}
                        color={"#3D454A"}
                        fontSize={"18"}
                    >
                        889 Palmeron Ave, Mcd..
                    </Text>
                </HStack>
            </HStack>
        </Stack>
    );
}
