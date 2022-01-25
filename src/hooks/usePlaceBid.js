import React from 'react';
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


export default function usePlaceBid(houseId) {

    const [bidHistory, setBitHistory] = React.useState([]);
    const [showActions, setShowActions] = React.useState(false);

    const showActionHandler = () => {
        setBitHistory(bidHistoryState);
        setShowActions(true);
    };
    const getActionData = () => {
        setBitHistory(bidHistoryState);
    };

    const closeActionHandler=()=>{
        setBitHistory([]);
        setShowActions();
    }


  return [bidHistory,showActions,showActionHandler,closeActionHandler,getActionData];
}
