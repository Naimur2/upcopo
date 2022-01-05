import { Avatar, Box, HStack, Stack, Text } from 'native-base'
import React from 'react'
import Icon from '../.././utility/Icon'
import Varified from '../.././utility/Varified'
export default function MainHeader() {
    return (
        <Stack
            bg={'#52B69A'}

        >
            <HStack justifyContent={'flex-end'}
                pt={4}
                pr={4}
            >
                <Icon name={'edit'} color={'#FFFFFF'} size={20} />

            </HStack>
            <HStack p={4} space={4}>
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
                <HStack>
                    <Text
                        fontSize={18}
                        fontFamily={"body"}
                        fontWeight={600}
                        color={"#fff"}

                    >
                        Md Ahnaf aksar
                    </Text>

                </HStack>

            </HStack>





        </Stack>
    )
}