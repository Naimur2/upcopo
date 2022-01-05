import { Pressable } from "native-base";
import React from "react";
import Icon from "../../utility/Icon";

export default function Like({ onPress, ...rest }) {
    return (

            <Pressable
                alignItems={"center"}
                borderRadius={8}
                maxW={10}
                p={1.5}
                _pressed={{ bg: "rgba(255, 255, 255, 0.95)" }}
                bg={"rgba(255, 255, 255, 0.85)"}
                onPress={onPress}
                {...rest}
            >
                <Icon name={"heart-dark"} size={22} />
            </Pressable>
    );
}
