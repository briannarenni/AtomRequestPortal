import React from 'react';
import Select from 'react-select';

export default function UserSortDrop({ handleSortChange }) {
  const options = [
    { value: 'dept', label: 'Sort: Department' },
    { value: 'fullName', label: 'Sort: Full Name' }
  ];

  return (
    <Select
      options={options}
      placeholder="Department (default)"
      onChange={(selectedOption) => handleSortChange(selectedOption.value)}
    />
  );
}
