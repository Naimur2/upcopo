import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CollectionScreen from "./user-screens/collectionScreen/CollectionScreen";
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
    const headerWhite = {
        headerTintColor: "white",
        headerTransparent: true,
        headerTitleStyle: {
            color: "#fff",
        },
        title: "",
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTintColor: "#000",
                headerTitleStyle: {
                    color: "#000",
                },
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "transparent",
                },
            }}
            initialRouteName="DashBoard"
        >
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
            <Stack.Screen
                options={{
                    headerTitleAlign: "center",
                    title: "Top Collections",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                }}
                name="LeaderBoard"
                component={LeaderBoard}
            />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="OthersProfile" component={OtherUsersProfile} />
            <Stack.Screen name="SearchHouse" component={SearchScreen} />
            <Stack.Screen
                options={headerWhite}
                name="Collections"
                component={CollectionScreen}
            />
            <Stack.Screen
                options={headerWhite}
                name="House"
                component={House}
            />
        </Stack.Navigator>
    );
}
