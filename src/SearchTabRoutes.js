import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ARview from "./user-screens/ARview/ARview";
import House from "./user-screens/house/House";
import MapScreen from "./user-screens/mapScreen/MapScreen";
import SearchPages from "./user-screens/searchPages/SearchPages";
import SelectWorldScreen from "./user-screens/selectWorld/SelectWorldScreen";

const Stack = createNativeStackNavigator();

export default function SearchTabRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShadowVisible: false,
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
                    headerTitleAlign: "left",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    title: "Select world",
                }}
                name="SelectWorld"
                component={SelectWorldScreen}
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
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: "#3D454A",

                    },
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: "transparent",
                        
                    },
                    headerShadowVisible: false,
                    headerTintColor:'#3D454A',
                    headerBackVisible:false
                }}
                name="Gmap"
                component={MapScreen}
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
