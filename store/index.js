import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import collectionsReducer from "./slices/collectionsSlice";
import historyReducer from "./slices/historySlice";
import messagesReducer from "./slices/messagesSlice";
import notificationsReducer from "./slices/notificationsSlice";
import placebidReducer from "./slices/placeBidSlice";
import recentSearchReducer from "./slices/recentSearchSlice";
import housesReducer from "./slices/housesSlice";
import uiReducer from "./slices/uiSlice";
import userReducer from "./slices/userInfoSlice";
import likeReducer from "./slices/likeSlice";
import followingsReducer from './slices/followingsSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        recentSearch: recentSearchReducer,
        ui: uiReducer,
        messages:messagesReducer,
        collections:collectionsReducer,
        placebid:placebidReducer,
        user:userReducer,
        history:historyReducer,
        notifications:notificationsReducer,
        houses:housesReducer,
        likes:likeReducer,
        followings:followingsReducer
    },
});

export default store;
