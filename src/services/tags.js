import axios from "./index";

export const getTags = async () => {
  const { data } = await axios.get("/tags");
  return data;
};

export const createTag = async (tag) => {
  const { data } = await axios.post("/tags", tag);

  return data;
};

export const deleteTag = async (tagId) => {
  const { data } = await axios.delete(`/tags/${tagId}`);

  return data;
};

export const editTag = async (tagId, newTag) => {
  const { data } = await axios.put(`/tags/${tagId}`, { text: newTag });

  return data;
};
