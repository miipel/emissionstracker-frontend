import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { Container, Box, Title, Input, Checkbox } from 'bloomer';

import emissionsService from './services/emissions'
import populationService from './services/populations'


class App extends Component {
  state = {
    emissions: {},
    populations: {}
  }

  componentDidMount() {
    emissionsService.getAll().then(response => {
      this.setState({ emissions: response })
    })
    populationService.getAll().then(response => {
      this.setState({ populations: response })
    })
  }

  render() {
    return (
      <Container>
        <Title isSize={1}>Emissions tracker</Title>
        <Input type="text" placeholder='Country name' />
        <Checkbox> Population </Checkbox>
        <Checkbox> Emissions </Checkbox>
        <Box>Hello world!</Box>
      </Container>
    );
  }
}

export default App;
