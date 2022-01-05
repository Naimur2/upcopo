import React from "react";
import ThemeConfig from "../theme-config";
import Search from './user-screens/search/Search';







export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
           <Search/>
        </ThemeConfig>
    );
}
