import { ScrollView, Stack } from 'native-base';
import React from "react";
import CollectionsBody from './components/CollectionsBody';
import CollectionsFooter from './components/CollectionsFooter';
import CollectionsHeader from './components/CollectionsHeader';
// <CollectionsHeader />
export default function Collections() {
    return (
        <ScrollView>
            <Stack>
                <CollectionsHeader />

                <CollectionsBody />
                <CollectionsFooter />
            </Stack>
        </ScrollView>

    );
}
