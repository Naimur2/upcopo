import { Text, VStack } from "native-base";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoute from "./HomeRoute";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused
                                ? "ios-information-circle"
                                : "ios-information-circle-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused ? "ios-list-box" : "ios-list";
                        }
                        // You can return any component that you like here!
                        return (
                            <Ionicons name={iconName} size={size} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Home" component={HomeRoute} />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            
            </Tab.Navigator>
        </NavigationContainer>
    );
}
