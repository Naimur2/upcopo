import React from "react";
import { Dimensions } from "react-native";
import useLike from "../../../hooks/useLike";
import usePlaceBid from "../../../hooks/usePlaceBid";
import Card from "../../../utility/Card";
import PlaceBidAction from "../../common/PlaceBidAction";
import FooterContainer from "./HouseCard/FooterContainer";
import ImageContainer from "./HouseCard/ImageContainer";

export default function HouseCard({
    id,
    expiresAt,
    image,
    houseName,
    currentBid,
    houseId,
    onPress,
    minimumBid,
}) {

    const [liked,onLike]=useLike(houseId);

    const base = Math.round(Dimensions.get("window").width / 1.5);
    const md = Math.round(Dimensions.get("window").width / 2.9);
    const [bidHistory, showActions, showActionHandler, closeActionHandler] =
        usePlaceBid(houseId);

    return (
        <Card w={[base, md]} onPress={onPress}>
            <ImageContainer
                expiresAt={expiresAt}
                image={image}
                houseName={houseName}
                onLike={onLike}
                isLiked={liked}
                id={id}
            />
            <FooterContainer
                onPlaceBid={showActionHandler}
                currentBid={currentBid}
            />
            <PlaceBidAction
                isOpen={showActions}
                bidHistoryState={bidHistory}
                onClose={closeActionHandler}
                houseId={houseId}
                minimumBid={minimumBid}
            />
        </Card>
    );
}
