import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDrawerStatus } from "@react-navigation/drawer";
import React from "react";
import Main from "./drawer-screens/Main";
import SearchTabRoutes from "./SearchTabRoutes";
import LovedHouses from "./user-screens/lovedHouses/LovedHouses";
import Messaging from "./user-screens/messaging/Messaging";
import UserRoute from "./UserRoute";
import Icon from "./utility/Icon";

const Tab = createBottomTabNavigator();

export default function TabNav() {
    const isDrawerOpen = useDrawerStatus() === "open";

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outlined";
                    } else if (route.name === "Loved") {
                        iconName = focused ? "love" : "love-outline";
                    } else if (route.name === "MessagesRoute") {
                        iconName = focused ? "message" : "message-outlline";
                    } else if (route.name === "Search") {
                        iconName = focused ? "search-filled" : "search";
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
                headerShadowVisible:false,
                headerStyle:{
                    backgroundColor:'#f9f9f9'
                },
                headerTitleAlign:'center',
            })}
        >
            <Tab.Screen
                options={{ headerShown: false }}
                name="Home"
                component={UserRoute}
            />
            <Tab.Screen name="Loved" component={LovedHouses} />
            <Tab.Screen
                options={{
                    headerShown:false
                }}
                name="Search"
                component={SearchTabRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name="MessagesRoute"
                component={Messaging}
            />
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
