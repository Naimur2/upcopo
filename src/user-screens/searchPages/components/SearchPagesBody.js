import { Box, HStack, Image, Stack, Text, VStack } from 'native-base';
import React from 'react';
import Card from '../../../utility/Card';
import IconWithText from '../../../utility/IconWithText';
import Like from '../../common/Like';

export default function SearchPagesBody({
    imgUrl,
    houseName,
    address1,
    address2,
    price

}) {
    return (
        <Stack>
            <Card borderRadius={20} mb="4" mx="4" py={2} px="4">
            <Stack>
                <Box my={2} w="100%" h={100} borderRadius={15} overflow={'hidden'} position={'relative'}>
                    <Image
                        alt={"card-img"}
                        source={{
                            uri: imgUrl,
                        }}
                        w={"full"}
                        h={'full'}
                    />
                    <Like position={'absolute'} right={4} top={4} />
                    <Text
                        fontFamily={'body'}
                        fontWeight={600}
                        fontSize={16}
                        color={'#fff'}
                        position={'absolute'}
                        bottom={5}
                        pl={4}

                    >
                        {houseName}
                    </Text>

                </Box>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <VStack>
                        <IconWithText

                            iconName={'map'}
                            text={address1}
                            iconColor={'#889096'}
                            textColor={'#687076'}
                            textStyle={{
                                fontWeight: 500,
                                fontSize: 12
                            }}
                        />

                        <Text
                            fontFamily={"body"}
                            fontWeight={500}
                            fontSize={12}
                            color={'#687076'}
                            pl={6}

                        >
                            {address2}
                        </Text>
                    </VStack>
                    <Text
                            fontFamily={"body"}
                            fontWeight={600}
                            fontSize={16}
                            color={'#11181C'}
                            pl={6}

                        >
                           ETH {price}
                        </Text>
                </HStack>


            </Stack>
            </Card>
        </Stack>

    );
}