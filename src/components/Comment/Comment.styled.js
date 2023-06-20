import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
`;

export const UserInitial = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid red;
  font-size: 40px;
`;

export const UserName = styled.p`
  padding: 10px;
  width: 150px;
  text-align: center;
  font-size: 25px;
`;

export const UserComment = styled.p`
  padding: 40px;
  background-color: #ffcc66;
  border-radius: 10px;

  text-align: center;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  color: blue;
  margin-left: auto;
  padding: 10px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid white;
`;
