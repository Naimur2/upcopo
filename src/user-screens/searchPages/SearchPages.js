import { debounce } from "lodash";
import { FlatList, Stack } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouses, housesActions } from "../../../store/slices/housesSlice";
import ResultsCard from "./components/ResultsCard";
import SearchPagesHeader from "./components/SearchPagesHeader";

export default function SearchPages({ navigation }) {
    let [search, setSearch] = useState("");
    let [text, setText] = useState("");
    let [service1, setService1] = useState('ux');
    let [service2, setService2] = useState('l2h');

    const disPatch = useDispatch();
    const allHouses = useSelector((state) => state.houses.allHouses);

    const onSearchHandler = debounce((txt) => {
        setSearch(txt);
    }, 100);

    React.useEffect(() => {
        disPatch(getAllHouses());
        return () => {
            disPatch(housesActions.removeHouses({ type: "allHouses" }));
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

    const filterSearch = allHouses.filter((item) =>
        search !== ""
            ? item.houseName
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            : item
    );

    const renderItem = ({ item }) => (
        <ResultsCard
            address1={item.address}
            key={item._id}
            imgUrl={item.image}
            houseName={item.houseName}
            price={item.topBid}
            onPress={() =>
                navigation.navigate("HouseScreen", {
                    house: item,
                })
            }
        />
    );

    return (
        <Stack flex="1" px={4} bg={"#f9f9f9"}>
            <SearchPagesHeader
                onClear={() => setText("")}
                onSearch={(txt) => setText(txt)}
                key={"1"}
                value={text}
                service1={service1}
                setService1={(v) => setService1(v)}
                service2={service2}
                setService2={(v) => setService2(v)}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={filterSearch}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </Stack>
    );
}
