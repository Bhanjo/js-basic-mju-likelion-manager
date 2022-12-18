import { deleteTodo } from './delete.js';
import { updateTodo } from './update.js';
import { appendTodoData, getTodos } from '../store.js';
import { Todo } from '../types/Todo.js';
import { handleUpdateEvent } from './update.js';

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

export const renderTodoElement = (newTodo: Todo) => {
  const todoContainerEl = document.querySelector('#todoContainer');
  const newTodoItem = document.createElement('li');
  const content = document.createElement('p');
  const deleteBtn = document.createElement('button');
  const inputEl = document.createElement('input');
  const updateBtn = document.createElement('button');

  if (!todoContainerEl) return;

  content.id = 'content';
  content.textContent = newTodo.content;

  deleteBtn.textContent = '삭제';
  deleteBtn.id = 'deleteBtn';

  inputEl.id = 'contentInput';
  inputEl.hidden = true;

  updateBtn.hidden = true;
  updateBtn.id = 'updateBtn';
  updateBtn.textContent = '수정';
  updateBtn.addEventListener('click', () => {
    handleUpdateEvent(newTodoItem, inputEl.value);
  });

  newTodoItem.id = newTodo.id;
  newTodoItem.addEventListener('click', (e) => handleClickTodoItemEvent(e));
  newTodoItem.append(content);
  newTodoItem.append(deleteBtn);
  newTodoItem.append(inputEl);
  newTodoItem.append(updateBtn);

  todoContainerEl?.append(newTodoItem);
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

const handleClickTodoItemEvent = (e: Event) => {
  if (!(e.currentTarget instanceof Element)) return;

  const targetID = e.currentTarget.id;

  if (e.target instanceof HTMLButtonElement && e.target.id === 'deleteBtn') {
    deleteTodo(targetID);
  }

  if (e.target instanceof HTMLParagraphElement && e.target.id === 'content') {
    const contentEl = e.currentTarget.querySelector(
      '#content'
    ) as HTMLParagraphElement;
    updateTodo(targetID, contentEl);
  }
};
