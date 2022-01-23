import { useNavigation } from "@react-navigation/native";
import { ScrollView, VStack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCollections } from "../../../store/slices/collectionsSlice";
import CollectionCard from "./components/CollectionCard";

export default function TopCollections() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const collections = useSelector((state) => state.collections.collections);

    useEffect(() => {
        dispatch(getAllCollections());
    }, []);

    return (
        <ScrollView
            showsHorizontalScrollIndicator={"false"}
            showsVerticalScrollIndicator={false}
            bg="#f9f9f9"
        >
            <VStack p={4} space={2}>
                {collections.map((leader, index) => (
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
            </VStack>
        </ScrollView>
    );
}
