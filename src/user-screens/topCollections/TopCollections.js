import { useNavigation } from "@react-navigation/native";
import { Box, FlatList } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollections } from "../../../store/slices/collectionsSlice";
import { housesActions } from "../../../store/slices/housesSlice";
import Icon from "../../utility/Icon";
import CollectionCard from "./components/CollectionCard";

export const CollectionItemCard = (props) => {
    const navigation = useNavigation();
    return (
        <Box mb={4}>
            <CollectionCard
                key={props._id}
                standings={props.standings}
                varified={props.varified}
                name={props.name}
                avatar={props.avatar}
                price={props.price}
                priceUp={props.priceUp}
                priceUpPercentage={props.priceUpPercentage}
                onPress={() =>
                    navigation.navigate("Collections", {
                        collectionId: props._id,
                    })
                }
            />
        </Box>
    );
};

export default function TopCollections({ navigation }) {
    const dispatch = useDispatch();
    const collections = useSelector((state) => state.collections.collections);

    useEffect(() => {
        dispatch(getAllCollections());
        return () => {
            dispatch(housesActions.removeHouses({ type: "topSellers" }));
        };
    }, [navigation]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    onPress={() => navigation.navigate("SearchCollection")}
                    borderRadius={14}
                    bg="#52B69A"
                    p={[2, 4]}
                    color={"#fff"}
                    name="search"
                    size={20}
                />
            ),
        });
    }, [navigation]);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={collections}
            renderItem={({ item }) => <CollectionItemCard {...item} />}
            keyExtractor={(item) => item._id}
            px={4}
        />
    );
}
