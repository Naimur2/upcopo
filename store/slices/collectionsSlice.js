import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const collections = [
    {
        _id: "1",
        name: "Joel Norris",
        varified: false,
        price: 15499.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        active: true,
        standings:1
    },
    {
        _id: "2",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: false,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-red-panda-with-cap-glasses-vector-illustration_60438-1418.jpg?size=338&ext=jpg",
        priceUpPercentage: 10.03,
        active: false,
        standings:2
    },
    {
        _id: "3",
        name: "Joel Norris",
        varified: false,
        price: 15499.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        active: true,
        standings:3
    },
    {
        _id: "4",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: false,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-red-panda-with-cap-glasses-vector-illustration_60438-1418.jpg?size=338&ext=jpg",
        priceUpPercentage: 10.03,
        active: false,
        standings:4
    },
    {
        _id: "5",
        name: "Joel Norris",
        varified: false,
        price: 15499.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        active: true,
        standings:5
    },
    {
        _id: "6",
        name: "Joel Norris",
        varified: true,
        price: 15499.86,
        priceUp: false,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-red-panda-with-cap-glasses-vector-illustration_60438-1418.jpg?size=338&ext=jpg",
        priceUpPercentage: 10.03,
        active: false,
        standings:6
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

export const collectionsActions=collectionsSlice.actions;
export default collectionsSlice.reducer;


export const  getAllCollections = createAsyncThunk(
    "collections/get ",
    async (collection, thunkAPI) => {
        thunkAPI.dispatch(collectionsActions.updateCollections(collections))
    }
);

export const  searchCollections = createAsyncThunk(
    "collections/search ",
    async (searchvalue, thunkAPI) => {
        const state=thunkAPI.getState;
        thunkAPI.dispatch(collectionsActions.updateCollections(collections))
    }
);

export const getCollections = () => {
    return (dispatch) => {
        dispatch(collectionsActions.updateCollections(collections));
    };
};




