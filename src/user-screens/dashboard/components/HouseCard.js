import React from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
    const [liked, setLiked] = React.useState(false);
    const dispatch=useDispatch();

    const likes = useSelector((state) => state.likes.likes);

    React.useEffect(() => {
        const isLiked =
            likes.filter((like) => like.houseId === houseId).length > 0;
        setLiked(isLiked);
    }, [likes]);

    React.useEffect(() => {
       console.log(liked)
    }, [liked]);

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
                onLike={() => setLiked((prev) => !prev)}
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
