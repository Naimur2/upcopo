import { useNavigation } from "@react-navigation/native";
import { HStack } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTopSellers,
    housesActions,
} from "../../../../store/slices/housesSlice";
import { getLikes } from "../../../../store/slices/likeSlice";
import SellerCard from "../../common/SellerCard";
// false data for testing later it will be overwritten with redux

export default function TopSeller({ sellers }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [houses, setHouses] = React.useState([]);

    const topSellers = useSelector((state) => state.houses.topSellers);

    React.useEffect(() => {
        dispatch(getTopSellers());
        dispatch(getLikes());
        setHouses(topSellers);
        return () => {
            dispatch(housesActions.removeHouses({ type: "topSellers" }));
        };
    }, []);

    React.useEffect(() => {
        setHouses(topSellers);
    }, [topSellers]);

    return (
        <HStack flexWrap={"wrap"} my={2} mx={4}>
            {houses.slice(0, 4).map((seller, index) => (
                <SellerCard
                    key={seller._id}
                    houseImage={seller.image}
                    houseDescription={seller.description}
                    topBid={seller.topBid}
                    lastBid={seller.lastBid}
                    index={index}
                    onPress={() =>
                        navigation.navigate("House", {
                            house: seller,
                        })
                    }
                />
            ))}
        </HStack>
    );
}
