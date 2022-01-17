import { Avatar, Box, HStack, Pressable, ScrollView, Text } from 'native-base';
import React from 'react';

export default OpenMessage = () => {
    return (
        <ScrollView bg={'#E5E5E5'}>
            <HStack justifyContent={'center'} alignItems={'center'} pt={4} space={4}>
                <Avatar
                    source={{ uri: "https://img.freepik.com/free-vector/cute-cartoon-panda-listening-music-vector-illustration_60438-1436.jpg?size=338&ext=jpg" }}
                    size={20}
                />
                <Text
                    fontFamily={'body'}
                    fontSize={18}
                    fontWeight={600}
                    color={'#3D454A'}
                >
                    Joel Norris
                </Text>
            </HStack>
            <HStack justifyContent={'center'} pt={4}>
                <Text
                    fontFamily={'body'}
                    fontSize={12}
                    fontWeight={500}
                    color={'#3D454A'}
                >
                    Yesterday
                </Text>
            </HStack>
            <HStack p={2} >
                <Pressable>
                    <Box
                        bg={'#E6E8EB'}
                        h={10}
                        justifyContent={'center'}
                        borderRadius={10}
                    >
                        <Text
                            fontFamily={'body'}
                            fontSize={14}
                            fontWeight={500}
                            color={'#687076'}
                            px={2}
                        >
                            Do you want Starbucks
                        </Text>
                    </Box>
                    <Text
                        fontFamily={'body'}
                        fontSize={10}
                        fontWeight={500}
                        color={'#687076'}
                        px={2}
                    >
                        send at 02:18
                    </Text>
                </Pressable>

            </HStack>
            <HStack p={2} justifyContent={'flex-end'} >
                <Pressable>
                    <Box
                        bg={'#52B69A'}
                        h={10}
                        justifyContent={'center'}
                        borderRadius={10}
                    >
                        <Text
                            fontFamily={'body'}
                            fontSize={14}
                            fontWeight={500}
                            color={'#fff'}
                            px={2}
                        >
                            Do you want Starbucks
                        </Text>
                    </Box>
                    <Text
                        fontFamily={'body'}
                        fontSize={10}
                        fontWeight={500}
                        color={'#687076'}
                        px={2}
                    >
                        send at 02:18
                    </Text>
                </Pressable>

            </HStack>
        </ScrollView>

    );
}