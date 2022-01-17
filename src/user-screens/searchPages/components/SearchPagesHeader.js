import { debounce } from 'lodash';
import { Box, HStack, Image, Stack, Text, VStack } from "native-base";
import React, { useState } from "react";
import Card from "../../../utility/Card";
import Icon from "../../../utility/Icon";
import IconWithText from '../../../utility/IconWithText';
import Search from "../../../utility/Search";
import SelectItem from "../../../utility/SelectItem";
import Like from '../../common/Like';




const items = [
    { _id: "01", label: "Single items", value: "ux" },
    { _id: "02", label: "Multiple items", value: "design" },
];
const items2 = [
    { _id: "01", label: "Low to High", value: "l2h" },
    { _id: "02", label: "High to low", value: "h2l" },
];



export default function SearchPagesHeader() {
    let [service1, setService1] = useState(items[0].value);
    let [service2, setService2] = useState(items2[0].value);
    let [search, setSearch] = useState('');

    const searchPagesBodyData = [
        {
            _id: '1',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg',
            houseName: 'Turn key house',
            address1: '953 N orange Grove Ave',
            address2: 'West Hollywood, CA 90046',
            price: '3.20'

        },
        {
            _id: '2',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-view-smart-home-controlled-by-smartphone_316839-264.jpg',
            houseName: 'Capstone house',
            address1: '2715 La Cuesta Dr',
            address2: 'Los Angeles, CA 90046',
            price: '3.40'

        },
        {
            _id: '3',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg',
            houseName: 'Broadleaf Homes',
            address1: '2715 La Cuesta Dr',
            address2: 'West Hollywood, CA 90046',
            price: '2.50'

        },
        {
            _id: '4',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg',
            houseName: 'Broadleaf Homes',
            address1: '2715 La Cuesta Dr',
            address2: 'West Hollywood, CA 90046',
            price: '2.50'

        }

    ]
     onSearchHandle=debounce((text)=>{
        text = setSearch(text);
    },500);
    

    const filterSearch = searchPagesBodyData.filter(item => {
        // return item.country==="Bangladesh"
        return (
            search !== "" ? item.houseName.includes(search) : item // && console.log(item.houseName)
           

        );
    })
    const searchResult = filterSearch.map((data, i) => {
        return (
            <Stack key={i} >
                <Card borderRadius={20} mb="4" py={2} px="4" >
                    <Stack>
                        <Box my={2} w="100%" h={140} borderRadius={15} overflow={'hidden'} position={'relative'}>
                            <Image
                                alt={"card-img"}
                                source={{
                                    uri: data.imgUrl,
                                }}
                                w={"full"}
                                h={'full'}
                            />
                            <Like position={'absolute'} right={4} top={4} />
                            <Text
                                fontFamily={'body'}
                                fontWeight={600}
                                fontSize={16}
                                color={'#fff'}
                                position={'absolute'}
                                bottom={5}
                                pl={4}

                            >
                                {data.houseName}
                            </Text>

                        </Box>
                        <HStack justifyContent={'space-between'} alignItems={'center'}>
                            <VStack>
                                <IconWithText

                                    iconName={'map'}
                                    text={data.address1}
                                    iconColor={'#889096'}
                                    textColor={'#687076'}
                                    textStyle={{
                                        fontWeight: 500,
                                        fontSize: 12
                                    }}
                                />

                                <Text
                                    fontFamily={"body"}
                                    fontWeight={500}
                                    fontSize={12}
                                    color={'#687076'}
                                    pl={6}

                                >
                                    {data.address2}
                                </Text>
                            </VStack>
                            <Text
                                fontFamily={"body"}
                                fontWeight={600}
                                fontSize={16}
                                color={'#11181C'}
                                pl={6}

                            >
                                ETH {data.price}
                            </Text>
                        </HStack>


                    </Stack>
                </Card>
            </Stack>
        )

    })

    return (
        <VStack  p={4} space={4} >
            <HStack space="3%">
                <Box w="80%">
                    <Search onSearch={onSearchHandle} />

                </Box>
                <Box justifyContent={"center"} alignItems={"center"} w={"16%"}>
                    <Text
                        fontFamily={'body'}
                        fontWeight={500}
                        fontSize={16}
                        color={'#52B69A'}
                    >
                        Map
                    </Text>
                </Box>
            </HStack>
            <HStack space="3%">
                <HStack space="4%" w="80%">
                    <SelectItem
                        onValueChange={(value) => setService1(value)}
                        selectedValue={service1}
                        items={items}
                        w="48%"
                    />
                    <SelectItem
                        onValueChange={(value) => setService2(value)}
                        selectedValue={service2}
                        placeholder={"Set Values"}
                        items={items2}
                        w="48%"
                    />
                </HStack>
                <Card justifyContent={"center"} alignItems={"center"} w={"16%"}>
                    <Icon color={"#52B69A"} name={"square"} size={25} />
                </Card>
            </HStack>


            <VStack >
                {searchResult}
               
            </VStack>
        </VStack>
    );
}
