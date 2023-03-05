import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

export default function CommentsControl(props) {
  const { register } = props;
  const [commentsLength, setCommentsLength] = useState(0);

  return (
    <Form.Group controlId="comments">
      <Form.Label className="fw-light">Comments (opt.)</Form.Label>
      <Form.Control
        as="textarea"
        maxLength={500}
        {...register('comments')}
        onChange={(e) => {
          const inputLength = e.target.value.length;
          setCommentsLength(inputLength);
        }}
      />
      <div className="small fst-italic my-1 text-end">
        {commentsLength}/{500} characters
      </div>
    </Form.Group>
  );
}
