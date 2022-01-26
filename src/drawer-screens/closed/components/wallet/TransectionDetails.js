import { Box, HStack, Stack, Text, VStack } from 'native-base';
import React from 'react';
import Card from "../../../../utility/Card";
import Icon from "../../../../utility/Icon";

export default function TransectionDetails() {
    const transectionDetailsData = [
        {
            _id: '1',
            type: 'Tracking Code',
            price: '20.00',
            date: 'July 30,2020',
            succeed: true
        },
        {
            _id: '2',
            type: 'Refill Card',
            price: '24.00',
            date: 'July 30,2020',
            succeed: true
        },
        {
            _id: '3',
            type: 'Accumulate points',
            price: '15.00',
            date: 'July 30,2020',
            succeed: true
        },
        {
            _id: '4',
            type: 'Transfer money',
            price: '18.00',
            date: 'July 30,2020',
            succeed: true
        },
        {
            _id: '5',
            type: 'Use points ',
            price: '8.00',
            date: 'July 30,2020',
            succeed: false
        },

    ]
    const TransectionHistory = ({
        _id, type, price, date, succeed
    }) => {
        return (
            <VStack space={4} pt={4} key={_id}>
                <HStack justifyContent={'space-between'} >
                    <Text color={'#3D454A'} fontFamily={'body'} fontWeight={500} fontSize={17}>
                        {type}
                    </Text>
                    <Text color={'#3D454A'} fontFamily={'body'} fontWeight={500} fontSize={14}>
                        -${price}
                    </Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                    <Text color={'#889096'} fontFamily={'body'} fontWeight={500} fontSize={14}>
                        {date}
                    </Text>
                    {succeed ? (
                        <Text color={'#52B69A'} fontFamily={'body'} fontWeight={500} fontSize={14}>
                            Success
                        </Text>
                    ) : (
                        <Text color={'#DC3B3B'} fontFamily={'body'} fontWeight={500} fontSize={14}>
                            Failed
                        </Text>
                    )}

                </HStack>
                <Box borderColor={'#F1F3F5'} borderWidth={1} />
            </VStack>
        );
    }

    return (
        <Stack >
            <Card>
                <HStack justifyContent={'flex-end'}>
                    <Icon name='x' color={'#7E868C'} size={20} />
                </HStack>
                {transectionDetailsData.map((data) =>
                    <TransectionHistory
                        _id={data._id}
                        type={data.type}
                        date={data.date}
                        succeed={data.succeed}
                        price={data.price}

                    />
                )}
            </Card>

        </Stack>
    )
}