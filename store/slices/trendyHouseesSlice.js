import { createSlice } from "@reduxjs/toolkit";
const trendyHouses = [
    {
        _id: '1',
        houseName: "Turn Key House",
        expiresAt: "Jan 24, 2022 18:00:30",
        currentBid: "4.33",
        owner:'Luckas',
        builtAt:'1942',
        address:'1523 N 106th St, Mesa, AZ 85207',
        sqrfit:' 3,160sqft',
        image: 'https://media.istockphoto.com/vectors/wooden-mystic-stilt-house-on-swamp-in-night-forest-vector-id1212664849?k=20&m=1212664849&s=612x612&w=0&h=h7btIEwYFb_Cb-0MIv65AGuRfGwE3RFY-NB65ZRxIxk=',
        description:'Simple house with modern architecture and cool interiors located in the city crnter making easier for you to access',
        bed:3,
        bath:4,
        createdAt:"Jan 22, 2022 18:00:30",
    },
];

const initialState = {
    trendyHouses: [],
};

const trendyHousesSlice = createSlice({
    name: "trendyHouses",
    initialState,
    reducers: {
        setTrendyHouses: (state, action) => {
            state.trendyHouses = action.payload;
        },

        removeTrendyHouses:(state,action)=>{
            state.trendyHouses=[]
        }
    },
});

export const trendyHousesActions=trendyHousesSlice.actions;
export default trendyHousesSlice.reducer;


export const getTrendyHouses = () => {
    return (dispatch) => {
        dispatch(trendyHousesActions.setTrendyHouses(trendyHouses));
    };
};



export const clearTrendyHouses = () => {
    return (dispatch) => {
        dispatch(trendyHousesActions.removeTrendyHouses());
    };
};




