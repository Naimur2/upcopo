import { useNavigation } from "@react-navigation/native";
import { Box, Image, Stack, Text } from 'native-base';
import React from 'react';
import Card from '../../utility/Card';
export default function NullView({title,subtitle,message,type,path="DashBoard"}) {
    const navigation = useNavigation();

    const image={
        notifications:"https://i.ibb.co/n8B9gdB/image-118-removebg-preview.png",
        message:"https://i.ibb.co/n8B9gdB/image-118-removebg-preview.png",
        love:"https://i.ibb.co/n8B9gdB/image-118-removebg-preview.png",
    }

    return (
        <Stack bg='#fff' flex={1} px={4} >
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Box h={150} w={150} my={20}>
                    <Image
                        source={{ uri: image[type] }}
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
                        {title}
                    </Text>
                    <Text
                        fontFamily={'body'}
                        fontSize={16}
                        fontWeight={500}
                        color={'#687076'}
                        textAlign="center"
                    >
                        {subtitle}
                    </Text>
                </Stack>
                <Stack w={'90%'} py={4}>
                    <Card
                        bg={'#F2F8F6'}
                        h={16}
                        justifyContent={'center'}
                        alignItems="center"
                        onPress={() => navigation.navigate(path)}
                    >
                        <Text
                            fontFamily={'body'}
                            fontSize={16}
                            fontWeight={600}
                            color={'#52B69A'}
                        >
                            {message}
                        </Text>
                    </Card>
                </Stack>
            </Stack>


        </Stack>

    );
}