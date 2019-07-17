import React from 'react';
import PropTypes from 'prop-types';
import styles from './Single.module.css';

const SinglePet = ({ image, name, age, gender, color, breed, description }) => {
  return (
    <div>
      <h2 className={styles.info}>All about {name}</h2>
      <div className={styles.info}>
        <img className={styles.img} src={image} alt="cat"></img>
        <div>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Color: {color}</p>
          <p>Breed: {breed}</p>
        </div>
      </div>
      <p className={styles.info}>{description}</p>
    </div>
  );
};

SinglePet.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default SinglePet;
