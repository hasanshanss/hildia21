import React from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import {peopleFetchAll} from '../../pages/peoplePage/peopleActions'
import {updatePersonProperties} from '../../pages/formPage/formActions'

const SearchInput = ({name}) => {
    
    const dispatch = useDispatch()
    const {person} = useSelector(({formReducer})=>formReducer)

	const onInputChangeHandler = (e) => {

		const value = e.target.value.toUpperCase();
		person[e.target.name] = value;

        dispatch(updatePersonProperties(person));
        dispatch(peopleFetchAll(person));
        console.log(person)
        
	}
    
    return (
        <div className="wrap-input2">
            <input className="input2" type="text" name={name}  onChange={(e) => onInputChangeHandler(e)} />
            <span className={`focus-input2 ${ person[name] ? "w-value" : ""}`} data-placeholder={name.toUpperCase()}></span>
        </div>
    );
}

export default SearchInput;