import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { ErrorMessage } from '@hookform/error-message';

import styles from '../../../assets/_styles/Form.module.css';

const categories = [
  { value: 'Travel', label: 'Travel' },
  { value: 'Lodging', label: 'Lodging' },
  { value: 'Job Supplies', label: 'Job Supplies' },
  { value: 'Meals/Catering', label: 'Meals/Catering' },
  { value: 'Medical', label: 'Medical' },
  { value: 'Misc/Other', label: 'Misc/Other' }
];

export default function CategorySelect(props) {
  const { register, name, value, onChange, errors } = props;

  return (
    <Form.Group
      controlId="category"
      className="my-2">
      <Form.Label className="fw-light">
        <span>Request Category</span>
        <span className={styles.formNote}> (Required)</span>
      </Form.Label>
      <Select
        {...register('category')}
        name={name}
        placeholder="Select Category"
        options={categories}
        value={categories.find((option) => option.value === value)}
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
