import { debounce } from "lodash";
import { FlatList, Stack } from "native-base";
import React, { useState } from "react";
import ResultsCard from "./components/ResultsCard";
import SearchPagesHeader from "./components/SearchPagesHeader";

export default function SearchPages() {
    let [search, setSearch] = useState("");

    const searchPagesBodyData = [
        {
            _id: "1",
            imgUrl: "https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg",
            houseName: "Turn key house",
            address1: "953 N orange Grove Ave",
            address2: "West Hollywood, CA 90046",
            price: "3.20",
        },
        {
            _id: "2",
            imgUrl: "https://image.freepik.com/free-vector/isometric-view-smart-home-controlled-by-smartphone_316839-264.jpg",
            houseName: "Capstone house",
            address1: "2715 La Cuesta Dr",
            address2: "Los Angeles, CA 90046",
            price: "3.40",
        },
        {
            _id: "3",
            imgUrl: "https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg",
            houseName: "Broadleaf Homes",
            address1: "2715 La Cuesta Dr",
            address2: "West Hollywood, CA 90046",
            price: "2.50",
        },
        {
            _id: "4",
            imgUrl: "https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg",
            houseName: "Broadleaf Homes",
            address1: "2715 La Cuesta Dr",
            address2: "West Hollywood, CA 90046",
            price: "2.50",
        },
    ];

    const onSearchHandler = debounce((text) => {
        setSearch(text);
    }, 500);


    const filterSearch = searchPagesBodyData.filter((item) =>
        search !== ""
            ? item.houseName
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            : item
    );

    const renderItem=({item})=>(
        <ResultsCard
                address1={item.address1}
                address2={item.address2}
                key={item._id}
                imgUrl={item.imgUrl}
                houseName={item.houseName}
                price={item.price}
            />
    )

    return (
        <Stack h="full" px={4} bg={"#f9f9f9"}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={filterSearch}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={
                    <SearchPagesHeader
                        onSearch={onSearchHandler}
                        key={"1"}
                    />
                }
            />
        </Stack>
    );
}
