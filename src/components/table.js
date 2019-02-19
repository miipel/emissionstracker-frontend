import React from 'react'
import { Table } from 'bloomer'

import TableRow from './tableRow'

const table = (props) => (
  <Table isBordered isStriped>
    <thead>
      <tr>
        <th>Location</th>
        <th>Year</th>
        <th>Emissions</th>
        <th>Population</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(element => (
        <TableRow
          key={element.emissions + element.population}
          location={element.location}
          year={element.year}
          emissions={element.emissions}
          population={element.population}
        />
      ))}
    </tbody>
  </Table>
)

export default table