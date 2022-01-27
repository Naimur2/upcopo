import { Box, Center, FlatList, HStack, VStack } from "native-base";
import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouses, housesActions } from "../../../store/slices/housesSlice";
import UtilityBtn from '../.././utility/UtilityBtn';
//import env from "../../../env";
import Search from "../../utility/Search";
import MapScreenCard from './components/MapScreenCard';

export default function MapScreen({ navigation }) {
    const { width, height } = Dimensions.get("window");

    const disPatch = useDispatch();
    const allHouses = useSelector((state) => state.houses.allHouses);
    React.useEffect(() => {
        disPatch(getAllHouses());
        return () => {
            disPatch(housesActions.removeHouses({ type: "allHouses" }));
        };
    }, [navigation]);

    /**
     *   const mapurl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=${env.map}`;
     * 
     */


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Center alignSelf={"center"} my={4} w="85%">
                    <Search />
                </Center>
            ),
            title: "",
            headerStyle: {
                height: 100,

                justifyContent: "center",

                justifyContent: "center",
            },
            headerBackTitleStyle: {
                paddingVertical: 4,
            },
        });
    }, [navigation]);

    const origin = {
        latitude: 40.724066,
        longitude: 285.999418,
    };
    const destination = {
        latitude: 40.720143,
        longitude: 285.998276,
    };
    const renderItem = ({ item }) => (
        <MapScreenCard
        />
    );

    return (
        <VStack flex={1}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 40.724066,
                    longitude: 285.999418,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker coordinate={origin} />

                <Marker coordinate={destination} />
                {/* <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={"AIzaSyDB79QR-FmWtyyrt7mHUDEH0rbRGi2PBxE"} // insert your API Key here
                    strokeWidth={4}
                    strokeColor="#111111"
                    lineDashPattern={[0]}
                /> */}
            </MapView>
            <VStack borderTopRadius={20} h={Math.round(height / 4)} bottom={0} position={'absolute'} flex={0.5} w={width} bg={"#F9F9F9"}>
                <Center>
                    <Box
                        borderRadius={5}
                        mt={4}
                        h={1.5}
                        px="10"
                        bg="#DFE3E6"
                    />
                </Center>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal

                    data={allHouses}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                   
                />
                <HStack
                    w={"100%"}
                    space={"4"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={10}
                    py={2}
                    px="4"
                    flexDir={"row"}

                >
                    <UtilityBtn
                        w="1/2"
                        alignSelf="stretch"
                        title="Map"
                    // onPress={() => navigation.navigate('Gmap')}
                    />
                    <UtilityBtn w="1/2" title="AR" varient="white" />
                </HStack>

            </VStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        flex: 1
    },
});
/**
 * 
 */