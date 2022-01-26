import { useNavigation } from "@react-navigation/native";
import { HStack, Image, Box ,Pressable} from "native-base";
import React from "react";


    const HouseImage = ({ houseUrl, index,onPress, ...rest }) => (
        <Pressable
            w="48%"
            h={160}
            pb={4}
            onPress={onPress}
            pr={index % 2 === 0 ? "2%" : 0}
            pl={index % 2 !== 0 ? "2%" : 0}
            {...rest}
        >
            <Image
                source={{
                    uri: houseUrl,
                }}
                alt={"house image"}
                h={"100%"}
                w={"100%"}
                borderRadius={20}
            />
        </Pressable>
    );

export default function OtherUsersProfileBottom({houses}) {
    const navigation=useNavigation()
    
    //hello
    return (
        <HStack alignItems={'center'} justifyContent={'center'} p={2} flexWrap={"wrap"} >
            {houses.map((data, index) => (
                <HouseImage
                    index={index}
                    houseUrl={data.image}
                    key={data._id}
                    onPress={()=>navigation.navigate('House',{
                        house:data,
                    })}
                />
            ))}
        </HStack>
    );
}
