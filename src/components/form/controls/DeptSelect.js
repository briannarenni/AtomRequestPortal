import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import Select from 'react-select';

const depts = [
  { value: 'Client PR', label: 'Client PR' },
  { value: 'Events', label: 'Events' },
  { value: 'Digital Media', label: 'Digital Media' },
  { value: 'Field Ops', label: 'Field Ops' },
  { value: 'Field Marketing', label: 'Field Marketing' },
  { value: 'Scout & Outreach', label: 'Scout and Outreach' }
];
export default function DeptSelect(props) {
  const { register, name, value, onChange, errors } = props;

  return (
    <Form.Group
      controlId={name}
      className="my-2">
      <Form.Label className="fw-light">Employee Department</Form.Label>
      <Select
        {...register('dept')}
        name={name}
        placeholder="Select Employee Dept."
        options={depts}
        value={depts.find((option) => option.value === value)}
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
