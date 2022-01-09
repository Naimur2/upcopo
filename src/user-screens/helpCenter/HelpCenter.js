import { Collapse, Heading, HStack, Pressable, Stack, Text } from 'native-base';
import React from "react";
import Icon from '../.././utility/Icon';

export default function HelpCenter() {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    
    return (
        <Stack space={4} mx={8}>
            <Heading justifyContent={'space-between'} alignItems={'center'} bg={'amber.400'}>
                <HStack justifyContent={'space-between'} alignItems={'center'} bg={'amber.800'} w={'100%'}>
                    <Text color={'#11181C'} fontFamily={'body'} fontWeight={500} fontSize={18}>
                        How to bid new house
                    </Text>
                    <Pressable   _pressed={{bg:'#fff'}} onPress={handleToggle}>
                        <Icon name={'arrow-right'} size={20} color={'#292D32'} />
                    </Pressable>
                </HStack>
            </Heading>
            <Collapse duration={700} isOpen={show}>
                <Text color={'#7E868C'} fontFamily={'body'} fontWeight={400} fontSize={12}>
                    Real estate salespeople and other licensees who are required to work for and under the umbrella of a designated broker are often
                    referred to as real estate agents.
                </Text>
            </Collapse>
          
        </Stack>
    );
}