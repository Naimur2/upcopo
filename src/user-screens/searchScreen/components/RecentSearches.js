import { filter } from "lodash";
import { HStack, Pressable, Text, VStack } from "native-base";
import * as React from "react";
import { useSelector } from "react-redux";
import Card from "../../../utility/Card";
import SearchResultCard from "./SearchResultCard";

export default function RecentSearches() {
    const [category, setCategory] = React.useState("all");
    const [data, setData] = React.useState([]);

    const recentSearches = useSelector((state) => state.recentSearch.searches);

    const getSearches = (catg) => {
        if (catg==="all") return recentSearches;
        return recentSearches.filter((searches) => searches.category === catg);
    };

    React.useEffect(() => {
        const cat = getSearches(category);
        setData(cat);

        return () => {
            setData([]);
        };
    }, [category]);

    React.useEffect(() => {
        setCategory("all");
        return () => {
            setCategory("");
        };
    }, []);

    const tabs = [
        {
            _id: "01",
            category: "all",
            title: "all",
        },
        {
            _id: "02",
            category: "buy",
            title: "buy",
        },
        {
            _id: "03",
            category: "bid",
            title: "bid",
        },
        {
            _id: "04",
            category: "address",
            title: "addresses",
        },
    ];

    const Tabs = tabs.map((tabv) => (
        <Pressable
            key={tabv._id}
            borderBottomColor={tabv.category === category ? "#52B69A" : null}
            borderBottomWidth={tabv.category === category ? 4 : 0}
            onPress={() => setCategory(tabv.category)}
            w={"25%"}
            py={1}
        >
            <Text
                textTransform={"capitalize"}
                textAlign={"center"}
                fontWeight={600}
                fontFamily={"body"}
                color={"#11181C"}
            >
                {tabv.title}
            </Text>
        </Pressable>
    ));

    return (
        <VStack w="full" h={"full"} space="4">
            <Text
                fontSize={20}
                fontWeight={600}
                fontFamily={"body"}
                color={"#11181C"}
            >
                Recent Searches
            </Text>
            <Card py={0}>
                <HStack>{Tabs}</HStack>
            </Card>
            {data.map((dt) => (
                <SearchResultCard
                   key={dt._id}
                    bed={dt.bed}
                    bath={dt.bath}
                    address={dt.address}
                    imageUri={dt.image}
                    houseName={dt.houseName}
                />
            ))}
        </VStack>
    );
}

// imageUri,
//     houseName,
//     address,
//     bath,
//     bed,
//     onIconPress
