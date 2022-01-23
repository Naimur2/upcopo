import { useNavigation } from "@react-navigation/native";
import { Stack } from "native-base";
import React from "react";
import CollectionCard from "../topCollections/components/CollectionCard";

export default function TopCollections({collections}) {
    const navigation = useNavigation();
    
    return (
        <Stack p={4} space={2}>
            {collections.slice(0, 3).map((collection, index) => (
                <CollectionCard
                    key={collection._id}
                    standings={collection.standings}
                    varified={collection.varified}
                    name={collection.name}
                    avatar={collection.avatar}
                    price={collection.price}
                    priceUp={collection.priceUp}
                    priceUpPercentage={collection.priceUpPercentage}
                    onPress={() => navigation.navigate("Collections",{
                        collectionId:collection._id
                    })}
                />
            ))}
        </Stack>
    );
}
