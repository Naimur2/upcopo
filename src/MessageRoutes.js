import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MessageView from "./user-screens/messageView/MessageView";
import Messaging from "./user-screens/messaging/Messaging";
const Stack = createNativeStackNavigator();

export default function MessageRoutes() {
    return (
        <Stack.Navigator initialRouteName="Messaging">
            <Stack.Screen name="Messages" component={Messaging} />
            <Stack.Screen name="MessageView" component={MessageView} />
        </Stack.Navigator>
    );
}
