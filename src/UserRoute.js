import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDbNotifications } from "../store/slices/notificationsSlice";
import CollectionScreen from "./user-screens/collectionScreen/CollectionScreen";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import FilterScreeen from "./user-screens/filterScreen/FilterScreen.js";
import HelpCenter from "./user-screens/helpCenter/HelpCenter";
import House from "./user-screens/house/House";
import MessageView from "./user-screens/messageView/MessageView";
import Notifications from "./user-screens/notifications/Notifications";
import OtherUsersProfile from "./user-screens/otherUsersProfile/OtherUsersProfile";
import ProfileHistory from "./user-screens/profileHistory/ProfileHistory";
import SearchCollections from "./user-screens/searchCollections/SearchCollections";
import SearchScreen from "./user-screens/searchScreen/SearchScreen";
import TopCollections from "./user-screens/topCollections/TopCollections";
import TrendyHouses from "./user-screens/trendyHouses/TrendyHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";
import Icon from "./utility/Icon";

const Stack = createNativeStackNavigator();

export default function UserRoute() {
    const userState = useSelector((state) => state);
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const headerWhite = {
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
                    backgroundColor: "#f9f9f9",
                },
            }}
            initialRouteName="DashBoard"
        >
            <Stack.Screen
                options={{ headerShown: false }}
                name="DashBoard"
                component={DashBoardScreen}
            />
            <Stack.Screen
                options={{
                    title: "Top Sellers",
                }}
                name="TrendyHouses"
                component={TrendyHouses}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="UserProfile"
                component={UserProfile}
            />
            <Stack.Screen
                options={{
                    title: "Top Collections",
                }}
                name="TopCollections"
                component={TopCollections}
            />
            <Stack.Screen
                options={{
                    title: "Search Collections",
                }}
                name="SearchCollection"
                component={SearchCollections}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#fff",
                    },
                    headerTintColor: "#000",
                    headerTitleStyle: {
                        color: "#000",
                    },
                    title: "Notifications",
                    headerRight: () => {
                        if (userState.notifications.notifications.length === 0)
                            return null;
                        return (
                            <Text
                                fontFamily={"body"}
                                fontSize={16}
                                fontWeight={500}
                                color={"#7E868C"}
                                onPress={() => dispatch(clearDbNotifications())}
                            >
                                Clear All
                            </Text>
                        );
                    },
                }}
                name="Notifications"
                component={Notifications}
            />
            <Stack.Screen
                options={{
                    headerTintColor: "#000",
                    headerTitleStyle: {
                        color: "#000",
                    },
                    title: "Apply Filter",
                    headerRight: () => (
                        <Icon
                            borderRadius={10}
                            name={"export"}
                            p={2}
                            bg="#fff"
                            size={20}
                        />
                    ),
                }}
                name="FilterScreen"
                component={FilterScreeen}
            />
            <Stack.Screen
                options={{
                    title: "",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },

                    headerTransparent: true,
                }}
                name="OthersProfile"
                component={OtherUsersProfile}
            />
            <Stack.Screen
                options={{
                    title: "",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                }}
                name="SearchHouse"
                component={SearchScreen}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#52B69A",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    title: "Help Center",
                }}
                name="Help"
                component={HelpCenter}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#52B69A",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    title: "Profile History",
                }}
                name="History"
                component={ProfileHistory}
            />
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
