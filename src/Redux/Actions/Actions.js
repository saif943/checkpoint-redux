import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  SAVE_TASK,
} from "./ActionTypes";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const deletetask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
export const doneTask = (payload) => {
  return {
    type: DONE_TASK,
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
export const saveTask = (payload) => {
  return {
    type: SAVE_TASK,
    payload,
  };
};
