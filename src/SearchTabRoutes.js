import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ARview from "./user-screens/ARview/ARview";
import House from "./user-screens/house/House";
import SearchPages from "./user-screens/searchPages/SearchPages";

const Stack = createNativeStackNavigator();

export default function SearchTabRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
            }}
            initialRouteName="Searches"
        >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Searches"
                component={SearchPages}
            />
            <Stack.Screen
                options={{
                    title: "Turn key house",
                    headerTintColor: "white",
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    headerShadowVisible: false,
                }}
                name="ARview"
                component={ARview}
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
