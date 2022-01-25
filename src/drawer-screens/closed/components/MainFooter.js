import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Actionsheet, Stack, Text } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/slices/authSlice";
import KeyBoardView from "../../../utility/KeyBoardView";
import CModal from "./CModal";
import FooterButton from "./FooterButton";
import ScanFace from "./wallet/ScanFace";
import TransectionPage from "./wallet/TransectionPage";
import Wallet from "./wallet/Wallet";

//onPress={()=>navigation.navigate('Home')}

export const SHeader = ({ title }) => (
    <Text
        fontSize={18}
        fontFamily={"body"}
        fontWeight={400}
        color={"#7E868C"}
        pl={2}
        py={2}
    >
        {title}
    </Text>
);

export default function MainFooter() {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showWallet, setShowWallet] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openFaceModal, setFaceModal] = useState(false);
    const [openTransection, setOpenTransection] = useState(false);

    const [money, setMoney] = useState("0.00");

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.auth);

    const moneyChangeHandler = (cv) => {
        setMoney(cv);
    };

    const handleSubmit = () => {
        setShowWallet(false);
        setFaceModal(true);
    };

    const successHandler = () => {
        setFaceModal(false);
        setOpenTransection(true);
    };

    const logOut = async () => {
        await AsyncStorage.clear();
        await dispatch(authActions.logOut());
    };

    return (
        <Stack bg={"#F9F9F9"} pt={2}>
            <ScanFace onClose={() => setOpenModal(false)} isOPen={openModal} />
            <SHeader title="General Settings" />
            <ScanFace
                isOPen={openFaceModal}
                onClose={() => setFaceModal(false)}
                onSuccess={successHandler}
            />
            <TransectionPage
                isOPen={openTransection}
                onClose={() => setOpenTransection(false)}
            />
            <Stack>
                <FooterButton
                    onPress={() => setShowWallet(true)}
                    title={"Wallet"}
                    leftIcon={"wallet"}
                />
                <Wallet
                    isOpen={showWallet}
                    onClose={() => setShowWallet(false)}
                    onValueChange={moneyChangeHandler}
                    money={money}
                    onSubmit={handleSubmit}
                />

                <FooterButton
                    title={"Notifications"}
                    leftIcon={"notification"}
                    onPress={() => navigation.navigate("Notifications")}
                />
                <FooterButton
                    title={"History"}
                    leftIcon={"history"}
                    onPress={() => navigation.navigate("History")}
                />
                <FooterButton
                    onPress={() => navigation.navigate("Help")}
                    title={"Help"}
                    leftIcon={"headphone"}
                />
            </Stack>

            <FooterButton
                mt={4}
                borderBottomWidth={0}
                title={"Logout"}
                leftIcon={"logout"}
                rightIcon="x"
                onPress={() => setShowModal(true)}
            />

            <CModal
                heading={"Are you sure want to log out?"}
                isOPen={showModal}
                onCancel={() => setShowModal(false)}
                onSuccess={logOut}
                subtitleComponent={
                    <Text
                        fontSize={18}
                        color={"#687076"}
                        fontFamily={"body"}
                        fontWeight={600}
                        textAlign="center"
                    >
                        {userDetails.user}
                    </Text>
                }
            />
        </Stack>
    );
}
