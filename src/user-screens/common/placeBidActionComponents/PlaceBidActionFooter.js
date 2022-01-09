import { HStack, Stack, Text, VStack } from 'native-base';
import React from 'react';
import Card from '../../../utility/Card';
import FormInput from '../../../utility/FormInput';
import Icon from '../../../utility/Icon';
import UtilityBtn from '../../../utility/UtilityBtn';

export default function PlaceBidActionFooter() {
    return (
        <Stack p={4}>
            <Card p={4}>
                <Text
                    fontSize="19"
                    color="#000"
                    fontWeight={"600"}
                    fontFamily={"body"}
                >
                    Place a bid
                </Text>
                <Text
                    fontSize="13"
                    color="#8E8E93"
                    fontWeight={"400"}
                    fontFamily={"body"}
                >
                    You must bid at least 0.825 ETH
                </Text>
                <HStack justifyContent={'space-between'} alignItems={'center'}>


                    <Card borderColor={"#F1F3F5"}  borderWidth={1} py={2.5} >
                        <Icon name="etherium" size={28} color={'#687076'} />
                    </Card>



                    <Card w={'85%'} >
                        <FormInput
                            placeHolder={"0.00"}
                            keyboardType="numeric"
                            borderColor={"#ECEEF0"}
                            py={2.5}

                        />
                    </Card>
                </HStack>
                <VStack justifyContent={'center'} alignItems={'center'} space={2}>
                    <Text
                        fontSize="13"
                        color="#8E8E93"
                        fontWeight={"400"}
                        fontFamily={"body"}
                    >
                        Your Balance is 0.0052 ETH
                    </Text>
                    <UtilityBtn
                        title={'Submit'}
                        w={'100%'}
                    />

                </VStack>



            </Card>


        </Stack>

    );
}