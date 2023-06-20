import { useState, useEffect } from 'react';

import { getAllComments } from '../utilits/fetch';
import { getRandomId } from 'utilits/randomId';

import { Comment } from './Comment/Comment';
import { UserCommentForm } from './UserCommentForm/UserCommentForm';

import { CommentsListWrapper, CommentItem } from './App.styled';

export const App = () => {
  const savedCommentsList = JSON.parse(localStorage.getItem('saved-comments-list'));

  const [comments, setComments] = useState(savedCommentsList ?? []);

  useEffect(() => {
    if (savedCommentsList?.length > 0) {
      return;
    }
    getAllComments().then(response => setComments(response.data.comments));
  });

  // localStorage.setItem('saved-comments-list', JSON.stringify(response.data.comments))

  useEffect(() => {
    localStorage.setItem('saved-comments-list', JSON.stringify(comments));
  }, [comments, comments.length]);

  function deleteComment(deletedId) {
    setComments(comments.filter(element => element.id !== deletedId));
  }

  function addComment(newComment) {
    const comment = {
      body: newComment,
      id: getRandomId(100, 1000),
      postId: getRandomId(100, 1000),
      user: { id: getRandomId(100, 1000), username: 'CurrentUser' },
    };
    setComments([...comments, comment]);
  }

  return (
    <>
      <CommentsListWrapper>
        {comments.map(element => {
          return (
            <CommentItem key={element.id}>
              <Comment commentInfo={element} deleteComment={deleteComment} />
            </CommentItem>
          );
        })}
      </CommentsListWrapper>
      <UserCommentForm addComment={addComment} />
    </>
  );
};
