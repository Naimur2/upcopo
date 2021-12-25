import { Box, HStack, Text } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";
import SellerCard from "../../common/SellerCard";

const source = "../../../../assets/images";

const avatar1 = require(source + "/avatar-1.jpg");
const avatar1Uri = RnImage.resolveAssetSource(avatar1).uri;
const avatar2 = require(source + "/avatar-2.jpg");
const avatar2Uri = RnImage.resolveAssetSource(avatar2).uri;

const seller1House = require(source + "/top-seller-1.png");
const seller1HouseUri = RnImage.resolveAssetSource(seller1House).uri;
const seller2House = require(source + "/top-seller-2.png");
const seller2HouseUri = RnImage.resolveAssetSource(seller2House).uri;

// false data for testing later it will be overwritten with redux
const SELLER_DATA = [
    {
        _id: "1",
        username: "70nder",
        avatar: avatar1Uri,
        varified: true,
        houseImage: seller1HouseUri,
        houseDescription: "By the beach",
        price: 0.8,
    },
    {
        _id: "2",
        username: "70nder",
        avatar: avatar2Uri,
        varified: true,
        houseImage: seller2HouseUri,
        houseDescription: "By the beach",
        price: 0.8,
    },
    {
        _id: "3",
        username: "70nder",
        avatar: avatar1Uri,
        varified: true,
        houseImage: seller1HouseUri,
        houseDescription: "By the beach",
        price: 0.8,
    },
    {
        _id: "4",
        username: "70nder",
        avatar: avatar2Uri,
        varified: true,
        houseImage: seller2HouseUri,
        houseDescription: "By the beach",
        price: 0.8,
    },
];

export default function TopSeller() {
    const Item = () => (
        <Box>
            {" "}
            <Text color={"red.900"}>Hello</Text>{" "}
        </Box>
    );

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
                            username={seller.username}
                            avatar={seller.avatar}
                            varified={seller.varified}
                            houseImage={seller.houseImage}
                            houseDescription={seller.houseDescription}
                            price={seller.price}
                        />
                    </Box>
                ))}
        </HStack>
    );
}
