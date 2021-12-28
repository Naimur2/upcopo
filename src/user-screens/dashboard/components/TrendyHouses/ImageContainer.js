import { Box, HStack, Image, Text } from "native-base";
import React from "react";
import Counter from "./Counter";
import Like from "./Like";

export default function ImageContainer({
    deadline,
    image,
    houseName,
    onLike,
    id,
}) {
    return (
        <Box>
            <Image
                borderRadius={12}
                resizeMode="cover"
                w="full"
                h={170}
                source={{ uri: image }}
                alt={houseName}
                position={"relative"}
            />
            <Counter deadline={deadline} />

            <HStack
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                bottom={3}
                left={4}
                right={4}
            >
                <Text
                    fontWeight={500}
                    color="#fff"
                    fontFamily={"body"}
                    maxW={150}
                    overflow={"hidden"}
                >
                    {houseName}
                </Text>
                <Like onLike={onLike} id={id} />
            </HStack>
        </Box>
    );
}
