import { Avatar, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";

export default function OtherUsersProfileBody() {


    return (
        <VStack py={4}>
            <Card mx={4} p={4} mt={4}>
                <HStack justifyContent={"space-between"}>
                    <Icon name={"menu"} size={22} color={"#11221C"} />
                    <Icon name={"activity"} size={22} color={"#889096"} />
                    <Icon name={"tag"} size={22} color={"#889096"} />
                </HStack>
            </Card>
        </VStack>
    );
}
