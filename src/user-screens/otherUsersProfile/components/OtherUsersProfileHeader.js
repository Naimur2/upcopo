import { Avatar, Box, HStack, Text, VStack } from "native-base";
import React from "react";
import UtilityBtn from '../../../utility/UtilityBtn';
import Varified from '../../../utility/Varified';

export default function OtherUsersProfileHeader(
    {
        avater,
        userName,
        numberOfPosts,
        numberOfFOllowers,
        numberOfFOllowing,
        intro
    }
) {
    return (
        <Box p={4}>
            <HStack mt={8}>
                <Box w={'30%'}>
                    <Avatar
                        size={20}
                        position={'relative'}
                        source={{ uri: avater }}
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
                        {userName}
                    </Text>
                    <HStack justifyContent={'space-between'} mt={2}>
                        <VStack>
                            <Text
                                fontFamily={'body'}
                                fontWeight={700}
                                fontSize={18}
                                color={'#11181C'}
                            >
                                {numberOfPosts}
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
                               {numberOfFOllowers}
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
                               {numberOfFOllowing}
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
                           {intro}
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


        </Box>

    );

}