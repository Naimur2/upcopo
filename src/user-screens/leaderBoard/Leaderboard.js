import { Box, Text,ScrollView } from "native-base";
import React from "react";
import Card from "../../utility/Card";

export default function Leaderboard() {
    return (
        <ScrollView bg="#f9f9f9" p={4}>
            <Card >
                <Text color={'dark.100'}>Sohan</Text>
            </Card>
        </ScrollView>
    );
}
