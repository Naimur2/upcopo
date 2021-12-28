import React from "react";
import ThemeConfig from "../theme-config";
import LovedHouses from "./user-screens/lovedHouses/LovedHouses";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <LovedHouses />
        </ThemeConfig>
    );
}

