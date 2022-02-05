import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
    collectionsActions,
    getCollections
} from "../../../store/slices/collectionsSlice";
import SafeAreaNew from "../../utility/SafeAreaNew";
import TopCollections from "../common/TopCollections";
import Banner from "./components/Banner";
import SearchArea from "./components/SearchArea";
import SectionHeader from "./components/SectionHeader";
import TopSeller from "./components/TopSellers";
import TrendyHouses from "./components/TrendyHouses";

export default function DashBoardScreen() {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const collections = useSelector((state) => state.collections.collections);

    React.useEffect(() => {
        dispatch(getCollections());
        return () => {
            dispatch(collectionsActions.removeAllCollections());
        };
    }, []);

    return (
        <SafeAreaNew>
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
                            type: "trendyHouses",
                        })
                    }
                />
                <TrendyHouses />
                <SectionHeader
                    title={"Top Bids"}
                    imageType={"fire"}
                    onSeAllPress={() =>
                        navigation.navigate("TrendyHouses", {
                            type: "topSellers",
                        })
                    }
                />
                <TopSeller />

                <SectionHeader
                    title={"Top Collections"}
                    imageType={"arm"}
                    onSeAllPress={() => navigation.navigate("TopCollections")}
                />

                <TopCollections collections={collections.slice(0, 4)} />
            </ScrollView>
        </SafeAreaNew>
    );
}
