import React from "react";
import LoginScreen from "./auth-screens/LoginScreen";
import RegisterScreen from "./auth-screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "./auth-screens/ForgotPasswordScreen";
import EnterCodeScreen from "./auth-screens/EnterCodeScreen";
import ResetPasswordScreen from "./auth-screens/ResetPasswordScreen";

const Stack = createNativeStackNavigator();
export default function AuthRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen
                    name="ForgotPass"
                    component={ForgotPasswordScreen}
                />
                <Stack.Screen name="EnterCode" component={EnterCodeScreen} />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
