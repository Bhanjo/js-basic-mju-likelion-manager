import { Todo } from './types/Todo';

// Todo 데이터의 모든 제어권을 오직 여기서만 가능하도록 함
const todos: Todo[] = [
  {
    id: 'asd',
    content: '할일1',
  },
  {
    id: 'asd2',
    content: '할일2',
  },
  {
    id: 'asd3',
    content: '할일3',
  },
];

export const appendTodoData = (newTodo: Todo) => {
  todos.push(newTodo);
};

export const getTodos = (): Todo[] => {
  return todos;
};
