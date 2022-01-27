import { Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";
import IconWithText from "../../../utility/IconWithText";

export default function SearchResultCard({
    imageUri,
    houseName,
    address,
    bath,
    bed,
    onIconPress,showClose
}) {
    return (
        <HStack
            p="2"
            alignItems="center"
            justifyContent={"space-between"}
            borderRadius={10}
        >
            <Box w="24%" h="84" borderRadius={10} overflow="hidden">
                <Image
                    w="full"
                    h="full"
                    alt="house image"
                    source={{
                        uri: imageUri,
                    }}
                />
            </Box>
            <VStack
                w="72%"
                space="1"
                borderBottomWidth={2}
                borderBottomColor={"#D7DBDF"}
                pb={2.5}
            >
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Text
                        fontSize={18}
                        fontWeight={600}
                        fontFamily={"body"}
                        color={"#52B69A"}
                    >
                        {houseName}
                    </Text>
                   {showClose && <Icon onPress={onIconPress} name="x" size={24} color={"#C1C8CD"} />}
                </HStack>
                <IconWithText
                    iconName="map"
                    textStyle={{
                        fontSize: 14,
                    }}
                    iconStyle={{ py: 0.5, size: 16 }}
                    containerStyle={{
                        maxW: "90%",
                        alignItems: "flex-start",
                    }}
                    text={address}
                />
                <HStack space={6}>
                    <IconWithText
                        iconName="bed-filled"
                        textStyle={{
                            fontSize: 16,
                            color: "#687076",
                            fontWeight: 400,
                        }}
                        iconStyle={{ size: 18 }}
                        text={`${bed} Bed`}
                    />
                    <IconWithText
                        iconName="bath-filled"
                        textStyle={{
                            fontSize: 16,
                            color: "#687076",
                            fontWeight: 400,
                        }}
                        iconStyle={{ size: 16 }}
                        text={`${bath} Bath`}
                    />
                </HStack>
            </VStack>
        </HStack>
    );
}
