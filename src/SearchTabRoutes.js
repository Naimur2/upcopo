import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FilterScreen from "./user-screens/filterScreen/FilterScreen";
import SearchPages from './user-screens/searchPages/SearchPages';

const Stack = createNativeStackNavigator();

export default function SearchTabRoutes() {
    return (
        <Stack.Navigator  initialRouteName="Searches">
            <Stack.Screen name="Searches" component={SearchPages} />
            <Stack.Screen name="Filter" component={FilterScreen} />
        </Stack.Navigator>
    );
}
