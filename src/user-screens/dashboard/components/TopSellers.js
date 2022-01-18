import { Box, HStack, Text } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import SellerCard from "../../common/SellerCard";


// false data for testing later it will be overwritten with redux
const SELLER_DATA = [
    {
        _id: "1",
        varified: true,
        houseImage: 'https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-above-swamp-in-forest-vector-id1211708398?k=20&m=1211708398&s=612x612&w=0&h=9aHuQrLCCR4Y_QiLH6AdpFa_eQTfP37SUwLj7iS-p4s=',
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "2",
        varified: true,
        houseImage: 'https://media.istockphoto.com/vectors/stilt-house-in-swamp-with-boat-at-night-vector-id1302589254?s=612x612',
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "3",
        varified: true,
        houseImage: 'https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-above-swamp-in-forest-vector-id1211708398?k=20&m=1211708398&s=612x612&w=0&h=9aHuQrLCCR4Y_QiLH6AdpFa_eQTfP37SUwLj7iS-p4s=',
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "4",
        varified: true,
        houseImage: 'https://media.istockphoto.com/vectors/stilt-house-in-swamp-with-boat-at-night-vector-id1302589254?s=612x612',
        houseDescription: "By the beach",
        topBid: 0.8,
        lastBid: 0.7,
    },
];

export default function TopSeller() {
    return (
        <HStack flexWrap={'wrap'} my={2} mx={4}>
            {SELLER_DATA.map((seller, index) => (
                    <Box
                        w="50%"
                        pb={4}
                        pr={index % 2 === 0 ? 2 : 0}
                        pl={index % 2 !== 0 ? 2 : 0}
                        key={seller._id}
                    >
                        <SellerCard
                            id={seller._id}
                            houseImage={seller.houseImage}
                            houseDescription={seller.houseDescription}
                            topBid={seller.topBid}
                            lastBid={seller.lastBid}
                        />
                    </Box>
                ))}
        </HStack>
    );
}
