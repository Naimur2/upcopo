import { HStack, Stack, Text } from 'native-base';
import React from 'react';
import Card from '../../../utility/Card';
import Search from "../../../utility/Search";


export default function SearchPagesHeader() {
    return (
        <Stack >
            <HStack>
                <HStack alignItems={'center'} w={'full'} p={4}>
                    <Card  w={"80%"} >
                    <Search h={10} />
                    </Card>
                    <Text
                    fontFamily={"body"}
                    fontWeight={500}
                    fontSize={16}
                    color={'#52B69A'}
                    p={4}
                >
                    Map
                </Text>
                </HStack>
               

            </HStack>

        </Stack>

    );
}