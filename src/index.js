import React from "react";
import ThemeConfig from "../theme-config";
<<<<<<< HEAD
import LovedHouses from "./user-screens/lovedHouses/LovedHouses";
import UserProfile from "./user-screens/userProfile/UserProfile";
import DashBoardScreen from "./user-screens/dashboard/DashBoardScreen";
import UserRoute from "./UserRoute";
=======
import Messaging from './user-screens/messaging/Messaging';
>>>>>>> 2bea5060fc9fedfc2810959850fd812f1cf9e04f

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
<<<<<<< HEAD
            <UserRoute />
=======
        <Messaging/>
          
>>>>>>> 2bea5060fc9fedfc2810959850fd812f1cf9e04f
        </ThemeConfig>
    );
}
