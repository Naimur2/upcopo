import { useNavigation } from "@react-navigation/native";
import { HStack, Pressable, Text, VStack } from "native-base";
import React from "react";
import { Image } from "react-native";


const categories = [
    { title: "Items", category: "items" },
    { title: "Owned", category: "owned" },
    { title: "Liked", category: "liked" },
];

export default function CollectionsTab({data,onTabPress,currentTab}) {
const navigation= useNavigation()
    return (
        <VStack>
            <HStack justifyContent={"space-between"}>
                {categories.map((item, idx) => (
                    <Pressable
                        key={idx.toString()}
                        p="1"
                        borderBottomWidth={
                            item.category === currentTab ? 5 : 2
                        }
                        borderBottomColor={"#E6E8EB"}
                        w="1/3"
                        alignItems={"center"}
                        onPress={() => onTabPress(item.category)}
                    >
                        <Text
                            fontWeight={
                                item.category === currentTab ? 600 : 400
                            }
                            fontFamily={"body"}
                            fontSize={20}
                            color={"#7E868C"}
                            textAlign="center"
                        >
                            {item.title}
                        </Text>
                    </Pressable>
                ))}
            </HStack>
            <HStack flexWrap={"wrap"} my={2}>
                {data.map((cc, index) => (
                    <Pressable
                        key={index.toString()}
                        w="50%"
                        pb={4}
                        pr={index % 2 === 0 ? 2 : 0}
                        pl={index % 2 !== 0 ? 2 : 0}
                        h={40}
                        onPress={() =>
                            navigation.navigate("House", {
                                house: cc,
                            })
                        }
                    >
                        <Image
                            resizeMode="cover"
                            source={{ uri: cc.image }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 10,
                            }}
                        />
                    </Pressable>
                ))}
            </HStack>
        </VStack>
    );
}
