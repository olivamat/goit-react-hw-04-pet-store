import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initialpets from '../pets.json';
import styles from './Pets.module.css';

export default class Pets extends Component {
  state = { pets: [] };

  componentDidMount() {
    this.setState({ pets: initialpets });
  }

  render() {
    const { pets } = this.state;
    return (
      <div>
        <h2 className={styles.h}>Availible pets</h2>
        <ul className={styles.pets}>
          {pets.map(pet => (
            <li key={pet.id} className={styles.pet}>
              <Link to={`/pets/${pet.id}`}>
                <div>
                  <img src={pet.image} alt="pet"></img>
                  <p> {pet.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
