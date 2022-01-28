import { FlatList } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouses } from "../../../store/slices/housesSlice";
import { getLikes } from "../../../store/slices/likeSlice";
import LovedHousesCard from "./components/LovedHousesCard";
import NoLovedHouses from "./NoLovedHouses";

const renderItem = ({ item }) => {
    return <LovedHousesCard houseId={item.houseId} />;
};

export default function LovedHouses({ navigation }) {
    const houses = useSelector((state) => state.likes.likes);
    const [likedHouses, setLikedHouses] = React.useState([]);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title:
                likedHouses.length > 0
                    ? `${likedHouses.length} Liked houses `
                    : "Liked houses",
        });
    }, [navigation, likedHouses]);

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

    if (likedHouses.length === 0) return <NoLovedHouses />;

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
