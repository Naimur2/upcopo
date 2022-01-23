import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import { Stack } from "native-base";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import KeyBoardView from "../../utility/KeyBoardView";
import Search from "../../utility/Search";
import CollectionCard from "../topCollections/components/CollectionCard";

export default function SearchCollections(props) {
    const navigation = useNavigation();
    let [search, setSearch] = useState("");
    const collections = useSelector((state) => state.collections.collections);
    const onSearchHandler = debounce((text) => {
        setSearch(text);
    }, 500);
    ///
    const filterSearch = collections.filter((item) =>
        search !== ""
            ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            : item
    );

    const renderItem = filterSearch.map((item, i) => {
        return (
            <Stack py={2} key={item._id}>
                <CollectionCard
                    standings={item.standings}
                    varified={item.varified}
                    name={item.name}
                    avatar={item.avatar}
                    price={item.price}
                    priceUp={item.priceUp}
                    priceUpPercentage={item.priceUpPercentage}
                    onPress={() => navigation.navigate("Collections")}
                />
            </Stack>
        );
    });

    return (
        <KeyBoardView>
            <Stack px="4">
                <Search
                    placeholder="Search collections"
                    onSearch={onSearchHandler}
                />
                <Stack py={4}>{renderItem}</Stack>
            </Stack>
        </KeyBoardView>
    );
}
