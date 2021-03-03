import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  SAVE_TASK,
} from "../Actions/ActionTypes";

const litsInit = {
  listTask: [],
};
const TaskReducer = (state = litsInit, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        listTask: [...state.listTask, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        listTask: state.listTask.filter((el) => el.id !== payload),
      };
    case DONE_TASK:
      return {
        ...state,
        listTask: state.listTask.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        listTask: state.listTask.map((el) =>
          el.id === payload ? { ...el, editabl: !el.editabl } : el
        ),
      };
    case SAVE_TASK:
      return {
        ...state,
        listTask: state.listTask.map((el) =>
          el.id === payload.id ? { ...el, text: payload.a } : el
        ),
      };
    default:
      return state;
  }
};
export default TaskReducer;
