import React from "react";
import { Box } from "native-base";

import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const CustomIcon = createIconSetFromIcoMoon(
    require("../../assets/icons/selection.json"),
    "CustomIcon",
    "icon.ttf"
);

export default function Icon({ onPress,color, size, name, ...rest }) {
    return (
        <Box {...rest}>
            <CustomIcon onPress={onPress} color={color} size={size} name={name} />
        </Box>
    );
}
