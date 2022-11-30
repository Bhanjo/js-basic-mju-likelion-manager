import { todoSubmitEvent, renderTodoElement } from './todo/create.js';
import { getTodos } from './store.js';

// 순환참조를 막기위해 main으로부터 export는 피한다.
window.addEventListener('DOMContentLoaded', () => {
  const submitBtn: HTMLElement | null = document.querySelector('#submitTodo');
  const todoText: HTMLInputElement | null = document.querySelector('#todoText');
  const todos = getTodos();

  if (todos) {
    todos.map((todo) => renderTodoElement(todo));
  }

  if (submitBtn && todoText) {
    todoSubmitEvent(submitBtn, todoText);
  }
});
