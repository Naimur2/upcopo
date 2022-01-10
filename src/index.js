import React from "react";
import ThemeConfig from "../theme-config";
import DrawerNavigator from "./DrawerNavigator";
import HelpCenter from './user-screens/helpCenter/HelpCenter'

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <HelpCenter />
        </ThemeConfig>
    );
}
