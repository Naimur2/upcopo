import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import LeaderBoard from "./user-screens/leaderBoard/LeaderBoard";
import Notifications from "./user-screens/notifications/Notifications";
import TrendyHouses from "./user-screens/trendyHouses/TrendyHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";

const Stack = createNativeStackNavigator();

export default function HomeRoute() {
    return (
        <Stack.Navigator initialRouteName="DashBoard">
            <Stack.Screen
                options={{ headerShown: false }}
                name="DashBoard"
                component={DashBoardScreen}
            />
            <Stack.Screen name="TrendyHouses" component={TrendyHouses} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="UserProfile"
                component={UserProfile}
            />
            <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    );
}
