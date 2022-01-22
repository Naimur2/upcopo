import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import recentSearchReducer from "./slices/recentSearchSlice";
import uiReducer from "./slices/uiSlice";
import messagesReducer from "./slices/messagesSlice";
import collectionsReducer from "./slices/collectionsSlice";
import placebidReducer from "./slices/placeBidSlice";
import userReducer from "./slices/userInfoSlice";
import historyReducer from "./slices/historySlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        recentSearch: recentSearchReducer,
        ui: uiReducer,
        messages:messagesReducer,
        collections:collectionsReducer,
        placebid:placebidReducer,
        user:userReducer,
        history:historyReducer
    },
});

export default store;
