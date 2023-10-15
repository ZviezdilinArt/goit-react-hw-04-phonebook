import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30%;
`;



export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;

  input {
    min-height: 40px;
    padding: 0px 5px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: lightblue;
  cursor: pointer;
  transition: 300ms linear;
  font-family: 'Helvetica Neue';
  font-weight: 500;

  &:hover {
    background-color: darkblue;
    color:white;
  }
`;