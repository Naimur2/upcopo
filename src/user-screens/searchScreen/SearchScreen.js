import { ScrollView, Stack } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearRecentSearches,
    getRecentSearches,
} from "../../../store/slices/recentSearchSlice";
import RecentSearchArea from "./components/RecentSearchArea";
import RecentSearches from "./components/RecentSearches";

export default function SearchScreen() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getRecentSearches());
    }, []);

    return (
        <ScrollView>
            <Stack px={4} flex={1} space={6}>
                <RecentSearchArea />
                <RecentSearches />
            </Stack>
        </ScrollView>
    );
}
