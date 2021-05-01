
import React, { useState, useEffect } from "react";
import { Accordion, useAccordionToggle } from 'react-bootstrap'
import CollapsibleTable from './CollapsibleTable';

function TableRow({ children, ...props }) {

  const { collapse = false, person } = props;

  const toggle = useAccordionToggle("0", () =>
    console.log('totally custom!'),
  );


  return (
    <React.Fragment>
      <tr
        data-toggle="collapse"
        data-target=".multi-collapse1"
        aria-controls="multiCollapseExample1"
        className="clickable-tr"
      >
        <td>{person.lastname} {person.name} {person.father}</td>
        <td>{person.address}</td>
        <td>{person.dob}</td> 
      </tr>
      <tr>
        <td colSpan="3" style={{ padding: "0px" }}>

          <div className="collapse multi-collapse1" id="multiCollapseExample1">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <CollapsibleTable title="Family"></CollapsibleTable>
                <CollapsibleTable title="Neighborhood"></CollapsibleTable>
              </tbody>
            </table>
          </div>
        </td>
      </tr>

    </React.Fragment>
  );
}

export default TableRow;