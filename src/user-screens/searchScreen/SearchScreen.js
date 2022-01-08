import { Stack, Text, VStack } from "native-base";
import React from "react";
import SearchArea from "./components/SearchArea";
import SearchResultTabView from "./components/SearchResultTabView";

export default function SearchScreen() {
    return (
        <Stack p={4} space={6} h={'full'}>
            <SearchArea />
            <VStack>
                <Text
                    fontSize={20}
                    fontWeight={600}
                    fontFamily={"body"}
                    color={"#11181C"}
                >
                    Recent Searches
                </Text>
            </VStack>
            <SearchResultTabView />
        </Stack>
    );
}
