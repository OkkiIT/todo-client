import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  height: 30px;
  width: 70px;
  margin-left: 30px;
  color: black;
  background-color: #68dba2;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
    transition: 0.5s;
    background-color: aquamarine;
  }
`;
