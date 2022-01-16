import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ForgotPasswordScreen from "./auth-screens/ForgotPasswordScreen";
import LoginScreen from "./auth-screens/LoginScreen";
import OtpScreen from "./auth-screens/OtpScreen";
import RegisterScreen from "./auth-screens/RegisterScreen";
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
                <Stack.Screen name="SendOtp" component={OtpScreen} />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
