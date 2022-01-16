import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "native-base";
import React from "react";
import Banner from "./components/Banner";
import SearchArea from "./components/SearchArea";
import SectionHeader from "./components/SectionHeader";
import SliderHorizontal from "./components/SliderHorizontal";
import TopSeller from "./components/TopSellers";

export default function DashBoardScreen() {
    const navigation = useNavigation();

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
                onSeAllPress={() => navigation.navigate("TrendyHouses")}
            />
            <SliderHorizontal />
            <SectionHeader
                title={"Top Sellers"}
                imageType={"fire"}
                onSeAllPress={() => navigation.navigate("LeaderBoard")}
            />
            <TopSeller />
        </ScrollView>
    );
}
