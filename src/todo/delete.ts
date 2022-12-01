import { deleteTodoData } from '../store.js';

export const deleteTodo = (targetID: string) => {
  deleteTodoElement(targetID);
  deleteTodoData(targetID);
};

const deleteTodoElement = (targetID: string) => {
  document.querySelector(`[id = "${targetID}"]`)?.remove();
};
