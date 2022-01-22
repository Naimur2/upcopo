import { createSlice } from "@reduxjs/toolkit";
const notifications = [
    {
        title: "Today",
        data: [
            {
                _id: "1",
                userName: "Patrick",
                avatar: "https://st4.depositphotos.com/26426816/40317/v/1600/depositphotos_403174050-stock-illustration-light-bulb-cute-mascot.jpg",
                message: "requested a payment of $200.00",
                timestap: "Just Now",
                date: "January 18,2022",
            },
            {
                _id: "1",
                userName: "Patrick",
                avatar: "https://st4.depositphotos.com/26426816/40317/v/1600/depositphotos_403174050-stock-illustration-light-bulb-cute-mascot.jpg",
                message: "requested a payment of $200.00",
                timestap: "Just Now",
                date: "January 18,2022",
            },
        ],
    },
    {
        title: "Yesterday",
        data: [
            {
                _id: "1",
                userName: "Patrick",
                avatar: "https://st4.depositphotos.com/26426816/40317/v/1600/depositphotos_403174050-stock-illustration-light-bulb-cute-mascot.jpg",
                message: "requested a payment of $200.00",
                timestap: "Just Now",
                date: "January 18,2022",
            },
            {
                _id: "1",
                userName: "Patrick",
                avatar: "https://st4.depositphotos.com/26426816/40317/v/1600/depositphotos_403174050-stock-illustration-light-bulb-cute-mascot.jpg",
                message: "requested a payment of $200.00",
                timestap: "Just Now",
                date: "January 18,2022",
            },
        ],
    },
    {
        title: "This Weekened",
        data: [
            {
                _id: "1",
                userName: "Patrick",
                avatar: "https://st4.depositphotos.com/26426816/40317/v/1600/depositphotos_403174050-stock-illustration-light-bulb-cute-mascot.jpg",
                message: "requested a payment of $200.00",
                timestap: "Just Now",
                date: "January 18,2022",
            },
            {
                _id: "1",
                userName: "Patrick",
                avatar: "https://st4.depositphotos.com/26426816/40317/v/1600/depositphotos_403174050-stock-illustration-light-bulb-cute-mascot.jpg",
                message: "requested a payment of $200.00",
                timestap: "Just Now",
                date: "January 18,2022",
            },
        ],
    },
];


const notificationsState = {
    notifications: [],
};

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: notificationsState,
    reducers: {
        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        removeNotifications: (state, action) => {
            state.notifications = [];
        },
    },
});

export const notificationsActions = notificationsSlice.actions;
export default notificationsSlice.reducer;

export const getNotifications = () => {
    return (dispatch) => {
        dispatch(notificationsActions.setNotifications(notifications));
    };
};
// it will clear state 
export const clearNotifications = () => {
    return (dispatch) => {
        dispatch(notificationsActions.removeNotifications());
    };
};

// it will remove from server 
export const clearDbNotifications = () => {
    return (dispatch) => {
        dispatch(notificationsActions.removeNotifications());
    };
};
