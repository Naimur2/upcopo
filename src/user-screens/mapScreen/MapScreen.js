import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import env from "../../../env";

export default function MapScreen() {
    const mapurl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
  &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
  &markers=color:red%7Clabel:C%7C40.718217,-73.998284
  &key=${env.map}`;

    const origin = {
        latitude: 23.806944,
        longitude: 90.368384,
    };
    const destination = {
        latitude: 23.808201,
        longitude: 90.36881,
    };
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 23.806944,
                    longitude: 90.368384,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker coordinate={origin} />

                <Marker coordinate={destination} />
                <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyDB79QR-FmWtyyrt7mHUDEH0rbRGi2PBxE'} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
          lineDashPattern={[0]}
        />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
