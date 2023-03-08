import React from 'react';
import Select from 'react-select';

export default function SortDrop({ name, options, handleSortChange }) {
  const defaultPlaceholder =
    name === 'sortTickets' ? 'Most Recent (default)' : 'Department (default)';

  return (
    <Select
      options={options}
      placeholder={defaultPlaceholder}
      onChange={(selectedOption) => handleSortChange(selectedOption.value)}
    />
  );
}
