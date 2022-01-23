import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import House from "./user-screens/house/House";
import SearchPages from "./user-screens/searchPages/SearchPages";

const Stack = createNativeStackNavigator();

export default function SearchTabRoutes() {
    return (
        <Stack.Navigator initialRouteName="Searches">
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Searches"
                component={SearchPages}
            />
            <Stack.Screen
                options={{
                    headerTintColor: "white",
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    title: "",
                    headerShadowVisible: false,
                }}
                name="HouseScreen"
                component={House}
            />
        </Stack.Navigator>
    );
}
