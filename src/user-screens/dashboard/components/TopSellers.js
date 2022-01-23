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
                <Box
                    w="50%"
                    pb={4}
                    pr={index % 2 === 0 ? 2 : 0}
                    pl={index % 2 !== 0 ? 2 : 0}
                    key={seller._id}
                >
                    <SellerCard
                        id={seller._id}
                        houseImage={seller.image}
                        houseDescription={seller.description}
                        topBid={seller.topBid}
                        lastBid={seller.lastBid}
                        onPress={() =>
                            navigation.navigate("House", {
                                house: seller,
                            })
                        }
                    />
                </Box>
            ))}
        </HStack>
    );
}
