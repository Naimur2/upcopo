import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Stack, VStack } from "native-base";
import React from "react";
import useLike from "../../hooks/useLike";
import usePlaceBid from "../../hooks/usePlaceBid";
import UtilityBtn from "../../utility/UtilityBtn";
import PlaceBidAction from "../common/PlaceBidAction";
import HouseBody from "./components/HouseBody";
import HouseDetails from "./components/HouseDetails";
import HouseHeader from "./components/HouseHeader";

export default function House() {
    const data = useRoute().params.house;
    const houseId =data._id;
    const [bidHistory,showActions,showActionHandler,closeActionHandler] = usePlaceBid(houseId);

    const [liked,onLike]=useLike(houseId);

    const HouseMap = ({ uri }) => (
        <VStack w="full" h={110} borderRadius={10} overflow={"hidden"}>
            <Image
                resizeMode="cover"
                alt={"map"}
                source={{ uri: uri }}
                w={"full"}
                h="full"
            />
        </VStack>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <Stack pb={4} flex="1" space={10}>
                <HouseHeader
                    owner={data.owner}
                    builtAt={data.builtAt}
                    expiresAt={data.expiresAt}
                    houseName={data.houseName}
                    address={data.address}
                    sqrfit={data.sqrfit}
                    image={data.image}
                    houseId={data.houseId}
                    isLiked={liked}
                    onLike={onLike}
                />

                <VStack px={4} space={4}>
                    <HouseBody
                        description={data.description}
                        bed={data.bed}
                        bath={data.bath}
                    />
                    <HouseMap uri={data.mapImage} />
                    <HouseDetails
                        currentBid={data.currentBid}
                        time="2h:10 min"
                    />
                    <UtilityBtn
                        onPress={showActionHandler}
                        title={"Place a Bid"}
                    />
                </VStack>
            </Stack>
           
                <PlaceBidAction
                    isOpen={showActions}
                    bidHistoryState={bidHistory}
                    onClose={closeActionHandler}
                    houseId={houseId}
                    minimumBid={data.minimumBid}
                />
         
        </ScrollView>
    );
}
