import { FlatList } from "native-base";
import React from "react";
import LovedHousesCard from "./components/LovedHousesCard";

export default function LovedHouses() {
    const lovedHouse = [
        {
            _id: "1",
            imageUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            address: "889 Palmeron Ave, Mcd..",
            numOfBed: 10,
            numOfBath: 5,
            isSaved: true,
            price: 0.05686,
        },
        {
            _id: "2",
            imageUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            address: "889 Palmeron Ave, Mcd..",
            numOfBed: 2,
            numOfBath: 3,
            isSaved: false,
            price: 0.05686,
        },
        {
            _id: "3",
            imageUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            address: "889 Palmeron Ave, Mcd..",
            numOfBed: 10,
            numOfBath: 5,
            isSaved: true,
            price: 0.05686,
        },
        {
            _id: "4",
            imageUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            address: "889 Palmeron Ave, Mcd..",
            numOfBed: 2,
            numOfBath: 3,
            isSaved: true,
            price: 0.05686,
        },
    ];

    const renderItem = ({ item }) => {
        
        if (!item.isSaved) return;
        return (
            <LovedHousesCard
                address={item.address}
                numOfBed={item.numOfBed}
                numOfBath={item.numOfBath}
                isSaved={item.isSaved}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlaceBid={() => console.log("Place a bid")}
            />
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={lovedHouse}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
