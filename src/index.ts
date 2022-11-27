const submitBtn: HTMLElement | null = document.querySelector('#submitTodo');
const todoText: HTMLInputElement | null = document.querySelector('#todoText');

const todoSubmitEvent = (submitBtn: HTMLElement, inputEl: HTMLInputElement) => {
  submitBtn?.addEventListener('click', () => {
    console.log('안녕하세요!', inputEl?.value);
    inputEl.value = '';
  });
};

if (submitBtn && todoText) {
  todoSubmitEvent(submitBtn, todoText);
}
