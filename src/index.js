import React from "react";
import ThemeConfig from "../theme-config";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <UserRoute />
        </ThemeConfig>
    );
}
