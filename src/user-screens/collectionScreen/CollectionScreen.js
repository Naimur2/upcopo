import { useNavigation } from "@react-navigation/native";
import { Avatar, ScrollView, Stack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import CollectionButtons from "./components/CollectionButtons";
import CollectionsBody from "./components/CollectionsBody";
import CollectionsHeader from "./components/CollectionsHeader";
import CollectionsTab from "./components/CollectionsTab";

// <CollectionsHeader />
export default function Collections() {
    const navigation = useNavigation();

    const data = {
        _id: "3",
        name: "Boston Club",
        varified: false,
        price: 15499.86,
        priceUp: true,
        avatar: "https://img.freepik.com/free-vector/cute-cartoon-panda-astronaut-with-moon_60438-1427.jpg?size=338&ext=jpg",
        priceUpPercentage: 46.03,
        standings: 3,
        ethAddress: "0xet54trw757007QR5e5c757007",
        description:
            "Sometimes in life we have to just go with the vibe. Enjoy the unbothered moments in life to create in your space",
        coverPhoto:
            "https://image.freepik.com/free-vector/dragon-breathing-fire-attacks-castle_107791-5336.jpg",
        items: "10100",
        floorPrice: "4.2",
        owners: "5900",
        volume: "237000000",
    };

    const width = Dimensions.get("window").width;

    const numFormatter=(num)=> {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        }
        else if(num > 1000000 && num < 1000000000){
            return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        }
        else if(num > 1000000000){
            return (num/1000000000).toFixed(1) + 'B'; // convert to M for number from > 1 million 
        }
        else if(num < 900){
            return num; // if value < 1000, nothing to do
        }
    }


    return (
        <ScrollView bg="#f9f9f9">
            <Stack>
                <CollectionsHeader coverPhoto={data.coverPhoto} />
                <Stack px={4}>
                    <Stack
                        width={width}
                        bg="#f9f9f9"
                        position={"absolute"}
                        alignItems={"center"}
                        top="-50"
                        borderTopRadius={40}
                    >
                        <Avatar
                            source={{
                                uri: data.avatar,
                            }}
                            size={24}
                            top="-40"
                        />
                    </Stack>
                    <Stack>
                        <CollectionsBody
                            description={data.description}
                            collectonName={data.name}
                            ethAddress={data.ethAddress}
                        />
                        <CollectionButtons
                            items={numFormatter(+data.items)}
                            floorPrice={`${data.floorPrice} ETH`}
                            owners={numFormatter(data.owners)}
                            volume={numFormatter(+data.volume)}
                            onItemKeyPress={() =>
                                navigation.navigate("UserProfile")
                            }
                        />
                        <CollectionsTab />
                    </Stack>
                </Stack>
            </Stack>
        </ScrollView>
    );
}
