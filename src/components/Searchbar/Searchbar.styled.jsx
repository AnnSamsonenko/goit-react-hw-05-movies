import styled from 'styled-components';

export const Form = styled.form`
  width: fit-content;
  margin: 0 auto 20px auto;
`;

export const Input = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid #363853;
  border-radius: 20px 4px;
  margin-right: 6px;
  outline: none;
  transition: border 250ms linear;
  &:focus {
    border: 1px solid #ff7a50;
  }
`;

export const SubmitButton = styled.button`
  color: #fff;
  padding: 8px 14px;
  background-color: #ff7a50;
  box-shadow: 0px 5px 12px rgba(255, 104, 56, 0.19);
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;
