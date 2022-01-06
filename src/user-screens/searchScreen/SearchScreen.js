import { Stack, Text, VStack } from "native-base";
import React, { useState } from "react";
import Search from "../../utility/Search";

export default function SearchScreen() {
    const [open, setOpen] = useState(false);
    return (
        <Stack p={4} space={6}>
            <VStack>
                <Text fontSize={22} fontWeight={600} fontFamily={"body"} color={"#11181C"}>
                    To reach their home
                </Text>
                <Text fontSize={18} fontWeight={400} fontFamily={"body"} color={"#687076"}>
                    Let’s find a home thst’s perfect for you
                </Text>
            </VStack>
            <Search />
            <VStack>
                <Text fontSize={20} fontWeight={600} fontFamily={"body"} color={"#11181C"}>
                    Recent Searches
                </Text>
            </VStack>

        </Stack>
    );
}
