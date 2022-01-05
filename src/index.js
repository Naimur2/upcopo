import React from "react";
import ThemeConfig from "../theme-config";


import ProfileHistory from "./user-screens/profileHistory/ProfileHistory"

import DrawerNavigator from "./DrawerNavigator";


export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>

       <ProfileHistory />

      </ThemeConfig>
    );
}
