import { Box, HStack, VStack } from "native-base";
import React, { useState } from "react";
import { Dimensions, Image as RnImage } from "react-native";
import Card from "../../../utility/Card";
import FormInput from "../../../utility/FormInput";
import Icon from "../../../utility/Icon";
import SelectItem from "../../../utility/SelectItem";

const windowHeight = Dimensions.get("window").height;

const source = "../../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

const panda_05 = require(source + "/panda_05.png");
const panda_05Uri = RnImage.resolveAssetSource(panda_05).uri;

const items = [
    { _id: "01", label: "UX/UI", value: "ux" },
    { _id: "02", label: "Design", value: "design" },
    { _id: "03", label: "Development", value: "development" },
    { _id: "04", label: "Large House", value: "large" },
];
const items2 = [
    { _id: "01", label: "UX/UI", value: "ux" },
    { _id: "02", label: "Design", value: "design" },
    { _id: "03", label: "Development", value: "development" },
    { _id: "04", label: "Large House", value: "large" },
];

export default function UserProfileMenu({ route, navigation }) {
    let [service1, setService1] = useState("");
    let [service2, setService2] = useState("");

    return (
        <VStack p={4} space={4}>
            <HStack space="3%">
                <Box w="80%">
                    <FormInput
                        leftElement={
                            <Icon
                                p="2"
                                ml={4}
                                mr={1}
                                borderRadius={50}
                                bg={"#52B69A"}
                                color={"#fff"}
                                name={"search"}
                                size={20}
                            />
                        }
                        placeHolder={"Search"}
                        type={"search"}
                        isFullWidth={false}
                        borderColor={"#fff"}
                        py={3}
                    />
                </Box>
                <Card justifyContent={"center"} alignItems={"center"} w={"16%"}>
                    <Icon color={"#52B69A"} name={"candle"} size={26} />
                </Card>
            </HStack>
            <HStack space="3%">
                <HStack space="4%" w="80%">
                    <SelectItem
                        onValueChange={(value) => setService1(value)}
                        selectedValue={service1}
                        placeholder={"Set Items"}
                        items={items}
                        w="48%"
                    />
                    <SelectItem
                        onValueChange={(value) => setService2(value)}
                        selectedValue={service2}
                        placeholder={"Set Values"}
                        items={items2}
                        w="48%"
                    />
                </HStack>
                <Card justifyContent={"center"} alignItems={"center"} w={"16%"}>
                    <Icon color={"#52B69A"} name={"square"} size={26} />
                </Card>
            </HStack>
        </VStack>
    );
}
