import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNav from "./TabNav";
import MessageView from "./user-screens/messageView/MessageView";
const Stack = createNativeStackNavigator();

export default function MessageRoutes() {
    return (
        <Stack.Navigator initialRouteName="TabView">
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="TabView"
                component={TabNav}
            />
            <Stack.Screen name="MessageScreenView" component={MessageView} />
        </Stack.Navigator>
    );
}
