import React from "react";
import ThemeConfig from "../theme-config";

import DrawerNavigator from "./DrawerNavigator";
import ProfileHistory from "./user-screens/profileHistory/ProfileHistory";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <DrawerNavigator />
        </ThemeConfig>
    );
}
