import { Form, Row } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

import styles from '../../../assets/_styles/Form.module.css';

const depts = [
  { value: 'Client PR', label: 'Client PR' },
  { value: 'Events', label: 'Events' },
  { value: 'Digital Media', label: 'Digital Media' },
  { value: 'Field Ops', label: 'Field Ops' },
  { value: 'Field Marketing', label: 'Field Marketing' },
  { value: 'Scout & Outreach', label: 'Scout and Outreach' }
];
export function DeptSelect(props) {
  const { register, name, value, onChange, errors } = props;
  const hasError = errors && errors[name];

  const dropdownClass = clsx('mx-1', {
    'p-invalid': hasError
  });

  return (
    <Form.Group
      controlId={name}
      className="my-2">
      <Row>
        <Form.Label className="fw-light">
          <span>Employee Department</span>
          <span className={styles.formNote}> (Required)</span>
        </Form.Label>
      </Row>

      <Row className="px-2">
        <Dropdown
          id="dept"
          {...register('dept')}
          name={name}
          placeholder="Select Department"
          options={depts}
          value={value}
          onChange={(selectedOption) => {
            onChange(selectedOption);
          }}
          className={dropdownClass}
        />
      </Row>

      <div className="small text-danger fst-italic my-1">
        <ErrorMessage
          errors={errors}
          name={name}
        />
      </div>
    </Form.Group>
  );
}
