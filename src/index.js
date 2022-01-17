import React from "react";
import { useSelector } from "react-redux";
import ThemeConfig from "../theme-config";
import DrawerNavigator from "./DrawerNavigator";



//import MapScreen from "./user-screens/mapScreen/MapScreen";
//import SearchPages from "./user-screens/searchPages/SearchPages";

export default function index() {
    // authentication  will be done here
    const authState = useSelector((state) => state.auth);

    return (
        <ThemeConfig>
            <DrawerNavigator />
        </ThemeConfig>
    );
}
//{authState.isAuthenticated ? <DrawerNavigator /> : <AuthRoute />}
