import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Css/Missions.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="divMissions">
          {
            missions.map((value) => (
              <MissionCard
                key={ value.name }
                name={ value.name }
                year={ value.year }
                country={ value.country }
                destination={ value.destination }
              />))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
