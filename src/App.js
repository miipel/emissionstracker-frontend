import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { Container, Box, Title, Input, Checkbox, Content } from 'bloomer';
import _ from 'lodash'

import emissionsService from './services/emissions'
import populationService from './services/populations'
import EmissionsTable from './components/emissionsTable'

class App extends Component {
  state = {
    emissions: {},
    populations: {},
    data: {},
    sortByEmissions: true,
    sortByPopulation: false
  }

  componentDidMount() {
    emissionsService.getAll().then(response => {
      this.setState({ emissions: response })
    })
    populationService.getAll().then(response => {
      this.setState({ populations: response })
    })
  }

  combineArrays = (array1, array2) => {
    let array1Values = Object.values(array1)
    let array2Values = Object.values(array2)
    let merged = _.merge({}, array1Values, array2Values)
    return Object.keys(merged).map((i) => {return merged[i]})
  }

  render() {
    let testData = this.combineArrays(this.state.populations, this.state.emissions)
    let limited = testData.slice(0, 500)
    console.log(testData)

    return (
      <Container isFluid style={{ marginTop: '20px', padding: '60px' }}>
        <Container >
          <Title isSize={3}>Emissions tracker</Title>
          <Input type="text" placeholder='Country name' />
        </Container>
        <Container style={{ padding: '5px' }}>
          <Checkbox> Population </Checkbox>
          <Checkbox> Emissions </Checkbox>
        </Container>
        <Container>
          <Box>
            <Content>
              <EmissionsTable data={Array.from(limited)} />
            </Content>
          </Box>
        </Container>
      </Container>
    );
  }
}

export default App;
