import { CREATE_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from "../actionTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS.START: {
      return { ...state, loading: true };
    }
    case GET_TODOS.SUCCESS: {
      return { ...state, loading: false, todos: payload };
    }
    case GET_TODOS.FAILURE: {
      return { ...state, loading: false, error: payload };
    }

    case CREATE_TODO.START: {
      return { ...state, loading: true };
    }
    case CREATE_TODO.SUCCESS: {
      return { ...state, loading: false, todos: [payload, ...state.todos] };
    }
    case CREATE_TODO.FAILURE: {
      return { ...state, loading: false, error: payload };
    }

    case DELETE_TODO.START: {
      return { ...state, loading: true };
    }
    case DELETE_TODO.SUCCESS: {
      const todos = state.todos;

      const indexOfDeletedElement = todos.findIndex(
        (item) => item.id === payload.id
      );
      todos.splice(indexOfDeletedElement, 1);

      return { ...state, loading: false, todos };
    }
    case DELETE_TODO.FAILURE: {
      return { ...state, loading: false, error: payload };
    }

    case EDIT_TODO.START: {
      return { ...state, loading: true };
    }
    case EDIT_TODO.SUCCESS: {
      const todos = state.todos;
      const indexOfEditedElement = todos.findIndex(
        (item) => item.id === payload.id
      );
      todos.splice(indexOfEditedElement, 1, {
        id: payload.id,
        text: payload.text,
      });
      return { ...state, loading: false, todos };
    }
    case EDIT_TODO.FAILURE: {
      return { ...state, loading: false, error: payload };
    }

    default:
      return state;
  }
};

export default todosReducer;
