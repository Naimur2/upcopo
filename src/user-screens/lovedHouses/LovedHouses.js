import { Box, HStack, Image, ScrollView, Text } from "native-base";
import React from "react";
import Icon from '../../utility/Icon';
import UtilityBtn from "../../utility/UtilityBtn";

export default function LovedHouses() {
    return (
        <ScrollView py="4" px="4">

            <HStack space={3}>
                <HStack bg="dark.700">
                    <Box borderRadius={16} w="30%" h="125" overflow="hidden">
                        <Image
                            alt="Loved Houses"
                            width={"100%"}
                            height={"100%"}
                            source={{
                                uri: "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                            }}
                        />
                    </Box>
                </HStack>

              <HStack alignItems={'center'} space={1}>
              <Icon name={'etherium'} size={20} color={'#52B69A'} />
                <Text color={'#52B69A'} fontFamily={'body'} fontSize={18} fontWeight={'700'}>0.0568</Text>

              </HStack>
              <UtilityBtn h={6} w={6}> Place a Bid</UtilityBtn>

            </HStack>




        </ScrollView>
    );
}
