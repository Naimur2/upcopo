import { debounce } from "lodash";
import { FlatList, Stack, Text } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollections } from "../../../store/slices/collectionsSlice";
import { housesActions } from "../../../store/slices/housesSlice";
import SafeAreaNew from "../../utility/SafeAreaNew";
import { CollectionItemCard } from "../topCollections/TopCollections";
import SearchComponents from "./SearchComponents";

export default function SearchCollections({ navigation }) {
    const dispatch = useDispatch();
    let [search, setSearch] = useState("");
    let [text, setText] = useState("");
    const collections = useSelector((state) => state.collections.collections);

    const onSearchHandler = debounce((txt) => {
        setSearch(txt);
    }, 500);

    React.useEffect(() => {
        dispatch(getAllCollections());
        return () => {
            dispatch(housesActions.removeHouses({ type: "topSellers" }));
            setText("");
            setSearch("");
        };
    }, [navigation]);

    React.useEffect(() => {
        onSearchHandler(text);
        return () => {
            setSearch("");
        };
    }, [text]);

    const filterSearch = collections.filter((item) =>
        search !== ""
            ? item.collectionName
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            : item
    );

    return (
        <SafeAreaNew>
            <Stack flex="1" px={4} bg="#f9f9f9">
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={
                        <SearchComponents
                            onSearch={(txt) => setText(txt)}
                            onClear={() => setText("")}
                            key={44}
                            value={text}
                        />
                    }
                    data={filterSearch}
                    renderItem={({ item }) => <CollectionItemCard {...item} />}
                    keyExtractor={(item) => item._id}
                    ListFooterComponent={
                        search.length > 0 && filterSearch.length === 0 ? (
                            <Text
                                fontFamily="body"
                                textAlign="center"
                                color="#000"
                            >
                                No Results Found
                            </Text>
                        ) : null
                    }
                />
            </Stack>
        </SafeAreaNew>
    );
}
