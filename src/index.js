import * as ImagePicker from "expo-image-picker";
import { Spinner } from "native-base";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import ThemeConfig from "../theme-config";
import AuthRoute from "./AuthRoute";
import DrawerNavigator from "./DrawerNavigator";
import PlaceBidAction from "./user-screens/common/PlaceBidAction";
import ScanQRCode from './drawer-screens/closed/components/wallet/ScanQRCode'

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
    const placeBid = useSelector((state) => state.placebid.isOpen);
    const uiLoading = useSelector((state) => state.ui.isLoading);

    return (
        <ThemeConfig>
            {authState.isAuthenticated ? <ScanQRCode /> : <AuthRoute />}

            {uiLoading && (
                <Spinner
                    size={"lg"}
                    zIndex={1}
                    top={-Math.round(height / 2)}
                    position={"absolute"}
                />
            )}
            <PlaceBidAction isOpen={placeBid} />
        </ThemeConfig>
    );
}
