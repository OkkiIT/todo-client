import React from "react";

import { Backdrop, HiddenInput, Highlights, InputContainer } from "./styled";

import { renderHighlightedText } from "../../utils";

const InputWithHighlight = ({ inputRef, text, onChange }) => {
  return (
    <InputContainer>
      <Backdrop>
        <Highlights>{renderHighlightedText(text)}</Highlights>
      </Backdrop>
      <HiddenInput
        ref={inputRef}
        type="textarea"
        defaultValue={text}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default InputWithHighlight;
