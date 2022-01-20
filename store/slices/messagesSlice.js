import { createSlice } from "@reduxjs/toolkit";
const messages = [
    {
        _id: "01",
        from: {
            _id: "100",
            username: "Jrny club",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime:"1642579204802"
        },
        to: {
            _id: "200",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: false,
            seenTime:"1642579204802"
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
            seenTime:"1642579204802"
        },
        to: {
            _id: "200",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: false,
            seenTime:"1642579204802"
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
            seenTime:"1642579204802"
        },
        to: {
            _id: "100",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: false,
            seenTime:"1642579204802"
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
            seenTime:"1642579204802"
        },
        to: {
            _id: "100",
            username: "Crypto punks",
            avatarUrl:
                "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
            isActive: true,
            seen: true,
            seenTime:"1642579204802"
        },
        message: "Hello World",
        date: "January 18,2022,18:22:22",
        timestamp: "1642610338558",
    },
];

const initialMessageState = {
    messages: [],
};

const messageSlice = createSlice({
    name: "messages",
    initialState: initialMessageState,
    reducers: {
        addMessages: (state, action) => {
            state.messages = action.payload;
        },
        sendMessage: (state, action) => {
            console.log(action.payload);
        },
    },
});

export const messageActions=messageSlice.actions;
export default messageSlice.reducer;


export const getMessages = () => {
    return (dispatch) => {
        dispatch(messageActions.addMessages(messages));
    };
};




