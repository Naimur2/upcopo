import { ScrollView, View } from "native-base";
import React from "react";
import Screen from "../../utility/Screen";
import ImageSlider from "./components/ImageSlider";
import SearchArea from "./components/SearchArea";
import SectionHeader from "./components/SectionHeader";
import TopSeller from "./components/TopSellers";
import SliderHorizontal from "./components/SliderHorizontal";
import { useNavigation } from "@react-navigation/native";

export default function DashBoardScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView bg="#f9f9f9">
            <SearchArea />
            <ImageSlider />
            <SectionHeader
                title={"Trendy houses"}
                imageType={"flash"}
                onSeAllPress={() => navigation.navigate("TrendyHouses")}
            />
            <SliderHorizontal />
            <SectionHeader title={"Top Sellers"} imageType={"fire"} />
            <TopSeller />
        </ScrollView>
    );
}
