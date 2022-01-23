import { createSlice } from "@reduxjs/toolkit";

const houses = [
    {
        _id: "1",
        houseName: "Turn Key House",
        expiresAt: "Jan 24, 2022 18:00:30",
        currentBid: "4.33",
        owner: "Luckas",
        builtAt: "1942",
        address: "1523 N 106th St, Mesa, AZ 85207",
        sqrfit: " 3,160sqft",
        image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
        description:
            "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
        bed: 3,
        bath: 4,
        createdAt: "Jan 22, 2022 18:00:30",
        mapImage:
            "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "2",
        houseName: "Turn Key House",
        expiresAt: "Jan 24, 2022 18:00:30",
        currentBid: "4.33",
        owner: "Luckas",
        builtAt: "1942",
        address: "1523 N 106th St, Mesa, AZ 85207",
        sqrfit: " 3,160sqft",
        image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
        description:
            "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
        bed: 3,
        bath: 4,
        createdAt: "Jan 22, 2022 18:00:30",
        mapImage:
            "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "3",
        houseName: "Turn Key House",
        expiresAt: "Jan 24, 2022 18:00:30",
        currentBid: "4.33",
        owner: "Luckas",
        builtAt: "1942",
        address: "1523 N 106th St, Mesa, AZ 85207",
        sqrfit: " 3,160sqft",
        image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
        description:
            "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
        bed: 3,
        bath: 4,
        createdAt: "Jan 22, 2022 18:00:30",
        mapImage:
            "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "4",
        houseName: "Turn Key House",
        expiresAt: "Jan 26, 2022 18:00:30",
        currentBid: "4.33",
        owner: "Luckas",
        builtAt: "1942",
        address: "1523 N 106th St, Mesa, AZ 85207",
        sqrfit: " 3,160sqft",
        image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
        description:
            "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
        bed: 3,
        bath: 4,
        createdAt: "Jan 22, 2022 18:00:30",
        mapImage:
            "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "5",
        houseName: "Turn Key House",
        expiresAt: "Jan 24, 2022 18:00:30",
        currentBid: "4.33",
        owner: "Luckas",
        builtAt: "1942",
        address: "1523 N 106th St, Mesa, AZ 85207",
        sqrfit: " 3,160sqft",
        image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
        description:
            "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
        bed: 3,
        bath: 4,
        createdAt: "Jan 22, 2022 18:00:30",
        mapImage:
            "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
        topBid: 0.8,
        lastBid: 0.7,
    },
    {
        _id: "6",
        houseName: "Turn Key House",
        expiresAt: "Jan 26, 2022 18:00:30",
        currentBid: "4.33",
        owner: "Luckas",
        builtAt: "1942",
        address: "1523 N 106th St, Mesa, AZ 85207",
        sqrfit: " 3,160sqft",
        image: "https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=",
        description:
            "Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access",
        bed: 3,
        bath: 4,
        createdAt: "Jan 22, 2022 18:00:30",
        mapImage:
            "https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png",
        topBid: 0.8,
        lastBid: 0.7,
    },
];

const initialState = {
    trendyHouses: [],
    topSellers: [],
};

const housesSlice = createSlice({
    name: "houses",
    initialState,
    reducers: {
        setTrendyHouses: (state, action) => {
            state.trendyHouses = action.payload;
        },

        removeTrendyHouses: (state, action) => {
            state.trendyHouses = [];
        },
        setTopSellers: (state, action) => {
            state.topSellers = action.payload;
        },

        removeTopSellers: (state, action) => {
            state.topSellers = [];
        },
    },
});

export const housesActions = housesSlice.actions;
export default housesSlice.reducer;

export const getTrendyHouses = () => {
    return (dispatch) => {
        dispatch(housesActions.setTrendyHouses(houses));
    };
};

export const clearTrendyHouses = () => {
    return (dispatch) => {
        dispatch(housesActions.removeTrendyHouses());
    };
};

export const getTopSellers = () => {
    return (dispatch) => {
        dispatch(housesActions.setTopSellers(houses));
    };
};

export const clearTopSellers = () => {
    return (dispatch) => {
        dispatch(housesActions.removeTopSellers());
    };
};
