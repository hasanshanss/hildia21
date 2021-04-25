import React, { Component, useState, useEffect } from 'react';
// import SearchInput from './SearchInput';
// import Checkbox from './Checkbox';

const RegionToggler = () => {
    return (
        <div style={{margin:"0 auto"}} className="col-sm-12 col-md-7 col-lg-5 col-xl-12 ">
        <div className="choose mt-4 text-center">
            <input value="1" type="radio" name="serviceType" id="rb1"/>
            <label htmlFor="rb1">BAKU</label>
            <input value="0" type="radio" name="serviceType" id="rb2"/>
            <label htmlFor="rb2">ALL</label>
            <input value="2" type="radio" name="serviceType" id="rb3"/>
            <label htmlFor="rb3">REGIONAL</label>
        </div>
    </div>
    );
}

export default RegionToggler;