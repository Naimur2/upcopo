import { Stack, Text, VStack } from "native-base";
import React from "react";
import Search from "../../../utility/Search";

export default function SearchArea() {
    return (
        <Stack space="5">
            <VStack>
                <Text
                    fontSize={22}
                    fontWeight={600}
                    fontFamily={"body"}
                    color={"#11181C"}
                >
                    To reach their home
                </Text>
                <Text
                    fontSize={18}
                    fontWeight={400}
                    fontFamily={"body"}
                    color={"#687076"}
                >
                    Let’s find a home thst’s perfect for you
                </Text>
            </VStack>
            <Search />
        </Stack>
    );
}
