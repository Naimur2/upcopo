import { Text, VStack } from "native-base";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./drawer-screens/Main";
const Drawer = createDrawerNavigator();
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

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
