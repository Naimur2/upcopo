import { HStack } from 'native-base';
import React from "react";
import Card from '../../../utility/Card';
import FormInput from '../../../utility/FormInput';
import Icon from '../../../utility/Icon';
export default function SearchHeader() {
    return (
        <HStack >
            <Card w={'full'}
                position='relative'

            >
                <FormInput
                    leftElement={
                        <Icon
                            p="2"
                            ml={3}
                            mr={1}
                            borderRadius={50}
                            bg={"#52B69A"}
                            color={"#fff"}
                            name={"search"}
                            size={16}
                        />
                    }
                    placeHolder={"85208,Mesa, Az"}
                    type={"search"}
                    isFullWidth={false}
                    borderColor={"#fff"}
                    py={2}

                />
                <Icon name={'x'} color={'#889096'} size={20}
                    position="absolute"
                    bottom={"60%"}
                    right={"10%"}
                />
            </Card>


        </HStack>
    );
}
