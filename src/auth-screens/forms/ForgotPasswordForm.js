import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Stack } from "native-base";
import React from "react";
import * as Yup from "yup";
import FormInput from "../../utility/FormInput";
import UtilityBtn from "../../utility/UtilityBtn";

export default function ForgotPasswordForm({onFormSubmit}) {
    
    const forgotPassSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required.")
            .email("Invalid Email"),
    });

    const submitHandler = async (values) => {
        await onFormSubmit(values);
    };

    return (
        <Formik
            validationSchema={forgotPassSchema}
            initialValues={{ email: "" }}
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
                        value={values.email}
                        onBlur={handleBlur("email")}
                        onChangeText={handleChange("email")}
                        placeHolder={"Enter your email"}
                        leftIcon={"envelope"}
                        error={errors.email && touched.email}
                        errorMessage={errors.email}
                    />

                    <UtilityBtn
                        onPress={handleSubmit}
                        mt="40%"
                        varient={touched.email && errors.email ? "disabled":''}
                        title={"Submit"}
                    />
                </Stack>
            )}
        </Formik>
    );
}
