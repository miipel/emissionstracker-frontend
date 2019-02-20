import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { Container, Box, Title, Input, Checkbox, Content } from 'bloomer';

import emissionsService from './services/emissions'
import populationService from './services/populations'
import EmissionsTable from './components/emissionsTable'

class App extends Component {
  state = {
    emissions: [],
    populations: [],
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

  // combineDataset = () => {
  //   let dataSet = {...this.state.emissions, ...this.state.populations}
  //   return dataSet
  // }

  render() {
    const testData = [{
      key: 'ABW',
      location: 'Aruba',
      year: '1987',
      emissions: '447.374',
      population: '61833'
    },
    {
      key: 'ABW',
      location: 'Aruba',
      year: '1988',
      emissions: '612.389',
      population: '61079'
    }]
    return (
      <Container isFluid style={{ marginTop: '20px', padding: '60px' }}>
        <Title isSize={3}>Emissions tracker</Title>
        <Input type="text" placeholder='Country name' />
        <Container style={{ padding: '5px' }}>
          <Checkbox> Population </Checkbox>
          <Checkbox> Emissions </Checkbox>
        </Container>
        <Container>
          <Box>
            <Content>
              <EmissionsTable data={Array.from(testData)} />
            </Content>
          </Box>
        </Container>
      </Container>
    );
  }
}

export default App;
