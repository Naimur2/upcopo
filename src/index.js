import React from "react";
import ThemeConfig from "../theme-config";

import LovedHouses from "./user-screens/lovedHouses/LovedHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import UserRoute from "./UserRoute";

import Messaging from "./user-screens/messaging/Messaging";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <Messaging />
        </ThemeConfig>
    );
}
