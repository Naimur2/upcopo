import { createSlice } from "@reduxjs/toolkit";
const history = [
    {
        _id: "01",
        from: {
            _id: "100",
            username: "Jrny club",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime: "1642579204802",
        },
        to: {
            _id: "200",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: false,
            seenTime: "1642579204802",
        },
        message: "Welcome Home",
        date: "January 18,2022,18:22:22",
        timestamp: "1642579204802",
    },
    {
        _id: "02",
        from: {
            _id: "100",
            username: "Jrny club",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime: "1642579204802",
        },
        to: {
            _id: "200",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: false,
            seenTime: "1642579204802",
        },
        message: "Hello World",
        date: "January 18,2022,18:22:22",
        timestamp: "1642610122256",
    },
    {
        _id: "03",
        from: {
            _id: "300",
            username: "Jrny club",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime: "1642579204802",
        },
        to: {
            _id: "100",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: false,
            seenTime: "1642579204802",
        },
        message: "Hey, Jol, If yo’re free now we can..",
        date: "January 18,2022,18:22:22",
        timestamp: "1642610338558",
    },
    {
        _id: "04",
        from: {
            _id: "300",
            username: "Jrny club",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime: "1642579204802",
        },
        to: {
            _id: "100",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime: "1642579204802",
        },
        message: "Hello World",
        date: "January 18,2022,18:22:22",
        timestamp: "1642610338558",
    },
];

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
        dispatch(historyActions.setHistorys(history));
    };
};

export const clearHistory = () => {
    return (dispatch) => {
        dispatch(historyActions.removeHistory());
    };
};