import React, { Component, useState, useEffect } from 'react'
import { getPeople} from "../pages/peoplePage/peopleActions"
import { updateSearchProperties } from "../pages/peoplePage/peopleConstants"
import { useDispatch, useSelector } from 'react-redux'

const SearchInput = ({name, onChangeHandler, hasValue}) => {
    
    
    return (
        <div className="wrap-input2">
            <input className="input2" type="text" name={name}  onChange={(e) => onChangeHandler(e)} />
            <span className={`focus-input2 ${ hasValue ? "w-value" : ""}`} data-placeholder={name.toUpperCase()}></span>
        </div>
    );
}

export default SearchInput;