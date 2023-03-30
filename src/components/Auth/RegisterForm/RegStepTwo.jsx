import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cities from '../../../files/uaCities.json';
import { List, ListItem } from './RegStepTwo.styled';
import InputField from 'components/ReusableComponents/InputField/InputField';

const RegStepTwo = ({ value, setFieldValue }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [blurTimeout, setBlurTimeout] = useState(null);

  // Update the list of filtered cities whenever the value of the input field changes
  useEffect(() => {
    const inputValue = value || '';
    if (inputValue) {
      const filtered = cities
        .filter(city => city.city.toLowerCase().startsWith(value.toLowerCase()))
        .map(({ city, admin_name }) => `${city}, ${admin_name}`);
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [value]);

  // Handler for when the input field loses focus
  const handleInputBlur = () => {
    setBlurTimeout(
      setTimeout(() => {
        setFilteredCities([]);
      }, 100),
    );
  };

  // Handler for when the input field gains focus
  const handleInputFocus = () => {
    clearTimeout(blurTimeout);
  };

  // Handler for when a city is selected from the filtered list
  const handleCityClick = city => {
    setFieldValue('city', city);
    setFilteredCities([]);
  };

  return (
    <>
      <InputField name="name" type="name" placeholder={'Name'} />

      <InputField
        name="city"
        type="city"
        placeholder={'City, region'}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />
      {filteredCities.length > 0 && (
        <List>
          {filteredCities.map((city, index) => (
            <ListItem onClick={() => handleCityClick(city)} key={index}>
              {city}
            </ListItem>
          ))}
        </List>
      )}

      <InputField
        name="phone"
        type="phone"
        placeholder={'Mobile phone +380123456789'}
      />
    </>
  );
};

RegStepTwo.propTypes = {
  value: PropTypes.string,
  setFieldValue: PropTypes.func,
};

export default RegStepTwo;
