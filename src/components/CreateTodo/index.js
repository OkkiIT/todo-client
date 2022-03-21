import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createTag, createTodo } from "../../store/actions";
import { InputWithHighlight } from "../index";
import { Button, Container } from "./styled";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [text, setText] = useState("");

  const dispatchCreateTodo = () => {
    dispatch(createTodo({ text }));
    dispatch(createTag({ text }));
    inputRef.current.value = "";
    setText("");
  };

  const changeText = () => {
    setText(inputRef.current.value);
  };

  return (
    <Container>
      <InputWithHighlight
        onChange={changeText}
        text={text}
        inputRef={inputRef}
      />
      <Button disabled={text.length === 0} onClick={dispatchCreateTodo}>
        Add todo
      </Button>
    </Container>
  );
};

export default CreateTodo;
