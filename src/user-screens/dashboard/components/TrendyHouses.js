import React from "react";
import { Dimensions } from "react-native";
import Card from "../../../utility/Card";
import FooterContainer from "./HouseCard/FooterContainer";
import ImageContainer from "./HouseCard/ImageContainer";

export default function TrendyHouses({
    id,
    expiresAt,
    image,
    houseName,
    onLike,
    currentBid,
    onPress,
}) {
    const base=Math.round(Dimensions.get('window').width/1.5)
    const md=Math.round(Dimensions.get('window').width/2.9)
    return (
        <Card  w={[base,md]} onPress={onPress}>
            <ImageContainer
                expiresAt={expiresAt}
                image={image}
                houseName={houseName}
                onLike={onLike}
                id={id}
            />
            <FooterContainer currentBid={currentBid} />
        </Card>
    );
}
