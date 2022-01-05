import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';

export default function ProfileHistory() {
    const profileHistoryData = [
        {
            _id: '1',
            title: 'Pay in a house',
            subtitle: `When you make payment of $5 or
            more when you pay at local...`,
            time: '11:00AM'

        },
        {
            _id: '2',
            title: `When you make payment of $5 or
            more when you pay at local..`,
            time: '09:14AM'

        },
        {
            _id: '3',
            title: 'Cashback 5% on house',
            subtitle: `When you make payment of $5 or
            more when you pay at local..`,
            time: '11:00AM'

        },
        {
            _id: '4',
            title: 'House of secrest ',
            subtitle: `2972 Westheimer Rd. Santa Ana, Illinois 85486 `,
            time: '11:00AM'

        }

    ]
    return (
        <HStack pt={4} px={2}>
            <Box w={'25%'} h={100} >
                <Image
                    alt='img11'
                    source={{ uri: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=338&ext=jpg' }}
                    w={'full'}
                    h={'full'}
                    borderRadius={20}
                />
            </Box>

            <HStack w={'55%'} ml={2}>
                <VStack space={2}>
                    <Text
                        fontFamily={"body"}
                        fontWeight={"600"}
                        color={"#11181C"}
                        fontSize={"18"}
                    >
                        Pay in a house
                    </Text>
                    <Text
                        fontFamily={"body"}
                        fontWeight={"400"}
                        color={"#687076"}
                        fontSize={"13"}
                    >
                        When you make payment of $5 or
                        more when you pay at local...
                    </Text>
                </VStack>

            </HStack>
            <Text
                fontFamily={"body"}
                fontWeight={"400"}
                color={"#687076"}
                fontSize={"13"}
               
            >
                11.00 AM
            </Text>

        </HStack>
    );
}