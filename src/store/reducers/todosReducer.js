import { toast } from 'react-toastify';
import { ADD_TODO, REMOVE_TODO, TOGGLE_CHECKED, UPDATE_TODO } from "../actions/todoActions";
import { ADD_TODO_ERROR, ERROR_REMOVE_TODO, TOGGLE_CHECKED_ERROR, UPDATE_TODO_ERROR } from "../actions/todoActions";

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      toast.success("Added a Task");
      return state;

    case ADD_TODO_ERROR:
      toast.error("An error occured");
      return state;

    case REMOVE_TODO:
      toast.warn("Successfully Removed a Todo");
      return state;

    case ERROR_REMOVE_TODO:
      toast.error("Something went wrong while removing a todo");
      return state;

    case TOGGLE_CHECKED:
      toast.info("Status Checked");
      return state;

    case TOGGLE_CHECKED_ERROR:
      toast.error("Something went wrong, Todo not checked");
      return state;

    case UPDATE_TODO:
      toast.info("TODO UPDATED");
      return state;

    case UPDATE_TODO_ERROR:
      toast.info("Something went Wrong, Todo not Updated");
      return state;

    // case GET_TODOS:
    //   return { ...state, todos: action.data };
    default:
      return state;
  }
}

export default todosReducer;