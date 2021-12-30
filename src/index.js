import React from "react";
import ThemeConfig from "../theme-config";
import Notification from "./user-screens/Notification/Notification";


export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
           <Notification/>
        </ThemeConfig>
    );
}

