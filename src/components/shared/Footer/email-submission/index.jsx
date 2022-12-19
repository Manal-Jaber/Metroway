import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './index.scss'
import submitIcon from "assets/icons/submit.svg"

const EmailSubmission = () => {
    return (
        <div className="email-submission">
            <Formik
                initialValues={{ email: ''}}
                validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <div className="submit-line d-flex flex-row justify-content-between">
                    <Field type="email" name="email" className="email" placeholder="Enter Email ID"/>
                    <button className="submit" type="submit" disabled={isSubmitting}>
                        <img src={submitIcon} alt="submit"/>
                    </button>
                </div>
                <ErrorMessage name="email" component="div" />
                </Form>
            )}
            </Formik>
        </div>
    )
};
export default EmailSubmission;