import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 150px;
  border-radius: 20px;
  background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);
`;

export const FormTitle = styled.p`
  padding: 10px;
  text-align: center;
  font-size: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 500px;
  height: 100px;
  margin-bottom: 20px;
  font-size: 25px;
`;

export const SubmitButton = styled.button`
  background-color: #ff3cac;
  background-image: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);

  color: white;
  margin-left: auto;
  width: 150px;
  padding: 20px;
  font-size: 25px;
  border-radius: 8px;
  border: 1px solid white;
`;
