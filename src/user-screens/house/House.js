import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Stack, VStack } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { placebidActions } from "../../../store/slices/placeBidSlice";
import UtilityBtn from "../../utility/UtilityBtn";
import HouseBody from "./components/HouseBody";
import HouseDetails from "./components/HouseDetails";
import HouseHeader from "./components/HouseHeader";



export default function House() {
    const dispatch = useDispatch();
    const data = useRoute().params.house;

    const HouseMap = ({uri}) => (
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
        <ScrollView>
            <Stack space={10}>
                <HouseHeader
                    owner={data.owner}
                    builtAt={data.builtAt}
                    expiresAt={data.expiresAt}
                    houseName={data.houseName}
                    address={data.address}
                    sqrfit={data.sqrfit}
                    image={data.image}
                />

                <VStack px={4} space={4}>
                    <HouseBody
                        description={data.description}
                        bed={data.bed}
                        bath={data.bath}
                    />
                    <HouseMap uri={data.mapImage} />
                    <HouseDetails currentBid={data.currentBid} time="2h:10 min" />
                    <UtilityBtn
                        onPress={() => dispatch(placebidActions.openAction())}
                        title={"Place a Bid"}
                    />
                </VStack>
            </Stack>
        </ScrollView>
    );
}
