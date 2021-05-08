import { Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import Table from '../table/Table'
import SearchInput from './SearchInput'
import { useDispatch } from 'react-redux'
import {useFormik} from 'formik'
import { peopleFetchAll } from '../../pages/peoplePage/peopleActions'

export const Form = () => {


    const formik  = useFormik({
        initialValues:{
            name:'',
            lastname:'',
            address:'',
            dob:'',
            father:'',
            is_regional:''
        }
    })

    console.log(formik.values)

    const dispatch = useDispatch()
    const [person, setPerson] = useState({})


    // const onInputChangeHandler = (e) => {
    //     person[e.target.name] = e.target.value.toUpperCase();
    //     setPerson(person);
    //     console.log(person)
    //     dispatch(peopleFetchAll(person));
    // }


    return (
        <React.Fragment>
            <form className="contact2-form">
                <Row>
                    <Col md="4">

                        <SearchInput
                            onInputChangeHandler={formik.handleChange}
                            name="lastname"
                            placeholder="Lastname" />

                        <SearchInput
                            onInputChangeHandler={formik.handleChange}
                            name="name"
                            placeholder="Firstname" />

                        <SearchInput
                            onInputChangeHandler={formik.handleChange}
                            name="father"
                            placeholder="Father name" />

                        <SearchInput
                            onInputChangeHandler={formik.handleChange}
                            name="address"
                            placeholder="Address" />

                        <SearchInput
                            onInputChangeHandler={formik.handleChange}
                            name="dob"
                            placeholder="Date Of Birth" />

                    </Col>
                    <Col md="8">
                        <div style={{ margin: "0 auto" }} className="col-sm-12 col-md-7 col-lg-5 col-xl-12 ">
                            <div className="choose mt-4 text-center">
                                <input value="0" type="radio" name="is_regional" id="rb1" onChange={formik.handleChange}/>
                                <label htmlFor="rb1">BAKU</label>
                                <input value="" type="radio" name="is_regional" id="rb2" onChange={formik.handleChange}/>
                                <label htmlFor="rb2">ALL</label>
                                <input value="1" type="radio" name="is_regional" id="rb3"  onChange={formik.handleChange} />
                                <label htmlFor="rb3">REGIONAL</label>
                            </div>
                        </div>
                        <Table />
                    </Col>
                </Row>
            </form>

        </React.Fragment>
    );
}

