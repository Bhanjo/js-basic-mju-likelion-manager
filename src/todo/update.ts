import { updateTodoData } from '../store';

export const updateTodo = (targetID: string) => {
  const container = document.querySelector(`[id = "${targetID}"]`);
  const contentText = container?.querySelector('#content')?.textContent;
  const inputEl = container?.querySelector('#contentInput');

  hiddenChild(container as HTMLElement);
  (inputEl as HTMLInputElement).value = contentText || '';
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
