import { Stack } from "native-base";
import React from "react";
import SearchBody from "./components/SearchBody";
import SearchHeader from "./components/SearchHeader";

export default function Search() {
    return (
        <Stack>
            <SearchHeader />
            <SearchBody />
        </Stack>
    );
}
