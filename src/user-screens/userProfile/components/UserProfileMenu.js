import { useNavigation } from "@react-navigation/native";
import { Box, HStack, VStack } from "native-base";
import React from "react";
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

export default function UserProfileMenu({
    onSearch,
    onClear,
    searchValue,
    service1,
    setService1,
    service2,
    setService2,
}) {
    const navigation = useNavigation();

    return (
        <VStack p={4} space={4}>
            <HStack justifyContent={"space-between"}>
                <Box w="80%">
                    <Search
                        value={searchValue}
                        onSearch={onSearch}
                        onClear={onClear}
                    />
                </Box>
                <Card
                    onPress={() => navigation.navigate("FilterScreen")}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"16%"}
                >
                    <Icon color={"#52B69A"} name={"candle"} size={25} />
                </Card>
            </HStack>
            <HStack justifyContent={"space-between"}>
                <HStack justifyContent={"space-between"} w="80%">
                    <SelectItem
                        onValueChange={(value) => setService1(value)}
                        selectedValue={service1}
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
                    <Icon color={"#52B69A"} name={"square"} size={25} />
                </Card>
            </HStack>
        </VStack>
    );
}
