import { appendTodoData } from '../store.js';
import { Todo } from '../types/Todo.js';

// DOM을 부모가 선택하도록 설계하여 DOM을 동적으로 바꿀 수 있게 만듦
export const todoSubmitEvent = (
  submitBtn: HTMLElement,
  inputEl: HTMLInputElement
) => {
  submitBtn?.addEventListener('click', () => {
    appendTodo(inputEl.value);
    inputEl.value = '';
  });
};

const appendTodo = (content: string) => {
  const newTodo = { id: crypto.randomUUID(), content: content };

  if (!content) {
    alert('할 일을 입력해주세요');
    return;
  }

  appendTodoData(newTodo);
  renderTodoElement(newTodo);
};

const renderTodoElement = (newTodo: Todo) => {
  const todoContainerEl = document.querySelector('#todoContainer');
  const newTodoItem = document.createElement('li');
  const content = document.createElement('p');
  const deleteBtn = document.createElement('button');

  content.textContent = newTodo.content;
  deleteBtn.textContent = '삭제';

  newTodoItem.append(content);
  newTodoItem.append(deleteBtn);

  todoContainerEl?.append(newTodoItem);
};
