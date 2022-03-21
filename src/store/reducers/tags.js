import {
  ADD_SEARCH_TAG,
  CREATE_TAG,
  DELETE_TAG,
  EDIT_TAG,
  GET_TAGS,
  REMOVE_SEARCH_TAG,
  GET_SEARCH_TAG,
} from "../actionTypes";

const initialState = {
  tags: [],
  loading: false,
  error: null,
  searchTag: null,
  isSearchTagActive: false,
};

const tagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TAGS.START: {
      return { ...state, loading: true };
    }
    case GET_TAGS.SUCCESS: {
      return { ...state, loading: false, tags: payload };
    }
    case GET_TAGS.FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    case CREATE_TAG.START: {
      return { ...state, loading: true };
    }
    case CREATE_TAG.SUCCESS: {
      return { ...state, loading: false, tags: payload };
    }
    case CREATE_TAG.FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    case DELETE_TAG.START: {
      return { ...state, loading: true };
    }
    case DELETE_TAG.SUCCESS: {
      const tags = state.tags;

      const indexOfDeletedTag = tags.findIndex(
        (item) => item.id === payload.id
      );
      tags.splice(indexOfDeletedTag, 1);

      return { ...state, loading: false, tags };
    }
    case DELETE_TAG.FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    case EDIT_TAG.START: {
      return { ...state, loading: true };
    }
    case EDIT_TAG.SUCCESS: {
      const tags = state.tags;

      const indexOfEditedTag = tags.findIndex((item) => item.id === payload.id);
      tags.splice(indexOfEditedTag, 1, {
        id: payload.id,
        text: payload.text,
      });

      return { ...state, loading: false, tags };
    }
    case EDIT_TAG.FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    case ADD_SEARCH_TAG: {
      return { ...state, searchTag: payload, isSearchTagActive: true };
    }
    case REMOVE_SEARCH_TAG: {
      return { ...state, searchTag: null, isSearchTagActive: false };
    }
    case GET_SEARCH_TAG: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default tagsReducer;
