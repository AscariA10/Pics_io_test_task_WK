import { useState, useEffect } from 'react';

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
    <div>
      <p>this is user form</p>
      <form method="input" onSubmit={onSubmit}>
        <textarea value={input} onChange={onChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
