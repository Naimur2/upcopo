import React from "react";
import Card from "../../../../utility/Card";
import FooterContainer from "./FooterContainer";

import ImageContainer from "./ImageContainer";

export default function TrendyHouses({
    id,
    timeLeft,
    image,
    houseName,
    onLike,
    currentBid,
}) {
    return (
        <Card w={250}>
            <ImageContainer
                timeLeft={timeLeft}
                image={image}
                houseName={houseName}
                onLike={onLike}
                id={id}
            />
            <FooterContainer currentBid={currentBid} />
        </Card>
    );
}
