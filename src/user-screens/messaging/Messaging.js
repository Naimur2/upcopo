import { Avatar, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Card from '../../utility/Card';
import Icon from '../../utility/Icon';

export default function Messaging() {

    return (
        <ScrollView>
            <Card>
                <HStack
                    justifyContent={'space-between'}
                    p={4}
                    borderBottomColor={"#E6E8EB"}
                    borderBottomWidth={1}

                >
                    <HStack w={'20%'}>
                        <Avatar
                            size={16}
                            source={{ uri: 'https://thelens.news/app/uploads/2020/12/236-456x342.jpg' }}
                        />
                    </HStack>
                    <HStack w={'60%'} >
                        <VStack>
                            <VStack p={2} space={2}>
                                <Text
                                    color={'#3D454A'}
                                    fontWeight={'500'}
                                    fontFamily={'body'}
                                    fontSize={'18'}
                                >
                                    Jole Norris
                                </Text>
                                <HStack space={2}>
                                    <Icon
                                        name={'call-incoming'}
                                        color={'#687076'}
                                        size={20}
                                    />
                                    <Text
                                        color={'#687076'}
                                        fontWeight={'400'}
                                        fontFamily={'body'}
                                        fontSize={'16'}
                                    >
                                        Call ended
                                    </Text>
                                </HStack>


                            </VStack>
                        </VStack>




                    </HStack>
                    <HStack w={'20%'} mt={2}>

                        <Text
                            color={'#687076'}
                            fontWeight={'400'}
                            fontFamily={'body'}
                            fontSize={'16'}
                        >
                            10.00 AM
                        </Text>
                    </HStack>


                </HStack>
            </Card>




        </ScrollView>
    );
}
