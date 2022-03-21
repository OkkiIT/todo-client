import styled from "styled-components";

export const TagContainer = styled.div`
  opacity: ${(props) => props.opacity || 1};
  display: table;
  justify-content: center;
  background-color: ${(props) => props.color || "gray"};
  min-height: 50px;
  color: white;
  margin: 0px 10px;
  min-width: 70px;
  align-items: center;
  border-radius: 5px;
  position: relative;
  overflow: auto;
  :hover {
    transform: scale(1.05, 1.05);
    transition: 0.4s ease-in-out;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 10px;
  background: inherit;
  border: none;
  color: red;
  cursor: pointer;
  :hover {
    transform: scale(1.2, 1.2);
    color: black;
    background-color: red;
  }
`;
