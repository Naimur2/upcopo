import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

export default function LovedHouses() {
    return (
        <ScrollView py="4" px="4">
            <HStack bg="dark.700">
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
            </HStack>
            <VStack>
                <Text>889 Palmeron Ave, Mcd..</Text>
            </VStack>
        </ScrollView>
    );
}
