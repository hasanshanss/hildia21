import React, { Component, useState, useEffect } from 'react';
import TableRow from './TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, fetchPeopleOne } from "../../pages/peoplePage/peopleActions"
import { peopleReducer } from '../../pages/peoplePage/peopleReducer';



const Table = () => {

  const dispatch = useDispatch();
  const { people, error, loading } = useSelector(state => state)
  console.log(people)

  useEffect(() => {
    dispatch(fetchPeopleOne(1));
  }, [])

  const isData = () => {
    if (loading) {
      return "Loading..."
    } else {

      if(Array.isArray(people))
        return people.map((value, i) => <TableRow key={i} person={value} />)
      else
        return <TableRow key={1} person={people} />;
    }
  }

  return (
    <section>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr className="tableHeader">
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DOB</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content tbl-main">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {
              error
                ? alert(error)
                : isData()
              }
            </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;