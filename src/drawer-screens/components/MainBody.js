import { Box, HStack, Stack, Switch, Text } from 'native-base'
import React from 'react'
import Card from '../.././utility/Card'
import Icon from '../.././utility/Icon'
import UtilityBtn from '../.././utility/UtilityBtn'

export default function MainBody() {
    return (
        <Stack
            bg={'#F9F9F9'}
            pt={2}
        >
            <Text
                fontSize={18}
                fontFamily={"body"}
                fontWeight={400}
                color={"#7E868C"}
                pl={2}
                py={2}
            >
                Account
            </Text>

            <Card>
                <HStack justifyContent={'space-between'}>
                    <HStack space={4} alignItems={'center'}>
                        <Box position={'relative'} justifyContent={'center'} alignItems={'center'}>
                            <UtilityBtn
                                borderRadius={50}
                                h={12}
                                w={12}
                            />
                            <Icon
                                name={'home'}
                                size={20}
                                color={'#fff'}
                                position={'absolute'}


                            />

                        </Box>


                        <Text
                            fontSize={18}
                            fontFamily={"body"}
                            fontWeight={600}
                            color={"#3D454A"}


                        >
                            Private
                        </Text>

                    </HStack>
                    <HStack >
                        <Switch size={'lg'}
                            offTrackColor="#889096"
                            onTrackColor="#52B69A"
                            offThumbColor="#fff"
                            onThumbColor="#fff"
                        />


                    </HStack>
                </HStack>
                <Text
                    fontSize={14}
                    fontFamily={"body"}
                    fontWeight={400}
                    color={"#687076"}
                    py={4}
                >
                    When your account is private, only people you
                    approve will see your photos and videos. Your
                    existing followers won’t be affected
                </Text>

            </Card>

        </Stack>
    )
}