import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import recentSearchReducer from "./slices/recentSearchSlice";

const store = configureStore({
    reducer: { user: userReducer, recentSearch: recentSearchReducer },
});

export default store;
