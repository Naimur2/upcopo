import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTopSellers,
    getTrendyHouses
} from "../../../store/slices/housesSlice";
import SellerCard from "../common/SellerCard";

const SELLER_DATA = [
    {
        _id: "1",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-above-swamp-in-forest-vector-id1211708398?k=20&m=1211708398&s=612x612&w=0&h=9aHuQrLCCR4Y_QiLH6AdpFa_eQTfP37SUwLj7iS-p4s=",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "2",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/stilt-house-in-swamp-with-boat-at-night-vector-id1302589254?s=612x612",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "3",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-above-swamp-in-forest-vector-id1211708398?k=20&m=1211708398&s=612x612&w=0&h=9aHuQrLCCR4Y_QiLH6AdpFa_eQTfP37SUwLj7iS-p4s=",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "4",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/stilt-house-in-swamp-with-boat-at-night-vector-id1302589254?s=612x612",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "5",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-above-swamp-in-forest-vector-id1211708398?k=20&m=1211708398&s=612x612&w=0&h=9aHuQrLCCR4Y_QiLH6AdpFa_eQTfP37SUwLj7iS-p4s=",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "6",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/stilt-house-in-swamp-with-boat-at-night-vector-id1302589254?s=612x612",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "7",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-above-swamp-in-forest-vector-id1211708398?k=20&m=1211708398&s=612x612&w=0&h=9aHuQrLCCR4Y_QiLH6AdpFa_eQTfP37SUwLj7iS-p4s=",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "8",
        varified: true,
        houseImage:
            "https://media.istockphoto.com/vectors/stilt-house-in-swamp-with-boat-at-night-vector-id1302589254?s=612x612",
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
];

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
            title: type === "topSellers" ? "Top Sellers" : "Trendy Houses",
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
