import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNav from "./TabNav";
import MessageView from "./user-screens/messageView/MessageView";
const Stack = createNativeStackNavigator();

export default function MessageRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }} initialRouteName="TabView">
            <Stack.Screen name="TabView" component={TabNav} />
            <Stack.Screen name="MessageView" component={MessageView} />
        </Stack.Navigator>
    );
}
