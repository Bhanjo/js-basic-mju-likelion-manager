import { deleteTodoData } from '../store';

export const deleteTodo = (targetID: string) => {
  deleteTodoElement(targetID);
  deleteTodoData(targetID);
};

const deleteTodoElement = (targetID: string) => {
  document.querySelector(`[id = "${targetID}"]`)?.remove();
};
