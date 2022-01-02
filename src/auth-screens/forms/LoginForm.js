import React, { useState } from "react";
import { Stack } from "native-base";
import UtilityBtn from "../../utility/UtilityBtn";
import FormCheckBox from "../common/FormCheckBox";
import FormFooter from "../common/FormFooter";
import FormInput from "../../utility/FormInput";
import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

export default function LoginForm() {
    const navigation = useNavigation();
    const [isPassword, setIsPassword] = useState(true);

    const LoginSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
    });

    const getButtonVariant = (errors) =>
        Object.keys(errors).length > 0 ? "disabled" : "";

    return (
        <Formik
            validationSchema={LoginSchema}
            initialValues={{ name: "", password: "" }}
            onSubmit={(values) => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Stack space="3">
                    <FormInput
                        value={values.name}
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        placeHolder={"Name"}
                        leftIcon={"profile"}
                    />
                    <FormInput
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        placeHolder={"Password"}
                        leftIcon={"lock"}
                        rightIcon={
                            values.password.length > 0 &&
                            (isPassword ? "eye-open" : "eye-off")
                        }
                        type={isPassword && "password"}
                        onRightIconPress={() => setIsPassword((prev) => !prev)}
                    />
                    <FormCheckBox
                        checkBoxText={"Remember Me"}
                        secondaryText={"Forget password ?"}
                        onForgetPress={() => navigation.navigate("ForgotPass")}
                    />
                    <UtilityBtn
                        mt="8%"
                        varient={getButtonVariant(errors)}
                        title={"Log In"}
                        onPress={handleSubmit}
                        disabled={getButtonVariant(errors)}
                    />
                    <FormFooter
                        bottomText={" Didn’t have an account?"}
                        linkText={"Sign Up"}
                        onLinkPress={() => navigation.navigate("Register")}
                    />
                </Stack>
            )}
        </Formik>
    );
}
