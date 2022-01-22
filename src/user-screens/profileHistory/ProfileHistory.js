import { Box, FlatList, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory, getHistory } from "../../../store/slices/historySlice";

export default function ProfileHistory() {
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch(getHistory());
        return ()=>{
            dispatch(clearHistory())
        }
    },[])

const historyState =useSelector(state=>state.history.history);
    
    const renderItem = ({ item }) => {
        return (
            <HStack pt={4} px={4} justifyContent="space-between" >
                <Box maxW={'18%'} w={[60,72]} h={[60,72]} borderRadius={10} overflow="hidden">
                    <Image
                        alt="img11"
                        source={{ uri: item.imgUrl }}
                        w={"full"}
                        h={"full"}
                    />
                </Box>

                <HStack w="82%" borderBottomWidth={'2'} pb={2} borderBottomColor={'#E6E8EB'}>
                    <HStack w={"80%"} pl={2}>
                        <VStack space={2}>
                            <Text
                                fontFamily={"body"}
                                fontWeight={"600"}
                                color={"#11181C"}
                                fontSize={"16"}
                            >
                                {item.title}
                            </Text>
                            <Text
                                fontFamily={"body"}
                                fontWeight={"400"}
                                color={"#687076"}
                                fontSize={"13"}
                            >
                                {item.subtitle}
                            </Text>
                        </VStack>
                    </HStack>
                    <Text
                        fontFamily={"body"}
                        fontWeight={"400"}
                        color={"#687076"}
                        fontSize={"13"}
                        w="20%"
                    >
                        {item.time}
                    </Text>
                </HStack>
            </HStack>
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={historyState}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
