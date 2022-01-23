import { useNavigation } from "@react-navigation/native";
import { Stack } from "native-base";
import React from "react";
import CollectionCard from "../topCollections/components/CollectionCard";

export default function TopCollections() {
    const navigation = useNavigation();
    
    const collections = [
        {
            _id: "1",
            name: "Joel Norris",
            varified: false,
            price: 15499.86,
            priceUp: true,
            avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
            priceUpPercentage: 46.03,
            active: true,
            standings: 1,
        },
        {
            _id: "2",
            name: "Joel Norris",
            varified: true,
            price: 15499.86,
            priceUp: false,
            avatar: "https://img.freepik.com/free-vector/cute-cartoon-red-panda-with-cap-glasses-vector-illustration_60438-1418.jpg?size=338&ext=jpg",
            priceUpPercentage: 10.03,
            active: false,
            standings: 2,
        },
        {
            _id: "3",
            name: "Joel Norris",
            varified: false,
            price: 15499.86,
            priceUp: true,
            avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
            priceUpPercentage: 46.03,
            active: true,
            standings: 3,
        },
        {
            _id: "4",
            name: "Joel Norris",
            varified: true,
            price: 15499.86,
            priceUp: false,
            avatar: "https://img.freepik.com/free-vector/cute-cartoon-red-panda-with-cap-glasses-vector-illustration_60438-1418.jpg?size=338&ext=jpg",
            priceUpPercentage: 10.03,
            active: false,
            standings: 4,
        },
        {
            _id: "5",
            name: "Joel Norris",
            varified: false,
            price: 15499.86,
            priceUp: true,
            avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
            priceUpPercentage: 46.03,
            active: true,
            standings: 5,
        },
        {
            _id: "6",
            name: "Joel Norris",
            varified: true,
            price: 15499.86,
            priceUp: false,
            avatar: "https://img.freepik.com/free-vector/cute-cartoon-red-panda-with-cap-glasses-vector-illustration_60438-1418.jpg?size=338&ext=jpg",
            priceUpPercentage: 10.03,
            active: false,
            standings: 6,
        },
    ];

    return (
        <Stack p={4} space={2}>
            {collections.slice(0, 3).map((leader, index) => (
                <CollectionCard
                    key={leader._id}
                    standings={leader.standings}
                    varified={leader.varified}
                    name={leader.name}
                    avatar={leader.avatar}
                    price={leader.price}
                    priceUp={leader.priceUp}
                    priceUpPercentage={leader.priceUpPercentage}
                    onPress={() => navigation.navigate("Collections")}
                />
            ))}
        </Stack>
    );
}
