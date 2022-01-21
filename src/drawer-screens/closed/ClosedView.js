import { Stack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

export default function ClosedView({isOpen}) {
    const userDetails = useSelector(state=>state.auth)
    return (
        <Stack  height={isOpen ? 'full': 0} overflow={isOpen ? 'visible': 'hidden' } >
            <MainHeader
                user={userDetails.user || userDetails.username}
                mobile={userDetails.mobile}
                email={userDetails.email}
                avatar={
                   userDetails.avatar
                }
            />
            <MainBody />
            <MainFooter />
        </Stack>
    );
}
