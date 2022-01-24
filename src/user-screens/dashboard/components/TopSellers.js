import { useNavigation } from "@react-navigation/native";
import { Box, HStack } from "native-base";
import React from "react";
import SellerCard from "../../common/SellerCard";

// false data for testing later it will be overwritten with redux

export default function TopSeller({ sellers }) {
    const navigation = useNavigation();

    return (
        <HStack flexWrap={"wrap"} my={2} mx={4}>
            {sellers.map((seller, index) => (
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
