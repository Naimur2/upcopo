import React from "react";
import { useSelector } from "react-redux";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

export default function ClosedView() {
    const userDetails = useSelector(state=>state.auth)
    return (
        <>
            <MainHeader
                user={userDetails.user}
                mobile={userDetails.mobile}
                email={userDetails.email}
                avatar={
                   userDetails.avatar
                }
            />
            <MainBody />
            <MainFooter />
        </>
    );
}
