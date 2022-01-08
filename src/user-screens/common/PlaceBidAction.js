import { Actionsheet, Box, HStack, Text } from "native-base";
import React from "react";
<<<<<<< HEAD
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
=======
import KeyBoardView from "../../utility/KeyBoardView";

export default function PlaceBidAction({ isOpen, onOpen, onClose }) {
    return (
        <Actionsheet isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <Actionsheet.Content bg={"#ffff"}>
                <KeyBoardView>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                                color: "light.400",
                            }}
                        >
                            Albums
                        </Text>
                    </Box>
                </KeyBoardView>
>>>>>>> f68277b014449dbf5a0fbde4cce8245620244959
            </Actionsheet.Content>
        </Actionsheet>
    );
}
