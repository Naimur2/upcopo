import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { Stack } from "native-base";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default () => {
    const [controlledValue, setControlledValue] = useState(false);

    return (
        <ScrollView>
            <Stack>
                <CollapsibleView title="Basic Usage">
                    <Text style={styles.descriptionText}>
                        I am the root collapsible
                    </Text>
                </CollapsibleView>
            </Stack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
    },
    descriptionText: { textAlign: "center" },
});
