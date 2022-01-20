import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import recentSearchReducer from "./slices/recentSearchSlice";
import uiReducer from "./slices/uiSlice";
import messagesReducer from "./slices/messagesSlice";
import collectionsReducer from "./slices/collectionsSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        recentSearch: recentSearchReducer,
        ui: uiReducer,
        messages:messagesReducer,
        collections:collectionsReducer
    },
});

export default store;
