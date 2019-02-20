import React, { Component } from 'react'
import { Table } from 'bloomer'

import TableRow from './tableRow'

class EmissionsTable extends Component {
  state = {
    sortByEmissions: true
  }

  sortByEmissions(a, b, sortByEmissions) {
    const arg1 = a.population
    const arg2 = b.population
    if(sortByEmissions) {
      return arg2 - arg1
    } else {
      return arg1 - arg2
    }
  }

  render() {
    const emissionsData = this.props.data.sort(
      (a, b) => this.sortByEmissions(a, b, this.state.sortByEmissions)
    )
      .map((entry, id) => {
        return <TableRow
          key={id}
          locationKey={entry.key}
          location={entry.location}
          year={entry.year}
          emissions={entry.emissions}
          population={entry.population} />
      })

    return (
      <Table isBordered isStriped>
        <thead>
          <tr>
            <th>Key</th>
            <th>Location</th>
            <th>Year</th>
            <th>Emissions</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {emissionsData}
        </tbody>
      </Table >
    )
  }
}

export default EmissionsTable