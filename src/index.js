import React from "react";
import ThemeConfig from "../theme-config";

import DrawerNavigator from "./DrawerNavigator";

import SearchPages from "./user-screens/searchPages/SearchPages";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>

            <DrawerNavigator />
        </ThemeConfig>
    );
}
