import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import House from "./user-screens/house/House";
import LeaderBoard from "./user-screens/leaderBoard/LeaderBoard";
import Notifications from "./user-screens/notifications/Notifications";
import OtherUsersProfile from "./user-screens/otherUsersProfile/OtherUsersProfile";
import SearchScreen from "./user-screens/searchScreen/SearchScreen";
import TrendyHouses from "./user-screens/trendyHouses/TrendyHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";

const Stack = createNativeStackNavigator();

export default function UserRoute() {
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: "white",
            headerTitleStyle: {
                color: "#fff",
                textAlign:'center'
            },
        }} initialRouteName="DashBoard">
            <Stack.Screen
                options={{ headerShown: false }}
                name="DashBoard"
                component={DashBoardScreen}
            />
            <Stack.Screen name="TrendyHouses" component={TrendyHouses} />
            <Stack.Screen
                // options={{ headerShown: false }}
                name="UserProfile"
                component={UserProfile}
            />
            <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="OthersProfile" component={OtherUsersProfile} />
            <Stack.Screen name="SearchHouse" component={SearchScreen} />
            <Stack.Screen
                options={{
                    headerTintColor: "white",
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerShadowVisible: false,
                    headerTitle: "",
                }}
                name="House"
                component={House}
            />
        </Stack.Navigator>
    );
}
