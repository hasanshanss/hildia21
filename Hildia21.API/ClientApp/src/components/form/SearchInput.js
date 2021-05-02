import React, { Component, useState, useEffect } from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import {getPeople} from '../../pages/peoplePage/peopleService'
import {updatePersonProperties} from '../../pages/formPage/formActions'

const SearchInput = ({name}) => {
    
    const dispatch = useDispatch()
    const person = useSelector(state=>state.person)

	const onInputChangeHandler = (e) => {

		const value = e.target.value.toUpperCase();
		person[e.target.name] = value;

        dispatch(updatePersonProperties(person));

		if (value.length > 2) 
		{
			dispatch(getPeople(person));
		}

	}
    
    return (
        <div className="wrap-input2">
            <input className="input2" type="text" name={name}  onChange={(e) => onInputChangeHandler(e)} />
            <span className={`focus-input2 ${ hasValue ? "w-value" : ""}`} data-placeholder={name.toUpperCase()}></span>
        </div>
    );
}

export default SearchInput;