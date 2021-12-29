import { Box, HStack, Image, Stack, Text, VStack } from "native-base";
import React from "react";
import Icon from "../../utility/Icon";
import UtilityBtn from '../../utility/UtilityBtn';

export default function LovedHouses() {
    const IconWithText = ({
        iconName,
        text,
        iconColor,
        iconStyle,
        textColor,
        textStyle,
        containerStyle,
    }) => (
        <HStack space={1.5} {...containerStyle} alignItems={"center"}>
            <Icon
                name={iconName}
                size={20}
                color={iconColor || "#889096"}
                {...iconStyle}
            />
            <Text
                color={textColor || "#687076"}
                fontFamily={"body"}
                fontSize={16}
                {...textStyle}
            >
                {text}
            </Text>
        </HStack>
    );

    const icons = [
        {
            _id: "1",
            text: "3 bed",
            icon: "bed-filled",
            iconColor: "#889096",
        },
        {
            _id: "2",
            text: "2 bath",
            icon: "bath-filled",
            iconColor: "#889096",
            iconStyle: { size: 15 },
        },
        {
            _id: "3",
            text: "Saved",
            icon: "heart-dark",
            iconColor: "#000",
            iconStyle: { size: 15 },
        },
    ];

    return (
        <Stack py={10}>
            <HStack justifyContent={"space-between"} px={4} alignItems={'center'}>
                {/* image */}
                <Box w="26%" h="115" overflow="hidden" >
                    <Image
                        borderRadius={14}
                        alt="Loved Houses"
                        width={"100%"}
                        height={"100%"}
                        source={{
                            uri: "https://thelens.news/app/uploads/2020/12/236-456x342.jpg",
                        }}
                    />
                </Box>
                <VStack w="70%" space="3" borderBottomColor={'#E6E8EB'} borderBottomWidth={1} py={4}>
                    {/* define maximum character */}
                    <Text
                        fontFamily={"body"}
                        fontWeight={"500"}
                        color={"#3D454A"}
                        fontSize={"18"}
                    >
                        889 Palmeron Ave, Mcd..
                    </Text>
                    <HStack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        {icons.map((icon) => (
                            <IconWithText
                                key={icon._id}
                                iconName={icon.icon}
                                iconColor={icon.iconColor}
                                text={icon.text}
                                iconStyle={icon.iconStyle || ""}
                            />
                        ))}
                    </HStack>
                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                        <IconWithText
                            iconName="etherium"
                            text="0.05686"
                            iconColor={"#52B69A"}
                            textStyle={{
                                fontWeight: 700,
                                fontFamily: "body",
                                color:"#52B69A"
                            }}
                        />
                        <UtilityBtn title={'Place a Bid'} />
                    </HStack>
                </VStack>
            </HStack>
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
