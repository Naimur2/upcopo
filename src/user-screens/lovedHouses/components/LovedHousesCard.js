import { Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";
import UtilityBtn from "../../../utility/UtilityBtn";

export default function LovedHousesCard({
    onPlaceBid,
    imageUrl,
    address,
    numOfBed,
    numOfBath,
    isSaved,
    price,
}) {
    const icons = [
        {
            _id: "1",
            text: `${numOfBed} bed`,
            icon: "bed-filled",
            iconColor: "#889096",
        },
        {
            _id: "2",
            text: `${numOfBath} bath`,
            icon: "bath-filled",
            iconColor: "#889096",
            iconStyle: { size: 15 },
        },
        {
            _id: "3",
            text: "Saved",
            icon: "heart-dark",
            iconColor: "#000",
            iconStyle: { size: 15 },
        },
    ];

    return (
        <HStack mb={1} justifyContent={"space-between"} px={4} alignItems={"center"}>
            <Box w="26%" h="115" overflow="hidden">
                <Image
                    borderRadius={14}
                    alt="Loved Houses"
                    width={"100%"}
                    height={"100%"}
                    source={{
                        uri: imageUrl,
                    }}
                />
            </Box>
            <VStack
                w="70%"
                space="3"
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={1}
                py={4}
            >
                {/* define maximum character */}
                <Text
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"#3D454A"}
                    fontSize={"18"}
                >
                    {address}
                </Text>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    {icons.map((icon) => (
                        <IconWithText
                            key={icon._id}
                            iconName={icon.icon}
                            iconColor={icon.iconColor}
                            text={icon.text}
                            iconStyle={icon.iconStyle || ""}
                        />
                    ))}
                </HStack>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <IconWithText
                        iconName="etherium"
                        text={price}
                        iconColor={"#52B69A"}
                        textStyle={{
                            fontWeight: 700,
                            fontFamily: "body",
                            color: "#52B69A",
                        }}
                    />
                    <UtilityBtn title={"Place a Bid"} onPress={onPlaceBid} />
                </HStack>
            </VStack>
        </HStack>
    );
}
