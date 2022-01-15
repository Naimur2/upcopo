import { Box, HStack, Stack, Text } from 'native-base'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import Card from '../.././utility/Card'
import Icon from '../.././utility/Icon'
import UtilityBtn from '../.././utility/UtilityBtn'

export default function MainBody() {
    const [switchIsOn,setSwitchIsOn]=useState(false)
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
                        <ToggleSwitch
                            isOn={switchIsOn}
                            offColor="#C0CBC8"
                            onColor={'#52B69A'}
                            animationSpeed={300}
                        
                           
                            size="large"
                            onToggle={() => setSwitchIsOn((prev) => !prev)}
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