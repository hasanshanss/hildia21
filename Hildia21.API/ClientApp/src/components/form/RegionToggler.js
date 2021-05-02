import React, { Component, useState, useEffect } from 'react';
import {BAKU, REGIONAL, ALL} from '../form/constants/regionalConstants'
// import Checkbox from './Checkbox';

const RegionToggler = () => {

    

    return (
        <div style={{margin:"0 auto"}} className="col-sm-12 col-md-7 col-lg-5 col-xl-12 ">
        <div className="choose mt-4 text-center">
            <input value="1" type="radio" name="is_regional" id="rb1"/>
            <label htmlFor="rb1">BAKU</label>
            <input value="0" type="radio" name="is_regional" id="rb2"/>
            <label htmlFor="rb2">ALL</label>
            <input value="2" type="radio" name="is_regional" id="rb3"/>
            <label htmlFor="rb3">REGIONAL</label>
        </div>
    </div>
    );
}

export default RegionToggler;