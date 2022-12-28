import { todoSubmitEvent, renderTodoElement } from './todo/create';
import { readTodoData } from './store';

window.addEventListener('DOMContentLoaded', () => {
  const submitBtn: HTMLElement | null = document.querySelector('#submitTodo');
  const todoText: HTMLInputElement | null = document.querySelector('#todoText');
  const todos = readTodoData();

  if (submitBtn && todoText) {
    todoSubmitEvent(submitBtn, todoText);
  }

  if (todos) {
    todos.map((todo) => renderTodoElement(todo));
  }
});
