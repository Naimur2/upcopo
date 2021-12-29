import { Box, HStack, Image, Stack, Text, VStack } from "native-base";
import React from "react";
import UtilityBtn from "../../utility/UtilityBtn";
import IconWithText from "../../utility/IconWithText";
import LovedHousesCard from "./components/LovedHousesCard";

export default function LovedHouses() {
    const DATA = [
        //
    ];

    return (
        <Stack py={10} space={4}>
            <LovedHousesCard
                key={"f"}
                address
                numOfBed
                numOfBath
                isSaved
                price
                onPlaceBid={()=> console.log('Place a bid') }
            />
        </Stack>
    );
}

/*

   <HStack space={6}>
                <HStack alignItems={'center'} >
                    <Icon name={'bed-filled'} size={20} color={'#889096'} />
                    <Text color={'#687076'} fontFamily={'body'} fontSize={12}>3 bed</Text>
                </HStack>
                <HStack space={2} alignItems={'center'} >
                    <Icon name={'bath'} size={20} color={'#889096'} />
                    <Text color={'#687076'} fontFamily={'body'} fontSize={12}>2 bath</Text>
                </HStack>
                <HStack space={2} alignItems={'center'} >
                    <Icon name={'heart-dark'} size={20} color={'#000'} />
                    <Text color={'#687076'} fontFamily={'body'} fontSize={12}>Saved</Text>
                </HStack>

*/
