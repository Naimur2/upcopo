import { Stack } from "native-base";
import React from "react";
import KeyBoardView from "../../utility/KeyBoardView";
import Search from "../../utility/Search";
import { useSelector } from "react-redux";

export default function SearchCollections() {
    const collections = useSelector(state=>state.collections.collections);
    return (
        <KeyBoardView>
            <Stack px="4">
                <Search placeholder="Search collections" />
            </Stack>
        </KeyBoardView>
    );
}
