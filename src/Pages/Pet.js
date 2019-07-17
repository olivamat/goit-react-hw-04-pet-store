import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SinglePet from './SinglePet';
import initialpets from '../pets.json';
import styles from './Pet.module.css';

const activeStyle = {
  color: 'white',
  backgroundColor: 'black',
  padding: '10px 50px 10px 50px',
  textDecoration: 'none',
};

const getIdFromProps = props => props.match.params.petsId;

export default class Pet extends Component {
  state = { pet: null };

  componentDidMount() {
    const petsId = getIdFromProps(this.props);

    const currentPet = initialpets.find(pet => pet.id === petsId);

    this.setState({ pet: currentPet });
  }

  render() {
    const { pet } = this.state;

    return (
      <div>
        <h2 className={styles.h}>
          <NavLink
            to="/pets"
            activeStyle={activeStyle}
            className={styles.navItem}
          >
            Return
          </NavLink>
        </h2>
        {pet && <SinglePet {...pet} />}
      </div>
    );
  }
}
