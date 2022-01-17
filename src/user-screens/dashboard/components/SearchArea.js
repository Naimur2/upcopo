import { useNavigation } from "@react-navigation/native";
import { HStack, Text } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";

export default function SearchArea() {
    const navigation = useNavigation();

    return (
        <HStack px="4" my={6} justifyContent={"space-between"}>
            <Card onPress={()=>navigation.navigate('SearchHouse')} justifyContent={"center"} alignItems={"flex-start"} w={"80%"}>
                <HStack space="2">
                    <Icon
                        p="1"
                        ml={3}
                        mr={1}
                        borderRadius={50}
                        bg={"#52B69A"}
                        color={"#fff"}
                        name={"search"}
                        size={16}
                    />
                    <Text color={'#7E868C'}>Search your houses</Text>
                </HStack>
            </Card>
            <Card justifyContent={"center"} alignItems={"center"} w={"16%"}>
                <Icon color={"#52B69A"} name={"notification"} size={25} />
            </Card>
        </HStack>
    );
}
