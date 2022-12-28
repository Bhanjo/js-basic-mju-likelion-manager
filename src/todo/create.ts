import { updateTodo, showUpdateForm } from './update';
import { deleteTodo } from './delete';
import { createTodoData } from '../store';
import { Todo } from '../types/Todo';

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

  deleteBtn.id = 'deleteBtn';
  deleteBtn.textContent = '삭제';

  inputEl.id = 'contentInput';
  inputEl.hidden = true;

  updateBtn.id = 'updateBtn';
  updateBtn.textContent = '수정';
  updateBtn.hidden = true;

  newTodoItem.id = newTodo.id;
  newTodoItem.addEventListener('click', (e) => handleClickTodoItemEvent(e));
  newTodoItem.append(content);
  newTodoItem.append(deleteBtn);
  newTodoItem.append(inputEl);
  newTodoItem.append(updateBtn);

  todoContainerEl.append(newTodoItem);
};

const appendTodo = (content: string) => {
  if (!content) {
    alert('할 일을 입력해주세요');
    return;
  }

  const newTodo = { id: crypto.randomUUID(), content: content };
  createTodoData(newTodo);
  renderTodoElement(newTodo);
};

// 이벤트 버블링으로 이벤트 분기
const handleClickTodoItemEvent = (e: Event) => {
  if (!(e.currentTarget instanceof Element)) return;

  const targetID = e.currentTarget.id;

  if (e.target instanceof HTMLButtonElement && e.target.id === 'deleteBtn') {
    deleteTodo(targetID);
  }

  if (e.target instanceof HTMLParagraphElement && e.target.id === 'content') {
    showUpdateForm(targetID);
  }

  if (e.target instanceof HTMLButtonElement && e.target.id === 'updateBtn') {
    const newText = (
      e.currentTarget.querySelector('#contentInput') as HTMLInputElement
    )?.value;
    updateTodo(e.currentTarget as HTMLElement, newText);
  }
};
