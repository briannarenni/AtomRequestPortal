import React from 'react';
import Select from 'react-select';

export default function FilterDrop({ handleFilterChange }) {
  const options = [
    { value: 'none', label: 'Show All' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Denied', label: 'Denied' }
  ];

  return (
    <Select
      options={options}
      placeholder="Show All"
      onChange={(selectedOption) => handleFilterChange(selectedOption.value)}
    />
  );
}
