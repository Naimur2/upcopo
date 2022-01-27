import { FlatList } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouses } from "../../../store/slices/housesSlice";
import { clearLikes, getLikes } from "../../../store/slices/likeSlice";
import useHouse from "../../hooks/useHouse";
import LovedHousesCard from "./components/LovedHousesCard";

const renderItem = ({ item }) => {
    return <LovedHousesCard houseId={item.houseId} />;
};

export default function LovedHouses() {
    const houses = useSelector((state) => state.likes.likes);
    const [likedHouses, setLikedHouses] = React.useState([]);
    const dispatch = useDispatch();

    let clear = true;

    React.useEffect(() => {
        dispatch(getLikes());
        dispatch(getAllHouses());
        if (clear)
            return () => {
                clear = false;
            };
    }, []);

    React.useEffect(() => {
        setLikedHouses(houses);
        if (clear)
            return () => {
                clear = false;
            };
    }, [houses]);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={likedHouses}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
