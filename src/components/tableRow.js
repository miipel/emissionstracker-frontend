import React from 'react'

const tableRow = (props) => (
  <tr>
    <td>{props.location}</td>
    <td>{props.year}</td>
    <td>{props.emissions}</td>
    <td>{props.population}</td>
  </tr>
)

export default tableRow