import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import Card from "../../../utility/Card";
import FooterContainer from "./HouseCard/FooterContainer";
import ImageContainer from "./HouseCard/ImageContainer";

export default function TrendyHouses({
    id,
    deadline,
    image,
    houseName,
    onLike,
    currentBid,
}) {
    const navigation = useNavigation();
    const base=Math.round(Dimensions.get('window').width/1.5)
    const md=Math.round(Dimensions.get('window').width/2.9)
    return (
        <Card  w={[base,md]} onPress={()=>navigation.navigate('House')}>
            <ImageContainer
                deadline={deadline}
                image={image}
                houseName={houseName}
                onLike={onLike}
                id={id}
            />
            <FooterContainer currentBid={currentBid} />
        </Card>
    );
}
