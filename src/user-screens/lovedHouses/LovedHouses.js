import { FlatList } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLikes, getLikes } from "../../../store/slices/likeSlice";
import LovedHousesCard from "./components/LovedHousesCard";


export default function LovedHouses() {
    const houses=useSelector(state=>state.likes.likes);
  
    const dispatch =useDispatch();


    React.useEffect(()=>{
        dispatch(getLikes())
        return ()=>{
            dispatch(clearLikes());
        }
    },[houses])


    const renderItem = ({ item }) => {
        return (
            <LovedHousesCard
                address={item.address}
                numOfBed={item.bed}
                numOfBath={item.bath}
                isSaved={true}
                price={item.topBid}
                imageUrl={item.image}
                houseId={item._id}
                minimumBid={item.minimumBid}
            />
        );
    };

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={houses}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
