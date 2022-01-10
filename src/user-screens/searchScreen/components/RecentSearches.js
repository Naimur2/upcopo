import { Box, ScrollView, Text, VStack } from "native-base";
import * as React from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { recentSearchActions } from "../../../../store/slices/recentSearchSlice";
import RecentTab from "./RecentSearchesTab";
import SearchResultCard from "./SearchResultCard";

const RenderScreen = ({ category }) => {
    const recentSearches = useSelector((state) => state.recentSearch.searches);
    const dispatchState = useDispatch();

    const searches = recentSearches.filter(
        (srearch) => srearch.category === category
    );
    const searchResults = category === "all" ? recentSearches : searches;

    return (
        
            <VStack>
                {searchResults.map((res) => (
                    <SearchResultCard
                        key={res._id}
                        address={res.address}
                        imageUri={res.houseImage}
                        houseName={res.houseName}
                        bed={res.bed}
                        bath={res.bath}
                        onIconPress={() =>
                            dispatchState(
                                recentSearchActions.removeSearch(res._id)
                            )
                        }
                    />
                ))}
            </VStack>
        
    );
};

const FirstRoute = () => <RenderScreen category="all" />;

const SecondRoute = () => <RenderScreen category="buy" />;

const ThirdRoute = () => <RenderScreen category="bid" />;

const FourthRoute = () => <RenderScreen category="address" />;

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
});

export default function RecentSearches() {
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: "first", title: "All" },
        { key: "second", title: "Buy" },
        { key: "third", title: "Bid" },
        { key: "fourth", title: "Address" },
    ]);

    const renderTabBar = ({ navigationState }) => {
        return (
            <Box
                flexDirection="row"
                borderRadius={10}
                bg={"#fff"}
                overflow={"hidden"}
            >
                {navigationState.routes.map((route, i) => {
                    const color = index === i ? "#000000" : "#687076";
                    const borderColor =
                        index === i ? "cyan.600" : "coolGray.100";
                    return (
                        <RecentTab
                            key={i}
                            textColor={color}
                            borderColor={borderColor}
                            tabTitle={route.title}
                            onPress={() => setIndex(i)}
                        />
                    );
                })}
            </Box>
        );
    };

    return (
        <VStack  w="full" h={"full"} space="4">
            <Text
                fontSize={20}
                fontWeight={600}
                fontFamily={"body"}
                color={"#11181C"}
            >
                Recent Searches
            </Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
            />
        </VStack>
    );
}
