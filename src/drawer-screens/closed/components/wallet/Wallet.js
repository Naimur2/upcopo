import { Box, HStack, Pressable, Stack, Text } from 'native-base';
import React from 'react';
import Card from '../../../../utility/Card';
import FormInput from '../../../../utility/FormInput';
import Icon from '../../../../utility/Icon';

export default function Wallet() {
    return (
        <Stack w="100%" h={60} px={4}  >
            <Card>
                <HStack justifyContent="space-between" alignItems={'center'}>
                    <Text
                        fontsize="18"
                        fontFamily={'body'}
                        fontWeight={600}
                        color={"#3D454A"}
                    >
                        Gem Top Up
                    </Text>
                    <Icon name={'x'} size={20} color={'#7E868C'} />
                </HStack>
                <Stack py={2} space={4} >
                    <Text
                        fontsize="14"
                        fontFamily={'body'}
                        fontWeight={400}
                        color={"#687076"}
                    >
                        Source at top up from Gem
                    </Text>
                    <HStack space={2} >
                        <Box
                            borderRadius={10}
                            borderColor={'#ECEEF0'}
                            h={12}
                            w={'15%'}
                            borderWidth={1.5}
                            justifyContent={'center'}
                            alignItems={'center'}

                        >
                            <Icon name={'x'} size={20} color={'#7E868C'} />
                        </Box>
                        <Box w={'75%'}>
                            <FormInput type={'numeric'} p={4} />
                        </Box>

                    </HStack>
                    <Text
                        fontsize="16"
                        fontFamily={'body'}
                        fontWeight={700}
                        color={"#52B69A"}
                    >
                        Total price  is US $4.99
                    </Text>
                    <Pressable >
                        <Stack
                            bg={'#52B69A'}
                            w={'90%'} h={10}
                            borderRadius={10}
                            alignItems={'center'}
                          
                        >
                            <HStack justifyContent={'center'}  alignItems={'center'}  space={2}>
                                <Icon name={'x'} size={20} color={'#fff'} />
                                <Text
                                    fontsize="17"
                                    fontFamily={'body'}
                                    fontWeight={600}
                                    color={"#fff"}
                                >
                                    Top Up
                                </Text>
                            </HStack>


                        </Stack>
                    </Pressable>
                </Stack>
            </Card>


        </Stack>

    );
}