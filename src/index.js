import { Spinner } from "native-base";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMessages,clearMessages } from "../store/slices/messagesSlice";
import ThemeConfig from "../theme-config";
import AuthRoute from './AuthRoute';
import DrawerNavigator from "./DrawerNavigator";
import PlaceBidAction from "./user-screens/common/PlaceBidAction";

export default function index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages());
        return ()=>{
            dispatch(clearMessages());
        }
    }, []);

    const height = Dimensions.get("window").height;

    // authentication  will be done here
    const authState = useSelector((state) => state.auth);
    const placeBid = useSelector((state) => state.placebid.isOpen);
    const uiLoading = useSelector((state) => state.ui.isLoading);

    return (
        <ThemeConfig>
            {authState.isAuthenticated ? <DrawerNavigator /> : <AuthRoute />}
            
            {uiLoading && (
                <Spinner
                    size={"lg"}
                    zIndex={1}
                    top={-Math.round(height / 2)}
                    position={"absolute"}
                />
            )}
            <PlaceBidAction isOpen={placeBid} />
        </ThemeConfig>
    );
}
