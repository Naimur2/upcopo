import React from "react";
import ThemeConfig from "../theme-config";

<<<<<<< HEAD
import DrawerNavigator from "./DrawerNavigator";
import ProfileHistory from "./user-screens/profileHistory/ProfileHistory";
=======

import ProfileHistory from "./user-screens/profileHistory/ProfileHistory"

import DrawerNavigator from "./DrawerNavigator";

>>>>>>> 410bef7d3e427b20cfb08ee5d4d614c89b6ea42a

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
<<<<<<< HEAD
            <DrawerNavigator />
        </ThemeConfig>
=======

       <ProfileHistory />

      </ThemeConfig>
>>>>>>> 410bef7d3e427b20cfb08ee5d4d614c89b6ea42a
    );
}
