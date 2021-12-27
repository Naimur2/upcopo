import { ScrollView, Stack } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";
import FormInput from "../../utility/FormInput";
import Icon from "../../utility/Icon";
import UserProfileHeader from "./UserProfileHeader";

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
            <Stack>
                <FormInput
                    InuputLeftElement={<Icon name={"search"} size={24} />}
                    placeHolder={"85208,Mesa, Az"}
                    type={"search"}
                />
            </Stack>
        </ScrollView>
    );
}
