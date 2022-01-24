import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const top = [
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




const collections = [
    {
        _id: "1",
        name: "Javascript Club",
        varified: false,
        totalEthprice: 15499.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        ethAddress: "0xet54trw757007QR5e5c757007",
        description:
            "Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space",
        coverPhoto:
            "https://image.freepik.com/free-vector/dragon-breathing-fire-attacks-castle_107791-5336.jpg",
        items: "10100",
        floorPrice: "4.2",
        owners: "5900",
        volume: "237000000",
    },
    {
        _id: "2",
        name: "Node Js Club",
        varified: false,
        totalEthprice: 10000.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        ethAddress: "0xet54trw757007QR5e5c757007",
        description:
            "Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space",
        coverPhoto:
            "https://image.freepik.com/free-vector/dragon-breathing-fire-attacks-castle_107791-5336.jpg",
        items: "10100",
        floorPrice: "4.2",
        owners: "5900",
        volume: "237000000",
    },
    {
        _id: "3",
        name: "Boston Club",
        varified: false,
        totalEthprice: 16499.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        ethAddress: "0xet54trw757007QR5e5c757007",
        description:
            "Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space",
        coverPhoto:
            "https://image.freepik.com/free-vector/dragon-breathing-fire-attacks-castle_107791-5336.jpg",
        items: "10100",
        floorPrice: "4.2",
        owners: "5900",
        volume: "237000000",
    },
];

const initialCollectionsState = {
    collections: [],
};

const collectionsSlice = createSlice({
    name: "collections",
    initialState: initialCollectionsState,
    reducers: {
        updateCollections: (state, action) => {
            state.collections = action.payload;
        },
    },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice.reducer;

export const getAllCollections = createAsyncThunk(
    "collections/get ",
    async (collection, thunkAPI) => {
        thunkAPI.dispatch(collectionsActions.updateCollections(collections));
    }
);

export const searchCollections = createAsyncThunk(
    "collections/search ",
    async (searchvalue, thunkAPI) => {
        const state = thunkAPI.getState;
        thunkAPI.dispatch(collectionsActions.updateCollections(collections));
    }
);

export const getCollections = () => {
    return (dispatch) => {
        dispatch(collectionsActions.updateCollections(collections));
    };
};
