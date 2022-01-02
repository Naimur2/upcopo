import { Box, HStack, Image, Text } from "native-base";
import React from "react";
import Icon from "../../utility/Icon";
import Counter from "../common/Counter";
import Like from "../common/Like";

export default function House() {
    return (
        <Box>
            <Image
                resizeMode="cover"
                w="full"
                h={300}
                source={{ uri: 'https://as2.ftcdn.net/v2/jpg/03/30/66/17/1000_F_330661741_4pXbJHD10TP9Sp1V2ava4bz0ROKhRqCM.jpg' }}
                alt={'houseName'}
                position={"relative"}
            />
         
            <HStack
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                top={20}
                left={4}
                right={4}
            >
                <Text
                    fontWeight={400}
                    color="#E6E8EB"
                    fontSize={18}
                    fontFamily={"body"}
                    overflow={"hidden"}
                    maxW={40}
                >
                    Owned By Luckas W.year 1942
                </Text>
                <Counter deadline={'Jan 10 2022'} />
            </HStack>


            
            <HStack
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                bottom={16}
                left={4}
                right={4}
            >
                <Text
                    fontWeight={600}
                    color="#fff"
                    fontSize={20}
                    fontFamily={"body"}
                    overflow={"hidden"}
                >
                    Turn Key House
                </Text>
                <Like />
            </HStack>
            <HStack
                justifyContent={'space-between'}
                position={"absolute"}
                bottom={4}
                left={4}
                right={4}>
                <HStack
                    alignItems={"center"}
                    space={2}
                >
                    <Icon name={'map'}
                        color={'#D7DBDF'}
                        size={20}
                    />
                    <Text
                        color={'#D7DBDF'}
                        fontFamily={'body'}
                        fontWeight={400}
                        fontSize={14}
                        maxW={40}
                        mt={2}

                    >
                        1523 N 106th St, Mesa, AZ 85207
                    </Text>
                </HStack>
                <HStack>
                    <Text
                        color={'#fff'}
                        fontFamily={'body'}
                        fontWeight={500}
                        fontSize={18}
                        mt={4}


                    >
                        3,160sqft
                    </Text>
                </HStack>
            </HStack>



        </Box>

    );
}