import { Box, HStack, Image, VStack } from 'native-base';
import React from "react";
//https://image.freepik.com/free-vector/pink-magic-castle_107791-3704.jpg
export default function CollectionsFooter() {
    return (
        <VStack p={2}>
            <HStack space={4}>
                <Box
                    w={180}
                    h={120}

                >
                    <Image
                        alt={'aaaa'}
                        source={{ uri: 'https://image.freepik.com/free-vector/pink-magic-castle_107791-3704.jpg' }}
                        h={'full'}
                        w={'full'}
                        borderRadius={20}
                    />
                </Box>
                <Box
                    w={180}
                    h={120}

                >
                    <Image
                        alt={'aaaa'}
                        source={{ uri: 'https://image.freepik.com/free-vector/pink-magic-castle_107791-3704.jpg' }}
                        h={'full'}
                        w={'full'}
                        borderRadius={20}
                    />
                </Box>
            </HStack>
        </VStack>
    );
}
