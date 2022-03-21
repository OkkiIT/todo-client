import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchTag, deleteTag, removeSearchTag } from "../../store/actions";
import { tagsListSelector } from "../../store/selectors/tagsList";
import { DeleteButton, TagContainer } from "./styled";

const Tag = ({ tag }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const { searchTag } = useSelector(tagsListSelector);

  const dispatchDeleteSearchTag = (e) => {
    e.stopPropagation();
    dispatch(deleteTag(tag.id));
  };

  const dispatchAddSearchTag = (e) => {
    setIsActive((prev) => !prev);
    console.log(isActive);
    if (searchTag === tag.text) {
      dispatch(removeSearchTag());
      return;
    }
    dispatch(addSearchTag(tag.text));
  };

  return (
    <>
      {isActive ? (
        <TagContainer onClick={dispatchAddSearchTag}>
          <h4>{tag.text}</h4>
          <DeleteButton onClick={dispatchDeleteSearchTag}>X</DeleteButton>
        </TagContainer>
      ) : (
        <TagContainer
          opacity={0.8}
          color={"black"}
          onClick={dispatchAddSearchTag}
        >
          <h4>{tag.text}</h4>
          <DeleteButton onClick={dispatchDeleteSearchTag}>X</DeleteButton>
        </TagContainer>
      )}
    </>
  );
};

export default Tag;
