import { Avatar, Box, Center, HStack, Image, Text } from "native-base";
import React from "react";
import { Dimensions, Image as RnImage } from "react-native";
import Card from "../../utility//Card";
import Icon from "../../utility//Icon";
import Varified from "../../utility/Varified";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const source = "../../../assets/images";
const image52 = require(source + "/image52.png");
const image52Uri = RnImage.resolveAssetSource(image52).uri;

const panda_05 = require(source + "/panda_05.png");
const panda_05Uri = RnImage.resolveAssetSource(panda_05).uri;

export default function UserProfile({ route, navigation }) {
    //const { userId } = route.params;
    // changes
    return (
        <Box bg={'#f9f9f9'}>
            <Center>
                <Box w={"full"} h={windowHeight / 3.4} position={"relative"}>
                    <Image
                        alt={"userId"}
                        source={{ uri: image52Uri }}
                        h={"100%"}
                        w={"100%"}
                    />
                </Box>
                <Avatar
                    size={"2xl"}
                    source={{ uri: panda_05Uri }}
                    position={"absolute"}
                    bottom={-50}
                />
            </Center>
            <HStack p={4} justifyContent={"flex-end"}>
                <Card>
                    <Icon name={"export"} size={25} color={"#687076"} />
                </Card>
            </HStack>
            <HStack space={2} alignItems={'center'} justifyContent={'center'} py={1} px={4}>
                <Text color={"#000"} fontWeight={600}>Jhon Doe</Text>
                <Varified h={6} w={6} />
            </HStack>


      
         <HStack space={1}>
                <Card  space={1} flexDirection={'row'}  alignItems={'center'}  justifyContent={'space-between'}>

                <Icon  bg={'#52B69A'} borderRadius={50} name={"search"} size={16} color={"#FFFFFF"} p={2}   />
            
                <Text fontFamily={'body'} color={'#000'}> 85208,Mesa, Az </Text>
                <Box space={2}>
                     <Icon name={'candle'}/>
                </Box>

                </Card>
              
            </HStack>
      

        </Box>
    );
}
