import { Avatar, Box, HStack, Text, VStack } from "native-base";
import React from "react";
import UtilityBtn from '../../utility/UtilityBtn';
import Varified from '../../utility/Varified';

export default function OtherUsersProfile() {
    return (
        <Box p={4}>
            <HStack mt={8}>
                <Box w={'30%'}>
                    <Avatar
                        size={20}
                        position={'relative'}
                        source={{ uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SE/en/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' }}
                    />
                    <Box
                        position={'absolute'}
                        top={10}
                        right={6}
                    >
                        <Varified
                            size={8}
                        />
                    </Box>


                </Box>
                <Box w={'70%'}>
                    <Text
                        fontFamily={'body'}
                        fontWeight={600}
                        fontSize={18}
                        color={'#11181C'}
                    >
                        Md Ahnaf aksar
                    </Text>
                    <HStack justifyContent={'space-between'} mt={2}>
                        <VStack>
                            <Text
                                fontFamily={'body'}
                                fontWeight={700}
                                fontSize={18}
                                color={'#11181C'}
                            >
                                231
                            </Text>
                            <Text
                                fontFamily={'body'}
                                fontWeight={500}
                                fontSize={16}
                                color={'#889096'}
                            >
                                Posts
                            </Text>
                        </VStack>
                        <VStack>
                            <Text
                                fontFamily={'body'}
                                fontWeight={700}
                                fontSize={18}
                                color={'#11181C'}
                            >
                                62267
                            </Text>
                            <Text
                                fontFamily={'body'}
                                fontWeight={500}
                                fontSize={16}
                                color={'#889096'}
                            >
                                Followers
                            </Text>
                        </VStack>
                        <VStack>
                            <Text
                                fontFamily={'body'}
                                fontWeight={700}
                                fontSize={18}
                                color={'#11181C'}
                            >
                                62267
                            </Text>
                            <Text
                                fontFamily={'body'}
                                fontWeight={500}
                                fontSize={16}
                                color={'#889096'}
                            >
                                Following
                            </Text>
                        </VStack>

                    </HStack>
                    <VStack mt={2}>
                        <Text
                            fontFamily={'body'}
                            fontWeight={400}
                            fontSize={13}
                            color={'#7E868C'}
                        >
                            Data processing it takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”
                            -J. K. Rowling
                        </Text>
                    </VStack>
                </Box>
            </HStack>
            <HStack justifyContent={'center'} space={4} mt={4}>
                <UtilityBtn
                    title={'Follow'}
                    bg={'#0095F6'}
                    titleStyle={{
                        fontWeight: "500",
                        fontSize: "16",
                    }}
                />
                <UtilityBtn
                    title={'Message'}
                    bg={'#DFE3E6'}
                    titleStyle={{
                        fontWeight: "500",
                        fontSize: "16",
                        color: '#3D454A',
                    }}
                />
                <UtilityBtn
                    title={'Email'}
                    bg={'#DFE3E6'}
                    titleStyle={{
                        color: '#3D454A',
                        fontWeight: "500",
                        fontSize: "16",
                    }}
                />

            </HStack>
            <HStack mt={6} space={4}>
                <VStack>
                <Avatar
                    size={'lg'}
                    source={{ uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SE/en/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' }}
                />
                     <Text
                        fontFamily={'body'}
                        fontWeight={500}
                        fontSize={18}
                        color={'#000'}
                    >
                       Joel Norris
                    </Text>
                </VStack>
                <VStack>
                <Avatar
                    size={'lg'}
                    source={{ uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SE/en/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' }}
                />
                     <Text
                        fontFamily={'body'}
                        fontWeight={500}
                        fontSize={18}
                        color={'#000'}
                    >
                       Jrny club
                    </Text>
                </VStack>
                <VStack>
                <Avatar
                    size={'lg'}
                    source={{ uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SE/en/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' }}
                />
                     <Text
                        fontFamily={'body'}
                        fontWeight={500}
                        fontSize={18}
                        color={'#000'}
                    >
                       Feudalz
                    </Text>
                </VStack>
                <VStack>
                <Avatar
                    size={'lg'}
                    source={{ uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SE/en/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' }}
                />
                     <Text
                        fontFamily={'body'}
                        fontWeight={500}
                        fontSize={18}
                        color={'#000'}
                    >
                       Noundles
                    </Text>
                </VStack>
            </HStack>


        </Box>
    );
}
