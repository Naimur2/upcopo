import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CollectionScreen from "./user-screens/collectionScreen/CollectionScreen";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import House from "./user-screens/house/House";
import LeaderBoard from "./user-screens/leaderBoard/Leaderboard";
import MessageView from "./user-screens/messageView/MessageView";
import Notifications from "./user-screens/notifications/Notifications";
import OtherUsersProfile from "./user-screens/otherUsersProfile/OtherUsersProfile";
import SearchCollections from "./user-screens/searchCollections/SearchCollections";
import SearchScreen from "./user-screens/searchScreen/SearchScreen";
import TrendyHouses from "./user-screens/trendyHouses/TrendyHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";
import Icon from "./utility/Icon";

const Stack = createNativeStackNavigator();

export default function UserRoute() {
    const navigation = useNavigation();
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
                    title: "Top Collections",
                    headerRight: () => (
                        <Icon
                            onPress={() =>
                                navigation.navigate("SearchCollection")
                            }
                            borderRadius={14}
                            bg="#52B69A"
                            p={[2, 4]}
                            color={"#fff"}
                            name="search"
                            size={20}
                        />
                    ),
                }}
                name="LeaderBoard"
                component={LeaderBoard}
            />
            <Stack.Screen
                options={{
                    title: "Search Collections",
                }}
                name="SearchCollection"
                component={SearchCollections}
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
            <Stack.Screen
                options={headerWhite}
                name="MessageView"
                component={MessageView}
            />
        </Stack.Navigator>
    );
}
