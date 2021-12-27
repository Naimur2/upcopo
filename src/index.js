import React from "react";
import ThemeConfig from "../theme-config";
import Leaderboard from "./user-screens/leaderBoard/Leaderboard";
import UserProfile from "./user-screens/userProfile/UserProfile";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <Leaderboard />
        </ThemeConfig>
    );
}
