import React from 'react';
import Select from 'react-select';

export default function SortDrop({ handleSortChange }) {
  const options = [
    { value: 'submittedOn', label: 'Most Recent' },
    { value: 'employeeName', label: 'Employee Name' },
    { value: 'status', label: 'Request Status' }
  ];

  return (
    <Select
      options={options}
      placeholder="Most Recent (default)"
      onChange={(selectedOption) => handleSortChange(selectedOption.value)}
    />
  );
}
