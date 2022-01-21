import { useNavigation } from "@react-navigation/native";
import { Box, Image, Stack, Text } from 'native-base';
import React from 'react';
import Card from '../../utility/Card';
export default function NoNewNotifications(props) {
    const navigation = useNavigation();
    return (
        <Stack bg='#fff' h='full' px={4} >
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Box h={150} w={150} my={20}>
                    <Image
                        source={{ uri: "https://i.ibb.co/n8B9gdB/image-118-removebg-preview.png" }}
                        w='full'
                        h='full'
                        alt="NoNewNotifications img"
                    />
                </Box>
                <Stack justifyContent={'center'} alignItems={'center'} space={4}>
                    <Text
                        fontFamily={'body'}
                        fontSize={24}
                        fontWeight={600}
                        color={'#3D454A'}
                    >
                        No new Notifications
                    </Text>
                    <Text
                        fontFamily={'body'}
                        fontSize={16}
                        fontWeight={500}
                        color={'#687076'}
                        textAlign="center"
                    >
                        When you get notifications,they’ll show up
                        here
                    </Text>
                </Stack>
                <Stack w={'90%'} py={4}>
                    <Card
                        bg={'#F2F8F6'}
                        h={16}
                        justifyContent={'center'}
                        alignItems="center"
                        onPress={() => navigation.navigate("DashBoard")}
                    >
                        <Text
                            fontFamily={'body'}
                            fontSize={16}
                            fontWeight={600}
                            color={'#52B69A'}
                        >
                            Return in home page
                        </Text>
                    </Card>
                </Stack>
            </Stack>


        </Stack>

    );
}