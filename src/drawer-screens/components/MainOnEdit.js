import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';
import FormInput from '../.././utility/FormInput';
import Icon from '../.././utility/Icon';

export default function MainOnEdit() {
    const MainOnEditHeader = () => {
        return (
            <VStack bg={"blue.500"}>
                <HStack justifyContent={'space-between'} alignItems={'center'} px={4} pt={4}>
                    <Text
                        fontSize={18}
                        fontFamily={"body"}
                        fontWeight={600}
                        color={"#fff"}
                        pl={2}
                        py={2}
                    >
                        Edit Profile
                    </Text>
                    <Icon
                        name={'x'}
                        size={20}
                        color={'#fff'}
                    />
                </HStack>
                <HStack justifyContent={'center'} pb={4}>
                    <Avatar
                        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/female-user-avatar/64/edit-512.png' }}
                        size={20}
                    />
                </HStack>
            </VStack>
        );
    }
    const FormInputBox = ({text,placeholder,type}) => {
        return (
            <VStack p={2}
                bg={'#fff'}
                borderBottomColor={"#DFE3E6"}
                borderBottomWidth={1.5} >
                <Text
                    fontSize={17}
                    fontFamily={"body"}
                    fontWeight={500}
                    color={"#11181C"}
                >
                    {text}
                </Text>
                <FormInput
                    placeholder={placeholder}
                    borderColor={'#fff'}
                    fontSize={14}
                    px={-2}
                    type={type}
                    _focus={{ px: 2 }}
                />

            </VStack>
        );
    }
    return (
        <VStack>
            <MainOnEditHeader />
            <VStack pt={6}>
                <FormInputBox text={'Full Name'} placeholder={'Md Ahnaf aksar'} />
                <FormInputBox text={'Email'} placeholder={'ahnafaksar@gmail.com'} type={'email'}/>
                <FormInputBox text={'Phone Number'} placeholder={'(307) 555-0133'}/>
                <FormInputBox text={'Password'} placeholder={'*****'} type={'password'}/>
            </VStack>









        </VStack>

    );
}