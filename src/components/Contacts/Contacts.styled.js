import styled from 'styled-components';

export const List = styled.ul`
  /* padding: 0; */

  li {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  & li:not(:last-child) {
    margin-bottom: 10px;
  }
  button {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: lightblue;
    cursor: pointer;
    transition: 300ms linear;
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 18px;

    &:hover {
      background-color: darkblue;
      color: white;
    }
  }
`;