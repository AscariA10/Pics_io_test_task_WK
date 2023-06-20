import { DeleteButton, UserWrapper, UserInitial, UserName, UserComment } from './Comment.styled';

export const Comment = ({ commentInfo, deleteComment }) => {
  console.log(commentInfo);
  const { body, id, user } = commentInfo;
  return (
    <>
      <UserWrapper>
        <UserInitial>{user.username.slice(0, 1)}</UserInitial>
        <UserName>{user.username}</UserName>
        <DeleteButton
          type="button"
          onClick={() => {
            deleteComment(id);
          }}
        >
          delete comment
        </DeleteButton>
      </UserWrapper>
      <UserComment>{body}</UserComment>
    </>
  );
};
