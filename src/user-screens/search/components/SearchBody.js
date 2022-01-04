import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from "react";
import Icon from '../../../utility/Icon';

export default function SearchBody() {
    const SearchBodyData = [
        {
            _id: "1",
            imgUrl: "https://image.freepik.com/free-photo/house-isolated-field_1303-23773.jpg",
            imgAlt: "img1",
            title: 'House of secrest ',
            address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
            numberOfBed: '2',
            numberOfBath: '3'
        },
        {
            _id: "2",
            imgUrl: "https://img.freepik.com/free-photo/3d-rendering-modern-classic-house-with-luxury-garden_105762-111.jpg?size=338&ext=jpg",
            imgAlt: "img2",
            title: 'House of secrest ',
            address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
            numberOfBed: '2',
            numberOfBath: '3'
        },
        {
            _id: "3",
            imgUrl: "https://img.freepik.com/free-photo/luxury-interior-exterior-design-pool-villa-with-livingroom_41487-70.jpg?size=338&ext=jpg",
            imgAlt: "img3",
            title: 'House of secrest ',
            address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
            numberOfBed: '2',
            numberOfBath: '3'
        },
        {
            _id: "4",
            imgUrl: "https://image.freepik.com/free-photo/3d-rendering-large-modern-contemporary-house-wood-concrete-early-evening_190619-1492.jpg",
            imgAlt: "img4",
            title: 'House of secrest ',
            address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
            numberOfBed: '2',
            numberOfBath: '3'
        },
        {
            _id: "5",
            imgUrl: "https://img.freepik.com/free-photo/3d-rendering-large-modern-contemporary-house-wood-concrete_190619-1484.jpg?size=338&ext=jpg",
            imgAlt: "img5",
            title: 'House of secrest ',
            address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
            numberOfBed: '2',
            numberOfBath: '3'
        },
        {
            _id: "6",
            imgUrl: "https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg",
            imgAlt: "img6",
            title: 'House of secrest ',
            address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
            numberOfBed: '2',
            numberOfBath: '3'
        },
    ];
    const SearchImages = () => {
        return (
            <Box w="30%" h="115" overflow="hidden">
                <Image
                    borderRadius={14}
                    alt="Loved Houses"
                    width={"100%"}
                    height={"100%"}
                    source={{
                        uri: "https://image.freepik.com/free-photo/house-isolated-field_1303-23773.jpg",
                    }}
                />
            </Box>
        );
    }
    const SearchBodyText = () => {
        return (
            <VStack
                w={'70%'}
                borderBottomColor={"#E6E8EB"}
                borderBottomWidth={1.5}

            >
                <HStack
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    px={2}
                >
                    <Text
                        fontFamily={"body"}
                        fontWeight={"600"}
                        color={"#52B69A"}
                        fontSize={"18"}
                    >
                        House of secrest
                    </Text>
                    <Icon name={'x'} color={'#C1C8CD'} size={20}
                    />
                </HStack>
                <HStack space={2} pt={2}>
                    <Icon name={'map'} color={"#889096"} size={20} />
                    <Text
                        fontFamily={"body"}
                        fontWeight={"400"}
                        color={"#687076"}
                        fontSize={12}
                    >
                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                    </Text>
                </HStack>
                <HStack space={4}>
                    <HStack space={2}>
                        <Icon name={'bed'} color={"#889096"} size={20} />
                        <Text
                            fontFamily={"body"}
                            fontWeight={"400"}
                            color={"#687076"}
                            fontSize={18}
                        >
                            2 bed
                        </Text>
                    </HStack>
                    <HStack space={2}>
                        <Icon name={'bath'} color={"#889096"} size={20} />
                        <Text
                            fontFamily={"body"}
                            fontWeight={"400"}
                            color={"#687076"}
                            fontSize={18}
                        >
                            2 bath
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        );
    }
    return (
        <HStack>
            <HStack space={2} px={4}>
                <SearchImages />
                <SearchBodyText />



            </HStack>
        </HStack>
    );
}