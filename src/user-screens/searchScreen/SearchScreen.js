import { Stack, VStack } from "native-base";
import React from "react";
import RecentSearches from "./components/RecentSearches";
import SearchArea from "./components/SearchArea";
import { useSelector } from "react-redux";

export default function SearchScreen() {
    const recentSearch = useSelector((state) => state.recentSearch.searches);
    return (
        <Stack p={4} space={6} h={"full"}>
            <SearchArea />
            {recentSearch.length > 0 && <RecentSearches />}
        </Stack>
    );
}
