import { Pressable } from "native-base";
import React from "react";
import Icon from "../../utility/Icon";

export default function Like({ onPress, isLiked, ...rest }) {
    return (
        <Pressable
            alignItems={"center"}
            borderRadius={8}
            maxW={10}
            p={1.5}
            _pressed={{ bg: "#F9F9F9" }}
            bg={"#FFFFFF"}
            onPress={onPress}
            opacity={isLiked ? 1 : 0.75}
            {...rest}
        >
            <Icon color={isLiked ? '#52B69A':'#000000'} name={"heart-dark"} size={22} />
        </Pressable>
    );
}
