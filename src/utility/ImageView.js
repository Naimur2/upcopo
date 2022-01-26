import { Image, Stack } from "native-base";
import React from "react";

export default function ImageView({ imageUrl, imageStyle, children, ...rest }) {
    return (
        <Stack overflow="hidden" {...rest}>
            {children}
            {imageUrl ? (
                <Image
                    alt={"card-img"}
                    source={{
                        uri: imageUrl,
                    }}
                    w={"full"}
                    h={"full"}
                    position="absolute"
                    zIndex={-1}
                    {...imageStyle}
                />
            ) : null}
        </Stack>
    );
}
