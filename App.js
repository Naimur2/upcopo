import { NativeBaseProvider } from "native-base";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import Index from "./src";
import store from "./store/";
import theme from "./theme-config/config";


export default function App() {
    // ignore warnings that start in a string that matchs any of
    // the ones in the array
    LogBox.ignoreLogs(["NativeBase:"]);
    const config = {
        dependencies: {
            "linear-gradient": require("expo-linear-gradient").LinearGradient,
        },
    };

    return (
        <Provider store={store}>
            <NativeBaseProvider theme={theme} config={config}>
                <Index />
            </NativeBaseProvider>
        </Provider>
    );
}
// commit