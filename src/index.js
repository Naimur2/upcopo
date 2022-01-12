import React from "react";
import ThemeConfig from "../theme-config";
import SearchPages from './user-screens/searchPages/SearchPages';
import Collections from './user-screens/collections/Collections';


export default function index() {
    // authentication  will be done here
    return (
        <ThemeConfig>
            <Collections />
        </ThemeConfig>
    );
}
