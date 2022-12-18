import { updateTodoData } from '../store.js';

export const updateTodo = (
  targetID: string,
  contentEl: HTMLParagraphElement | null
) => {
  if (!contentEl) {
    throw new Error('todo content를 찾을 수 없습니다.');
  }

  const container = document.querySelector(`[id = "${targetID}"]`);
  if (!container) {
    throw new Error(`${targetID}에 맞는 컨테이너를 찾을 수 없습니다.`);
  }

  const contentText = container.querySelector('#content')?.textContent;
  if (!contentText) {
    throw new Error('todo 컨텐츠 텍스트를 찾을 수 없습니다.');
  }

  hiddenChild(container as HTMLElement);
  const inputEl = container.querySelector('#contentInput');
  if (inputEl) {
    (inputEl as HTMLInputElement).value = contentText;
  }
};

export const handleUpdateEvent = (
  container: HTMLElement,
  updateText: string
) => {
  const updateTodo = {
    id: container.id,
    content: updateText,
  };

  updateTodoData(updateTodo);
  const contentEl = container.querySelector('#content');

  if (!contentEl) {
    throw new Error('컨텐츠 엘리먼트를 찾을 수 없습니다.');
  }

  contentEl.textContent = updateText;
  hiddenChild(container);
};

const hiddenChild = (container: HTMLElement) => {
  const childs = container.childNodes;
  childs.forEach((item) => {
    (item as HTMLElement).hidden = !(item as HTMLElement).hidden;
  });
};
