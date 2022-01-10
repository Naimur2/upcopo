import { Stack,ScrollView } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import KeyBoardView from '../../utility/KeyBoardView';
import RecentSearchArea from "./components/RecentSearchArea";
import RecentSearches from "./components/RecentSearches";

export default function SearchScreen() {
    const recentSearch = useSelector((state) => state.recentSearch.searches);
    return (
        <>
            <Stack p={4} space={6} >
                <RecentSearchArea />
                {recentSearch.length > 0 && <RecentSearches />}
            </Stack>
        </>
    );
}
