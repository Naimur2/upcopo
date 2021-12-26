import React from "react";
import ThemeConfig from "../theme-config";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import LeaderBoard from "./user-screens/leaderBoard/Leaderboard";

export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <LeaderBoard />
        </ThemeConfig>
    );
}
