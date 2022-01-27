import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHouses } from "../../store/slices/housesSlice";
import { likeAction } from "../../store/slices/likeSlice";

export default function useHouse(houseId) {
    const [house, setHouse] = React.useState({});

    const houses = useSelector((state) => state.houses.allHouses);

    React.useEffect(() => {
        const h = houses.filter((hh) => hh._id === houseId);
        if (h.length > 0) setHouse(h[0]);
    }, []);

    return house;
}
