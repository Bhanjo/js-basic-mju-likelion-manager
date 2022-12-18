import { Todo } from './types/Todo';

// Todo 데이터의 모든 제어권을 오직 여기서만 가능하도록 함
let todos: Todo[] = [
  {
    id: 'asd',
    content: '할일1',
  },
];

export const appendTodoData = (newTodo: Todo) => {
  todos.push(newTodo);
};

export const getTodos = (): Todo[] => {
  return todos;
};

export const updateTodoData = (updateTodo: Todo) => {
  todos.forEach((item) =>
    item.id === updateTodo.id
      ? (item.content = updateTodo.content)
      : item.content
  );
};

export const deleteTodoData = (targetID: string) => {
  todos = todos.filter((todo) => todo.id != targetID);
};
