import React from "react";
import Card from "../../../utility/Card";
import FooterContainer from "./FooterContainer";
import ImageContainer from "./ImageContainer";
import { useNavigation } from "@react-navigation/native";


export default function TrendyHouses({
    id,
    deadline,
    image,
    houseName,
    onLike,
    currentBid,
}) {
    const navigation = useNavigation();
    return (
        <Card w={250} onPress={()=>navigation.navigate('House')}>
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
