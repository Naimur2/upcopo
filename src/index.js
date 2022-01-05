import React from "react";
import ThemeConfig from "../theme-config";

import LovedHouses from "./user-screens/lovedHouses/LovedHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import UserRoute from "./HomeRoute";
import OtherUsersProfile from './user-screens/otherUsersProfile/OtherUsersProfile'

import PlaceBidAction from "./user-screens/common/PlaceBidAction";
import Messaging from "./user-screens/messaging/Messaging";
import BottomTabs from "./BottomTabs";
import DrawerNavigator from "./DrawerNavigator";

import AuthRoute from "./AuthRoute";


import HouseBody from './user-screens/house/components/HouseBody'


export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <DrawerNavigator/>
        </ThemeConfig>
    );
}
