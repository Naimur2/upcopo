import { Avatar, Box, HStack, Stack, Text, VStack } from 'native-base'
import React from 'react'
import Icon from '../.././utility/Icon'
import Varified from '../.././utility/Varified'
export default function MainHeader() {
    const HeaderImg = () => {
        return (
            <HStack >
                <Avatar
                    source={{ uri: 'https://image.freepik.com/free-vector/cute-panda-gaming-cartoon-icon-illustration-animal-technology-icon-concept-premium-flat-cartoon-style_138676-2685.jpg' }}
                    size={20}
                    position={'relative'}

                />
                <Box>
                    <Varified
                        position={'absolute'}
                        bottom={0}
                        right={0}
                    />
                </Box>

            </HStack>
        );

    }
    const HeaderBody = () => {
        return (
            <HStack>
                <VStack>
                    <Text
                        fontSize={18}
                        fontFamily={"body"}
                        fontWeight={600}
                        color={"#fff"}

                    >
                        Md Ahnaf aksar
                    </Text>
                    <Text
                        fontSize={16}
                        fontFamily={"body"}
                        fontWeight={400}
                        color={"#fff"}

                    >
                        (307) 555-0133
                    </Text>
                    <Text
                        fontSize={16}
                        fontFamily={"body"}
                        fontWeight={400}
                        color={"#fff"}

                    >
                        ahnafa.fgs5@co.li
                    </Text>


                </VStack>
            </HStack>
        );

    }
    return (
        <Stack bg={'#52B69A'}>
            <HStack justifyContent={'flex-end'}
                pt={4}
                pr={4}
            >
                <Icon name={'edit'} color={'#FFFFFF'} size={20} />
            </HStack>
            <HStack p={4} space={4}>
                <HeaderImg />
                <HeaderBody />
            </HStack>
        </Stack>
    )
}