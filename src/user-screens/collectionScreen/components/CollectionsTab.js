import { Box, HStack, Pressable, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";

const Houses = [
    {
        id: "1",
        image: "https://media.istockphoto.com/vectors/fisherman-with-rod-fishing-at-mountain-lake-morning-landscape-vector-vector-id871204174?s=612x612",
        category: "items",
    },
    {
        id: "2",
        image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
        category: "owned",
    },
    {
        id: "3",
        image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
        category: "liked",
    },
    {
        id: "4",
        image: "https://media.istockphoto.com/vectors/fisherman-with-rod-fishing-at-mountain-lake-morning-landscape-vector-vector-id871204174?s=612x612",
        category: "items",
    },
    {
        id: "5",
        image: "https://media.istockphoto.com/vectors/fantasy-blue-castle-on-rock-at-morning-vector-id1301353448?s=612x612",
        category: "owned",
    },
    {
        id: "6",
        image: "https://media.istockphoto.com/vectors/moonlight-scene-vector-id533098513?s=612x612",
        category: "liked",
    },
];

export default function CollectionsTab() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [houses, setHouses] = useState([]);

    const items = [
        { title: "Items", category: "items" },
        { title: "Owned", category: "owned" },
        { title: "Liked", category: "liked" },
    ];

    useEffect(()=>{
        setSelectedCategory("items")
    },[])

    useEffect(()=>{
        const houseItems = Houses.filter(item=>item.category===selectedCategory);
        setHouses(houseItems)
    },[selectedCategory])

 

    return (
        <VStack >
            <HStack justifyContent={"space-between"}>
                {items.map((item, idx) => (
                    <Pressable
                        key={idx.toString()}
                        p="1"
                        borderBottomWidth={
                            item.category === selectedCategory ? 5 : 2
                        }
                        borderBottomColor={"#E6E8EB"}
                        w="1/3"
                        alignItems={"center"}
                        onPress={() => setSelectedCategory(item.category)}
                    >
                        <Text
                            fontWeight={
                                item.category === selectedCategory ? 600 : 400
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
            <HStack flexWrap={"wrap"} my={2} >
                {houses.map((cc, index) => (
                    <Box
                    key={index.toString()}
                        w="50%"
                        pb={4}
                        pr={index % 2 === 0 ? 2 : 0}
                        pl={index % 2 !== 0 ? 2 : 0}

                        h={40}
                    >
                        <Image
                            resizeMode="cover"
                            source={{ uri: cc.image }}
                           style={{width:'100%',height:'100%',borderRadius:10}}
                        />
                    </Box>
                ))}
            </HStack>
        </VStack>
    );
}
