import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTopSellers,
    getTrendyHouses
} from "../../../store/slices/housesSlice";
import Banner from "./components/Banner";
import SearchArea from "./components/SearchArea";
import SectionHeader from "./components/SectionHeader";
import SliderHorizontal from "./components/SliderHorizontal";
import TopCollections from "./components/TopCollections";
import TopSeller from "./components/TopSellers";

export default function DashBoardScreen() {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const trendyHouses = useSelector((state) => state.houses.trendyHouses);
    const topSellers = useSelector((state) => state.houses.topSellers);

    React.useEffect(() => {
        dispatch(getTrendyHouses());
        dispatch(getTopSellers());
    }, []);

    return (
        <ScrollView
            bg="#f9f9f9"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <SearchArea />
            <Banner />
            <SectionHeader
                title={"Trendy houses"}
                imageType={"flash"}
                onSeAllPress={() =>
                    navigation.navigate("TrendyHouses", {
                        type: "trendyHouse",
                    })
                }
            />
            <SliderHorizontal houses={trendyHouses.slice(0, 5)} />
            <SectionHeader
                title={"Top Sellers"}
                imageType={"fire"}
                onSeAllPress={() =>
                    navigation.navigate("TrendyHouses", {
                        type: "typeTopSellers",
                    })
                }
            />
            <TopSeller sellers={topSellers.slice(0, 4)} />

            <SectionHeader
                title={"Top Collections"}
                imageType={"arm"}
                onSeAllPress={() => navigation.navigate("LeaderBoard")}
            />
            
            <TopCollections />
        </ScrollView>
    );
}
