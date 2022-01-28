import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "native-base";
import React from "react";

export default function ThemeConFig({ children }) {
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
        CustomIcon: require("../assets/icons/icon.ttf"),
    });

    const GetContent = () => {
        if (!fontsLoaded) {
            return (
                <>
                    <StatusBar hidden />
                    <AppLoading />
                </>
            );
        }
        return (
            <>
                <StatusBar hidden />
                {children}
            </>
        );
    };

    return <GetContent />;
}
