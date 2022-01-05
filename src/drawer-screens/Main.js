import { Stack } from "native-base";
import React from "react";
import MainBody from "./components/MainBody";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";


export default function Main() {

    return (
     <Stack>
         <MainHeader />
         <MainBody />
         <MainFooter />
         

     </Stack>
     
    );
}
