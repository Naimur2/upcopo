import { Avatar, Box, HStack, Image } from 'native-base';
import React from "react";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default function CollectionsHeader() {
    return (
        <HStack justifyContent={'center'} >
            <Box
              h={windowHeight / 3.5}
                w={'100%'}
                position={'relative'}
                

            >
                <Image
                    alt={'Dragon breathing fire attacks castle'}
                    source={{ uri: 'https://image.freepik.com/free-vector/dragon-breathing-fire-attacks-castle_107791-5336.jpg' }}
                    h={'full'}
                    w={'full'}

                />
               
            </Box>
            <Avatar
                    source={{ uri: 'https://image.freepik.com/free-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-572.jpg' }}
                    size={20}
                    position={'absolute'}
                    bottom={-40}
                
                />


        </HStack>
    );
}
