import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeAreaNew({ children }) {
    return <SafeAreaView style={{ flex: 1 ,backgroundColor:'#f9f9f9'}}>{children}</SafeAreaView>;
}
