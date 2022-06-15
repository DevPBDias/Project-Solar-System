import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import './Css/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="divPlanets">
          { planets.map((value) => (<PlanetCard
            key={ value.name }
            planetName={ value.name }
            planetImage={ value.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
