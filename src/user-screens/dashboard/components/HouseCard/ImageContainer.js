import { HStack, Image, Stack, Text } from "native-base";
import React from "react";
import Counter from "../../../common/Counter";
import Like from "../../../common/Like";

export default function ImageContainer({
    expiresAt,
    image,
    houseName,
    onLike,
    id,
}) {
    return (
        <Stack >
            <Stack p="2" space="16">
                <Counter alignSelf={'flex-start'} expiresAt={expiresAt} />
                <HStack justifyContent={"space-between"} alignItems={"center"}>
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
            </Stack>
            <Image
                borderRadius={12}
                resizeMode="cover"
                w="full"
                h={'full'}
                source={{ uri: image }}
                alt={'house Name'}
                position="absolute"
                zIndex={-1}
            />
        </Stack>
    );
}
