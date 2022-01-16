import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Stack } from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import FormInput from "../../utility/FormInput";
import UtilityBtn from "../../utility/UtilityBtn";
import FormCheckBox from "../common/FormCheckBox";
import FormFooter from "../common/FormFooter";

export default function RegisterForm({ onFormSubmit }) {
    // will use formik for validation

    const [acceptTerms, setAcceptTerms] = useState(false);

    const navigation = useNavigation();

    const [isPassword, setIsPassword] = useState(true);

    const submitHandler = (values) => {
        if (!acceptTerms) {
            alert("Allcept our Terms");
            return;
        }

        const loginValues = {
            ...values,
            acceptTerms,
        };
        onFormSubmit(loginValues);
    };
    
    const getButtonVariant = (errors) => {
        if (errors.username || errors.password) {
            return "disabled";
        }
        return "";
    };
    const RegisterSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required.")
            .min(4, "Minimum four Digit"),
        email: Yup.string()
            .required("Email is required.")
            .email("Invalid Email"),
        password: Yup.string()
            .required("Password is required.")
            .min(6, "Minimum six Digit"),
    });

    return (
        <Formik
            validationSchema={RegisterSchema}
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={submitHandler}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
            }) => (
                <Stack space="3">
                    <FormInput
                        required
                        value={values.username}
                        onBlur={handleBlur("username")}
                        onChangeText={handleChange("username")}
                        placeHolder={"Username"}
                        leftIcon={"profile"}
                        error={errors.username && touched.username}
                        errorMessage={errors.username}
                    />
                    <FormInput
                        required
                        value={values.email}
                        onBlur={handleBlur("email")}
                        onChangeText={handleChange("email")}
                        placeHolder={"Enter your email"}
                        leftIcon={"envelope"}
                        error={errors.email && touched.email}
                        errorMessage={errors.email}
                    />
                    <FormInput
                        value={values.password}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeHolder={"Password"}
                        error={errors.password && touched.password}
                        errorMessage={errors.password}
                        leftIcon={"lock"}
                        rightIcon={
                            values.password.length > 0 &&
                            (isPassword ? "eye-open" : "eye-off")
                        }
                        type={isPassword && "password"}
                        onRightIconPress={() => setIsPassword((prev) => !prev)}
                    />
                    <FormCheckBox
                        isChecked={acceptTerms}
                        onChange={() => setAcceptTerms((prev) => !prev)}
                        extraText={
                            "By logging in or registering. You agree to our Terms of Service and Privacy Policy."
                        }
                    />
                    <UtilityBtn
                        onPress={handleSubmit}
                        mt="8%"
                        title={"Create Account"}
                        varient={getButtonVariant(errors)}
                        disabled={getButtonVariant(errors)}
                    />
                    <FormFooter
                        bottomText={"Already an account?"}
                        linkText={"Log in"}
                        onLinkPress={() => navigation.navigate("Login")}
                    />
                </Stack>
            )}
        </Formik>
    );
}
