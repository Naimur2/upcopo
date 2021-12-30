import { Avatar, HStack, Stack, Text } from "native-base";
import React from "react";
import Card from '../../utility/Card';


export default function Notification() {

    return (
        <Stack>
            <Card p={4}>
                <Text
                    color={'#7E868C'}
                    fontWeight={'500'}
                    fontFamily={'body'}
                    fontSize={'18'}
                    mb={'4'}
                >
                    Today
                </Text>
                <HStack  alignItems={'center'}>
                    <HStack alignItems={'center'} space={4} flexWrap={'wrap'}>
                        <Avatar
                            size={"16"}
                            source={{ uri:'https://image.freepik.com/free-vector/farmer-using-technology-digital-agriculture_53876-113813.jpg' }}

                        />
                        <Text color={'#11181C'}
                            fontWeight={'400'}
                            fontFamily={'body'}
                            fontSize={'16'}>
                           Avian Rizky
                        </Text>
                        <Text
                            color={'#687076'}
                            fontWeight={'400'}
                            fontFamily={'body'}
                            fontSize={'16'}

                        >
                            requested a payment of 
                        </Text>
                        <Text color={'#52B69A'}
                            fontWeight={'400'}
                            fontFamily={'body'}
                            fontSize={'16'}>
                            $200.00
                        </Text>
                    </HStack>

                  
                </HStack>
            </Card>

        </Stack>
    )
}
/*
Patrick 

<HStack justifyContent={'space-between'} alignItems={'center'}>
                    <HStack alignItems={'center'} space={4}>
                        <Avatar
                            size={"16"}
                            source={{ uri: 'https://image.freepik.com/free-vector/cute-panda-playing-game-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3676.jpg' }}

                        />
                        <Text color={'#11181C'}
                            fontWeight={'400'}
                            fontFamily={'body'}
                            fontSize={'16'}>
                            Patrick
                        </Text>
                        <Text
                            color={'#687076'}
                            fontWeight={'400'}
                            fontFamily={'body'}
                            fontSize={'16'}

                        >
                            Followed you
                        </Text>
                    </HStack>

                    <Text
                        color={'#7E868C'}
                        fontWeight={'500'}
                        fontFamily={'body'}
                        fontSize={'16'}

                    >
                        Just Now
                    </Text>
                </HStack>


*/