import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import { ScrollView, Stack, Text } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearAllHouses,
    getAllHouses
} from "../../../store/slices/housesSlice";
import { getRecentSearches } from "../../../store/slices/recentSearchSlice";
import SafeAreaNew from "../../utility/SafeAreaNew";
import RecentSearchArea from "./components/RecentSearchArea";
import RecentSearches from "./components/RecentSearches";
import SearchResultCard from "./components/SearchResultCard";


export default function SearchScreen() {
    const dispatch = useDispatch();
    const navgation = useNavigation;
    const [text, setText] = React.useState("");
    let [search, setSearch] = React.useState("");
    const houses = useSelector((state) => state.houses.allHouses);

    React.useEffect(() => {
        dispatch(getAllHouses());

        return () => {
            dispatch(clearAllHouses());
        };
    }, [navgation]);

    React.useEffect(() => {
        dispatch(getRecentSearches());
    }, []);

    const onSearchHandler = debounce((tc) => {
        setSearch(tc);
    }, 500);

    React.useEffect(() => {
        onSearchHandler(text);
        return () => {
            setSearch("");
        };
    }, [text]);

    const filterSearch = houses.filter((item) =>
        search !== ""
            ? item.houseName
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            : item
    );
    const housers = filterSearch.map((data, i) => {
        return (
            <SearchResultCard
                key={data._id}
                imageUri={data.image}
                houseName={data.houseName}
                address={data.address}
                bath={data.bath}
                bed={data.bed}
                // onIconPress={}
            />
        );
    });

    return (
        <SafeAreaNew>
            <ScrollView>
                <Stack px={4} flex={1} space={6}>
                    <RecentSearchArea
                        onClear={() => console.log("clear")}
                        onSearch={(txt) => setText(txt)}
                        searchValue={text}
                    />
                    {search.length > 0 && housers}
                    {search.length > 0 && housers.length === 0 ? (
                        <Text fontFamily="body" textAlign="center" color="#000">
                            No Results Found
                        </Text>
                    ) : null}

                    {search.length === 0 && <RecentSearches />}
                </Stack>
            </ScrollView>
        </SafeAreaNew>
    );
}
