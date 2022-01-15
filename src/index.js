import React from "react";
import { useSelector } from "react-redux";
import ThemeConfig from "../theme-config";
import AuthRoute from "./AuthRoute";
import DrawerNavigator from "./DrawerNavigator";

export default function index() {
    // authentication  will be done here
    const authState = useSelector((state) => state.user);
    console.log(authState.isAuthenticated);
    return (
        <ThemeConfig>
            {authState.isAuthenticated ? <DrawerNavigator /> : <AuthRoute /> }
        </ThemeConfig>
    );
}
