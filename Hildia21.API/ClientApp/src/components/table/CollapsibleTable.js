import React, { useState, useEffect } from "react";
import { Accordion, useAccordionToggle } from 'react-bootstrap'
import { Collapse } from "react-bootstrap";

function CollapsibleTable({ children, ...props }) {
  const { title } = props;

  return (
    <React.Fragment>
      <tr>
        <td colSpan="3" style={{ padding: "0px" }} >
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr className="tableHeader bg-pink">
                  <th></th>
                  <th>{title} </th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content tbl-additional">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td>SULEYMANLI HESEN ERKIN OGLU</td>
                  <td>SEMED VURGHUN KUCESI DALAN 2 EV 4</td>
                  <td>1996</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}


export default CollapsibleTable;