import { createSlice } from "@reduxjs/toolkit";
const history = [
    {
        _id: "1",
        imgUrl: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=338&ext=jpg",
        title: "Pay in a house",
        subtitle: `When you make payment of $5 or more when you pay at local...`,
        time: "11:00AM",
    },
    {
        _id: "2",
        imgUrl: "https://image.freepik.com/free-photo/real-estate-with-house-model-keys_1150-17814.jpg",
        title: `$5 turn key house`,
        subtitle: `When you make payment of $5 or more when you pay at local..`,
        time: "09:14AM",
    },
    {
        _id: "3",
        imgUrl: "https://image.freepik.com/free-vector/suburban-house-with-sign-sale_107791-6223.jpg",
        title: "Cashback 5% on house ",
        subtitle: `When you make payment of $5 or more when you pay at local..`,
        time: "11:00AM",
    },
]

const historyState = {
    history: [],
};

const historySlice = createSlice({
    name: "history",
    initialState: historyState,
    reducers: {
        setHistory: (state, action) => {
            state.history = action.payload;
        },
        removeHistory: (state, action) => {
            state.history = [];
        },
    },
});

export const historyActions = historySlice.actions;
export default historySlice.reducer;

export const getHistory = () => {
    return (dispatch) => {
        dispatch(historyActions.setHistory(history));
    };
};

export const clearHistory = () => {
    return (dispatch) => {
        dispatch(historyActions.removeHistory());
    };
};
