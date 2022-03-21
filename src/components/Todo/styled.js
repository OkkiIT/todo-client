import styled from "styled-components";

export const HighlightedText = styled.span`
  color: mediumvioletred;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  min-height: 70px;
  font-size: 26px;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0;
  justify-content: space-between;
  overflow-wrap: anywhere;
  overflow: auto;
  overflow-x: hidden;
`;
export const ButtonsContainers = styled.div`
  margin: 0;
  padding: 0;
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  > button {
    width: 68px;
    border: 1px solid black;
    font-style: italic;
    background-color: #4d8791;
    margin: 1px;
    border-radius: 4px;
  }

  > button:nth-child(1) {
    :hover {
      background-color: greenyellow;
      position: inherit;
      transition: 0.5s;
    }
  }

  > button:nth-child(2) {
    :hover {
      background-color: #b42f2f;
      transition: 0.5s;
    }
  }
`;
