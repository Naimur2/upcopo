import { Actionsheet, Box, HStack, Stack, Text } from "native-base";
import React from "react";
import Icon from "../../utility/Icon";
import KeyBoardView from '../../utility/KeyBoardView';
import PaceBidActionCard from "./placeBidActionComponents/PaceBidActionCard";

const cardData = [
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

export default function PlaceBidAction({ isOpen, onOpen, onClose }) {
    return (
        <Actionsheet isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            
            <Actionsheet.Content bg={"#F9F9F9"}>
                <KeyBoardView style={{width:'100%'}}>
                    <Box h={60} px={4} justifyContent="center">
                        <HStack justifyContent={"space-between"}>
                            <Text
                                fontSize="16"
                                color="#3D454A"
                                fontWeight={"500"}
                                fontFamily={"body"}
                            >
                                History of bid
                            </Text>
                            <Icon name={"x"} size={20} color={"#7E868C"} />
                        </HStack>
                    </Box>
                    <Stack w="100%" >
                        {cardData.map((data) => (
                            <PaceBidActionCard
                                key={data._id}
                                price={data.price}
                                varified={data.varified}
                                userName={data.userName}
                                counter={data.counter}
                                avatar={data.avatar}
                            />
                        ))}
                    </Stack>
                </KeyBoardView>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
