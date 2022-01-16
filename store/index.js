import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import recentSearchReducer from "./slices/recentSearchSlice";
import uiReducer from './slices/uiSlice'

const store = configureStore({
    reducer: { auth: authReducer, recentSearch: recentSearchReducer,ui:uiReducer },
});

export default store;
