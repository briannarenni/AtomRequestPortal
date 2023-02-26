import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import Select from 'react-select';

export default function DeptSelect(props) {
  const { register, name, value, options, onChange, errors } = props;

  return (
    <Form.Group
      controlId={name}
      className="my-2">
      <Form.Label className="fw-light">Employee Department</Form.Label>
      <Select
        placeholder="Select Employee Dept."
        {...register('dept')}
        value={options.find((option) => option.value === value)}
        options={options}
        onChange={(selectedOption) => {
          onChange(selectedOption);
        }}
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      />

      <div className="small fst-italic my-1">
        <ErrorMessage
          errors={errors}
          name={name}
        />
      </div>
    </Form.Group>
  );
}
