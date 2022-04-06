import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard
          planetName={ planets.map((value) => value.name) }
          planetImage={ planets.map((value) => value.image) }
        />
      </div>
    );
  }
}

export default SolarSystem;
