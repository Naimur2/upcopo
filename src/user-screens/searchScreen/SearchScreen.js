import { Stack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import RecentSearchArea from "./components/RecentSearchArea";

export default function SearchScreen() {
    const recentSearch = useSelector((state) => state.recentSearch.searches);
    return (
        <>
            <Stack p={4} space={6}>
                <RecentSearchArea />
            </Stack>
        </>
    );
}
