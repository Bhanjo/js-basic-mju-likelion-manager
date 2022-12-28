import { updateTodoData } from '../store';

export const showUpdateForm = (targetID: string) => {
  const container = document.querySelector(`[id = "${targetID}"]`);
  const contentText = container?.querySelector('#content')?.textContent;
  const inputEl = container?.querySelector('#contentInput');
  (inputEl as HTMLInputElement).value = contentText || '';
  hiddenChild(container as HTMLElement);
};

// 한 줄 한 줄 읽을 때 코드 해석이 어느 것이 더 쉬운지 파악해보자
export const updateTodo = (
  container: HTMLElement,
  updateText: string | null | undefined = ''
) => {
  const updateTodo = {
    id: container.id,
    content: updateText ?? '',
  };
  const contentEl = container.querySelector('#content');
  if (!contentEl) {
    throw new Error('컨텐츠 엘리먼트를 찾을 수 없습니다.');
  }

  contentEl.textContent = updateText;
  updateTodoData(updateTodo);
  hiddenChild(container);
};

// 좋지 못한 코드 => 이유? (힌트: 세 개의 요소 중 한 개만 보여주고 두 개는 숨겨야 할 떄는?)
const hiddenChild = (container: HTMLElement) => {
  const childs = container.childNodes;
  childs.forEach((item) => {
    (item as HTMLElement).hidden = !(item as HTMLElement).hidden;
  });
};
