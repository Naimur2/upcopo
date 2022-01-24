import { useNavigation } from "@react-navigation/native";
import { HStack, ScrollView } from "native-base";
import React from "react";

import TrendyHouse from "./TrendyHouses";


export default function SliderHorizontal({ houses }) {
    const navigation = useNavigation();

    return (
        <ScrollView mb={4} showsHorizontalScrollIndicator={false} horizontal>
            <HStack mx={4} my={1} space="4">
                {houses.map((house) => (
                    <TrendyHouse
                        key={house._id}
                        expiresAt={house.expiresAt}
                        image={house.image}
                        houseId={house._id}
                        houseName={house.houseName}
                        currentBid={house.currentBid}
                        minimumBid={house.minimumBid}
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
