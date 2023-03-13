import React from 'react';
import Select from 'react-select';

export default function SortDrop({ name, options, handleSortChange }) {
  const defaultPlaceholder =
    name === 'sortTickets' ? 'Default (Most Recent)' : 'Default (Department)';

  return (
    <Select
      options={options}
      placeholder={defaultPlaceholder}
      onChange={(selectedOption) => handleSortChange(selectedOption.value)}
    />
  );
}
