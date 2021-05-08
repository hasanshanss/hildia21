import React, {useEffect } from 'react';
import TableRow from './TableRow';
import { useDispatch, useSelector } from 'react-redux';




const Table = () => {

  const dispatch = useDispatch();
  const { people, error, loading } = useSelector(({peopleReducer}) => peopleReducer)
  
  
  useEffect(() => {
    // dispatch(fetchPeopleOne(1));
  }, [])

  const isData = () => {

    if (loading) {
      return <td>Loading...</td>
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
                ? console.error(error)
                : isData()
              }
            </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;