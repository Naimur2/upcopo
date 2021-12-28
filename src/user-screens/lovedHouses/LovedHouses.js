import { FlatList } from "native-base";
import React from "react";
import LovedHousesCard from "./components/LovedHousesCard";

export default function LovedHouses() {
    const lovedHouse = [
        {
            _id: "1",
            imageUrl: 'https://thelens.news/app/uploads/2020/12/236-456x342.jpg',
            address: '889 Palmeron Ave, Mcd..',
            numOfBed: 2,
            numOfBath: 3,
            isSaved: true,
            price: 0.05686,
        },
        {
            _id: "2",
            imageUrl: 'https://thelens.news/app/uploads/2020/12/236-456x342.jpg',
            address: '889 Palmeron Ave, Mcd..',
            numOfBed: 2,
            numOfBath: 3,
            isSaved: false,
            price: 0.05686,
        },

    ]
const renderItem=({item})=>(
    <LovedHousesCard
    address={item.address}
    numOfBed={item.numOfBed}
    numOfBath={item.numOfBath}
    isSaved={item.isSaved}
    price={item.price}
    imageUrl={item.imageUrl}
    onPlaceBid={() => console.log('Place a bid')}
/>
)
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
       
        data={lovedHouse}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
    />
    /*
     <Stack py={10} space={4}>
            <LovedHousesCard
                key={"a"}
                address
                numOfBed
                numOfBath
                isSaved
                price
                onPlaceBid={() => console.log('Place a bid')}
            />
        </Stack>
    
    */
       
    );
}

/*

   <HStack space={6}>
                <HStack alignItems={'center'} >
                    <Icon name={'bed-filled'} size={20} color={'#889096'} />
                    <Text color={'#687076'} fontFamily={'body'} fontSize={12}>3 bed</Text>
                </HStack>
                <HStack space={2} alignItems={'center'} >
                    <Icon name={'bath'} size={20} color={'#889096'} />
                    <Text color={'#687076'} fontFamily={'body'} fontSize={12}>2 bath</Text>
                </HStack>
                <HStack space={2} alignItems={'center'} >
                    <Icon name={'heart-dark'} size={20} color={'#000'} />
                    <Text color={'#687076'} fontFamily={'body'} fontSize={12}>Saved</Text>
                </HStack>

*/
