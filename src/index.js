import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../store/slices/messagesSlice";
import ThemeConfig from "../theme-config";
import DrawerNavigator from "./DrawerNavigator";

export default function index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages())
    }, []);

    // authentication  will be done here
    const authState = useSelector((state) => state.auth);

    return (
        <ThemeConfig>
            <DrawerNavigator />
        </ThemeConfig>
    );
}
//{authState.isAuthenticated ? <DrawerNavigator /> : <AuthRoute />}
