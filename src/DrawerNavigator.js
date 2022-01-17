import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomTabs from "./BottomTabs";
import Main from "./user-screens/drawer-screens/Main";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={() => <Main />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "#f9f9f9",
                        width: 300,
                    },
                }}
            >
                <Drawer.Screen
                    options={{ headerShown: false }}
                    name="Bottom"
                    component={BottomTabs}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
