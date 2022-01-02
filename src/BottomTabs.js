import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from "./drawer-screens/Main";

import HomeRoute from "./HomeRoute";
import LovedHouses from "./user-screens/lovedHouses/LovedHouses";
import Messaging from "./user-screens/messaging/Messaging";
import SearchScreen from "./user-screens/searchScreen/SearchScreen";
import Icon from "./utility/Icon";

import { useDrawerStatus } from '@react-navigation/drawer';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    const isDrawerOpen = useDrawerStatus() === 'open';

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outlined";
                    } else if (route.name === "Loved") {
                        iconName = focused ? "love" : "love-outline";
                    } else if (route.name === "Messages") {
                        iconName = focused ? "message" : "message-outlline";
                    } else if (route.name === "Search") {
                        iconName = "search";
                        return (
                            <Icon
                                borderRadius={50}
                                color={"#fff"}
                                bg="#52B69A"
                                p="3"
                                name={iconName}
                                size={22}
                            />
                        );
                    } else if (route.name === "User") {
                        iconName = isDrawerOpen ? "user" : "user-outline";
                        return <Icon name={iconName} size={22} color={color} />;
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={22} color={color} />;
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: "#7E868C",
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                    height: 60,
                },
            })}
        >
            <Tab.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeRoute}
            />
            <Tab.Screen name="Loved" component={LovedHouses} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Messages" component={Messaging} />
            <Tab.Screen
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();

                        navigation.toggleDrawer();
                    },
                })}
                name="User"
                options={{ headerShown: false }}
                component={Main}
            />
        </Tab.Navigator>
    );
}
