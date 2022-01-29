import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Stack, Text } from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/slices/authSlice";
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
    const minimum = 0.8;
    const [money, setMoney] = useState("0.00");
    const [error, setError] = React.useState("");

    const hasError = (vari) => {
        if (+vari < +minimum) {
            setError("Please use more value");
            return true;
        }
        if (+vari < +0) {
            setError("Please use more value");
            return true;
        }

        if (vari === "") {
            setError("Invalid amount");
            return true;
        }
        setError("");
        return false;
    };

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.auth);
    // wallet textinput handler
    const moneyChangeHandler = (cv) => {
        hasError(cv);
        setMoney(cv);
    };

    // wallet handler
    const handleSubmit = () => {
        if (hasError(money)) {
            return;
        } else {
            setShowWallet(false);
            setFaceModal(true);
        }
    };

    //face recognition handler
    const successHandler = () => {
        setFaceModal(false);
        setOpenTransection(true);
    };
    // logout function
    const logOut = async () => {
        await AsyncStorage.clear();
        await dispatch(authActions.logOut());
    };

    return (
        <Stack bg={"#F9F9F9"} pt={2}>
            {/* section header */}
            <SHeader title="General Settings" />

            <Stack>
                {/* show wallet button */}
                <FooterButton
                    onPress={() => setShowWallet(true)}
                    title={"Wallet"}
                    leftIcon={"wallet"}
                />

                {/* notifications buton */}
                <FooterButton
                    title={"Notifications"}
                    leftIcon={"notification"}
                    onPress={() => navigation.navigate("Notifications")}
                />

                {/* show history button */}
                <FooterButton
                    title={"History"}
                    leftIcon={"history"}
                    onPress={() => navigation.navigate("History")}
                />

                {/* help button */}
                <FooterButton
                    onPress={() => navigation.navigate("Help")}
                    title={"Help"}
                    leftIcon={"headphone"}
                />
            </Stack>

            {/* logout button */}
            <FooterButton
                mt={4}
                borderBottomWidth={0}
                title={"Logout"}
                leftIcon={"logout"}
                rightIcon="x"
                onPress={() => setShowModal(true)}
            />

            {/* face scan modal */}
            <ScanFace
                isOPen={openFaceModal}
                onClose={() => setFaceModal(false)}
                onSuccess={successHandler}
            />
            {/* transection modal view */}
            <TransectionPage
                isOPen={openTransection}
                onClose={() => setOpenTransection(false)}
            />
            {/* wallet modal view */}

            <Wallet
                isOpen={showWallet}
                onClose={() => setShowWallet(false)}
                onValueChange={moneyChangeHandler}
                money={money}
                onSubmit={handleSubmit}
                errorMessage={error}
            />

            {/* modal for showing log out  */}
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
