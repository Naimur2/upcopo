import { Image } from "native-base";
import React from "react";
import { Image as RnImage } from "react-native";

const getUri = (src) => {
    return RnImage.resolveAssetSource(src).uri;
};

const source = "../../assets/images/";

const varified = require(source + "varified.png");

export default function Varified({ alt, ...rest }) {
    return (
        <Image
            alt={alt || "image for varified id"}
            source={{ uri: getUri(varified) }}
            h={6} 
            w={6}
            {...rest}
        />
    );
}
