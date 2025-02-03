import React from 'react'
import Cars from "../Practice";

const [ honda , tesla ] = Cars;
// HONDA 
const { speedStats: {topSpeed: hondaTopSpeed} } = honda
const { colorsByPopularity: [hondaTopColor] } = honda

// TESLA
const { speedStats: {topSpeed: teslaTopSpeed}} = tesla
const { colorsByPopularity: [teslaTopColor]} = tesla

function App() {

  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColor}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColor}</td>
        </tr>
      </table>
    </div>
  )
}

export default App
