import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagsListSelector } from "../../store/selectors/tagsList";
import Tag from "../Tag";
import {  getTags } from "../../store/actions";
import { TagsContainer } from "./styled";

const TagList = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(tagsListSelector);

  useEffect(() => {
    dispatch(getTags());
  }, []);

  if (tags.length < 1) {
    return <h2>You can add tags by adding "#" to your note </h2>;
  }

  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </TagsContainer>
  );
};

export default TagList;
