import { Avatar, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Varified from "../.././utility/Varified";
import Card from '../../utility//Card';
import Icon from "../../utility/Icon";
import UserProfileHeader from "./components/UserProfileHeader";
import UserProfileMenu from "./components/UserProfileMenu";

export default function UserProfile({ route, navigation }) {

    return (
        <ScrollView bg={"#f9f9f9"}>
            <UserProfileHeader />
            <UserProfileMenu />

            <VStack py={4}>
                <Card>
                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                        <HStack alignItems={'center'} space={2}>
                            <Avatar
                                size={'md'}
                                mr={1}

                                source={{ uri: 'https://image.freepik.com/free-psd/3d-cartoon-character-isolated-3d-rendering_235528-535.jpg' }}
                            />
                            <Text
                                fontFamily={"body"}
                                fontSize={18}
                                color={"#52B69A"}
                                fontWeight={600}
                            >@7onder</Text>
                            <Varified h={7} w={7} />
                        </HStack>
                        <Text
                            fontFamily={"body"}
                            fontSize={18}
                            color={"#889096"}
                            fontWeight={500}
                        >2 Days Left</Text>
                    </HStack>
                    {/* Image*/}
                    <Image
                        alt={"card-img"}
                        source={{ uri: 'https://st4.depositphotos.com/9058402/27184/v/380/depositphotos_271847624-stock-illustration-man-skateboarding-in-future-metropolis.jpg?forcejpeg=true' }}
                        w={'100%'}
                        h={150}
                        borderRadius={20}
                        my={3}

                    />
                    {/* card bottom */}

                    <HStack justifyContent={'space-between'}>
                        <HStack space={2} alignItems={'center'}>
                            <Icon name={'heart-dark'}
                            size={20}
                            />
                            <Text
                                fontFamily={"body"}
                                fontSize={18}
                                color={"#000000"}
                                fontWeight={400}
                            >89</Text>
                        </HStack>

                        <HStack space={2}>
                            <Text
                                fontFamily={"body"}
                                fontSize={18}
                                color={"#3D454A"}
                                fontWeight={600}
                            >Top Bid</Text>
                            <HStack space={2} alignItems={'center'}>
                                <Icon name={'etherium'} size={20}/>
                                <Text
                                    fontFamily={"body"}
                                    fontSize={18}
                                    color={"#000"}
                                    fontWeight={500}
                                >6.0241</Text>
                            </HStack>
                        </HStack>

                    </HStack>


                </Card>

            </VStack>

        </ScrollView>
    );
}
