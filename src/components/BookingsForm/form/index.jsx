import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import "./index.scss";

const FormBody = () => {
    return (
        <Formik
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
        >
        {({ isSubmitting }) => (
            <Form className="form">
                <div className="form-body d-flex flex-column flex-sm-row flex-wrap gap-4 justify-content-between">
                    <Field type="text" name="station" className="station col-sm-5" placeholder="NDLS , New Delhi Railway Station"/>
                    <Field type="text" name="junction" className="junction col-sm-5" placeholder="LJN, Lucknow Junction"/>
                    <Field type="date" name="date" className="date col-sm-5" placeholder="Wed, 16 Nov 2022"/>
                    <button className="submit col-12" type="submit" disabled={isSubmitting}>
                    Search for trains
                    </button>
                </div>
            </Form>
        )}
        </Formik>
    )
}
export default FormBody;