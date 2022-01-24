import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Stack, VStack } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { placebidActions } from "../../../store/slices/placeBidSlice";
import UtilityBtn from "../../utility/UtilityBtn";
import PlaceBidAction from "../common/PlaceBidAction";
import HouseBody from "./components/HouseBody";
import HouseDetails from "./components/HouseDetails";
import HouseHeader from "./components/HouseHeader";

const bidHistoryState = [
    {
        _id: "1",
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-listening-music-vector-illustration_60438-1436.jpg?size=338&ext=jpg",
        varified: true,
        userName: "Noundles",
        price: "0.56 ETH",
        counter: 6,
    },
    {
        _id: "2",
        avatar: "https://img.freepik.com/free-vector/cute-panda-business-holding-money-cartoon-vector-icon-illustration-animal-business-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3888.jpg?size=338&ext=jpg",
        varified: false,
        userName: "Jrny club",
        price: "0.46 ETH",
        counter: 4,
    },
    {
        _id: "3",
        avatar: "https://image.freepik.com/free-vector/cute-panda-reading-book-cartoon-icon-illustration_138676-2683.jpg",
        varified: true,
        userName: "Joel Norris",
        price: "0.50 ETH",
        counter: 3,
    },
    {
        _id: "4",
        avatar: "https://image.freepik.com/free-vector/cute-panda-playing-game-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3676.jpg",
        varified: false,
        userName: "Feudalz",
        price: "0.76 ETH",
        counter: 1,
    },
];

export default function House() {
    const dispatch = useDispatch();
    const data = useRoute().params.house;

    const [bidHistory, setBitHistory] = React.useState([]);
    const [showActions, setShowActions] = React.useState(false);

    const showActionHandler = () => {
        setBitHistory(bidHistory);
        setShowActions(true);
    };

    const closeActionHandler=()=>{
        setBitHistory([]);
        setShowActions();
    }

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
                    bidHistoryState={bidHistoryState}
                    onClose={closeActionHandler}
                />
         
        </ScrollView>
    );
}
