import { Form, Row } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

import styles from '../../../assets/_styles/Form.module.css';

const categories = [
  { label: 'Travel', value: 'Travel' },
  { label: 'Lodging', value: 'Lodging' },
  { label: 'Job Supplies', value: 'Job Supplies' },
  { label: 'Meals/Catering', value: 'Meals/Catering' },
  { label: 'Medical', value: 'Medical' },
  { label: 'Misc/Other', value: 'Misc/Other' }
];

export function CategorySelect(props) {
  const { register, name, value, onChange, errors } = props;
  const hasError = errors && errors[name];

  const dropdownClass = clsx('mx-1', {
    'p-invalid': hasError
  });

  return (
    <Form.Group
      controlId="category"
      className="my-2">
      <Row>
        <Form.Label className="fw-light">
          <span>Request Category</span>
          <span className={styles.formNote}> (Required)</span>
        </Form.Label>
      </Row>

      <Row className="px-2">
        <Dropdown
          id="category"
          {...register('category')}
          name={name}
          placeholder="Select Category"
          options={categories}
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
