import React from 'react';
import Select from 'react-select';

export default function FilterDrop({ handleFilterChange }) {
  const options = [
    { value: 'none', label: 'None selected' },
    { value: 'Pending', label: 'Status: Pending' },
    { value: 'Approved', label: 'Status: Approved' },
    { value: 'Denied', label: 'Status: Denied' }
  ];

  return (
    <Select
      options={options}
      placeholder="None Selected"
      onChange={(selectedOption) => handleFilterChange(selectedOption.value)}
    />
  );
}
