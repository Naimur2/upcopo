import * as Clipboard from 'expo-clipboard';
import { HStack, Text, VStack } from "native-base";
import React from "react";
import Icon from "../../../utility/Icon";

export default function CollectionsBody({collectonName,ethAddress,description}) {

    const copyToClipboard = () => {
        setTimeout(()=>{
            Clipboard.setString(ethAddress);
            alert('Address Copied to Clipboard')
        },300)
       
      };

    return (
        <VStack>
            <Text
                fontFamily={"body"}
                fontWeight={700}
                fontSize={16}
                color={"#3D454A"}
                pt={4}
            >
                {collectonName}
            </Text>
            <HStack space={2} alignItems={"center"} py={4}>
                <Text
                    fontFamily={"body"}
                    fontWeight={400}
                    fontSize={14}
                    color={"#3D454A"}
                    maxW={40}
                    numberOfLines={1}
                    _pressed={{color:'#ccc'}} 
                    onPress={copyToClipboard}
                >
                   {ethAddress}
                </Text>
                <Icon _pressed={{color:'#ccc'}} onPress={copyToClipboard} name={"copy"} size={20} color={"#000"} />
            </HStack>
            <Text
                fontFamily={"body"}
                fontWeight={400}
                fontSize={14}
                color={"#687076"}
                numberOfLines={3}
            >
                {description}
            </Text>
        </VStack>
    );
}
