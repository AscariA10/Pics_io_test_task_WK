import { useState, useEffect } from 'react';

import { FormWrapper, FormTitle, TextArea, SubmitButton, Form } from './UserCommentForm.styled';

export const UserCommentForm = ({ addComment }) => {
  const savedComment = JSON.parse(localStorage.getItem('saved-user-comment'));

  const [input, setInput] = useState('' || savedComment);

  useEffect(() => {
    localStorage.setItem('saved-user-comment', JSON.stringify(input));
  }, [input]);

  function onChange(event) {
    setInput(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    addComment(input);
    setInput('');
    console.log(input);
  }
  console.log(input);
  return (
    <FormWrapper>
      <FormTitle>User Comment</FormTitle>
      <Form method="input" onSubmit={onSubmit}>
        <TextArea value={input} onChange={onChange}></TextArea>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormWrapper>
  );
};
