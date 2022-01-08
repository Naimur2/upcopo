import { Actionsheet, Box, HStack, Text } from "native-base";
import React from "react";
import Icon from '../../utility/Icon';
import PaceBidActionCard from './placeBidActionComponents/PaceBidActionCard';
export default function PlaceBidAction({ isOpen, onOpen, onClose }) {
    return (
        <Actionsheet isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <Actionsheet.Content bg={'#F9F9F9'}>
                <Box w="100%" h={60} px={4} justifyContent="center">
                    <HStack justifyContent={'space-between'}>
                        <Text
                            fontSize="16"
                            color="#3D454A"
                            fontWeight={'500'}
                            fontFamily={'body'}
                        >
                            History of bid
                        </Text>
                        <Icon name={'x'} size={20} color={'#7E868C'} />  

                    </HStack>
                   

                </Box>
                <Actionsheet.Item>
                <PaceBidActionCard />
                </Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    );
}
