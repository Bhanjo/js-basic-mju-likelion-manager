import { todoSubmitEvent, renderTodoElement } from './todo/create';
import { readTodoData } from './store';

window.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#submitTodo') as HTMLElement;
  const todoText = document.querySelector('#todoText') as HTMLInputElement;
  const todos = readTodoData();

  if (submitBtn && todoText) {
    todoSubmitEvent(submitBtn, todoText);
  }

  if (todos) {
    todos.map((todo) => renderTodoElement(todo));
  }
});
