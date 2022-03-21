import { HighlightedText } from "../components/Todo/styled";
import React from "react";

export const renderHighlightedText = (text) => {
  const parts = text.split(/(#[\p{L}]+)/giu);

  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = <HighlightedText key={i}>{parts[i]}</HighlightedText>;
  }

  return <div>{parts}</div>;
};
