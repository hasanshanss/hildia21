
import React, { Component, useState, useEffect } from 'react'
import SearchInput from './SearchInput'
import Checkbox from './Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { getPeople } from "../pages/peoplePage/peopleActions"

const Form = () => {
	const dispatch = useDispatch();
	const [person, setPerson] = useState({});
	const inputs = ["lastname", "name", "father", "dob", "address"];
	
	const onChangeHandler = (e) => {

		const value = e.target.value.toUpperCase();
		person[e.target.name] = value;
		setPerson({ ...person });

		if (value.length > 2) 
		{
			dispatch(getPeople(person));
		}

	}
	return (
		<div className="wrap-contact2">
			<form className="contact2-form">
				{
					inputs.map((name, i) => {
						return <SearchInput 
									key={i} 
									name={name} 
									hasValue={person[name]} 
									onChangeHandler={(e) => onChangeHandler(e)} />
					})
				}
			

				{/* <div class="row">
					<div class="col-md-12">
						<Checkbox text="Family"/>
						<Checkbox text="Neighborhood"/>
					</div>
				</div> */}

			</form>
		</div>
	);
}

export default Form;