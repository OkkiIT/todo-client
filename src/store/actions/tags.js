import {
  ADD_SEARCH_TAG,
  CREATE_TAG,
  DELETE_TAG,
  EDIT_TAG,
  GET_SEARCH_TAG,
  GET_TAGS,
  REMOVE_SEARCH_TAG,
} from "../actionTypes";

export const getTags = () => ({
  type: GET_TAGS.START,
});

export const getTagsSuccess = (payload) => ({
  type: GET_TAGS.SUCCESS,
  payload,
});

export const getTagsFailure = (payload) => ({
  type: GET_TAGS.FAILURE,
  payload,
});

export const createTag = (payload) => ({
  type: CREATE_TAG.START,
  payload,
});

export const createTagSuccess = (payload) => ({
  type: CREATE_TAG.SUCCESS,
  payload,
});

export const createTagFailure = (payload) => ({
  type: CREATE_TAG.FAILURE,
  payload,
});

export const deleteTag = (payload) => ({
  type: DELETE_TAG.START,
  payload,
});

export const deleteTagSuccess = (payload) => ({
  type: DELETE_TAG.SUCCESS,
  payload,
});

export const deleteTagFailure = (payload) => ({
  type: DELETE_TAG.FAILURE,
  payload,
});

export const editTag = (payload) => ({
  type: EDIT_TAG.START,
  payload,
});

export const editTagSuccess = (payload) => ({
  type: EDIT_TAG.SUCCESS,
  payload,
});

export const editTagFailure = (payload) => ({
  type: EDIT_TAG.FAILURE,
  payload,
});

export const addSearchTag = (payload) => ({
  type: ADD_SEARCH_TAG,
  payload,
});

export const removeSearchTag = () => ({
  type: REMOVE_SEARCH_TAG,
});

export const getSearchTag = () => ({
  type: GET_SEARCH_TAG,
});
