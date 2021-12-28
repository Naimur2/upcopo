import { Image,Box } from "native-base";
import React from "react";

export default function UserProfileCardImage({ houseImage }) {
    return (
        <Box my={4} w="100%" h={140}  borderRadius={15} overflow={'hidden'}>
            <Image
                alt={"card-img"}
                source={{
                    uri: houseImage,
                }}
                w={"full"}
                h={'full'}
            />
        </Box>
    );
}
