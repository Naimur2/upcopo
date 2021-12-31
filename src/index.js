import React from "react";
import ThemeConfig from "../theme-config";
import Messaging from './user-screens/messaging/Messaging';

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
        <Messaging/>
          
        </ThemeConfig>
    );
}

