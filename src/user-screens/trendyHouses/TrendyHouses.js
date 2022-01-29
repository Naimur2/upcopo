import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTopSellers,
    getTrendyHouses,
} from "../../../store/slices/housesSlice";
import SellerCard from "../common/SellerCard";

export default function TopSeller() {
    const navigation = useNavigation();
    const { type } = useRoute().params;
    let clear = true;

    const dispatch = useDispatch();
    const collections = useSelector((state) => state.houses[type]);

    React.useEffect(() => {
        if (type === "topSellers") dispatch(getTrendyHouses());
        if (type === "trendyHouses") dispatch(getTopSellers());

        if (clear) {
            clear = false;
            return;
        }
    }, [navigation, type]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: type === "topSellers" ? "Top Bids" : "Trendy Houses",
        });
    }, [navigation]);

    const RenderItem = ({ item, index }) => {
        return (
            <SellerCard
                key={item._id}
                houseImage={item.image}
                houseDescription={item.houseDescription}
                topBid={item.topBid}
                lastBid={item.lastBid}
                index={index}
                onPress={() =>
                    navigation.navigate("House", {
                        house: item,
                    })
                }
            />
        );
    };

    return (
        <FlatList
            numColumns={2}
            px={4}
            data={collections}
            renderItem={(item) => <RenderItem {...item} />}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
        />
    );
}
