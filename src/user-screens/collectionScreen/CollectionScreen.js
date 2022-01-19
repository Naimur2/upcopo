import { useNavigation } from "@react-navigation/native";
import { Avatar, ScrollView, Stack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import CollectionButtons from "./components/CollectionButtons";
import CollectionsBody from "./components/CollectionsBody";
import CollectionsHeader from "./components/CollectionsHeader";
import CollectionsTab from "./components/CollectionsTab";

// <CollectionsHeader />
export default function Collections() {
    const navigation = useNavigation();

    const width = Dimensions.get("window").width;
    return (
        <ScrollView bg="#f9f9f9">
            <Stack>
                <CollectionsHeader />
                <Stack px={4}>
                    <Stack
                        width={width}
                        bg="#f9f9f9"
                        position={"absolute"}
                        alignItems={"center"}
                        top="-50"
                        borderTopRadius={40}
                    >
                        <Avatar
                            source={{
                                uri: "https://image.freepik.com/free-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-572.jpg",
                            }}
                            size={24}
                            top="-40"
                        />
                    </Stack>
                    <Stack>
                        <CollectionsBody
                            description={`Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space`}
                            collectonName={"Boston Club"}
                            ethAddress={"0xet54trw757007QR5e5c757007"}
                        />
                        <CollectionButtons
                            items="10.10k"
                            floorPrice="42"
                            owners="5.9k"
                            volume="237.3k"
                            onItemKeyPress={() =>
                                navigation.navigate("UserProfile")
                            }
                        />
                        <CollectionsTab />
                    </Stack>
                </Stack>
            </Stack>
        </ScrollView>
    );
}
