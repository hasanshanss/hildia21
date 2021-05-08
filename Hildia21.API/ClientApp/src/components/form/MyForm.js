import { Row, Col } from 'react-bootstrap'
import React, { useEffect } from 'react'
import Table from '../table/Table'
import SearchInput from './SearchInput'
import { useDispatch } from 'react-redux'
import { useFormikContext, Formik, Form, Field } from 'formik'

import { peopleFetchAll } from '../../pages/peoplePage/peopleActions'

export const MyForm = () => {

    const dispatch = useDispatch();

    const FormikContext = () => {

        const formik = useFormikContext();

        useEffect(() => {
            dispatch(peopleFetchAll(formik.values))
        }, [formik.values]);
        return null;
    };


    const initialValues = {
        name: '',
        lastname: '',
        address: '',
        dob: '',
        father: '',
        is_regional: ''
    }


    return (
        <React.Fragment>
            <Formik {...{ initialValues }}>

                {props => (

                    <Form className="contact2-form">
                        <FormikContext />
                        <Row>
                            <Col md="4">
                                <SearchInput
                                    valueExists={props.values.lastname}
                                    name="lastname"
                                    placeholder="Lastname" />

                                <SearchInput
                                    valueExists={props.values.name}
                                    name="name"
                                    placeholder="Firstname" />

                                <SearchInput
                                    valueExists={props.values.father}
                                    name="father"
                                    placeholder="Father name" />

                                <SearchInput
                                    valueExists={props.values.address}
                                    name="address"
                                    placeholder="Address" />

                                <SearchInput
                                    valueExists={props.values.dob}
                                    name="dob"
                                    placeholder="Date Of Birth" />

                            </Col>
                            <Col md="8">
                                <div style={{ margin: "0 auto" }} className="col-sm-12 col-md-7 col-lg-5 col-xl-12 ">
                                    <div className="choose mt-4 text-center">

                                        <Field value="0" type="radio" name="is_regional" id="rb1" />
                                        <label htmlFor="rb1">BAKU</label>

                                        <Field value="" type="radio" name="is_regional" id="rb2" />
                                        <label htmlFor="rb2">ALL</label>

                                        <Field value="1" type="radio" name="is_regional" id="rb3" />
                                        <label htmlFor="rb3">REGIONAL</label>

                                    </div>
                                </div>
                                <Table />
                            </Col>
                        </Row>

                    </Form>
                )}


            </Formik>

        </React.Fragment>
    );
}

