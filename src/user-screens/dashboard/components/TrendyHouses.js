import { useNavigation } from "@react-navigation/native";
import { HStack, ScrollView } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTrendyHouses,
    housesActions,
} from "../../../../store/slices/housesSlice";
import HouseCard from "./HouseCard";

export default function TrendyHouses() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [houses, setHouses] = React.useState([]);
    const trendyHouses = useSelector((state) => state.houses.trendyHouses);

    React.useEffect(() => {
        dispatch(getTrendyHouses());
        return () => {
            dispatch(housesActions.removeHouses({ type: "trendyHouses" }));
        };
    }, []);

    React.useEffect(() => {
        setHouses(trendyHouses);
    }, [trendyHouses]);

    return (
        <ScrollView mb={4} showsHorizontalScrollIndicator={false} horizontal>
            <HStack mx={4} my={1} space="4">
                {houses.slice(0, 4).map((house) => (
                    <HouseCard
                        key={house._id}
                        expiresAt={house.expiresAt}
                        image={house.image}
                        houseId={house._id}
                        houseName={house.houseName}
                        currentBid={house.currentBid}
                        minimumBid={house.minimumBid}
                        isLiked={house.isLiked}
                        onPress={() =>
                            navigation.navigate("House", {
                                house: house,
                            })
                        }
                    />
                ))}
            </HStack>
        </ScrollView>
    );
}
