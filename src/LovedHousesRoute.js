import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ARview from "./user-screens/ARview/ARview";
import House from "./user-screens/house/House";
import LovedHouses from "./user-screens/lovedHouses/LovedHouses";
import MapScreen from "./user-screens/mapScreen/MapScreen";
import SearchPages from "./user-screens/searchPages/SearchPages";
import SelectWorldScreen from "./user-screens/selectWorld/SelectWorldScreen";

const Stack = createNativeStackNavigator();

export default function LovedHousesRoute() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShadowVisible: false,
            }}
            initialRouteName="LovedRoute"
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#fff",
                    },
                }}
                name="LovedRoute"
                component={LovedHouses}
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
                name="HouseViewScreen"
                component={House}
            />
        </Stack.Navigator>
    );
}
