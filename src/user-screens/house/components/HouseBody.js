import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from "react";
import Card from '../../../utility/Card';
import Icon from '../../../utility/Icon';
import UtilityBtn from '../../../utility/UtilityBtn';


export default function HouseBody() {
    return (
        <Box p={4} >
            <Text
                fontFamily={'body'}
                fontWeight={600}
                fontSize={20}
                color={"#3D454A"}
            >
                Description
            </Text>
            <Text
                color={"#7E868C"}
                fontFamily={'body'}
                fontWeight={400}
                fontSize={16}
            >
                Simple house with modern architecture and cool
                interiors located in the city crnter making easier
                for you to access
            </Text>
            <HStack
                space={12}
            >
                <HStack
                    mt={2}
                    alignItems='center'
                    space={2}

                >
                    <Card p={0}
                        h={10}
                        w={10}
                        justifyContent={'center'}
                        alignItems='center'
                    >
                        <Icon
                            name={'bed'}
                            color={'#7E868C'}
                            size={20}
                        />
                    </Card>
                    <Text
                        color={'#3D454A'}
                        fontFamily={'body'}
                        fontWeight={'500'}
                        fontSize={18}
                    >
                        6 Bedroom
                    </Text>
                </HStack>
                <HStack
                    mt={2}
                    alignItems='center'
                    space={2}

                >
                    <Card p={0}
                        h={10}
                        w={10}
                        justifyContent={'center'}
                        alignItems='center'
                    >
                        <Icon
                            name={'bath'}
                            color={'#7E868C'}
                            size={20}
                        />
                    </Card>
                    <Text
                        color={'#3D454A'}
                        fontFamily={'body'}
                        fontWeight={'500'}
                        fontSize={18}
                    >
                        3 Baths
                    </Text>
                </HStack>
            </HStack>
            <Box

            >
                <Image
                    resizeMode="cover"
                    w="full"
                    h={140}
                    mt={8}
                    borderRadius={20}
                    source={{ uri: 'https://www.cairnsholidayspecialists.com.au/shared_resources/media/map/24-400x300.png' }}
                    alt={'googleMap'}

                />
                <HStack 
                justifyContent={'space-around'}
                mt={4}
                >
                    <VStack>
                        <Text
                            color={'#7E868C'}
                            fontFamily={'body'}
                            fontSize={16}
                            fontWeight={400}
                        >
                            Auction Time
                        </Text>
                        <Text
                            color={'#52B69A'}
                            fontFamily={'body'}
                            fontSize={18}
                            fontWeight={600}
                        >
                            2h : 40m
                        </Text>

                    </VStack>
                    <VStack>
                        <Text
                            color={'#7E868C'}
                            fontFamily={'body'}
                            fontSize={16}
                            fontWeight={400}
                        >
                            Current Bid
                        </Text>
                        <Text
                            color={'#52B69A'}
                            fontFamily={'body'}
                            fontSize={18}
                            fontWeight={600}
                        >
                           3,40 ETH
                        </Text>

                    </VStack>


                </HStack>
                <UtilityBtn
                mt={4}
                title={' Place a Bid'}
                titleStyle={{fontSize:'18'}}
               
            
                />
               
                


            </Box>


        </Box>
    );
}