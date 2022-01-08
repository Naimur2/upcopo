import { Box, Center, Pressable,Text } from "native-base";
import * as React from "react";
import { Animated, Dimensions, StatusBar } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

const FirstRoute = () => <Center bg={"amber.100"}>This is Tab 1</Center>;

const SecondRoute = () => <Center bg={"amber.100"}>This is Tab 2</Center>;

const ThirdRoute = () => <Center bg={"amber.100"}>This is Tab 3</Center>;

const FourthRoute = () => <Center bg={"amber.100"}>This is Tab 4 </Center>;

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
});

export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "Tab 1" },
        { key: "second", title: "Tab 2" },
        { key: "third", title: "Tab 3" },
        { key: "fourth", title: "Tab 4" },
    ]);

    const renderTabBar = (props) => {
        return (
            <Box flexDirection="row">
                {props.navigationState.routes.map((route, i) => {
                    const color = index === i ? "#000000" : "#687076";
                    const borderColor =
                        index === i ? "cyan.600" : "coolGray.100";

                    return (
                        <Box
                            borderBottomWidth="3"
                            borderColor={borderColor}
                            flex={1}
                            bg="#FFFFFF"
                        >
                            <Pressable
                                p="2"
                                w="full"
                                
                                onPress={() => {
                                    console.log(i);
                                    setIndex(i);
                                }}
                            >
                                <Text color={ color }>
                                    {route.title}
                                </Text>
                            </Pressable>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ marginTop: StatusBar.currentHeight }}
        />
    );
}
