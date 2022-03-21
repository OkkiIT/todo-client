import styled, { css } from "styled-components";

const sharedStyles = css`
  width: 400px;
  height: 70px;
`;

export const InputContainer = styled.div`
  ${sharedStyles};
  display: block;
  -webkit-text-size-adjust: none;
  box-sizing: border-box;
`;

export const HiddenInput = styled.textarea`
  ${sharedStyles};
  padding: 10px;
  box-sizing: border-box;
  border-radius: 14px;
  font: 20px/28px "Open Sans", sans-serif;
  letter-spacing: 1px;
  display: block;
  position: absolute;
  z-index: 1;
  margin: 0;

  color: black;
  background-color: transparent;
  overflow: auto;
  resize: none;
  transition: transform 1s;
`;

export const Backdrop = styled.div`
  ${sharedStyles};
  position: absolute;
  z-index: 2;
  border: 2px solid transparent;
  overflow: auto;
  pointer-events: none;
  transition: transform 1s;
  background: transparent;
  box-sizing: border-box;
`;

export const Highlights = styled.div`
  padding: 10px;
  font: 20px/28px "Open Sans", sans-serif;
  letter-spacing: 1px;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  background: transparent;
  box-sizing: border-box;
`;
