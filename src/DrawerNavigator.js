import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import BottomTabs from "./BottomTabs";
import Main from "./drawer-screens/Main";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const {height}=Dimensions.get('window');

    return (
        <NavigationContainer style={{position:'relative'}}>
            <Drawer.Navigator
                drawerContent={() => <Main />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "#f9f9f9",
                        width: Math.round(height/2.5),
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
