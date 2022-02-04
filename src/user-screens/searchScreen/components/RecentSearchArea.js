import { useNavigation } from "@react-navigation/native";
import { Stack, Text, VStack } from "native-base";
import React, { useEffect, useRef } from "react";
import Search from "../../../utility/Search";

export default function RecentSearchArea({onSearch,onClear,searchValue}) {
    let clean = true;
    const searchA = useRef();
    const navigation = useNavigation();
    useEffect(() => {
        searchA.current.focus();
    }, [navigation]);

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

            <Search
                value={searchValue}
                onSearch={onSearch}
                onClear={onClear}
                ref={searchA}
            />
        </Stack>
    );
}
