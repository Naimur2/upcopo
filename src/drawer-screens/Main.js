import { Text, VStack } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Main() {
    const navigation =useNavigation();
    let clean = false;
    React.useEffect(() => {
        navigation.openDrawer();
        return () => !clean;
    }, [navigation])
    return (
        <VStack
            alignItems={"center"}
            justifyContent={"center"}
            bg="dark.200"
            h="full"
        >
            <Text
                fontWeight={700}
                fontFamily={"body"}
                fontSize={20}
                color={"light.100"}
            >
                Naimur Rahaman
            </Text>
        </VStack>
    );
}
