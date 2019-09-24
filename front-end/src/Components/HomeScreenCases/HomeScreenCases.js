import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";





const UsForm = ({ errors, touched, values, status }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (status) {
            setData([...data, status]);
        }
    }, [status]);

    return (
        <div className="data-form">
            <h1>Home Screen</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && values.name && errors.name && < p className="error">{errors.name}</p>}

                <Field type="text" name="lastlocation" placeholder="Last Location" />
                {touched.lastLocation && values.lastLocation && errors.lastLocation && (
                    <p className="error">{errors.lastLocation}</p>
                )}

                <Field type="text" name="currentcity" placeholder="Current City" />
                {touched.currentCity && values.currentCity && errors.currentCity && (
                    <p className="error">{errors.currentCity}</p>
                )}
                <Field type="text" name="relationship" placeholder="Relationship" />
                {touched.relationship && values.relationship && errors.relationship && (
                    <p className="error">{errors.relationship}</p>
                )}
                <Field type="text" name="familymember" placeholder="Family Member" />
                {touched.familyMember && values.familyMember && errors.familyMember && (
                    <p className="error">{errors.familyMember}</p>
                )}

                <Field type="text" name="fammemberlastlocation" placeholder="Family Member Last Location" />
                {touched.famMemberLastLocation && values.famMemberLastLocation && errors.famMemberLastLocation && (
                    <p className="error">{errors.famMemberLastLocation}</p>
                )}

                <Field type="text" name="volunteer" placeholder="Volunteer" />
                {touched.volunteer && values.volunteer && errors.volunteer && (
                    <p className="error">{errors.volunteer}</p>
                )}


                <button type="submit">Submit!</button>
            </Form>

            {
                data.map(data => (
                    <ul key={data.id}>
                        <li>Name: {data.name}</li>
                        <li>Last Location: {data.lastLocation}</li>
                        <li>Current City: {data.currentCity}</li>
                        <li>Relationship: {data.relationship}</li>
                        <li>Family Member Last Location: {data.famMemberLastLocation}</li>
                        <li>Family Member: {data.familyMember}</li>
                        <li>Volunteer: {data.volunteer}</li>
                    </ul>
                ))
            }
        </div >
    );
};


const FormikDataForm = withFormik({

    mapPropsToValues({ name, lastLocation, currentCity, familyMember, relationship, famMemberLastLocation, volunteer }) {
        return {

            name: name || "",
            lastLocation: lastLocation || "",
            currentCity: currentCity || "",
            familyMember: familyMember || "",
            relationship: relationship || "",
            famMemberLastLocation: famMemberLastLocation || "",
            volunteer: volunteer || "",
        };
    },


    handleSubmit(values, { setStatus }) {
        axios

            .post("https://reqres.in/api/users/", values)
            .then(res => {
                setStatus(res.data);
            })
            .catch(err => console.log(err.response));
    }
})(UsForm);
export default FormikDataForm;