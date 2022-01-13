import { HStack, Text, VStack } from 'native-base';
import React from "react";
import Card from '../../../utility/Card';
import Icon from '../../../utility/Icon';

export default function CollectionsBody() {
    return (
        <VStack bg={'#F9F9F9'} borderTopRadius={20}  >
            <VStack px={2} >
                <Text
                    fontFamily={'body'}
                    fontWeight={700}
                    fontSize={16}
                    color={'#3D454A'}
                    pt={12}
                >
                    Boston Club
                </Text>
                <HStack space={2} alignItems={'center'} py={4}>
                    <Text
                        fontFamily={'body'}
                        fontWeight={400}
                        fontSize={14}
                        color={'#3D454A'}
                    >
                        0xet54trwQR5e5c757007....
                    </Text>
                    <Icon name={'copy'} size={20} color={'#000'} />
                </HStack>
                <Text
                    fontFamily={'body'}
                    fontWeight={400}
                    fontSize={14}
                    color={'#687076'}
                >
                    Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space...
                </Text>
                <HStack space={4} py={4}>
                    <VStack alignItems={'center'} space={4}>
                        <Card alignItems={'center'}  w={180} h={20}> 
                            <Text
                                fontFamily={'body'}
                                fontWeight={400}
                                fontSize={14}
                                color={'#687076'}
                            >
                                Items
                            </Text>
                            <Text
                                fontFamily={'body'}
                                fontWeight={700}
                                fontSize={24}
                                color={'#11181C'}
                            >
                                10.0K
                            </Text>
                        </Card>
                        <Card alignItems={'center'} w={180} h={20}>
                            <Text
                                fontFamily={'body'}
                                fontWeight={400}
                                fontSize={14}
                                color={'#687076'}
                            >
                                Owners
                            </Text>
                            <Text
                                fontFamily={'body'}
                                fontWeight={700}
                                fontSize={24}
                                color={'#11181C'}
                            >
                                5.9K
                            </Text>
                        </Card>

                    </VStack>
                    <VStack alignItems={'center'} space={4} >
                    <Card alignItems={'center'} w={180} h={20}>
                        <Text
                            fontFamily={'body'}
                            fontWeight={400}
                            fontSize={14}
                            color={'#687076'}
                        >
                           floor price
                        </Text>
                        <Text
                            fontFamily={'body'}
                            fontWeight={700}
                            fontSize={24}
                            color={'#11181C'}
                        >
                          42K
                        </Text>
                    </Card>
                    <Card alignItems={'center'} w={180} h={20}>
                        <Text
                            fontFamily={'body'}
                            fontWeight={400}
                            fontSize={14}
                            color={'#687076'}
                        >
                        Volume tranded
                        </Text>
                        <Text
                            fontFamily={'body'}
                            fontWeight={700}
                            fontSize={24}
                            color={'#11181C'}
                        >
                        237.3K
                        </Text>
                    </Card>

                </VStack>
                </HStack>
            </VStack>

        </VStack>
    );
}
