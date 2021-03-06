import * as ImagePicker from "expo-image-picker";
import { Pressable, Stack } from "native-base";
import React from "react";
import { Image } from "react-native";
import Icon from "../../../utility/Icon";

export default function OpenHeader({ image, updateImage }) {
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            updateImage(result.uri);
        }
    };

    return (
        <Stack py={4} bg={"#52B69A"} w="full" alignItems={"center"}>
            <Pressable
                onPress={pickImage}
                h="20"
                w="20"
                overflow="hidden"
                borderRadius={50}
            >
                <Image
                    bg="#fff"
                    style={{ height: "100%", width: "100%" }}
                    source={{
                        uri: image,
                    }}
                />
                {!image ? (
                    <Icon
                        name={"user-edit"}
                        size={40}
                        color={"#52B69A"}
                        bg="#fff"
                        position="absolute"
                        h="100%"
                        w="100%"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={50}
                    />
                ) : (
                    <Icon
                        name={"user-edit"}
                        size={30}
                        color={"#52B69A"}
                        bg="#fff"
                        position="absolute"
                        h="100%"
                        w="100%"
                        opacity="0.9"
                        alignItems="center"
                        justifyContent="center"
                    />
                )}
            </Pressable>
        </Stack>
    );
}
