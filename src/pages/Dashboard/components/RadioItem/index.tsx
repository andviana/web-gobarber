import React from 'react';
import { Component } from './styles';

export interface RadioItemProps {
  label: string | number;
  id: string;
  name: string;
  value: string | number;
  toggleSelected(value: string | number): void;
  selectedIndex: string | number;
}

const RadioItem: React.FC<RadioItemProps> = ({
  label,
  id,
  value,
  name,
  toggleSelected,
  selectedIndex,
}) => {
  const handlechangeIndex = (event: any): void => {
    toggleSelected(event.target.value);
  };
  return (
    <Component key={id}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handlechangeIndex}
        checked={value === selectedIndex}
      />
      <label htmlFor={id}>{label}</label>
    </Component>
  );
};

export default RadioItem;
