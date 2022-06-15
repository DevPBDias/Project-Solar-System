import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Css/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="divMissionCard" data-testid="mission-card">
        <p data-testid="mission-name">
          Mission Name:
          {' '}
          { name }
        </p>
        <p data-testid="mission-year">
          Year:
          {' '}
          {year}
        </p>
        <p data-testid="mission-country">
          Mission Country:
          {' '}
          {country}
        </p>
        <p data-testid="mission-destination">
          Destination:
          {' '}
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
