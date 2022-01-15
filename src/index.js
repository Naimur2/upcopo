import React from "react";
import ThemeConfig from "../theme-config";
import DrawerNavigator from "./DrawerNavigator";
//import MapScreen from "./user-screens/mapScreen/MapScreen";
//import SearchPages from "./user-screens/searchPages/SearchPages";
import Main from './drawer-screens/Main';

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <DrawerNavigator />
        </ThemeConfig>
    );
}
