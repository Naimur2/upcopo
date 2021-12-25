import { ScrollView,View } from "native-base";
import React from "react";
import Screen from "../../utility/Screen";
import ImageSlider from "./components/ImageSlider";
import SearchArea from "./components/SearchArea";
import SectionHeader from "./components/SectionHeader";
import TopSeller from "./components/TopSellers";
import SliderHorizontal from "./components/SliderHorizontal";



export default function DashBoardScreen() {

 


    return (
        <ScrollView bg="#f9f9f9">
                <SearchArea />
                <ImageSlider />
                <SectionHeader title={"Trendy houses"} imageType={"flash"} />
                <SliderHorizontal />
                <SectionHeader title={"Top Sellers"} imageType={"fire"} />
                <TopSeller />
        </ScrollView>
    );
}
