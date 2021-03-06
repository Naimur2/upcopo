import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import React, { useState } from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";
import Search from "../../../utility/Search";
import SelectItem from "../../../utility/SelectItem";

const items = [
    { _id: "01", label: "Single items", value: "ux" },
    { _id: "02", label: "Multiple items", value: "design" },
];
const items2 = [
    { _id: "01", label: "Low to High", value: "l2h" },
    { _id: "02", label: "High to low", value: "h2l" },
];

export default function SearchPagesHeader({
    onSearch,
    onClear,
    value,
    service1,
    setService1,
    service2,
    setService2,
}) {
    const navigation = useNavigation();

    return (
        <VStack py={4} space={4}>
            <HStack space="3%">
                <Box w="80%">
                    <Search
                        value={value}
                        onClear={onClear}
                        onSearch={onSearch}
                    />
                </Box>
                <Pressable
                    onPress={() => navigation.navigate("ARview")}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"16%"}
                >
                    <Text
                        fontFamily={"body"}
                        fontWeight={500}
                        fontSize={16}
                        color={"#52B69A"}
                    >
                        Map
                    </Text>
                </Pressable>
            </HStack>

            <HStack space="3%">
                <HStack space="4%" w="80%">
                    <SelectItem
                        onValueChange={(v) => setService1(v)}
                        selectedValue={service1}
                        items={items}
                        w="48%"
                    />
                    <SelectItem
                        onValueChange={(vl) => setService2(vl)}
                        selectedValue={service2}
                        placeholder={"Set Values"}
                        items={items2}
                        w="48%"
                    />
                </HStack>
                <Card justifyContent={"center"} alignItems={"center"} w={"16%"}>
                    <Icon color={"#52B69A"} name={"square"} size={25} />
                </Card>
            </HStack>
        </VStack>
    );
}
