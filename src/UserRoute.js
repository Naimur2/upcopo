import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Children } from "react";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import TrendyHouses from "./user-screens/trendyHouses/TrendyHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";

const Stack = createNativeStackNavigator();


export default function UserRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="DashBoard"
            >
                <Stack.Screen
                    screenOptions={{
                        headerShown: false,
                    }}
                    name="DashBoard"
                    component={DashBoardScreen}
                />
                <Stack.Screen
                    name="TrendyHouses"
                    component={TrendyHouses}
                />
                <Stack.Screen
                    name="UserProfile"
                    component={UserProfile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
