import { createSlice } from "@reduxjs/toolkit";

const recentSearchSliceState = {
    searches: [
        {
            _id: "01",
            houseImage:
                "https://www.interest.co.nz/sites/default/files/feature_images/house-cartoon_0.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "buy",
        },
        {
            _id: "02",
            houseImage:
                "https://static8.depositphotos.com/1141099/962/i/950/depositphotos_9621485-stock-photo-beautiful-home.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "bid",
        },
        {
            _id: "03",
            houseImage:
                "https://st2.depositphotos.com/11535342/42198/i/1600/depositphotos_421987788-stock-photo-house-purple-home-villa-isolated.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "address",
        },
        {
            _id: "04",
            houseImage:
                "https://www.interest.co.nz/sites/default/files/feature_images/house-cartoon_0.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "buy",
        },
        {
            _id: "05",
            houseImage:
                "https://static8.depositphotos.com/1141099/962/i/950/depositphotos_9621485-stock-photo-beautiful-home.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "bid",
        },
        {
            _id: "06",
            houseImage:
                "https://st2.depositphotos.com/11535342/42198/i/1600/depositphotos_421987788-stock-photo-house-purple-home-villa-isolated.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "address",
        },
        {
            _id: "07",
            houseImage:
                "https://www.interest.co.nz/sites/default/files/feature_images/house-cartoon_0.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "buy",
        },
        {
            _id: "08",
            houseImage:
                "https://static8.depositphotos.com/1141099/962/i/950/depositphotos_9621485-stock-photo-beautiful-home.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "bid",
        },
        {
            _id: "09",
            houseImage:
                "https://st2.depositphotos.com/11535342/42198/i/1600/depositphotos_421987788-stock-photo-house-purple-home-villa-isolated.jpg",
            houseName: "House of secret",
            address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
            bath: 3,
            bed: 4,
            category: "address",
        },
    ],
};

const recentSearchSlice = createSlice({
    name: "recentSearches",
    initialState: recentSearchSliceState,
    reducers: {
        removeSearch: (state, action) => {
            const itemId = action.payload;
            const recentSearch = state.searches.filter((item) => item._id !== itemId);
            console.log(recentSearch);
            state.searches = recentSearch;
        },
    },
});

export const recentSearchActions = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
