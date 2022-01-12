import { Stack } from "native-base";
import React from "react";
import MainHeader from "./components/MainHeader";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";


export default function Main() {

    return (
     <Stack>
         <MainHeader />
         <MainBody />
         <MainFooter />
     </Stack>
     
    );
}
