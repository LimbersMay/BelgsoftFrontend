import {AuthLayout} from "../layouts";
import {ErrorMessage, Form, Formik, FormikHelpers} from "formik";
import {Field} from "../../components";

import * as Yup from 'yup';

interface FormValues {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

const initialValues: FormValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
}

export const Register = () => {

    const onSubmit = (values: FormValues, {setSubmitting}: FormikHelpers<FormValues>) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
        }, 4000);
    }

    return (
        <AuthLayout title="Register">
            <Formik
                initialValues={{ ...initialValues }}
                onSubmit={onSubmit}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .required('Required'),
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                        .required('Required'),
                })}
            >
                {
                    ({}) => (
                        <Form className="flex flex-col gap-5">
                            <Field
                                type="text"
                                name="username"
                            />

                            <ErrorMessage name={"username"} component="div" className="text-red-500"/>

                            <Field
                                type="email"
                                name="email"
                            />

                            <ErrorMessage name={"email"} component="div" className="text-red-500"/>

                            <Field
                                type="password"
                                name="password"
                            />

                            <ErrorMessage name={"password"} component="div" className="text-red-500"/>

                            <Field
                                type="password"
                                name="repeatPassword"
                                fieldName="Repeat password"
                            />

                            <ErrorMessage name={"repeatPassword"} component="div" className="text-red-500"/>

                            <button
                                type="submit"
                                className="w-96 bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Register
                            </button>

                        </Form>
                    )
                }
            </Formik>
        </AuthLayout>
    )
}