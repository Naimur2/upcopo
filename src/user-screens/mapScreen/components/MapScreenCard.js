import { Box, HStack, Image, Text, VStack } from 'native-base'
import React from 'react'
import Card from '../../../utility/Card'
import IconWithText from '../../../utility/IconWithText'

export default function MapScreenCard() {
    return (
        <Card  ml={4} mt={4} h={32}>
            <HStack space={4} py={2} >
                <Box h={24} w={20}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                        h='full'
                        w='full'
                        borderRadius={10}
                        alt="house11"
                    />
                </Box>
                <VStack >
                    <Text fontFamily={'body'} fontWeight={500} fontSize={14} color={'#333'}>
                        Turn key house
                    </Text>
                    <IconWithText iconName={'navigation'} size={20} color={'#7E868C'} text={'9501 E Broadway Rd ...'}
                        textStyle={{
                            fontSize: 10,
                            color: '#687076',
                            fontWeight: '400'
                        }}
                    />
                    <HStack space={2}>
                        <IconWithText iconName={'bed-filled'} size={20} color={'#7E868C'} text={'3 bed'}
                            textStyle={{
                                fontSize: 10,
                                color: '#687076',
                                fontWeight: '400'
                            }}
                        />
                        <IconWithText iconName={'bath-filled'} size={20} color={'#7E868C'} text={'2 bath'}
                            textStyle={{
                                fontSize: 10,
                                color: '#687076',
                                fontWeight: '400'
                            }}
                        />
                    </HStack>
                    <IconWithText iconName={'etherium'} size={20} color={'#3D454A'} text={'0.05686'}
                        textStyle={{
                            fontSize: 14,
                            color: '#3D454A',
                            fontWeight: 500
                        }}
                    />

                </VStack>

            </HStack>
        </Card>



    )
}