import React from 'react'
import {Field} from 'formik'


const SearchInput = (props) => {
    
    console.log(props)
    return (
        <div className="wrap-input2">
            <Field className="input2" type="text"  {...props} placeholder="" />
            <span className={`focus-input2 ${ props.valueExists ? "w-value" : ""}`} data-placeholder={props.placeholder.toUpperCase()}></span>
        </div>
    );
}

export default SearchInput;