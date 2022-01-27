import { debounce } from "lodash";
import { FlatList, Stack } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollections } from "../../../store/slices/collectionsSlice";
import { housesActions } from "../../../store/slices/housesSlice";
import Search from "../../utility/Search";
import { CollectionItemCard } from "../topCollections/TopCollections";

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
        <Stack flex="1" px={4} bg="#f9f9f9">
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <Search
                        onSearch={(txt) => setText(txt)}
                        onClear={() => setText("")}
                        key={44}
                        mb={2}
                        value={text}
                    />
                }
                data={filterSearch}
                renderItem={({ item }) => <CollectionItemCard {...item} />}
                keyExtractor={(item) => item._id}
            />
        </Stack>
    );
}
