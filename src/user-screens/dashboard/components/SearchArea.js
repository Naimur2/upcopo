import { useNavigation } from "@react-navigation/native";
import { Box, HStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";
import Search from "../../../utility/Search";

export default function SearchArea() {
    const navigation = useNavigation();

    return (
        <HStack px="4" my={6}  justifyContent={"space-between"}>
            <Box w="80%">
                <Search />
            </Box>
            <Card justifyContent={"center"} alignItems={"center"} w={"16%"}>
                <Icon color={"#52B69A"} name={"notification"} size={25} />
            </Card>
        </HStack>
    );
}

