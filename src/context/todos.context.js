import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import reducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', completed: false },
  { id: 2, task: 'Release lady bugs into garden', completed: true }
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  // const [todos, dispatch] = useReducer(reducer, defaultTodos);
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    defaultTodos,
    reducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
