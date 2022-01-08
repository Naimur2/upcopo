import { Avatar, Box, FlatList, HStack, Text, VStack } from "native-base";
import React from "react";
import Varified from '../../../utility/Varified';

export default function PaceBidActionCard() {
    const paceBidActionCardData = [
        {
            _id: '1',
            avater: 'https://img.freepik.com/free-vector/cute-cartoon-panda-listening-music-vector-illustration_60438-1436.jpg?size=338&ext=jpg',
            varified: true,
            name: 'Noundles',
            price: '0.56 ETH'
        },
        {
            _id: '2',
            avater: 'https://img.freepik.com/free-vector/cute-panda-business-holding-money-cartoon-vector-icon-illustration-animal-business-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3888.jpg?size=338&ext=jpg',
            varified: false,
            name: 'Jrny club',
            price: '0.46 ETH'
        },
        {
            _id: '3',
            avater: 'https://image.freepik.com/free-vector/cute-panda-reading-book-cartoon-icon-illustration_138676-2683.jpg',
            varified: true,
            name: 'Joel Norris',
            price: '0.50 ETH'
        },
        {
            _id: '4',
            avater: 'https://image.freepik.com/free-vector/cute-panda-playing-game-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3676.jpg',
            varified: false,
            name: 'Feudalz',
            price: '0.76 ETH'
        }
    ]
    const PaceBidActionCardFlatListData = ({
        _id,
        avater,
        varified,
        name,
        price,
    }) => {
        return (
            <HStack
                space={4}
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={1.5}
                py={4}


            >

                <Box w={12} h={12}>
                    <Avatar
                        alt={'pandaimg'}
                        h={'full'}
                        w={'full'}
                        source={{ uri: avater }}
                        position={'relative'}
                    />
                    {varified && (
                        <Varified
                            position={'absolute'}
                            bottom={0}
                            right={0}
                            size={5}
                        />
                    )}

                </Box>
                <HStack w={'82%'} justifyContent={'space-between'}>
                    <VStack>
                        <Text
                            fontFamily={'body'}
                            color={'#11181C'}
                            fontWeight={600}
                            fontSize={'16'}
                        >
                            {price}
                        </Text>
                        <Text
                            fontFamily={'body'}
                            color={'#7E868C'}
                            fontWeight={600}
                            fontSize={'13'}
                        >
                            {name}
                        </Text>
                    </VStack>
                    <Box
                        bg={'#ECEEF0'}
                        borderRadius={50}
                        w={10}
                        h={10}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Text
                            fontFamily={'body'}
                            color={'#3D454A'}
                            fontWeight={600}
                            fontSize={'16'}
                        >
                            {_id}
                        </Text>
                    </Box>
                </HStack>
            </HStack>
        );
    }
    const renderItem = ({ item }) => {
        return (
            <PaceBidActionCardFlatListData
                _id={item._id}
                avater={item.avater}
                varified={item.varified}
                name={item.name}
                price={item.price}
            />
        );
    };
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={paceBidActionCardData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />


    );
}