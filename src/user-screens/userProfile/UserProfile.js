import { ScrollView } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";
import UserProfileHeader from "./components/UserProfileHeader";
import UserProfileMenu from "./components/UserProfileMenu";

const windowHeight = Dimensions.get("window").height;

const source = "../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

const panda_05 = require(source + "/panda_05.png");
const panda_05Uri = RnImage.resolveAssetSource(panda_05).uri;



export default function UserProfile({ route, navigation }) {

    return (
        <ScrollView bg={"#f9f9f9"}>
            <UserProfileHeader />
            <UserProfileMenu />
        </ScrollView>
    );
}
