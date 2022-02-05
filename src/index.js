import * as ImagePicker from "expo-image-picker";
import { Spinner } from "native-base";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ThemeConfig from "../theme-config";
import AuthRoute from "./AuthRoute";
import DrawerNavigator from "./DrawerNavigator";

export default function index() {
    const height = Dimensions.get("window").height;
    useEffect(() => {
        const getPermissions = async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Permisson denied!");
                }
            }
        };
        getPermissions();
    }, []);

    // authentication  will be done here
    const authState = useSelector((state) => state.auth);

    const uiLoading = useSelector((state) => state.ui.isLoading);

    return (
        <ThemeConfig>
            {authState.isAuthenticated ? <DrawerNavigator /> : <AuthRoute />}
        </ThemeConfig>
    );
}
