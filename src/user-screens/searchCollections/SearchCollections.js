import { Stack } from "native-base";
import React from "react";
import KeyBoardView from "../../utility/KeyBoardView";
import Search from "../../utility/Search";

export default function SearchCollections() {
    return (
        <KeyBoardView>
            <Stack px="4">
                <Search placeholder="Search collections" />
            </Stack>
        </KeyBoardView>
    );
}
