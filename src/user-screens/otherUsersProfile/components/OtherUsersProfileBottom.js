import { useNavigation } from "@react-navigation/native";
import { HStack, Pressable, Text,Box } from "native-base";
import React from "react";
import { Image } from "react-native";
import Icon from "../../../utility/Icon";

const HouseImage = ({ houseUrl, index, onPress, type, ...rest }) => (
    <Pressable
        w="48%"
        h={160}
        pb={4}
        onPress={onPress}
        pr={index % 2 === 0 ? "2%" : 0}
        pl={index % 2 !== 0 ? "2%" : 0}
        overflow="hidden"
        {...rest}
    >
        <Box overflow="hidden">
            <Image
                source={{
                    uri: houseUrl,
                }}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10,
                }}
            >
            
            </Image>
            {type === "saved" && (
                <HStack py={1} px="2"  bottom={0} right={0} bg="#fff" position={'absolute'} space="1" alignItems={'center'}>
                    <Icon color="#687076" name={"saved-fill"} />
                    <Text color="#687076">Product</Text>
                </HStack>
            )}
        </Box>
    </Pressable>
);

export default function OtherUsersProfileBottom({ houses, type }) {
    const navigation = useNavigation();

    //hello
    return (
        <HStack
            alignItems={"center"}
            justifyContent={"center"}
            p={2}
            flexWrap={"wrap"}
        >
            {houses.map((data, index) => (
                <HouseImage
                    index={index}
                    houseUrl={data.image}
                    type={type}
                    key={data._id}
                    onPress={() =>
                        navigation.navigate("House", {
                            house: data,
                        })
                    }
                />
            ))}
        </HStack>
    );
}
