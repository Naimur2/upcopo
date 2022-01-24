import { HStack } from "native-base";
import React from "react";
import IconWithText from "../../../utility/IconWithText";
import UtilityBtn from "../../../utility/UtilityBtn";
const bidHistoryState = [
    {
        _id: "1",
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-listening-music-vector-illustration_60438-1436.jpg?size=338&ext=jpg",
        varified: true,
        userName: "Noundles",
        price: "0.56 ETH",
        counter: 6,
        houseId:'01'
    },
    {
        _id: "2",
        avatar: "https://img.freepik.com/free-vector/cute-panda-business-holding-money-cartoon-vector-icon-illustration-animal-business-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3888.jpg?size=338&ext=jpg",
        varified: false,
        userName: "Jrny club",
        price: "0.46 ETH",
        counter: 4,
        houseId:'01'
    },
    {
        _id: "3",
        avatar: "https://image.freepik.com/free-vector/cute-panda-reading-book-cartoon-icon-illustration_138676-2683.jpg",
        varified: true,
        userName: "Joel Norris",
        price: "0.50 ETH",
        counter: 3,
        houseId:'01'
    },
    {
        _id: "4",
        avatar: "https://image.freepik.com/free-vector/cute-panda-playing-game-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3676.jpg",
        varified: false,
        userName: "Feudalz",
        price: "0.76 ETH",
        counter: 1,
        houseId:'01'
    },
];

const LovedHousesCardFooter = ({ onPlaceBid, price }) => (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
        <IconWithText
            iconName="etherium"
            text={price}
            iconColor={"#3D454A"}
            textStyle={{
                fontWeight: 700,
                fontFamily: "body",
                color: "#3D454A",
            }}
        />
        <UtilityBtn
            titleStyle={{
                fontWeight: 600,
                fontFamily: "body",
                fontSize: 16,
            }}
            title={"Place a Bid"}
            onPress={onPlaceBid}
        />
    </HStack>
);
export default LovedHousesCardFooter;
